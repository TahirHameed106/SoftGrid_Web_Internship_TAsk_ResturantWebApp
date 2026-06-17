import useScrollReveal from '../hooks/useScrollReveal';
import { stats, team, galleryImages } from '../data/aboutData';
import './About.css';

function AboutSection({ children, className = '', threshold = 0.12 }) {
  const [ref, visible] = useScrollReveal(threshold);

  return (
    <section ref={ref} className={`about-section ${visible ? 'is-visible' : ''} ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <header className="page-header about-hero">
        <div className="container">
          <span className="eyebrow">Our Story</span>
          <h1 className="section-title">About Ember &amp; Oak</h1>
          <p>
            Ember &amp; Oak began with a simple idea: honest ingredients, cooked over real fire,
            served in a space that feels warm, bold, and welcoming.
          </p>
          <div className="divider" />
        </div>
      </header>

      <AboutSection className="about-intro" threshold={0.08}>
        <div className="about-grid">
          <div>
            <span className="eyebrow">Why We Exist</span>
            <h2 className="section-title">Fire-led cooking, neighborhood hospitality</h2>
            <p className="section-subtitle">
              We keep the menu focused and the process deliberate. That means house-made sauces,
              local produce, slow-smoked meats, and seasonal plates that are built to feel both
              familiar and memorable.
            </p>
          </div>
          <div className="about-card about-card--accent">
            <h3>What guides us</h3>
            <ul>
              <li>Real wood fire for depth and character</li>
              <li>Local sourcing whenever possible</li>
              <li>Comfort food with a polished finish</li>
            </ul>
          </div>
        </div>
      </AboutSection>

      <AboutSection className="about-stats">
        <div className="about-stats__grid">
          {stats.map((stat) => (
            <article key={stat.id} className="about-stat">
              <strong>
                {stat.value}
                {stat.suffix}
              </strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </AboutSection>

      <AboutSection className="about-team">
        <div className="section-header">
          <span className="eyebrow">The Team</span>
          <h2 className="section-title">The people behind the fire</h2>
        </div>
        <div className="about-team__grid">
          {team.map((member) => (
            <article key={member.id} className="about-team-card">
              <img src={member.avatar} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="about-team-card__role">{member.role}</p>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </AboutSection>

      <AboutSection className="about-gallery">
        <div className="section-header">
          <span className="eyebrow">Inside Ember &amp; Oak</span>
          <h2 className="section-title">A look around</h2>
        </div>
        <div className="about-gallery__grid">
          {galleryImages.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
      </AboutSection>
    </div>
  );
}