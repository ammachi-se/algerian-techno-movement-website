export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-eyebrow reveal">Contact</div>
        <h1 className="hero-title reveal">Rejoindre le mouvement</h1>
        <p className="hero-subtitle reveal">
          Booking, collaborations, presse, ateliers. On répond vite.
        </p>
        <div className="hero-scroll">
          <span className="hero-scroll-arrow">v</span>
          <span>Scroll</span>
        </div>
      </section>

      <section className="contact-grid">
        <div className="contact-card reveal">
          <h3>Email</h3>
          <p>algeriantechnomovement@gmail.com</p>
          <p>Bookings & collaborations</p>
        </div>
        <div className="contact-card reveal">
          <h3>Réseaux</h3>
          <p>Instagram / SoundCloud / Bandcamp</p>
          <p>@algeriantechnomovement</p>
        </div>
        <form className="contact-form reveal">
          <label>
            Nom
            <input type="text" placeholder="Votre nom" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Votre email" />
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Parlez-nous de votre projet"></textarea>
          </label>
          <button className="btn primary" type="button">
            Envoyer
          </button>
        </form>
      </section>
    </>
  );
}
