import { profile } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>{profile.name}</p>
      <p>Vibe coded this website in 10 minutes by Codex.</p>
    </footer>
  );
}
