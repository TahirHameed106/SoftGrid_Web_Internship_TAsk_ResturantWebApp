import useScrollReveal from '../../hooks/useScrollReveal';
import './WhyChooseUs.css';

const features = [
  {
    id: 1,
    title: 'Wood-Fired Mastery',
    text: 'Every dish gets its signature smoky depth from real wood fire, not shortcuts.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C9 6 7 8 7 12a5 5 0 0010 0c0-1.5-.5-2.5-1.5-3.5C16 10 15 12 13.5 12c1-2-1-4-1.5-10z" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Locally Sourced',
    text: 'We partner with nearby farms for produce, herbs, and meats — fresh, every day.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Warm Hospitality',
    text: 'A welcoming space and attentive team that make every visit feel personal.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Award-Winning Recipes',
    text: 'Recognized for our craft, from regional food awards to local critic reviews.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 15a6 6 0 100-12 6 6 0 000 12z" />
        <path d="M8.2 13.5L7 22l5-3 5 3-1.2-8.5" strokeLinejoin="round" />
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  const [ref, visible] = useScrollReveal();

  return (
    <section ref={ref} className={`section why-us ${visible ? 'is-visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Why Ember &amp; Oak</span>
          <h2 className="section-title">What Sets Us Apart</h2>
        </div>

        <div className="why-us__grid">
          {features.map((feature) => (
            <div key={feature.id} className="why-us__card">
              <div className="why-us__icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}