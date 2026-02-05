# Algerian Techno Movement — Project Memory

## Vision
Site web artistique et original pour le collectif de musique électronique algérien **Algerian Techno Movement**.  
Style visuel inspiré de **Teletech** (capsules, scanlines, typo techno, effets subtils).

## Stack
- Frontend: React + Vite
- Routing: React Router
- Animations: GSAP
- Icons: Font Awesome (CDN)
- Backend: Express existe mais **non utilisé** actuellement

## Structure (Pages)
- Home
- About
- Members
- Podcasts
- Label
- Contact

## Design & UX clés
- Navbar capsule noire inspirée Teletech avec hover glitch.
- Curseur custom: petit rond noir, contour au hover (liens + contenants).  
  Devient blanc uniquement sur la navbar.
- Preloader: logo + barre minimaliste avec progression “réaliste en 2 temps”.
- Reveal GSAP: apparition des éléments quand ils entrent dans le viewport (IntersectionObserver).
- Fond global: **couleur unie claire** (#f2f1ed), pas de dégradé visible.
- Cards: transparents avec bordures visibles, sans fond blanc.

## Home (spécifique)
- Hero: 100% hauteur écran, contenu légèrement descendu (padding-top ~110px).
- Titre principal: police **Chakra Petch** (brutaliste moderne), taille réduite de 50%.
- Mot “Techno” a un léger glitch au hover.
- Social icons en noir, pas de background.
- Section “History of our logo” centrée avec logo noir + texte.

## Members (spécifique)
- Mise en page verticale pleine largeur (contenants empilés).
- Chaque membre a un bouton “+” à droite qui ouvre un panel en douceur (bio + photo).
- Photo: placeholder pour tous sauf le 1er membre (3abdelkader) qui a la vraie image.
- Bio taille réduite, police sobre (Space Grotesk).
- Liens réseaux (avec logo) sous la bio, cliquables (URLs placeholder `#`).

## Assets importants
- Logo navbar + preloader: `client/src/assets/logo4.png`
- Photo membre 1: `client/src/assets/3abdelkader.png`

## Fichiers clés
- `client/src/components/Layout.jsx`  
  Navbar, preloader, curseur custom, reveal GSAP.
- `client/src/pages/Home.jsx`  
  Hero, sections, glitch “Techno”.
- `client/src/pages/Members.jsx`  
  Accordions, bio, socials.
- `client/src/styles.css`  
  Style global, navbar, hero, preloader, cursor, cards, members.

## Notes / TODO
- Remplacer les placeholders photos des membres 2–6.
- Ajouter vraies URLs aux réseaux sociaux.
- Si besoin: brancher backend (formulaire contact / API).

