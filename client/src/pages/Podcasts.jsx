export default function Podcasts() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-eyebrow reveal">Podcasts</div>
        <h1 className="hero-title reveal">Transmissions sonores</h1>
        <p className="hero-subtitle reveal">
          Des mixes narratifs, interviews et live sets enregistrés dans les villes
          algériennes.
        </p>
        <div className="hero-scroll">
          <span className="hero-scroll-arrow">v</span>
          <span>Scroll</span>
        </div>
      </section>

      <section className="podcast-list">
        <article className="podcast-item reveal">
          <div className="podcast-meta">ATM Podcast 013 • 58 min</div>
          <h3>Night Highway — Yasmina Riff</h3>
          <p>Techno dub, samples de la Casbah, field recordings nocturnes.</p>
          <button className="btn ghost">Écouter</button>
        </article>
        <article className="podcast-item reveal">
          <div className="podcast-meta">ATM Podcast 012 • 64 min</div>
          <h3>Atlas Frequency — Casbah Pulse</h3>
          <p>Grooves percussifs, rythmes châabi déstructurés.</p>
          <button className="btn ghost">Écouter</button>
        </article>
        <article className="podcast-item reveal">
          <div className="podcast-meta">ATM Podcast 011 • 70 min</div>
          <h3>Desert Machines — Horizon 19</h3>
          <p>Live hardware, textures minérales, lignes acides.</p>
          <button className="btn ghost">Écouter</button>
        </article>
      </section>
    </>
  );
}
