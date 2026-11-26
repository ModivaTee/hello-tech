# Evermore Events: Website

A fast, responsive, single-page website for an event planning company. Plain HTML, CSS, and JavaScript with no build step.

## Preview locally

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Make it yours

| What | Where |
|---|---|
| Company name, copy, services, prices | `index.html` |
| Brand colors and fonts | the `:root` tokens at the top of `styles.css` |
| Portfolio photos | put images in an `images/` folder and replace the `.tile-1` … `.tile-6` backgrounds in `styles.css` |
| Contact email and form handling | `CONTACT_EMAIL` and `FORM_ENDPOINT` in `script.js` |
| Testimonials | replace the placeholder reviews in `index.html` with real ones |

The contact form opens the visitor's email app by default. To receive submissions directly, create a free form endpoint (for example, [Formspree](https://formspree.io)) and paste its URL into `FORM_ENDPOINT`.

## Deploy

Because it's a static site, you can host it free on GitHub Pages (Settings → Pages → deploy from this branch), Netlify, or Vercel.
