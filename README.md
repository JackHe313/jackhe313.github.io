# Jack He — personal website

An Astro portfolio based on [Monograph](https://github.com/theserverlessdev/astro-monograph), customized for AI engineering and research. Published at https://jackhe313.github.io.

## Development

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
npm run build
npm run check:links
npm run preview
```

## Editing content

All current content lives in `src/data/*.yaml`:

- `site.yaml`: name, contact information, navigation, and metadata
- `hero.yaml` / `about.yaml`: introduction and highlights
- `experience.yaml`: industry and research experience
- `projects.yaml`: project cards and detail pages
- `publications.yaml`: papers, author lists, venue labels, and links
- `skills.yaml` / `education.yaml`: technical background
- `resume.yaml`: full online resume
- `contact.yaml`: contact section and footer

The downloadable resume is `public/assets/pdf/Jack_He_Resume.pdf`. Update the PDF and matching YAML together. Teaching, hobbies, and news are Markdown pages in `src/pages/`. The site keeps the existing `/cv/`, `/publications/`, `/projects/`, `/teaching/`, `/hobby/`, and `/news/` routes.

Components are in `src/components/`, shared layouts in `src/layouts/`, and Monograph's theme tokens in `src/styles/global.css`. Photos and videos are in `public/assets/`.

## Deployment

The `Deploy site` GitHub Actions workflow builds Astro, checks local links, and publishes `dist/` to the existing `gh-pages` branch on pushes to `main` or `master`. Pull requests build and validate without deploying. Existing GitHub Pages branch settings can remain unchanged.

## Migration notes

The original Jekyll source (`_pages`, `_data`, `_projects`, etc.) is retained as a reference and is no longer part of the production build. Its previous setup guide is in `README-JEKYLL.md`. New content changes should go into `src/` and `public/`.

Monograph's MIT license is retained in `LICENSE-MONOGRAPH`. The footer credits Monograph and Lordicon.
