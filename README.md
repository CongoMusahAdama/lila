# For Fadilah 💚

A small personal website: a question gate, a welcome message, a memories gallery,
an interactive wishlist, and a nasheed player. Built with React (loaded straight
from a CDN, no build step needed).

## How to open it

Double-click `index.html`, or right-click it and "Open with" your browser.
**This needs an internet connection** the first time it loads (React and the
fonts come from a CDN) — after that your photos/videos/audio are all local.
For the most reliable experience (especially so photos/audio always load),
open it through a local server rather than a plain double-click — in VS Code,
right-click `index.html` → "Open with Live Server".

## How to personalize it — everything is in `config.js`

1. **Your name / her name / her birthday** — top of `config.js`.
2. **The quiz** — edit the `quiz` array: each question has a list of acceptable
   answers (not case sensitive, small typos are forgiven).
3. **The welcome message** — edit `welcomeMessage`. It's written to be romantic
   *and* motivational — add the specific things she's working through or working
   towards so it reads like it was written for exactly her.
4. **Photos & videos** — copy image files into `images/` and video clips into
   `videos/`, then add one entry per file to the `photos` array in `config.js`
   (videos are detected automatically by extension and get a video player
   instead of a plain image).
5. **Nasheeds** — copy mp3 files into the `audio/` folder, then add one entry per
   song to the `nasheeds` array in `config.js`.
6. **Wishlist** — a few starter wishes are in `wishlistSeed`, but she can add,
   check off, and remove her own once the site is open (saved in her browser).
7. **Birthday banner** — `herBirthday` (as "MM-DD") makes a birthday banner
   appear automatically on the welcome screen and app header when she opens the
   site on that date. If it also happens to fall on a Friday, a "Jummah Mubarak"
   line is added too — this recurs every Friday regardless of the date.

Note: on purpose, this site never states how many years you've been together or
the exact day you met — the welcome message and banners stay year-free.

## About the videos

The 4 files that got saved as `.mhtml` in `images/` (`vidoe.mhtml`, `first.mhtml`,
`lovely scene.mhtml`, `(11) WhatsApp.mhtml`) are saved *web pages*, not video
files — that happens when a browser's "Save Page As" is used instead of the
video's own "Save/Download" button. They won't play as videos and aren't
referenced in `config.js`. To add a real video: open the chat/page with the
video, right-click directly on the video itself, choose "Save video as...",
and it should save as an actual `.mp4` — drop that into `videos/` and add it to
the `photos` array in `config.js` (see the example in there).

## Want it hosted online so she can open it from a link on her phone?

Just let me know and I can set up free hosting (e.g. GitHub Pages or Netlify).
