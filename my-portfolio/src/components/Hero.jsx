import { useEffect, useRef, useState } from 'react';
import profilePhoto from '../assets/Profile.jpeg';
import linkedinIcon from '../assets/linkedin.svg';

const STATS = [
  { label: 'Months in field sales', value: 22, suffix: '' },
  { label: 'PGDM CGPA', value: 6.18, suffix: '', decimals: 2 },
  { label: 'Certifications logged', value: 3, suffix: '+' },
  { label: 'District cricket captaincy', value: 1, suffix: '' },
];

function useCountUp(target, decimals = 0, start) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    let frame;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start]);

  return value.toFixed(decimals);
}

function StatTile({ stat, start, index }) {
  const display = useCountUp(stat.value, stat.decimals || 0, start);
  return (
    <div className="stat-tile" style={{ transitionDelay: `${index * 80}ms` }}>
      <span className="stat-tile__value">
        {display}
        {stat.suffix}
      </span>
      <span className="stat-tile__label">{stat.label}</span>
    </div>
  );
}

export default function Hero() {
  const [started, setStarted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="hero" ref={heroRef}>
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">Business Development &amp; Client Relations</p>
          <h1 className="hero__name">
            Mayank
            <br />
            Prakash
          </h1>
          <p className="hero__tagline">
            PGDM candidate at IMT Hyderabad, building on 22 months of field sales
            experience &mdash; opening conversations, closing gaps, and turning
            client requirements into working solutions.
          </p>

          <div className="hero__cta-row">
            <a className="btn btn--primary" href="#pipeline">
              View my pipeline
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
            <a
              className="btn btn--icon"
              href="https://www.linkedin.com/in/mayank-prakash-1455b4364/"
              target="_blank"
              rel="noreferrer"
              aria-label="Mayank Prakash on LinkedIn"
            >
              <img src={linkedinIcon} alt="" />
            </a>
          </div>
        </div>

        <div className="hero__panel">
          <div className="id-card">
            <div className="id-card__photo-frame">
              <img src={profilePhoto} alt="Mayank Prakash" className="id-card__photo" />
            </div>
            <p className="id-card__name">Mayank Prakash</p>
            <p className="id-card__role">PGDM &middot; IMT Hyderabad &middot; Class of 2027</p>
          </div>

          <div className="stat-board">
            <p className="stat-board__title">Scorecard</p>
            <div className="stat-board__grid">
              {STATS.map((stat, i) => (
                <StatTile key={stat.label} stat={stat} start={started} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
