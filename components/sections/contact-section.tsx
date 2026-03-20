import { ResumeLink } from "@/components/ui/resume-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/site-content";

export function ContactSection() {
  return (
    <section className="content-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="If you are building software with real product and backend depth, I would like to hear about it."
        description="I am looking for teams where I can keep growing as a backend-leaning engineer who still cares about the front end."
      />
      <div className="contact-card">
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.contactNote}</p>
        </div>
        <div className="contact-links">
          <ResumeLink className="contact-link-button" label="Download Resume" />
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a href={profile.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
