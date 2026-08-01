import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Football Mini-Games";
  const score = searchParams.get("score");
  const emoji = searchParams.get("emoji");

  let subtitle = "Daily challenges with 5,000+ real players. Free to play!";
  if (score) subtitle = `Score: ${score}`;
  if (emoji) subtitle = emoji;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0e17",
          backgroundImage:
            "linear-gradient(135deg, #0a0e17 0%, #1a2035 50%, #0a0e17 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: 48 }}>⚽</span>
          <span
            style={{
              fontSize: 32,
              color: "white",
              fontWeight: 700,
              fontFamily: "sans-serif",
            }}
          >
            Football
            <span style={{ color: "#22c55e" }}>Games</span>
          </span>
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            fontFamily: "sans-serif",
            marginBottom: 16,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
