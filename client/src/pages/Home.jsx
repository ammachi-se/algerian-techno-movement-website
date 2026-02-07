import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/home-hero.mp4";

export default function Home() {
  const carouselRef = useRef(null);
  const videoRef = useRef(null);
  const heroWrapRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollCarousel = (direction) => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".hero-card")?.offsetWidth || 260;
    const gap = 20;
    el.scrollBy({ left: (cardWidth + gap) * direction, behavior: "smooth" });
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const update = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < maxScroll - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const wrap = heroWrapRef.current;
    if (!wrap) return;

    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const scrolled = window.scrollY > 20;
        wrap.classList.toggle("is-scrolled", scrolled);
        frame = null;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

    return (
    <>
      <div className="home-hero-wrap" ref={heroWrapRef}>
        <div className="home-video-bg" aria-hidden="true">
          <video
            ref={videoRef}
            className="home-video"
            autoPlay
            muted
            loop
            playsInline
            onLoadedMetadata={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 3;
              }
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        <section className="hero home-hero">
        <div className="hero-eyebrow reveal home-sequence">
          United by the passion for the techno
        </div>
        <h1 className="hero-title reveal home-sequence">
          Algerian{" "}
          <span className="glitch-word" data-text="Techno">
            Techno
          </span>{" "}
          Movement
        </h1>
        <p className="hero-subtitle reveal split-text home-sequence">
          A constellation of artists, sounds and nocturnal rituals. We blend techno, rai,
          industrial textures, and urban poetry.
        </p>
        <div className="hero-actions reveal home-sequence">
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/algerian.techno.movement/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/c/AlgerianTechnoMovement"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://soundcloud.com/algeriantechnomovement"
              aria-label="SoundCloud"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-soundcloud"></i>
            </a>
            <a
              href="https://lkemia.bandcamp.com/"
              aria-label="Bandcamp"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-bandcamp"></i>
            </a>
          </div>
          <Link className="btn ghost" to="/podcasts">
            Listen to the podcasts
          </Link>
        </div>
        <div className="hero-scroll home-sequence">
          <span className="hero-scroll-arrow">v</span>
          <span>Scroll</span>
        </div>
        </section>
      </div>

      <div className="home-after-hero">
        <section className="hero-carousel">
          <div className="hero-carousel-track">
            <button
              className={`carousel-arrow left ${canScrollLeft ? "" : "is-hidden"}`}
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label="Previous"
            >
              &lt;
            </button>
            <div className="hero-carousel-viewport">
              <div className="hero-grid" ref={carouselRef}>
                <div className="hero-card reveal">
                  <span>
                    <span className="status-dot is-upcoming"></span>
                    Next Transmission
                  </span>
                  <h3>Desert Frequencies - 21.02</h3>
                  <p>Live set hybride, visuels generatifs, energie brute.</p>
                </div>
                <div className="hero-card reveal">
                  <span>
                    <span className="status-dot is-past"></span>
                    Residency
                  </span>
                  <h3>Casbah Machines</h3>
                  <p>Atelier mensuel, synths modulaires, jams collectifs.</p>
                </div>
                <div className="hero-card reveal">
                  <span>
                    <span className="status-dot is-upcoming"></span>
                    Label
                  </span>
                  <h3>ATM 004 en preparation</h3>
                  <p>Sortie printemps 2026, presse vinyle 180g.</p>
                </div>
                <div className="hero-card reveal">
                  <span>
                    <span className="status-dot is-upcoming"></span>
                    Podcast
                  </span>
                  <h3>Night Highway - 58 min</h3>
                  <p>Techno dub, samples de la Casbah, field recordings.</p>
                </div>
                <div className="hero-card reveal">
                  <span>
                    <span className="status-dot is-past"></span>
                    Residency
                  </span>
                  <h3>Casbah Machines - Workshop</h3>
                  <p>Jams collectifs, synths modulaires, live hardware.</p>
                </div>
              </div>
            </div>
            <button
              className={`carousel-arrow right ${canScrollRight ? "" : "is-hidden"}`}
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label="Next"
            >
              &gt;
            </button>
          </div>
        </section>

        <section className="marquee">
          <div className="marquee-track">
            <span>Rituals</span>
            <span>Live Hardware</span>
            <span>Desert Tech</span>
            <span>Collective Energy</span>
            <span>Rituals</span>
            <span>Live Hardware</span>
            <span>Desert Tech</span>
            <span>Collective Energy</span>
          </div>
        </section>

        <section className="logo-history">
          <h2>Meaning of our logo</h2>
          <p className="logo-history-text">
            A constellation of artists, sounds and nocturnal rituals. We blend techno, rai,
            industrial textures, and urban poetry.
          </p>
          <div className="logo-scroll">
            <div className="logo-scroll-track">
              <div className="logo-panel">
                <img src="/src/assets/a-atm.png" alt="ATM logo A" />
              </div>
              <div className="logo-panel">
                <img src="/src/assets/t-atm.png" alt="ATM logo T" />
              </div>
              <div className="logo-panel">
                <img src="/src/assets/m-atm.png" alt="ATM logo M" />
              </div>
              <div className="logo-panel">
                <img src="/src/assets/logo4.png" alt="ATM logo full" />
              </div>
            </div>
          </div>
        </section>

        <section className="about-home">
          <h2 className="hero-title reveal">About</h2>
          <p className="hero-subtitle reveal">
            The Algerian Techno Movement is a collective of DJs, producers and
            multidisciplinary artists pushing underground electronic music in Algeria.
          </p>
          <p className="hero-subtitle reveal">
            Founded by pioneers of Algeria's techno and underground scene, we're here to
            open doors to techno and other electronic genres in Algeria, spotlighting
            local talent despite the challenges our music scene faces.
          </p>
          <p className="hero-subtitle reveal">
            What drives us is musical diversity and raw artistic expression. We dig into
            Algeria's identity, its music, folklore, cinema, architecture, and use that as
            fuel for new electronic sounds. Through constant experimentation, we're
            building something that's uniquely ours.
          </p>
          <p className="hero-subtitle reveal">
            We're changing how music works here, breaking through cultural barriers and
            industry limitations. Our goal is simple: showcase Algeria's creative wealth
            while building a community where electronic music can thrive.
          </p>
          <div className="content-grid">
            <div className="content-card reveal">
              <h3>Origines</h3>
              <p>
                Des sessions clandestines aux plateaux radio, ATM s'est construit sur des
                rencontres, des machines partagées et des rites communautaires.
              </p>
            </div>
            <div className="content-card reveal">
              <h3>Mission</h3>
              <p>
                Amplifier les voix électroniques algériennes, créer des passerelles entre
                disciplines et explorer des narrations sonores alternatives.
              </p>
            </div>
            <div className="content-card reveal">
              <h3>Territoires</h3>
              <p>
                Nous organisons des résidences, workshops et performances dans plusieurs
                villes, avec un focus sur la transmission et l'autonomie.
              </p>
            </div>
          </div>
          <div className="manifesto reveal">
            <h2>Manifeste ATM</h2>
            <p>
              Nous sommes le souffle électronique des médinas et des highways nocturnes. Nous
              faisons dialoguer le beat, le spoken word et la mémoire collective. Nous
              inventons un futur nord-africain dansant.
            </p>
          </div>
        </section>

        <section className="events-home">
          <h2 className="hero-title reveal">Events</h2>
          <p className="hero-subtitle reveal">
            Labyrinth is a collective event of the Algerian techno movement, primarily
            focused on underground electronic music and visual arts.
          </p>
          <p className="hero-subtitle reveal">
            Its goal is to develop and encourage the local scene, as well as that of North
            Africa and the Middle East. Labyrinth aspires to create cultural exchanges
            between these neighboring countries, highlighting the artists of the region and
            their culture.
          </p>
          <p className="hero-subtitle reveal">
            This event aims to offer immersive experiences around music, as well as other
            artistic installations that stand out. Drawing on local and regional culture,
            Labyrinth presents both modern and traditional art, while also drawing
            inspiration from the region's traditional heritage to modernize it with
            contemporary artists.
          </p>
        </section>
      </div>
    </>
  );
}

