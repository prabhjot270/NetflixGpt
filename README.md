# Netflix Clone

A Netflix UI Clone built with Create React App, Tailwind CSS, Firebase authentication, Redux for user state, and movie data. This repo currently uses a local `movies.json` file for data (no external TMDB API keys required).

## Tech stack
- React (Create React App)
- Tailwind CSS (CDN)
- Firebase Auth (optional/used in code)
- Redux Toolkit (userSlice)
- Local data: movies.json (used instead of TMDB in development)

## Current data setup
- The app uses a local JSON file for movie data (e.g. `src/data/movies.json` or `public/movies.json`). If your file is in a different path update the data importer in the components that fetch movies.
- There is no `.env.local` in this repo right now. You do not need environment variables to run the app with the local `movies.json`.

## Features
- Sign up / Sign in flows (code present — Firebase project required to fully enable)
- Protected browse page (redirects to login if unauthenticated)
- Header with gradient background and navigation
- User profile icon and sign out
- Movie lists populated from local `movies.json`
- Unsubscribes from onAuthStateChanged on unmount
- Local images stored in `/public/images`

## Setup 
Prerequisites
- Node.js (>= 16) and npm

1. Clone repo
   ```
   git clone <repo-url>
   cd netflixgpt
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Tailwind (CDN)
This project uses the Tailwind CDN in `public/index.html`:
```html
<script src="https://cdn.tailwindcss.com"></script>
```
No additional Tailwind setup is needed to run locally. For production, consider installing Tailwind via npm and adding a `tailwind.config.js`.

4. Run (development)
```
npm start
```
Open http://localhost:3000



## Project structure (important files)
- src/components/Header.js — Header and gradient styles
- src/utils/firebase.js — Firebase initialization (requires config to be set if used)
- src/utils/userSlice.js — Redux user slice
- src/data or public/movies.json — local movie data (used by the app)
- public/index.html — contains Tailwind CDN script
- public/images — local images used by the app

## Debugging tips
- If Tailwind classes do not appear, confirm the CDN script is in `public/index.html`.
- Use browser DevTools to inspect classes and computed styles for `.bg-gradient-to-b`.
- Check Console for CSP or network errors when loading external scripts.

## Deploy
- Build and deploy `build/` to Netlify, Vercel, Firebase Hosting, etc.
- If using Firebase or TMDB in production, make sure to set environment variables in your host.

