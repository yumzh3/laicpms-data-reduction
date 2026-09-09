# LA-ICP-MS Data Reduction

A responsive scientific-software case study presenting a cross-platform LA-ICP-MS data reduction application designed and developed by Mingzhen Yu.

## Project highlights

- Converts raw LA-ICP-MS count files into configurable, reviewable, and export-ready results.
- Reduces a workflow that previously required half a day to a full day to approximately 2–5 minutes.
- Has supported roughly 20,000 analyses and routine laboratory use since 2024.
- Includes guided configuration, visual quality control, reproducible output, and packaged macOS and Windows applications.

The application source code and laboratory data are private. This repository contains only the public portfolio website and approved presentation assets.

## Website files

- `index.html` — page content and structure
- `styles.css` — responsive visual design
- `script.js` — navigation, reveal behavior, and local-preview handling
- `assets/laicpms-data-flow-sketch-v3.png` — scientific workflow illustration
- `assets/favicon.svg` — browser icon

The narrated demonstration is streamed from YouTube on the published website. A large local MP4 is intentionally excluded from GitHub through `.gitignore`.

## Preview locally

Open `index.html` directly in a browser. On this computer, the page uses the local MP4 because YouTube embeds require an HTTP referrer. After publication over HTTPS, it automatically displays the YouTube player instead.

## Publish with GitHub Pages

1. Create a GitHub repository for this project.
2. Add the contents of this folder to the repository's `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then save.
6. Open the published URL and verify the video, links, and mobile layout.

Future updates to the `main` branch will trigger a new GitHub Pages deployment while preserving the same public URL.
