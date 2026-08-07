import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/constants";

const socials = [
  { label: "GitHub", href: siteConfig.github },
  { label: "LinkedIn", href: siteConfig.linkedin },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-5 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[12px] text-muted-foreground">
          © {year} {siteConfig.name}. Built with Next.js, deployed on Vercel.
        </p>

        <div className="flex items-center gap-5 font-mono text-[12.5px] text-muted-foreground">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Mail className="h-3.5 w-3.5" />
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
