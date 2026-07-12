import useReveal from '../hooks/useReveal';

export default function Extras() {
  const ref = useReveal();

  return (
    <section className="section extras" ref={ref}>
      <div className="extras__grid">
        <div className="extras__block">
          <p className="section__eyebrow">05 &mdash; Achievement</p>
          <h3 className="extras__heading">Led from the front.</h3>
          <p>
            Captained the district cricket team through inter-district
            tournaments &mdash; the same read-the-field instinct I bring to a
            client meeting.
          </p>
        </div>

        <div className="extras__divider" aria-hidden="true" />

        <div className="extras__block">
          <p className="section__eyebrow">06 &mdash; Off the clock</p>
          <h3 className="extras__heading">Cricket &amp; couplets.</h3>
          <p>
            When I&apos;m not closing deals, I&apos;m either on the cricket
            pitch or writing poems &mdash; two outlets that keep the same
            attention to rhythm and timing sharp.
          </p>
        </div>
      </div>
    </section>
  );
}
