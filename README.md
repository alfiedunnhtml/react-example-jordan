# Jordan's Bakery 🍞

A simple, modern React website built for learning.

## Tech Stack
- **React**: For building the user interface.
- **Vite**: For fast development and building.
- **TypeScript**: For writing safer code with types.
- **Tailwind CSS**: For styling using utility classes.
- **React Router**: For navigating between pages.

## Simplified Project Structure
- `src/main.tsx`: The starting point of the application.
- `src/App.tsx`: Handles the "routing" (switching between pages).
- `src/components/`: Reusable UI pieces (Header, Footer, Layout).
- `src/pages/`: The two main views (Home, About).
- `src/index.css`: Where the Tailwind styles and custom fonts are defined.

## Getting Started
1. Install the tools: `npm install`
2. Run the site: `npm run dev`
3. View the site: Open the link shown in your terminal (usually `http://localhost:5173`).

## Why this is "Simple"
- **Single Config**: We merged the TypeScript configuration into one file (`tsconfig.json`).
- **No Junk**: Removed all default Vite boilerplate, unused CSS files, and unused images.
- **Logical Flow**: The `Layout` component wraps the pages so the Header and Footer stay put while the content changes.
