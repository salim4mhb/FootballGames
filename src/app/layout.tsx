import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Football Mini-Games | Daily Challenges & Trivia",
    template: "%s | Football Mini-Games",
  },
  description:
    "Play daily football mini-games: Guess the Player, Top 10 Challenge, Trivia, and more. Challenge yourself with 5,000+ real players. Free to play!",
  keywords: [
    "football",
    "soccer",
    "mini-games",
    "trivia",
    "guess the player",
    "daily challenge",
    "football quiz",
    "player guessing game",
  ],
  authors: [{ name: "Football Mini-Games" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Football Mini-Games",
    title: "Football Mini-Games | Daily Challenges & Trivia",
    description:
      "Play daily football mini-games with 5,000+ real players. Guess the Player, Top 10 Challenge, and more!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Football Mini-Games",
    description:
      "Daily football challenges with 5,000+ real players. Free to play!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Football Mini-Games",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://footballminigames.com",
  description:
    "Play daily football mini-games with 5,000+ real players. Free to play!",
  applicationCategory: "Game",
  operatingSystem: "Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}
      <script src="https://pl30639900.effectivecpmnetwork.com/a6/64/5e/a6645e387bb28a1c6016e32c25742dd2.js"></script>
</body>
    </html>
  );
}
