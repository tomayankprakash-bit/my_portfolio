import useReveal from '../hooks/useReveal';
import linkedinIcon from '../assets/linkedin.svg';

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="contact__card">
        <p className="section__eyebrow">07 &mdash; Contact</p>
        <h2 className="section__title">Let&apos;s close the deal.</h2>
        <p className="contact__sub">
          Open to opportunities in business development, sales, and client
          strategy. The easiest way to reach me is below.
        </p>

        <div className="contact__row">
          <a className="btn btn--primary" href="mailto:mayankprakash@imthyderabad.edu.in">
            mayankprakash@imthyderabad.edu.in
          </a>
          <a className="btn btn--ghost" href="tel:+917903793115">
            +91 79037 93115
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
    </section>
  );
}
