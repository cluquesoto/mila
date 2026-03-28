# Mila — Made in Latin America

## Project Overview
Mila is a cultural fashion platform and living archive of Latin American fashion. This is the static website built from the 2026 Brand Book by Proyecto Formato.

## Site Structure
- `index.html` — Homepage (hero, archivo grid, calendario, footer)
- `culture.html` — Culture & Contexto editorial content
- `fashion.html` — Fashion editorial, lookbooks, brand profiles
- `rsvp.html` — IRL events (pop-ups, conversatorios)
- `studio.html` — MILA-orchestrated brand collaborations
- `styles.css` — All shared styles with CSS custom properties

## Brand Colors (CSS Variables)
| Variable | Hex | Usage |
|----------|-----|-------|
| `--yellow` | #FFFEAC | Primary accent, calendario bg |
| `--pink` | #F48BB3 | Category labels, accents |
| `--cream` | #F1EDE4 | Light backgrounds |
| `--black` | #000000 | Text, footer bg |
| `--burgundy` | #4E1717 | Hero bg, dark accents |
| `--brown` | #593622 | Secondary dark |
| `--green` | #3A6A53 | Secondary accent |
| `--blue` | #638DB8 | Secondary accent |
| `--gray` | #605F5B | Body text secondary |
| `--lavender` | #9582B8 | Secondary accent |

## Typography
- **Sans-serif**: Inter (placeholder for Neue Haas Grotesk Display Pro)
- **Serif**: Playfair Display (placeholder for Freight DispComp Pro)
- **Logo**: BN Cyther Regular (not yet loaded — using Inter Black)
- Font files will be added later via `@font-face`

## Key Design Patterns
- "MADE IN LATIN AMERICA" tagline auto-scales to fill viewport width (JS in index.html)
- Section dividers: horizontal lines with centered title breaking through them
- Hero labels use italic serif (Playfair Display)
- Archive card categories are pink and centered
- Footer: black bar, CONTACTO + socials left, mila* logo + tagline right
- Clover icon (4 overlapping circles) is the brand symbol, always superscript to "mila"

## Deployment
- **Hosting**: Vercel (auto-deploys from GitHub on push to `main`)
- **Preview URL**: https://mila-xi-six.vercel.app/
- **Domain**: madeinlatinamerica.com (not yet connected — DNS pending)
- **Repo**: https://github.com/zalucinc/mila (primary for Vercel)
- **Mirror**: https://github.com/cluquesoto/mila

## Workflow
1. Edit files locally or via Claude Code
2. `git add` → `git commit` → `git push origin main`
3. Vercel auto-deploys within seconds
4. Preview at https://mila-xi-six.vercel.app/

## For New Contributors
1. Clone: `git clone https://github.com/zalucinc/mila.git`
2. Open in Claude Code: `cd mila && claude`
3. Make changes, commit, push — site auto-deploys
4. For local preview: `python3 -m http.server 3000 --directory .`
