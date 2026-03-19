import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/site-content";

export function SkillsSection() {
  return (
    <section className="content-section" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A simple skill layout that recruiters can scan in seconds."
        description="Group tools by category so the section is easier to read and less like a keyword wall."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="content-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

