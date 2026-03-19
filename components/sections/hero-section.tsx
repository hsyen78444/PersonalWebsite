import { profileWithStats } from "@/data/site-content";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{profileWithStats.tagline}</p>
        <h1>
          Computer science student building thoughtful software with clean
          interfaces.
        </h1>
        <p className="hero-description">{profileWithStats.summary}</p>
        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            View Projects
          </a>
          <a
            className="secondary-button"
            href={`mailto:${profileWithStats.email}`}
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-panel">
        <div className="hero-card">
          <span>Currently Focused On</span>
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
      </div>
    </section>
  );
}
