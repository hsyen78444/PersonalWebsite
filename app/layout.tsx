import type { Metadata } from "next";
import { profile } from "@/data/site-content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | CS Student`,
  description:
    "A polished personal website for a computer science student built with Next.js."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const storageKey = "theme-preference";
                const savedTheme = localStorage.getItem(storageKey);
                const theme = savedTheme === "light" || savedTheme === "dark"
                  ? savedTheme
                  : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                document.documentElement.dataset.theme = theme;
              })();
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
