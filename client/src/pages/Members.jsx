import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MEMBERS = [
  {
    tag: "DJ-Producer-Live Performer",
    name: "A.K.M aka 3abdelkader",
    short: "DJ-Producer-Live Performer.",
    long:
      "A.K.M (Abdelkader MOUSSOUS) is a talented Algerian DJ, producer, and performer. Drawing inspiration from artists like Klaus Schulz, Aphex Twin, and Jeff Mills, he creates unique underground electronic music. At just nine years old, he discovered his first music production software. At sixteen, he met and learned from Dj Bokko, known as the pioneer of electronic music in Algeria. A.K.M then dedicated himself to production, developing a tribal and Mediterranean techno style under the name AKM, and a more industrial techno under the name 3abdelkader. Inspired by his architectural, social, and historical surroundings, A.K.M is known for remixing Algerian song classics and incorporating traditional instruments into his productions. Alongside other Algerian artists, he aims to showcase the richness of the national folk repertoire and develop a style unique to his region. A.K.M has also contributed to the Algerian music scene by providing opportunities for young local artists to share their artistic content. In 2015, he launched the \"Algerian Techno Movement\" project, continuing the \"Underground Artist Movement\" initiated by Dj Bokko. This project aims to invigorate the Algerian underground music scene by promoting and defending local artists.",
    image: "/src/assets/3abdelkader.png",
    meta: {
      artist: "A.K.M / 3abdelkader",
      profession: "DJ/Producer/Live Performer",
      region: "Algiers, Algeria",
    },
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
    ],
  },
  {
    tag: "DJ-Producer",
    name: "14 37",
    short: "DJ-Producer.",
    long: "Artist profile coming soon.",
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
    ],
  },
  {
    tag: "Producer",
    name: "BX1",
    short: "Producer.",
    long: "Artist profile coming soon.",
    socials: [
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
      { label: "Bandcamp", icon: "bandcamp", url: "#" },
    ],
  },
  {
    tag: "DJ-Producer",
    name: "Chouki S",
    short: "DJ-Producer.",
    long: "Artist profile coming soon.",
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
    ],
  },
  {
    tag: "DJ-Producer",
    name: "Darkmate aka Harr",
    short: "DJ-Producer.",
    long: "Artist profile coming soon.",
    image: "/src/assets/darkmate.jpg",
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
    ],
  },
  {
    tag: "DJ-Producer",
    name: "Faël",
    short: "DJ-Producer.",
    long: "Artist profile coming soon.",
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
    ],
  },
  {
    tag: "DJ-Producer",
    name: "Kimahak aka INJECT31",
    short: "DJ-Producer.",
    long: "Artist profile coming soon.",
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
    ],
  },
  {
    tag: "Producer",
    name: "M.A.A.P",
    short: "Producer.",
    long: "Artist profile coming soon.",
    socials: [
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
      { label: "Bandcamp", icon: "bandcamp", url: "#" },
    ],
  },
  {
    tag: "Producer-Live Performer",
    name: "Nørdækt",
    short: "Producer-Live Performer.",
    long: "Artist profile coming soon.",
    socials: [
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
      { label: "Instagram", icon: "instagram", url: "#" },
    ],
  },
  {
    tag: "DJ-Producer",
    name: "Toxics",
    short: "DJ-Producer.",
    long: "Artist profile coming soon.",
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
    ],
  },
  {
    tag: "DJ-Producer",
    name: "Xavo",
    short: "DJ-Producer.",
    long: "Artist profile coming soon.",
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
    ],
  },
];

export default function Members() {
  const [openIndex, setOpenIndex] = useState(null);
  const previewRef = useRef(null);
  const previewX = useRef(null);
  const previewY = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("members-invert", openIndex !== null);
    return () => {
      document.body.classList.remove("members-invert");
    };
  }, [openIndex]);

  useEffect(() => {
    if (!previewRef.current) return;
    previewX.current = gsap.quickTo(previewRef.current, "left", {
      duration: 0.3,
      ease: "power2.out",
    });
    previewY.current = gsap.quickTo(previewRef.current, "top", {
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleEnter = (event, index) => {
    if (openIndex !== null || openIndex === index || !previewRef.current) return;
    const img = previewRef.current.querySelector("img");
    if (img) {
      img.src = MEMBERS[index].image || "/src/assets/3abdelkader.png";
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.right + 24;
    const y = rect.top + rect.height / 2;
    previewRef.current.classList.add("is-visible");
    gsap.set(previewRef.current, { opacity: 0, scale: 0.96, left: x, top: y, filter: "blur(18px)" });
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.45,
      ease: "power2.out",
    });
  };

  const handleMove = (event, index) => {
    if (openIndex !== null || openIndex === index || !previewRef.current) return;
    const x = event.clientX + 24;
    const y = event.clientY - 20;
    if (previewX.current) previewX.current(x);
    if (previewY.current) previewY.current(y);
  };

  const handleLeave = (index) => {
    if (openIndex !== null || openIndex === index || !previewRef.current) return;
    previewRef.current.classList.remove("is-visible");
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.92,
      filter: "blur(18px)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <>
      <section className="page-hero">
        <div className="hero-eyebrow reveal">Artists</div>
        <h1 className="hero-title reveal">Les architectes du son</h1>
        <p className="hero-subtitle reveal">
          DJ, producteurs, VJ, sound designers. Une famille mouvante qui compose le
          paysage électronique algérien.
        </p>
        <div className="hero-scroll">
          <span className="hero-scroll-arrow">v</span>
          <span>Scroll</span>
        </div>
      </section>

      <section className="members-stack">
        <div className="member-hover-preview" ref={previewRef} aria-hidden="true">
          <img src="/src/assets/3abdelkader.png" alt="" />
        </div>
        {MEMBERS.map((member, index) => (
          <article
            key={member.name}
            className={`member-card reveal ${openIndex === index ? "member-card-open" : ""}`}
            onClick={() => {
              if (openIndex !== index) toggle(index);
            }}
            onMouseEnter={(event) => handleEnter(event, index)}
            onMouseMove={(event) => handleMove(event, index)}
            onMouseLeave={() => handleLeave(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if ((event.key === "Enter" || event.key === " ") && openIndex !== index) {
                event.preventDefault();
                toggle(index);
              }
            }}
          >
            <div className="member-header">
              <div>
                <div className="member-tag">{member.tag}</div>
                <h3>{member.name}</h3>
                <p>{member.short}</p>
              </div>
              <button
                className={`member-toggle ${openIndex === index ? "is-open" : ""}`}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  toggle(index);
                }}
                aria-expanded={openIndex === index}
                aria-label={`Toggle ${member.name}`}
              >
                <span>+</span>
              </button>
            </div>
            <div className={`member-extra ${openIndex === index ? "is-open" : ""}`}>
              <div className="member-extra-grid">
                <div className="member-photo">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <div className="member-photo-placeholder">Photo</div>
                  )}
                </div>
                <div className="member-bio">
                  {member.meta && (
                    <div className="member-meta">
                      <div>
                        Artist Name: <strong>{member.meta.artist}</strong>
                      </div>
                      <div>
                        Profession: <strong>{member.meta.profession}</strong>
                      </div>
                      <div>
                        Region: <strong>{member.meta.region}</strong>
                      </div>
                    </div>
                  )}
                  <p>{member.long}</p>
                  <div className="member-socials">
                    {member.socials?.map((social) => (
                      <a
                        key={social.label}
                        className="member-social"
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className={`fa-brands fa-${social.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
