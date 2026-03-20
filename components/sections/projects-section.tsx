import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/site-content";

export function ProjectsSection() {
  return (
    <section className="content-section" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="These projects are the clearest signal of what I actually like building."
        description="You will see a pattern: workflow-heavy systems, practical tools, and products that connect backend logic to user-facing interactions."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <ul className="tag-list">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.codeLink}>Source Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
