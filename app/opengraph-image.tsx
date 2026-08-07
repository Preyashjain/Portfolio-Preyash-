import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          color: "#fafaf9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            color: "#a3a09a",
            letterSpacing: 1,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: 999, backgroundColor: "#e3a34d" }} />
          {siteConfig.name.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
          <div style={{ fontSize: 58, fontWeight: 600, lineHeight: 1.3, display: "flex" }}>
            {"AI systems and the backend infrastructure they run on."}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#a3a09a" }}>
          {siteConfig.title} · {siteConfig.location}
        </div>
      </div>
    ),
    { ...size }
  );
}
