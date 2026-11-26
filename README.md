# Events With Mo: Website

A responsive single-page website for Events With Mo, a London-based event planning, styling and coordination company. Plain HTML, CSS and JavaScript with no build step. All copy and prices come from the Events With Mo brochure.

## Preview locally

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File | What it holds |
|---|---|
| `index.html` | All page content: about, services, process, packages, contact |
| `styles.css` | Design; brand colours are the `:root` tokens at the top |
| `script.js` | Mobile menu, scroll effects, contact form (`CONTACT_EMAIL`, `FORM_ENDPOINT`) |
| `images/` | Logo (`logo.png`, `logo-light.png` for dark backgrounds) and Mo's photo |

## Contact form

By default, the form opens the visitor's email app with their answers pre-filled, addressed to `CONTACT_EMAIL`. To receive enquiries directly instead, create a free form endpoint (for example, [Formspree](https://formspree.io)) and paste its URL into `FORM_ENDPOINT` in `script.js`.

## Deploy

It's a static site, so it can be hosted free on GitHub Pages (Settings → Pages → deploy from a branch), Netlify or Vercel.
