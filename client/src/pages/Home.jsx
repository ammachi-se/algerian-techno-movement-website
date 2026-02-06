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
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" aria-label="SoundCloud">
                <i className="fa-brands fa-soundcloud"></i>
              </a>
              <a href="#" aria-label="Bandcamp">
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
      </div>
    </>
  );
}
