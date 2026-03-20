import { ResumeLink } from "@/components/ui/resume-link";
import { profileWithStats } from "@/data/site-content";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{profileWithStats.tagline}</p>
        <h1>Backend-heavy web apps, cleaner UI, and a more personal build path.</h1>
        <p className="hero-description">{profileWithStats.summary}</p>
        <div className="hero-inline-meta">
          <span>{profileWithStats.education}</span>
        </div>
        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            View Projects
          </a>
          <ResumeLink className="secondary-button" label="Download Resume" />
        </div>
      </div>
      <div className="hero-panel">
        <div className="hero-card hero-card-primary">
          <span>Current Focus</span>
          <h2>{profileWithStats.currentFocus}</h2>
          <p>{profileWithStats.focusDescription}</p>
        </div>
        <div className="stat-grid">
          {profileWithStats.stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
        <div className="hero-note-card">
          <p>Based in Kuala Lumpur, with internship work in Chengdu and an exchange semester in Montreal.</p>
          <a href={`mailto:${profileWithStats.email}`}>Let&apos;s talk</a>
        </div>
      </div>
    </section>
  );
}
