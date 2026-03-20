import { personalNotes, profile } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="content-section" id="about">
      <SectionHeading
        eyebrow="About"
        title="This site should read like Yen Hua Shen, not like a portfolio generator."
        description="The point is not to say I am a CS student. The point is to show the kind of work I like, the environments I have been in, and where I want to go next."
      />
      <div className="about-grid">
        <article className="content-card">
          <h3>Core profile</h3>
          <p>{profile.about}</p>
        </article>
        <article className="content-card">
          <h3>Education</h3>
          <p>{profile.education}</p>
        </article>
        {personalNotes.map((note) => (
          <article className="content-card" key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
