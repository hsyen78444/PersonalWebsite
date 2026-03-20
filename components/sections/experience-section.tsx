import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data/site-content";

export function ExperienceSection() {
  return (
    <section className="content-section" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Two internships, two very different environments."
        description="One pushed me toward backend services and enterprise workflows. The other taught me to care more about interface detail and product feel."
      />
      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timeline-card" key={experience.role}>
            <div className="timeline-meta">
              <span>{experience.period}</span>
              <p>{experience.org}</p>
            </div>
            <div>
              <h3>{experience.role}</h3>
              <p>{experience.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
