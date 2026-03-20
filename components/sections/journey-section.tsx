import { SectionHeading } from "@/components/ui/section-heading";
import { journey } from "@/data/site-content";

export function JourneySection() {
  return (
    <section className="content-section" id="path">
      <SectionHeading
        eyebrow="Path"
        title="Kuala Lumpur, Chengdu, and Montreal are all part of the story."
        description="This is the part of the site that makes it yours: where you studied, where you worked, and how that shaped the kind of engineer you are becoming."
      />
      <div className="journey-grid">
        {journey.map((item) => (
          <article className="content-card journey-card" key={item.place}>
            <span className="journey-label">{item.label}</span>
            <h3>{item.place}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
