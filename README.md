# SalmanApps

Personal website for Salman Ahmad's iOS applications. Includes app listings, privacy policies, terms of service, and support information.

## Pages

- **Home** (`index.html`) — Landing page with app showcase
- **Support** (`support.html`) — FAQ and contact information
- **Privacy** (`privacy.html`) — Per-app privacy policies with app selector
- **Terms** (`terms.html`) — Terms of service

## Structure

```
├── index.html          # Home page
├── support.html        # Support / FAQ
├── privacy.html        # Privacy policies (per-app selector)
├── terms.html          # Terms of service
├── styles.css          # Global styles (dark/light theme)
├── theme.js            # Theme toggle and mobile nav
└── apps/
    └── fox-reader/     # Fox Reader app assets
        └── icon.png    # App icon
```

## Features

- Dark/light theme with OS preference detection and localStorage persistence
- Responsive design with mobile hamburger nav
- Per-app privacy policy selector on the privacy page

## Development

Static site — no build step. Open `index.html` in a browser or serve with any static file server.
