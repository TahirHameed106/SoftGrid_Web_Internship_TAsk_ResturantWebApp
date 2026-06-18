// src/pages/Contact.jsx
import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

/* ── Validation helper ───────────────────────────────────── */
function validate(fields) {
  const errors = {};

  if (!fields.name.trim())
    errors.name = 'Name is required.';
  else if (fields.name.trim().length < 2)
    errors.name = 'Name must be at least 2 characters.';

  if (!fields.email.trim())
    errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = 'Please enter a valid email address.';

  if (!fields.subject.trim())
    errors.subject = 'Subject is required.';
  else if (fields.subject.trim().length < 4)
    errors.subject = 'Subject must be at least 4 characters.';

  if (!fields.message.trim())
    errors.message = 'Message is required.';
  else if (fields.message.trim().length < 20)
    errors.message = 'Message must be at least 20 characters.';

  return errors;
}

const INITIAL = { name: '', email: '', subject: '', message: '' };

/* ── Contact Info Item ───────────────────────────────────── */
function InfoItem({ icon, label, value }) {
  return (
    <div className="info-item">
      <div className="info-item__icon">{icon}</div>
      <div>
        <span className="info-item__label">{label}</span>
        <span className="info-item__value">{value}</span>
      </div>
    </div>
  );
}

/* ── Contact Page ────────────────────────────────────────── */
export default function Contact() {
  const [fields, setFields]     = useState(INITIAL);
  const [errors, setErrors]     = useState({});
  const [touched, setTouched]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const [headerRef, headerVisible] = useScrollReveal(0.05);
  const [bodyRef, bodyVisible]     = useScrollReveal(0.08);

  /* Live validation on touched fields */
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    if (touched[name]) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: errs[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(fields);
    setErrors((prev) => ({ ...prev, [name]: errs[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);

    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    /* Simulate async submit (replace with real API call) */
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFields(INITIAL);
      setTouched({});
      setErrors({});
    }, 1600);
  };

  return (
    <>
      {/* ── Page Header ───────────────────────────────────── */}
      <section
        ref={headerRef}
        className={`page-header contact-header ${headerVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="section-title">Contact Us</h1>
          <p>
            Whether you want to book a table, ask about our menu, or just say hello —
            we'd love to hear from you.
          </p>
          <div className="divider" />
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────── */}
      <section
        ref={bodyRef}
        className={`section contact-body ${bodyVisible ? 'is-visible' : ''}`}
      >
        <div className="container contact-grid">

          {/* ── Left: Info + Map ───────────────────────────── */}
          <div className="contact-info">
            <h2 className="contact-info__heading">Find &amp; Reach Us</h2>
            <p className="contact-info__intro">
              We're open seven days a week. Walk in, call ahead, or drop us a message.
            </p>

            <div className="info-items">
              <InfoItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                }
                label="Address"
                value="123 Riverside Lane, Karachi, Pakistan"
              />
              <InfoItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                }
                label="Phone"
                value="+92 300 1234567"
              />
              <InfoItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                }
                label="Email"
                value="hello@emberandoak.com"
              />
              <InfoItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                }
                label="Hours"
                value="Mon–Sun: 12:00 PM – 11:00 PM"
              />
            </div>

            {/* Map embed */}
            <div className="contact-map">
              <iframe
                title="Ember & Oak Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231943.97930483847!2d66.86507234999999!3d24.860734600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── Right: Form ────────────────────────────────── */}
          <div className="contact-form-wrap">
            <h2 className="contact-form-wrap__heading">Send a Message</h2>

            {submitted ? (
              <div className="form-success" role="alert">
                <div className="form-success__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Name + Email row */}
                <div className="form-row">
                  <div className={`form-group ${errors.name && touched.name ? 'has-error' : ''} ${!errors.name && touched.name ? 'has-success' : ''}`}>
                    <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={fields.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                    />
                    {errors.name && touched.name && (
                      <span className="field-error" id="name-error" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className={`form-group ${errors.email && touched.email ? 'has-error' : ''} ${!errors.email && touched.email ? 'has-success' : ''}`}>
                    <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={fields.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                    />
                    {errors.email && touched.email && (
                      <span className="field-error" id="email-error" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className={`form-group ${errors.subject && touched.subject ? 'has-error' : ''} ${!errors.subject && touched.subject ? 'has-success' : ''}`}>
                  <label htmlFor="subject">Subject <span aria-hidden="true">*</span></label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={fields.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-describedby={errors.subject && touched.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && touched.subject && (
                    <span className="field-error" id="subject-error" role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className={`form-group ${errors.message && touched.message ? 'has-error' : ''} ${!errors.message && touched.message ? 'has-success' : ''}`}>
                  <label htmlFor="message">
                    Message <span aria-hidden="true">*</span>
                    <span className="char-count">{fields.message.length} / 500</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Write your message here… (min. 20 characters)"
                    value={fields.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={500}
                    aria-required="true"
                    aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                  />
                  {errors.message && touched.message && (
                    <span className="field-error" id="message-error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary form-submit ${loading ? 'is-loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22,2 15,22 11,13 2,9"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── Reservation CTA ───────────────────────────────── */}
      <section className="reservation-cta section is-visible">
        <div className="container reservation-cta__inner">
          <div>
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Book a Table</span>
            <h2 className="section-title" style={{ color: 'var(--color-hero-text)' }}>
              Ready to Dine?
            </h2>
            <p style={{ color: 'rgba(246,241,231,0.65)', maxWidth: '440px' }}>
              Reserve your spot for an unforgettable evening of wood-fired food
              and warm hospitality.
            </p>
          </div>
          <div className="reservation-cta__actions">
            <a href="tel:+923001234567" className="btn btn-primary">
              Call to Reserve
            </a>
            <a href="mailto:hello@emberandoak.com" className="btn btn-outline">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}