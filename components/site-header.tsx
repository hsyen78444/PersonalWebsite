import { ResumeLink } from "@/components/ui/resume-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { profile } from "@/data/site-content";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Path", href: "#path" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top">
        <span>{initials}</span>
        <div>
          <strong>{profile.name}</strong>
          <small>Computer Science Student</small>
        </div>
      </a>
      <div className="header-actions">
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
        <ResumeLink className="header-resume-link" label="Resume" />
      </div>
    </header>
  );
}
