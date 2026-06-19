export default function Hero() {
  const [ref, visible] = useScrollReveal();

  return (
    <section ref={ref} className={`hero ${visible ? 'is-visible' : ''}`}>

      {/* Background Video */}
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/SoftGrid_Web_Internship_TAsk_ResturantWebApp/videos/cooking.mp4" type="video/mp4" />
      </video>

      <div className="hero__overlay"></div>

      <div className="container hero__content">
        <span className="eyebrow">Wood-Fired · Slow-Cooked · Always Fresh</span>

        <h1 className="hero__title">
          Taste the Fire, Feel the Warmth
        </h1>

        <p className="hero__text">
          From smoky brisket to crisp wood-fired pizza, every plate at Ember &amp; Oak
          is cooked the slow way — over real fire, with ingredients sourced
          from local farms.
        </p>

        <div className="hero__actions">
          <Link to="/menu" className="btn btn-primary">
            View Menu
          </Link>

          <Link to="/contact" className="btn btn-outline">
            Reserve a Table
          </Link>
        </div>
      </div>

    </section>
  );
}