# ITZ FIZZ — Scroll-Driven Hero

A responsive scroll-driven hero animation built with React, Vite, Tailwind CSS, and GSAP ScrollTrigger.

## Features
- Full-screen hero with letter-spaced headline and four impact metrics
- Staggered headline and statistics intro animations
- Pinned scroll sequence with scroll-scrubbed car, trail, and headline color reveal
- Transform-based animation and responsive styling
- Custom inline SVG car illustration, so no extra image asset is required

## Run locally
1. Install Node.js (LTS).
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open the local URL printed in your terminal.

## Publish on GitHub Pages
1. Create a public GitHub repository named `scroll-driven-hero`.
2. Upload the project files to the repository root.
3. In repository **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)` only if deploying plain static files. For this Vite/React project, use the GitHub Actions workflow recommended for Vite, or deploy the built `dist` folder using `gh-pages`.
4. To use the included `gh-pages` script, update `vite.config.js` `base` to `'/YOUR-REPOSITORY-NAME/'` if needed, then run `npm install`, `npm run deploy`.
5. In **Settings → Pages**, choose the `gh-pages` branch if it is not automatically selected.
6. Wait for the build to finish, then copy the published URL from the Pages section.

## Submission
- Live webpage: add your published URL here.
- GitHub repository: add your repository URL here.

## Notes
The impact metrics are based on the supplied assignment reference and are included as visual demo content. Replace them if you have verified metrics from your own source.
