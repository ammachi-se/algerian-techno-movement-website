import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Layout() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [cookieChoice, setCookieChoice] = useState(
    () => localStorage.getItem("atm-cookie-consent") || ""
  );
  const [showCookieModal, setShowCookieModal] = useState(false);
  const cursorFrame = useRef(null);

  useEffect(() => {
    if (isLoading) return;
    let observer = null;

    const splitLetters = (target, skipSelector, byWord = false) => {
      if (!target || target.dataset.split === "true") return;
      target.dataset.split = "true";

      const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          if (!node.nodeValue) return NodeFilter.FILTER_REJECT;
          if (skipSelector && node.parentElement?.closest(skipSelector)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      });

      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);

      nodes.forEach((node) => {
        const frag = document.createDocumentFragment();
        if (byWord) {
          const parts = node.nodeValue.split(/(\s+)/);
          parts.forEach((part) => {
            if (!part) return;
            if (/\s+/.test(part)) {
              const space = document.createElement("span");
              space.className = "hero-space";
              space.innerHTML = "&nbsp;";
              frag.appendChild(space);
              return;
            }
            const word = document.createElement("span");
            word.className = "hero-word";
            part.split("").forEach((char) => {
              const span = document.createElement("span");
              span.className = "hero-letter";
              span.textContent = char;
              word.appendChild(span);
            });
            frag.appendChild(word);
          });
        } else {
          node.nodeValue.split("").forEach((char) => {
            const span = document.createElement("span");
            span.className = "hero-letter";
            span.innerHTML = char === " " ? "&nbsp;" : char;
            frag.appendChild(span);
          });
        }
        node.parentNode?.replaceChild(frag, node);
      });
    };

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".reveal");
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target;
            if (location.pathname === "/" && target.classList.contains("home-sequence")) {
              obs.unobserve(entry.target);
              return;
            }
            if (target.classList.contains("hero-title") || target.classList.contains("split-text")) {
              const isSplitText = target.classList.contains("split-text");
              splitLetters(
                target,
                target.classList.contains("hero-title") ? ".glitch-word" : null,
                isSplitText
              );
              gsap.set(target, { opacity: 1, y: 0 });
              const letters = target.querySelectorAll(".hero-letter");
              const glitch = target.querySelectorAll(".glitch-word");
              const units = [...letters, ...glitch];
              gsap.fromTo(
                units,
                { opacity: 0, y: 8 },
                {
                  opacity: 1,
                  y: 0,
                  duration: isSplitText ? 0.25 : 0.35,
                  ease: "power1.out",
                  stagger: isSplitText ? 0.008 : 0.015,
                }
              );
            } else {
              gsap.fromTo(
                target,
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.95, ease: "power2.out" }
              );
            }
            obs.unobserve(entry.target);
          });
        },
        { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
      );

      elements.forEach((el) => observer.observe(el));

      const logoSection = document.querySelector(".logo-history");
      if (logoSection) {
        const title = logoSection.querySelector("h2");
        const logoImg = logoSection.querySelector(".logo-story img");

        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
          );
        }

        if (logoImg) {
          gsap.fromTo(
            logoImg,
            { opacity: 0, scale: 0.94 },
            { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out", delay: 0.15 }
          );
        }
      }

      if (location.pathname === "/") {
        const nav = document.querySelector(".nav-bar");
        const heroVideo = document.querySelector(".home-video-bg");
        const heroTitle = document.querySelector(".hero-title");
        const heroEyebrow = document.querySelector(".hero-eyebrow");
        const heroSubtitle = document.querySelector(".hero-subtitle");
        const heroActions = document.querySelector(".hero-actions");
        const heroScroll = document.querySelector(".hero-scroll");

        if (heroTitle) {
          splitLetters(heroTitle, ".glitch-word", true);
        }
        if (heroSubtitle) {
          splitLetters(heroSubtitle, null, true);
        }
        if (heroEyebrow) {
          splitLetters(heroEyebrow, null, false);
        }

        const titleUnits = heroTitle
          ? heroTitle.querySelectorAll(".hero-letter, .glitch-word")
          : [];
        const subtitleLetters = heroSubtitle ? heroSubtitle.querySelectorAll(".hero-letter") : [];
        const eyebrowLetters = heroEyebrow ? heroEyebrow.querySelectorAll(".hero-letter") : [];

        gsap.set(
          [nav, heroEyebrow, heroTitle, heroSubtitle, heroActions, heroScroll],
          { opacity: 0, y: 10 }
        );
        gsap.set([titleUnits, subtitleLetters, eyebrowLetters], { opacity: 0, y: 8 });
        if (heroVideo) {
          gsap.set(heroVideo, { opacity: 0 });
        }

        const tl = gsap.timeline({ delay: 0.05 });
        if (heroVideo) {
          tl.to(heroVideo, { opacity: 1, duration: 0.4, ease: "power2.out" });
          tl.to({}, { duration: 0.4 });
        }
        if (nav) {
          tl.to(nav, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
        }
        if (heroTitle) {
          tl.set(heroTitle, { opacity: 1, y: 0 }, "-=0.15");
        }
        if (heroEyebrow) {
          tl.set(heroEyebrow, { opacity: 1, y: 0 }, "-=0.15");
        }
        if (heroSubtitle) {
          tl.set(heroSubtitle, { opacity: 1, y: 0 }, "-=0.15");
        }
        if (eyebrowLetters.length) {
          tl.to(
            eyebrowLetters,
            {
              opacity: 1,
              y: 0,
              duration: 0.16,
              ease: "power2.out",
              stagger: 0.007,
            },
            "+=0"
          );
        }
        if (titleUnits.length) {
          tl.to(
            titleUnits,
            {
              opacity: 1,
              y: 0,
              duration: 0.25,
              ease: "power2.out",
              stagger: 0.01,
            },
            "<"
          );
        }
        if (subtitleLetters.length) {
          tl.to(
            subtitleLetters,
            {
              opacity: 1,
              y: 0,
              duration: 0.14,
              ease: "power2.out",
              stagger: 0.004,
            },
            "<"
          );
        }
        if (heroActions) {
          tl.to(heroActions, { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }, "+=0.1");
        }
        if (heroScroll) {
          tl.to(heroScroll, { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }, "<");
        }
      }
    });
    return () => {
      if (observer) observer.disconnect();
      ctx.revert();
    };
  }, [location.pathname, isLoading]);

  useEffect(() => {
    if (!isLoading) return;
    document.body.classList.add("is-loading");
    const fallbackTimer = setTimeout(() => {
      document.body.classList.remove("is-loading");
      setIsLoading(false);
    }, 1800);
    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(fallbackTimer);
        document.body.classList.remove("is-loading");
        setIsLoading(false);
      },
    });
    tl.fromTo(
      ".preloader-logo",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
      .fromTo(
        ".preloader-bar-fill",
        { scaleX: 0 },
        { scaleX: 0.6, duration: 0.6, ease: "power1.inOut" },
        "-=0.1"
      )
      .to(".preloader-bar-fill", { scaleX: 0.88, duration: 0.45, ease: "power2.inOut" })
      .to(".preloader-bar-fill", { scaleX: 1, duration: 0.35, ease: "power2.out" })
      .to(".preloader", { opacity: 0, duration: 0.4, ease: "power2.out" })
      .set(".preloader", { display: "none" });
    return () => clearTimeout(fallbackTimer);
  }, [isLoading]);

  useEffect(() => {
    if (!cookieChoice) return;
    localStorage.setItem("atm-cookie-consent", cookieChoice);
    setShowCookieModal(false);
  }, [cookieChoice]);

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const onPointerOver = (event) => {
      if (
        event.target.closest(
          "a, button, [role='button'], input, textarea, select, label, .hero-card, .content-card, .member-card, .label-card, .podcast-item, .contact-card, .manifesto"
        )
      ) {
        cursor.classList.add("is-hovering");
      }

      if (event.target.closest(".nav-bar, .site-footer")) {
        cursor.classList.add("is-nav");
      }
    };

    const onPointerOut = (event) => {
      if (
        event.target.closest(
          "a, button, [role='button'], input, textarea, select, label, .hero-card, .content-card, .member-card, .label-card, .podcast-item, .contact-card, .manifesto"
        )
      ) {
        cursor.classList.remove("is-hovering");
      }

      if (event.target.closest(".nav-bar, .site-footer")) {
        cursor.classList.remove("is-nav");
      }
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      cursorFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOut);
    cursorFrame.current = requestAnimationFrame(animate);

    return () => {
      if (cursorFrame.current) cancelAnimationFrame(cursorFrame.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  const menuItems = useMemo(
    () => [
      { label: "Home", to: "/", end: true },
      { label: "About", to: "/about" },
      { label: "Members", to: "/members" },
      { label: "Podcast", to: "/podcasts" },
      { label: "Label", to: "/label" },
      { label: "Contact", to: "/contact" },
    ],
    []
  );

  return (
    <>
      <div className="custom-cursor" aria-hidden="true"></div>
      {isLoading && (
        <div className="preloader" aria-hidden="true">
          <div className="preloader-content">
            <img
              className="preloader-logo"
              src="/src/assets/logo4.png"
              alt="Algerian Techno Movement"
            />
            <div className="preloader-bar">
              <span className="preloader-bar-fill"></span>
            </div>
          </div>
        </div>
      )}
      <div className="grain"></div>
      <header className="site-header">
        <div className="nav-bar">
          <Link className="nav-logo" to="/">
            <img src="/src/assets/logo4.png" alt="Algerian Techno Movement" />
          </Link>
          <div className="nav-title">Algerian Techno Movement</div>
          <nav className="nav-grid">
            {menuItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className={location.pathname === "/" ? "main-home" : undefined}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-panel">
          <div className="footer-section">
            <div className="footer-section-title">Links</div>
            <div className="footer-section-detail">
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
                <li>
                  <a href="#">SoundCloud</a>
                </li>
                <li>
                  <a href="#">Bandcamp</a>
                </li>
              </ul>
            </div>
            <div className="footer-section-detail2"></div>
          </div>

          <div className="footer-section">
            <div className="footer-section-title">Website Section</div>
            <div className="footer-section-detail">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/members">Members</Link>
                </li>
                <li>
                  <Link to="/podcasts">Podcast</Link>
                </li>
                <li>
                  <Link to="/label">Label</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section-detail2"></div>
          </div>

          <div className="footer-section">
            <div className="footer-section-title">Address</div>
            <div className="footer-section-detail">
              <p>
                126 Boulevard Krim Belkacem - Telemly
                <br />
                Algiers
                <br />
                Algeria
              </p>
            </div>
            <div className="footer-section-detail2">ALGERIAN TECHNO MOVEMENT 2026</div>
          </div>

          <div className="footer-section">
            <div className="footer-section-title">Subscribe</div>
            <div className="footer-section-detail">
              <form className="footer-form" action="#" method="post">
                <label htmlFor="footer-email">
                  Subscribe to stay up to date with the latest news and articles
                </label>
                <div className="footer-form-row">
                  <input
                    type="email"
                    id="footer-email"
                    name="email"
                    placeholder="Email address"
                    required
                  />
                  <button className="footer-submit" type="submit">
                    &gt;
                  </button>
                </div>
              </form>
            </div>
            <div className="footer-section-detail2">
              Designed by <a href="#">AMMACHI Salah Eddine</a>
            </div>
          </div>
        </div>
      </footer>

      {!cookieChoice && (
        <div className="cookie-banner" role="dialog" aria-live="polite">
          <div className="cookie-text">
            We use essential cookies to run the site and optional cookies for analytics.
          </div>
          <div className="cookie-actions">
            <button className="btn ghost" type="button" onClick={() => setShowCookieModal(true)}>
              Preferences
            </button>
            <button className="btn ghost" type="button" onClick={() => setCookieChoice("rejected")}>
              Refuse
            </button>
            <button className="btn primary" type="button" onClick={() => setCookieChoice("accepted")}>
              Accept
            </button>
          </div>
        </div>
      )}

      {showCookieModal && (
        <div className="cookie-modal">
          <div className="cookie-modal-card">
            <h3>Cookie preferences</h3>
            <p>
              Essential cookies are always on. You can accept or refuse optional analytics
              cookies.
            </p>
            <div className="cookie-modal-actions">
              <button className="btn ghost" type="button" onClick={() => setCookieChoice("rejected")}>
                Refuse optional
              </button>
              <button className="btn primary" type="button" onClick={() => setCookieChoice("accepted")}>
                Accept optional
              </button>
            </div>
            <button className="cookie-close" type="button" onClick={() => setShowCookieModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
