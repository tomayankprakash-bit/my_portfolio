import useReveal from '../hooks/useReveal';

const ROWS = [
  { degree: 'PGDM', institute: 'IMT, Hyderabad', year: '2027', score: '6.18', unit: 'CGPA', current: true },
  { degree: 'B.Sc. (Hons.) Physics', institute: 'Nitish Kumar Smarak College, Sahdei', year: '2022', score: '70.6', unit: '%' },
  { degree: 'XII', institute: 'S.N.S College, Hajipur', year: '2019', score: '73.8', unit: '%' },
  { degree: 'X', institute: 'St Johns Academy, Daulatpur Chandi', year: '2017', score: '81.7', unit: '%' },
];

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="section__head">
        <p className="section__eyebrow">03 &mdash; Education</p>
        <h2 className="section__title">The scoreboard.</h2>
      </div>

      <div className="scoreboard">
        <div className="scoreboard__row scoreboard__row--head">
          <span>Degree</span>
          <span>Institute</span>
          <span>Year</span>
          <span>Score</span>
        </div>
        {ROWS.map((row) => (
          <div className={`scoreboard__row ${row.current ? 'scoreboard__row--current' : ''}`} key={row.degree}>
            <span className="scoreboard__degree">
              {row.degree}
              {row.current && <span className="scoreboard__badge">In progress</span>}
            </span>
            <span className="scoreboard__institute">{row.institute}</span>
            <span className="scoreboard__year">{row.year}</span>
            <span className="scoreboard__score">
              {row.score}
              <em>{row.unit}</em>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
