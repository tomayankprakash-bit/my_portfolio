import useReveal from '../hooks/useReveal';

const SKILLS = ['MS Office', 'Canva', 'Client Relationship Management', 'Sales Strategy', 'Sponsorship Outreach'];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="section__head">
        <p className="section__eyebrow">01 &mdash; About</p>
        <h2 className="section__title">Reads a room, then reads the numbers.</h2>
      </div>

      <div className="about__body">
        <p>
          I&apos;m an MBA candidate at IMT Hyderabad with a foundation in physics and
          two years on the ground in business development. Before business school,
          I spent my days identifying prospects, sitting across the table from
          clients, and turning their requirements into solutions that actually got
          signed off &mdash; the kind of work that teaches you patience and
          precision in equal measure.
        </p>
        <p>
          Outside of coursework, I coordinate corporate sponsorships for
          IMT&apos;s Communication Club, captain the district cricket team, and
          write poetry &mdash; three very different disciplines that all come
          down to the same thing: knowing exactly what to say, and when.
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
