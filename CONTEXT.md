# Algerian Techno Movement - Project Memory

## Vision
Site web artistique et original pour le collectif de musique électronique algérien **Algerian Techno Movement**.  
Style visuel inspiré de **Teletech** (capsules, scanlines, typo techno, effets subtils).

## Stack
- Frontend: React + Vite
- Routing: React Router
- Animations: GSAP + ScrollTrigger
- Icons: Font Awesome (CDN)

## Structure (Pages)
- Home
- Media (ex-About)
- Artists (route `/members`)
- Podcasts
- Label
- Contact

## Design & UX clés
- Navbar capsule noire inspirée Teletech avec hover glitch.
- Curseur custom: petit rond noir, contour au hover (liens + contenants).  
  Devient blanc sur la navbar et le footer.
- Preloader: logo + barre minimaliste avec progression en 2 temps.
- Reveal GSAP: animations contrôlées via IntersectionObserver + séquence dédiée pour Home.
- Fond global: **couleur unie claire** (#f2f1ed), pas de dégradé visible.
- Cards: transparents avec bordures visibles, sans fond blanc.

## Home (spécifique)
- Header + Hero = 100% hauteur écran.
- Hero: contenu centré, texte agrandi, mot “Techno” avec glitch au hover.
- Vidéo de fond du hero présente dans le DOM mais **désactivée** via CSS (`display: none`).
- Intro GSAP Home (video -> navbar -> textes -> actions -> scroll), uniquement sur load/refresh de Home.
- Section “Meaning of our logo”: **scroll horizontal** (GSAP ScrollTrigger) avec panels:
  1. `a-atm.png`
  2. `t-atm.png`
  3. `m-atm.png`
  4. `logo4.png` (logo complet)
  Le scroll se termine quand le dernier logo est centré.
- Section **About** déplacée sous “Meaning of our logo”.
- Section **Events** ajoutée sous About.
- Carousel “Next Transmission / Residency / Label / Podcast” avec flèches `<` `>` et 3 cartes visibles.

## Media (ex-About)
- Page Media conserve le contenu de l’ancienne About.

## Artists (route `/members`)
- Volets empilés (accordion) avec bordure **bas uniquement**.
- Ouverture via clic sur `+` ou le bloc, fermeture via `+` (rotation).
- Hover sur volet fermé: image flottante (GSAP) sans ombre ni bord arrondi.
- Transition de page au clic d’un artiste: **inversion** des couleurs via `filter` sur `main`.  
  Footer **ne change jamais** de couleur.
- Photos:
  - `3abdelkader.png` pour A.K.M (réelle)
  - `darkmate.jpg` pour Darkmate aka Harr (réelle)
  - autres: placeholder

## Footer
- Fixé derrière le contenu (effet “révélé au scroll”).
- Animation d’apparition uniquement sur Home.
- Liens et sections alignés en grid (4 colonnes).

## Assets importants
- Logo navbar + preloader: `client/src/assets/logo4.png`
- Logos scroll Meaning: `client/src/assets/a-atm.png`, `t-atm.png`, `m-atm.png`, `logo4.png`
- Vidéo hero (désactivée): `client/src/assets/home-hero.mp4`
- Photos artistes: `client/src/assets/3abdelkader.png`, `client/src/assets/darkmate.jpg`

## Fichiers clés
- `client/src/components/Layout.jsx`  
  Navbar, preloader, curseur custom, reveals GSAP, footer animation, scroll to top.
- `client/src/pages/Home.jsx`  
  Hero, carousel, marquee, Meaning (scroll horizontal), About, Events.
- `client/src/pages/Media.jsx`  
  Contenu Media.
- `client/src/pages/Members.jsx`  
  Accordions + hover preview image.
- `client/src/styles.css`  
  Style global, navbar, hero, preloader, cursor, cards, footer, artists.

## Notes / TODO
- Ajouter photos + bios complètes pour les artistes 2-11.
- Remplacer les URLs `#` des réseaux des artistes.
