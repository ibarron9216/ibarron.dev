# External Integrations

**Analysis Date:** 2026-05-13

## APIs & External Services

**Runtime APIs:**
- None. The site does not call external APIs from JavaScript.

**External Links:**
- `research.html` links to IEEE Xplore, IS&T library pages, NSF/Elsevier Pure, University of Rochester NewsCenter, YouTube, and podcast pages.
- `contact.html` links to the University of Rochester ECE department and LinkedIn.
- `students.html` and `contact.html` include `mailto:ibarron@ur.rochester.edu` email links.

## Data Storage

**Databases:**
- None.

**File Storage:**
- Static local files only:
  - `assets/cv.pdf`
  - `assets/fonts/inter-variable.woff2`

**Caching:**
- Browser and hosting-layer static asset caching only.
- No application cache, service worker, or CDN configuration in the repository.

## Authentication & Identity

**Auth Provider:**
- None.

**OAuth Integrations:**
- None.

## Monitoring & Observability

**Error Tracking:**
- None.

**Analytics:**
- None.

**Logs:**
- No app logs. Browser console is the only runtime troubleshooting surface.

## CI/CD & Deployment

**Hosting:**
- Not defined in the repository.
- The codebase is compatible with static hosting such as GitHub Pages, Netlify, Vercel static output, or a conventional web server.

**CI Pipeline:**
- No `.github/workflows/` directory or CI configuration is present.

## Environment Configuration

**Development:**
- No required environment variables.
- No secret files needed.

**Production:**
- Production behavior depends on the static host configuration.
- MIME types must support `.html`, `.css`, `.js`, `.woff2`, and `.pdf`.

## Webhooks & Callbacks

**Incoming:**
- None.

**Outgoing:**
- None.

## Security Notes

- External links opened with `target="_blank"` should consistently use `rel="noopener noreferrer"`. `research.html` does this, but `contact.html` currently does not.
- Placeholder PDF links in `research.html` use `href="#"`, so they are not real integrations yet.

---

*Integration analysis: 2026-05-13*
*Update when adding analytics, forms, APIs, deployment automation, or external scripts.*
