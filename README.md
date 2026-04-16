# Cardboard Portfolio

A minimal, highly customizable portfolio template designed for security researchers and software developers. Built with React, TypeScript, and Vite.

## Overview

This template focuses on simplicity and ease of use. It is designed to be fully configurable without needing to drill into the component code. It features a crafted "cardboard" aesthetic with seamless light and dark mode support, smooth scroll animations, and a responsive layout.

## Setup

```bash
git clone https://github.com/Jvr2022/portfolio.git
cd portfolio
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

## Customization

The entire portfolio is configured via `/src/config/site.ts`.

Edit this file to update:
- Identity Information (Name, current title, avatar)
- About text
- Social media and contact links
- Technical skills and tools
- Hall of Fame
- SEO Metadata

### Managing Vulnerabilities

Vulnerabilities are deliberately kept separate from the main configuration. You can add new advisories by inserting them into the dataset at `/src/data/cves.ts`. The UI is pre-configured to automatically parse CVSS scoring, map appropriate severity indicators, and handle sorting queries.

### Theming Configuration

If you're looking to adjust the aesthetics, edit the color values inside `/src/styles/theme.css`. The CSS represents the core tokens for spacing and colors to ensure both `light` and `dark` modes run optimally.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- React Helmet Async

## License

This project is open-sourced under the [MIT License](LICENSE).
