# Portfolio

Jonathan (Jay) Albert's personal site. Next.js App Router, Tailwind, deployed on Vercel.

## Running it

```bash
npm install
npm run dev
```

## Where the content lives

There are no hand-written project pages. Everything is data:

| File | What it holds |
| --- | --- |
| `lib/content/entries.ts` | Every piece of work: title, summary, date, cover, facets, link |
| `lib/content/writeups.ts` | Long-form write-ups for entries that have one |
| `lib/content/taxonomy.ts` | The three filter vocabularies: form, practice, field |
| `lib/site.ts` | Bio, social links, speaking formats and topics, services, roles |

### Adding a piece of work

Add an object to `entries.ts`. The required fields are `slug`, `title`,
`summary`, `date` (ISO `yyyy-mm`), `medium`, `practices`, `domains`, and
`cover`. Add `href` for an outbound link. Set `featured: true` to put it on the
home page.

If it needs a write-up on this site rather than only an outbound link, set
`detail: '<slug>'` on the entry and add a matching record to `writeups.ts`. The
route, the metadata, and the related-work section are generated from that. An
entry can name a `detail` slug before its write-up exists; the card falls back
to the outbound link until the write-up lands.

### The three filters

`medium` (form), `practices`, and `domains` are the only filter axes, and they
come from fixed lists in `taxonomy.ts`. Specific technologies go in `tech`,
which is displayed and searched but never becomes a filter chip. V2 had 221
free-text skill tags across 37 projects, 130 of which appeared exactly once,
which is what this replaces. Resist adding a fourth axis.

Within an axis, selections are OR'd. Across axes they are AND'd. Filter state
lives in the URL, so any filtered view is a link you can send to someone:
`/work?form=talk&field=Gaming`.

## Link checking

The site links out to a lot of platforms that are not ours. `scripts/check-links.mjs`
walks every external URL, `public/` asset, and internal route referenced from
`app/`, `lib/`, and `components/`, and reports what is broken.

```bash
npm run check:links            # everything, printed to stdout
npm run check:links:report     # writes link-report.md and link-report.json
node scripts/check-links.mjs --offline        # assets and routes only, no network
node scripts/check-links.mjs --external-only  # only http(s) URLs
```

YouTube links are verified through the oEmbed endpoint rather than the watch
page, because a removed or private video still returns 200 with an error page.

Hosts that wall off bots (X, Instagram, LinkedIn, Medium, and friends) are
reported as "needs a human look" rather than broken, because the checker cannot
tell a bot wall apart from a dead page.

`.github/workflows/link-check.yml` runs the same script every Monday and keeps
one rolling issue up to date, closing it when everything resolves again.
Scheduled workflows only run from the default branch, so this starts firing
once it is merged to `main`.

## Theme

Dark and light, driven by CSS custom properties in `app/globals.css`. The
visitor's system preference wins unless they use the toggle, which stores a
choice in `localStorage`. A small inline script in `app/layout.tsx` applies the
stored choice before first paint so the page does not flash the wrong theme.

## Fonts

Self-hosted from `@fontsource` packages via `next/font/local` (see `lib/fonts.ts`)
rather than fetched from Google. The build does not depend on reaching
fonts.googleapis.com, and no visitor's browser makes a request to Google.
