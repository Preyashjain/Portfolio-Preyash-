import { siteConfig } from "@/lib/constants";

const GITHUB_API = "https://api.github.com";
const REVALIDATE_SECONDS = 3600;

export interface GitHubRepo {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  updatedAt: string;
}

export interface GitHubProfile {
  publicRepos: number;
  followers: number;
  avatarUrl: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface RawRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  private: boolean;
}

interface RawUser {
  public_repos: number;
  followers: number;
  avatar_url: string;
}

/**
 * Every function here fails soft: a network error, a rate limit, or a
 * missing token returns null/[] instead of throwing, so a flaky GitHub
 * API never breaks the build or the page. Components decide how to
 * render the "no data" case.
 */
async function githubFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${GITHUB_API}${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getGitHubProfile(): Promise<GitHubProfile | null> {
  const data = await githubFetch<RawUser>(`/users/${siteConfig.githubUsername}`);
  if (!data) return null;
  return {
    publicRepos: data.public_repos ?? 0,
    followers: data.followers ?? 0,
    avatarUrl: data.avatar_url ?? "",
  };
}

export async function getTopRepos(limit = 6): Promise<GitHubRepo[]> {
  const data = await githubFetch<RawRepo[]>(
    `/users/${siteConfig.githubUsername}/repos?per_page=100&sort=updated`
  );
  if (!data) return [];

  return data
    .filter((r) => !r.fork && !r.private)
    .sort(
      (a, b) =>
        b.stargazers_count - a.stargazers_count ||
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    )
    .slice(0, limit)
    .map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      language: r.language,
      stars: r.stargazers_count,
      updatedAt: r.pushed_at,
    }));
}

interface ContributionCalendarResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          weeks: {
            contributionDays: { date: string; contributionCount: number }[];
          }[];
        };
      };
    };
  };
}

/**
 * The contribution calendar isn't available through GitHub's public REST
 * API — only GraphQL, which requires an authenticated token even for a
 * user's own public contributions. Set GITHUB_TOKEN (a fine-grained PAT
 * with `read:user` is enough) in your deployment's env vars to enable
 * this. Without it, this returns null and the UI shows a clean fallback
 * instead of a broken widget.
 */
export async function getContributionCalendar(): Promise<ContributionDay[] | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(`${GITHUB_API}/graphql`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { login: siteConfig.githubUsername } }),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;

    const json = (await res.json()) as ContributionCalendarResponse;
    const weeks = json.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
    if (!weeks) return null;

    const allDays = weeks.flatMap((w) => w.contributionDays);
    const max = Math.max(...allDays.map((d) => d.contributionCount), 0);

    return allDays.map((d) => ({
      date: d.date,
      count: d.contributionCount,
      level: toLevel(d.contributionCount, max),
    }));
  } catch {
    return null;
  }
}

function toLevel(count: number, max: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0 || max === 0) return 0;
  const ratio = count / max;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}
