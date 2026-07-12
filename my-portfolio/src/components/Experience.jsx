import useReveal from '../hooks/useReveal';

const STAGES = [
  {
    tag: 'Stage 01',
    status: 'Closed',
    role: 'Business Development Executive',
    org: 'Shree Shakti Infraprojects Pvt. Ltd.',
    period: "Jun '23 \u2013 Mar '25 \u00b7 22 months",
    points: [
      'Identified and approached potential clients to generate new business opportunities.',
      'Maintained client relationships by addressing requirements and providing solutions.',
      'Assisted in achieving sales targets and supported overall business growth initiatives.',
    ],
  },
  {
    tag: 'Stage 02',
    status: 'Completed',
    role: 'Sales Department Intern',
    org: 'Prop-Keys Consulting Pvt Ltd',
    period: '1 Apr 2026 \u2013 31 May 2026 \u00b7 2 months',
    points: [
      'Worked within the Sales department on assigned projects and day-to-day tasks.',
      "Recognized by HR for being punctual, hardworking, and a fast learner.",
      'Performance and conduct rated satisfactory across the internship.',
    ],
  },
  {
    tag: 'Stage 03',
    status: 'In progress',
    role: 'Sponsorship Coordinator, CommWing',
    org: 'IMT Hyderabad (Communication Club)',
    period: '2025 \u2013 Present',
    points: [
      'Reach out to corporate partners to secure sponsorships for college events and fests.',
      'Coordinate with team members to lock in partnerships and funding support.',
      'Manage day-to-day communication with external stakeholders.',
    ],
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="pipeline" className="section pipeline" ref={ref}>
      <div className="section__head">
        <p className="section__eyebrow">02 &mdash; Experience</p>
        <h2 className="section__title">The pipeline so far.</h2>
        <p className="section__sub">
          Every deal moves through stages before it closes. So has my career.
        </p>
      </div>

      <ol className="pipeline__list">
        {STAGES.map((stage) => (
          <li className="pipeline__stage" key={stage.role}>
            <div className="pipeline__marker">
              <span className="pipeline__tick" />
            </div>
            <div className="pipeline__card">
              <div className="pipeline__card-head">
                <span className="pipeline__tag">{stage.tag}</span>
                <span className={`pipeline__status pipeline__status--${stage.status.replace(' ', '-').toLowerCase()}`}>
                  {stage.status}
                </span>
              </div>
              <h3 className="pipeline__role">{stage.role}</h3>
              <p className="pipeline__org">
                {stage.org} <span className="pipeline__period">&middot; {stage.period}</span>
              </p>
              <ul className="pipeline__points">
                {stage.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
