# niladridutt.com

Personal academic website — a single static page, no build step, no framework.
Dark-first, elegant, and fast. Just HTML + CSS + a tiny bit of JS.

## Structure

```
index.html            → the whole site (hero + bio + contact, news, publications)
css/style.css         → design system (all colors/spacing live in :root)
js/main.js            → sticky nav, depth parallax + reveals, external-link hardening, email, year
js/analytics.js       → Google Analytics queue setup (measurement ID is public, not a secret)
.github/workflows/    → automatic GitHub Pages deployment on pushes to main/master
favicon.jpg (source) → favicon.ico / -*.png / apple-touch-icon.png  (regenerate with the PIL snippet below)
site.webmanifest      → PWA icons/colors
CNAME                 → niladridutt.com (custom domain)
robots.txt / sitemap.xml / .nojekyll
404.html              → styled not-found page
assets/img/           → prof_pic.jpg + pub/ (publication thumbnails)
paper-template/       → copy this to add a project page at niladridutt.com/<slug>
```

## Deploy (GitHub Pages)

This is your personal site, so the repo must be named **`niladridutt.github.io`**.

```bash
# from inside this folder, into your existing repo:
cp -R . /path/to/niladridutt.github.io/
cd /path/to/niladridutt.github.io
git add -A && git commit -m "Revamp site" && git push
```

In the repo Settings → Pages, set **Source** to **GitHub Actions**. Every push to
`main` or `master` then publishes the site automatically; you can also run the
workflow by hand from the Actions tab.
The `CNAME` file keeps `niladridutt.com` pointed here. `.nojekyll` tells GitHub
Pages to serve the files as-is (no Jekyll processing).

Google Analytics is configured in `js/analytics.js` with measurement ID
`G-6TQFX46TH0`. The external Google loader is explicitly allowed by the page's
Content Security Policy in `index.html`.

## Add a publication

Open `index.html`, find the `<!-- Paper template -->` comment inside
`<ol class="pub-list">`, copy one `<li class="pub">…</li>` block, and edit the
thumbnail, venue, title, authors, and links. Drop the thumbnail into
`assets/img/pub/`. Your own name is wrapped in `<b>…</b>`; equal first-author
`*` uses `<span class="asterisk">*</span>`.

Thumbnails keep their **natural aspect ratio** (wide images render wide, square
images render square — no cropping). If your thumbnail is a PNG with a
transparent background, flatten it onto white first so it looks right on the
dark theme:

```bash
python3 - <<'PY'
from PIL import Image
f="assets/img/pub/yourfile.png"
im=Image.open(f).convert("RGBA")
bg=Image.new("RGBA", im.size, (255,255,255,255))
Image.alpha_composite(bg, im).convert("RGB").save(f)
PY
```

The contact email in the hero is assembled by `js/main.js` at runtime (from
`data-user` / `data-domain` on the `.email-obf` link) so it stays out of the raw
HTML and away from scrapers, while still being clickable.

## Add a news item

In `index.html`, add a `<li>` at the top of `<ol class="news-list">`. The list
is a fixed-height scroll area, so it never grows unbounded.

## Add a project / paper page at niladridutt.com/<slug>

```bash
cp -R paper-template myproject      # → niladridutt.com/myproject/
```

Edit `myproject/index.html` (title, authors, links, abstract, BibTeX) and drop
a `teaser.jpg` next to it. It reuses `/css/style.css` and `/js/main.js`
automatically, so every project page matches the main site. No config needed —
GitHub Pages serves any folder with an `index.html`.

## Theming

The site is dark-only. Every color is a CSS variable in `css/style.css` under
`:root`. Change the accent in one place:

```css
--accent:   #7adfc8;   /* teal */
--accent-2: #5eb8ff;   /* blue */
```

## Favicon

The icon is generated from `favicon.jpg`. To change it, drop in a new square
`favicon.jpg` and regenerate the sizes:

```bash
python3 - <<'PY'
from PIL import Image
im = Image.open("favicon.jpg").convert("RGB")
for s in [16,32,180,192,512]:
    im.resize((s,s), Image.LANCZOS).save(f"favicon-{s}.png")
im.resize((180,180), Image.LANCZOS).save("apple-touch-icon.png")
im.resize((64,64), Image.LANCZOS).save("favicon.ico", sizes=[(16,16),(32,32),(48,48)])
PY
```

Bump the `?v=` on the favicon `<link>`s in `index.html` so browsers refetch.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
