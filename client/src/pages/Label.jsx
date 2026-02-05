export default function Label() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-eyebrow reveal">Label</div>
        <h1 className="hero-title reveal">Releases ATM</h1>
        <p className="hero-subtitle reveal">
          Un label DIY pour documenter le futur sonore algérien. Vinyle, digital,
          éditions limitées.
        </p>
        <div className="hero-scroll">
          <span className="hero-scroll-arrow">v</span>
          <span>Scroll</span>
        </div>
      </section>

      <section className="label-grid">
        <article className="label-card reveal">
          <div className="label-meta">ATM 004 • 2026</div>
          <h3>Desert Frequencies</h3>
          <p>Compilation de lives, drones sahariens, textures industrielles.</p>
          <button className="btn ghost">Pré-écoute</button>
        </article>
        <article className="label-card reveal">
          <div className="label-meta">ATM 003 • 2025</div>
          <h3>Casbah Machines</h3>
          <p>EP collectif, percussions traitées, séquences hypnotiques.</p>
          <button className="btn ghost">Bandcamp</button>
        </article>
        <article className="label-card reveal">
          <div className="label-meta">ATM 002 • 2025</div>
          <h3>Atlas Echo</h3>
          <p>Field recordings, ambient techno, voix fragmentées.</p>
          <button className="btn ghost">Bandcamp</button>
        </article>
      </section>
    </>
  );
}
