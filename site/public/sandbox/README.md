# /sandbox — unlisted scratch space

Anything in this folder is copied verbatim into `dist/` by Astro and served at
`https://samiulmakes.com/sandbox/...`. Plain HTML/CSS/JS/images only — no Astro
syntax, no layout, no build step.

- `public/sandbox/index.html`      -> https://samiulmakes.com/sandbox/
- `public/sandbox/foo/index.html`  -> https://samiulmakes.com/sandbox/foo/
- `public/sandbox/test.html`       -> https://samiulmakes.com/sandbox/test.html

Unlisted, not private: no page links here and `robots.txt` disallows `/sandbox/`,
but the URL is publicly reachable by anyone who knows or guesses it. Don't put
anything sensitive here.

Add `<meta name="robots" content="noindex, nofollow">` to each page as a second
line of defence.

Deploy: commit and push to `master`; the Pages workflow fires on any `site/**`
change. Delete the folder when you're done testing.
