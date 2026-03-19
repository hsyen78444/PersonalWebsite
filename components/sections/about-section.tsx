import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/site-content";

export function AboutSection() {
  return (
    <section className="content-section" id="about">
      <SectionHeading
        eyebrow="About"
        title="A student profile that feels professional without feeling corporate."
        description="Use this section to show what you study, what you enjoy building, and the kind of opportunities you are looking for."
      />
      <div className="about-grid">
        <article className="content-card">
          <h3>Quick intro</h3>
          <p>{profile.about}</p>
        </article>
        <article className="content-card">
          <h3>Education</h3>
          <p>{profile.education}</p>
        </article>
        <article className="content-card">
          <h3>Interests</h3>
          <p>{profile.interests}</p>
        </article>
      </div>
    </section>
  );
}

