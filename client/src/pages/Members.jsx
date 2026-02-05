import { useState } from "react";

const MEMBERS = [
  {
    tag: "Live Modular",
    name: "3abdelkader",
    short: "Textures désertiques, synthèse analogique, spoken word.",
    long:
      "A.K.M (Abdelkader MOUSSOUS) is a talented Algerian DJ, producer, and performer. Drawing inspiration from artists like Klaus Schulz, Aphex Twin, and Jeff Mills, he creates unique underground electronic music. At just nine years old, he discovered his first music production software. At sixteen, he met and learned from Dj Bokko, known as the pioneer of electronic music in Algeria. A.K.M then dedicated himself to production, developing a tribal and Mediterranean techno style under the name AKM, and a more industrial techno under the name 3abdelkader. Inspired by his architectural, social, and historical surroundings, A.K.M is known for remixing Algerian song classics and incorporating traditional instruments into his productions. Alongside other Algerian artists, he aims to showcase the richness of the national folk repertoire and develop a style unique to his region. A.K.M has also contributed to the Algerian music scene by providing opportunities for young local artists to share their artistic content. In 2015, he launched the \"Algerian Techno Movement\" project, continuing the \"Underground Artist Movement\" initiated by Dj Bokko. This project aims to invigorate the Algerian underground music scene by promoting and defending local artists.",
    image: "/src/assets/3abdelkader.png",
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
    ],
  },
  {
    tag: "DJ / Curator",
    name: "Casbah Pulse",
    short: "Sets hypnotiques, digger de percussions maghrébines.",
    long:
      "Résidente des nuits alternatives d’Alger, elle tisse des grooves percussifs et des archives maghrébines.",
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "Bandcamp", icon: "bandcamp", url: "#" },
    ],
  },
  {
    tag: "Visual Artist",
    name: "Oran Flux",
    short: "Visuels génératifs, lasers sculptés, mapping urbain.",
    long:
      "Direction artistique visuelle, installations interactives, typographies animées et scénographies lumineuses.",
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "Behance", icon: "behance", url: "#" },
    ],
  },
  {
    tag: "Producer",
    name: "Horizon 19",
    short: "Techno profonde, drones industriels, voix traitées.",
    long:
      "Producteur studio, textures industrielles et basses massives, influencé par l’ambient nord‑africaine.",
    socials: [
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
      { label: "Bandcamp", icon: "bandcamp", url: "#" },
    ],
  },
  {
    tag: "Percussion",
    name: "Raqs Engine",
    short: "Rythmes live, darbukas samplées, improvisation.",
    long:
      "Percussionniste live et sound designer, fusionne instruments traditionnels et process audio modernes.",
    socials: [
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "YouTube", icon: "youtube", url: "#" },
    ],
  },
  {
    tag: "Field Recordist",
    name: "Atlas Echo",
    short: "Paysages sonores, textures de marchés, archives sonores.",
    long:
      "Collecte de sons urbains et ruraux, création de banques sonores pour les productions ATM.",
    socials: [
      { label: "SoundCloud", icon: "soundcloud", url: "#" },
      { label: "Instagram", icon: "instagram", url: "#" },
    ],
  },
];

export default function Members() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      <section className="page-hero">
        <div className="hero-eyebrow reveal">Members</div>
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
        {MEMBERS.map((member, index) => (
          <article
            key={member.name}
            className="member-card reveal"
            onClick={() => {
              if (openIndex !== index) toggle(index);
            }}
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
                  <div className="member-meta">
                    <div>
                      Artist Name: <strong>A.K.M / 3abdelkader</strong>
                    </div>
                    <div>
                      Profession: <strong>DJ/Producer/Live Performer</strong>
                    </div>
                    <div>
                      Region: <strong>Algiers, Algeria</strong>
                    </div>
                  </div>
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
