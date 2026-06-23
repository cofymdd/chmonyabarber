# CHMONYA BARBER

Webová prezentácia fiktívneho barbershopu CHMONYA BARBER v Košiciach.

## Technológie

- Astro
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Bun workspaces
- Turborepo

## Štruktúra

- `apps/web` - hlavná Astro aplikácia
- `packages/ui` - zdieľané UI komponenty
- `apps/web/public/chmonya-barber` - obrázky a verejné médiá značky
- `apps/web/src/lib/chmonya-content.ts` - textový obsah, služby a kontakty
- `apps/web/src/lib/chmonya-images.ts` - rozmery obrázkov

## Vývoj

```bash
bun install
bun run dev
```

Lokálna aplikácia je štandardne dostupná na `http://localhost:4321`.

## Kontrola projektu

```bash
bun run lint
bun run typecheck
bun run build
```

## UI komponenty

Komponenty shadcn/ui sa pridávajú z koreňa projektu:

```bash
bunx --bun shadcn@latest add button -c apps/web
```

Import zdieľaného komponentu:

```astro
---
import { Button } from "@chmonya-barber/ui/components/button"
---

<Button>Rezervovať</Button>
```
