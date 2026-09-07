# Apex Prototypes

A lightweight gallery for browsing and rendering JSX prototype files, organized by client. Drop a file in, it shows up. No config per file — the folder structure IS the config.

## Folder convention

```
src/clients/
  ├── ean/                          # Client slug (used in URLs)
  │   ├── _meta.json                # Required: { "name": "EAN Aviation", "color": "#641224" }
  │   ├── dashboard-concept.jsx     # A prototype (default export = React component)
  │   ├── invoice-redesign.jsx      # Another prototype
  │   └── _shared-utils.jsx         # Ignored (underscore prefix)
  └── acme/
      ├── _meta.json
      └── landing-page.jsx
```

## Add a client

1. Create a folder: `src/clients/your-client-slug/`
2. Add `_meta.json`:
   ```json
   { "name": "Your Client Name", "color": "#3B82F6" }
   ```
3. Done. The client card appears on the home page.

## Add a prototype

1. Drop a `.jsx` file into a client folder
2. The file must have a `default export` that is a React component
3. The filename becomes the URL slug and display name (`invoice-redesign.jsx` → "Invoice Redesign")
4. Files prefixed with `_` are ignored (use them for shared utilities)

## Available libraries

Prototypes can import these out of the box:

- `react` (18)
- `recharts` — charts and data visualization
- `lucide-react` — icon library

## Running

```bash
pnpm install
pnpm run dev
```

## Navigation

- `/` — All clients
- `/:client` — All prototypes for a client
- `/:client/:prototype` — Render one prototype in a browser-chrome frame

The viewer has a fullscreen toggle (or press Esc to exit).
