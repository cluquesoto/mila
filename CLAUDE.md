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
- **Hosting**: Vercel (auto-deploys from GitHub)
- **Production URL**: madeinlatinamerica.com (auto-deploys from `main` branch)
- **Staging URL**: Vercel generates a preview URL for the `staging` branch (check Vercel dashboard for the URL)
- **Fallback URL**: https://mila-xi-six.vercel.app/ (always shows production)
- **Domain**: madeinlatinamerica.com (DNS pending connection to Vercel)
- **Repo**: https://github.com/zalucinc/mila (primary for Vercel)
- **Mirror**: https://github.com/cluquesoto/mila

## Workflow (two-step: staging → production)

### Default: push to staging first
1. Edit files locally or via Claude Code
2. Push to the `staging` branch: `git push origin staging`
3. Vercel auto-generates a preview deployment for the staging branch
4. Review at the staging preview URL
5. When approved, merge staging into main: `git checkout main && git merge staging && git push origin main`
6. Production auto-deploys to madeinlatinamerica.com

### When the team says "sube los cambios a staging"
- Push to the `staging` branch, NOT `main`
- This lets them preview before going live

### When the team says "publica los cambios" or "sube a produccion"
- Merge `staging` into `main` and push `main`
- This makes changes live on madeinlatinamerica.com

### Quick fixes (skip staging)
- For urgent fixes, pushing directly to `main` is acceptable
- When the team says "sube los cambios al sitio" without mentioning staging, push to `staging` and let them know: "Los cambios estan en staging para que los revises. Cuando estes listo, decime 'publica a produccion'"

## For New Contributors
1. Clone: `git clone https://github.com/zalucinc/mila.git`
2. Open in Claude Code desktop app
3. Make changes, push to `staging` to preview, merge to `main` to publish
4. See GUIA-EQUIPO-MILA.md for the full Spanish guide
