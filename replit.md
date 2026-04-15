# Figma Mobile App Prototype

## Project Overview

A mobile app UI prototype built from a Figma design, featuring interactive frames with smooth animations.

## Tech Stack

- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 6.x
- **Styling:** Tailwind CSS 4.0 + Radix UI + Shadcn UI components
- **Animation:** Framer Motion (`motion/react`)
- **Routing:** React Router v7
- **Icons:** Lucide React + MUI Icons
- **Package Manager:** pnpm

## Project Structure

- `src/` — Main source directory
  - `main.tsx` — Entry point
  - `app/App.tsx` — Root component with frame navigation
  - `app/components/` — Screen components (MainFrame, PhotoFrame, QRFrame, TimeFrame, PassActivationFrame)
  - `app/components/ui/` — Shared Shadcn/Radix UI components
  - `imports/` — Figma-exported asset components
  - `styles/` — CSS files (tailwind.css, theme.css, fonts.css)
  - `assets/` — Static assets

## Key Features

- Mobile UI prototype (402x874px container)
- Animated transitions between screens using Framer Motion
- Custom `figma:asset/` URI scheme resolved by Vite plugin

## Running the App

```bash
pnpm dev
```

Runs on port 5000 at `http://localhost:5000`

## Deployment

Configured as a static site deployment:
- Build: `pnpm run build`
- Public directory: `dist`
