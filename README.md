# Tuhin Basu — Data Analytics Portfolio (Plain HTML/CSS/JS)

No framework, no build step. Just open `index.html` in a browser, or serve the
folder with any static server.

## Structure

```
.
├── index.html          # Home
├── projects.html        # Projects, with instant filtering
├── project.html          # Single dynamic project page — reads ?slug= from the URL
├── about.html
├── contact.html
├── css/
│   └── style.css        # All design tokens, layout, components
├── js/
│   ├── data.js           # Project content — edit this to add/change projects
│   ├── cards.js          # Renders a project card from a project object
│   └── main.js           # Mobile nav toggle + scroll-reveal
└── images/projects/       # Dashboard thumbnail SVGs (swap for real screenshots)
```

## Customize

- **Projects** — edit the `PROJECTS` array in `js/data.js`. Every project you add
  there automatically gets a card (on Home and Projects) and a detail page at
  `project.html?slug=<your-slug>` — no other file needs to change.
- **Images** — replace the SVGs in `images/projects/` with real dashboard
  screenshots (keep the same filenames, or update the `image` path in `data.js`).
- **Bio, experience, contact links** — edit `about.html` and `contact.html`
  directly; placeholders are marked in the text.
- **Resume** — drop a `resume.pdf` into this folder; the "Download Resume"
  links already point to it.
- **Contact form** — currently front-end only (shows a confirmation message on
  submit but doesn't send anywhere). Wire it to a service like Formspree or
  EmailJS, or your own backend, before going live.
- **Colors and fonts** — all defined as CSS variables at the top of
  `css/style.css`. Change once, applies everywhere.

## Deploy to GitHub Pages

1. Create a repo on GitHub (or use an existing one).
2. Add these files to the repo root:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source**, choose
   "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. Your site is live in a minute or two at:
   `https://<your-username>.github.io/<your-repo>/`

No build tooling, no GitHub Actions needed — these are plain static files.
