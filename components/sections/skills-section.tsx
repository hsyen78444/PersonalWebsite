import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/site-content";

export function SkillsSection() {
  return (
    <section className="content-section" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="The stack I keep coming back to."
        description="These are the tools that show up across my internships and projects, not a random list of everything I have touched once."
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
