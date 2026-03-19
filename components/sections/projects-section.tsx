import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/site-content";

export function ProjectsSection() {
  return (
    <section className="content-section" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Feature a few strong projects instead of listing everything."
        description="Each project card shows the problem, the stack, and the kind of work you owned."
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

