import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/site-content";

export function ContactSection() {
  return (
    <section className="content-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Make the next step obvious."
        description="This closing section should tell people exactly how to reach you and what kinds of opportunities you want."
      />
      <div className="contact-card">
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.contactNote}</p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github}>GitHub</a>
          <a href={profile.linkedin}>LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

