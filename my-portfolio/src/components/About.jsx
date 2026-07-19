import useReveal from '../hooks/useReveal';

const SKILLS = ['Marketing Strategy', 'Consumer Behavior', 'MS Office', 'Canva', 'Client Relationship Management', 'Sales Strategy', 'Sponsorship Outreach'];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="section__head">
        <p className="section__eyebrow">01 &mdash; About</p>
        <h2 className="section__title">Marketing that reads the dashboard, not just the room.</h2>
      </div>

      <div className="about__body">
        <p>
          I&apos;m an MBA candidate at IMT Hyderabad with a foundation in physics and
          two years on the ground in business development. While sales taught me how to sit across the table from clients and close gaps, my true passion lies in marketing &mdash; the art of understanding why people choose what they choose before they even reach the table.
        </p>
        <p>
          Outside of coursework, I coordinate corporate sponsorships for
          IMT&apos;s Communication Club, captain the district cricket team, and
          write poetry &mdash; disciplines that all come down to knowing exactly what to say, and when. I like being where analysis meets people.
        </p>
      </div>

      <ul className="chip-row">
        {SKILLS.map((skill) => (
          <li key={skill} className="chip">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
