import useReveal from '../hooks/useReveal';
import brandManagement from '../assets/BrandManagement.jpg';
import digitalMarketing from '../assets/Digital_Marketing.jpg';
import lss from '../assets/LSS.jpg';
import greenBelt from '../assets/GreenBelt.jpg';

const CERTS = [
  {
    title: 'Brand Management: Aligning Business, Brand and Behaviour',
    issuer: 'University of London & London Business School, via Coursera',
    image: brandManagement,
  },
  {
    title: 'Lean Six Sigma',
    issuer: 'Foundational coursework',
    image: lss,
  },
  {
    title: 'Lean Six Sigma Green Belt',
    issuer: 'Grant Thornton Bharat \u00b7 Pursuing',
    image: greenBelt,
  },
  {
    title: 'Digital Marketing',
    issuer: 'Certificate of completion',
    image: digitalMarketing,
  },
];

export default function Certifications() {
  const ref = useReveal();

  return (
    <section id="certifications" className="section certifications" ref={ref}>
      <div className="section__head">
        <p className="section__eyebrow">04 &mdash; Certifications</p>
        <h2 className="section__title">Paper trail.</h2>
      </div>

      <div className="cert-grid">
        {CERTS.map((cert) => (
          <figure className="cert-card" key={cert.title}>
            <div className="cert-card__image-frame">
              <img src={cert.image} alt={cert.title} loading="lazy" />
            </div>
            <figcaption>
              <p className="cert-card__title">{cert.title}</p>
              <p className="cert-card__issuer">{cert.issuer}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
