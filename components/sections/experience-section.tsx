import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data/site-content";

export function ExperienceSection() {
  return (
    <section className="content-section" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Highlight impact even if you are early in your career."
        description="Internships, student leadership, freelance work, and academic projects all count when they show ownership and results."
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

