# Morning-After Munchies 🍳

AI-powered breakfast recommender that cures hangovers with cheeky suggestions.

- **Stack**: Vite + React + Tailwind CSS
- **Hashbrown-ready**: Component structure mirrors Hashbrown generative UI. Swap the mock for the real Hashbrown runtime when deploying.

## Quickstart

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Project Structure

```
morning-after-munchies/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── .env.example
└── src/
    ├── main.jsx
    ├── App.jsx
    └── hashbrown-integration.js
```

## Hashbrown Integration (Ready)

- `src/hashbrown-integration.js` contains a schema and a deterministic mock generator.
- In production, replace the mock with the real Hashbrown runtime and expose components.

Example replacement later:

```js
// import { exposeComponent } from '@hashbrownai/react';
// import { s } from '@hashbrownai/core';
// exposeComponent(BreakfastCard, { schema: BreakfastCardSchema, systemPrompt: BREAKFAST_SYSTEM_PROMPT });
```

## Environment

Copy the example file and set your API key when you wire in Hashbrown:

```bash
cp .env.example .env.local
```

Set `VITE_HASHBROWN_API_KEY` in `.env.local`.

## Deploy

- Vercel: `npx vercel --prod`
- Static hosting: serve `dist/` after `npm run build`

## Credits

- Icons by `lucide-react`
- Built for CodeTV Challenge
