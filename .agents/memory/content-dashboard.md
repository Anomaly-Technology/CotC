---
name: Content dashboard design
description: How client-editable text works on the charity wireframe site
---

The charity site's editable text uses a selector-based manifest, not templated keys.

**Rule:** `artifacts/charity-site/public/content-fields.js` maps each editable field (key, page, label, default) to CSS selectors in the rendered wireframe (`#screen-X section:nth-of-type(N) ...`). The site applies DB overrides via `textContent` after render; `admin.html` builds its form from the same manifest.

**Why:** avoids rewriting the wireframe's template literals; one file is the single source of truth for both site and dashboard. Overrides are stored in the `site_content` key/value table and served by `/api/content`.

**How to apply:** if the wireframe's section order or structure changes on any screen, the selectors in content-fields.js must be updated to match, or overrides will silently stop applying. New editable fields: add to the manifest only — no other wiring needed. Admin auth = ADMIN_PASSWORD secret + signed cookie (cookie-parser, SESSION_SECRET, fail-closed at startup). The canvas copy of the wireframe intentionally stays static (no content fetch).

Images use the same manifest (`kind:'img'` fields): the site sets `background-image` + `.has-photo` on placeholder divs, and only accepts values starting with `/api/storage/` (own uploaded objects). Uploads go through the object-storage presigned-URL flow, gated by the admin cookie, server-side restricted to image MIME types ≤10 MB; objects are served publicly (site imagery). "Remove image" saves an empty string, which falls back to the wireframe placeholder.
