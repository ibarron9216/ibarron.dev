# TODO

## Completed

- ✅ Wire CV and publication PDF links to real files
- ✅ Add `rel="noopener noreferrer"` to `target="_blank"` links on Contact page
- ✅ Optimize images — profile photo (1.1MB → 19KB WebP) and course PNGs (→ lossless WebP, ~40% savings)
- ✅ Render hero images on research/teaching/students at 85% scale
- ✅ Update ECE Department + LinkedIn URLs on Contact page

## Planned (from site audit)

1. **Add favicon and Open Graph / Twitter Card meta tags** to all 5 pages for social sharing previews
2. **Fix skip-link accessibility**: add `tabindex="-1"` to `<main>` on all pages
3. **Remove broken "Learn more →" links** on Teaching page (all `href="#"`, `display: none` in CSS)
4. **Delete ~20% dead CSS** — ~350 lines of unused selectors (legacy tab classes, unused card variants, placeholder components)
5. **Fix heading hierarchy** — Contact page skips from `h1` → `h3` with no `h2`
6. **Remove empty `initSidebarNav` function** and empty CSS rule block
7. **Replace inline `style` attributes** with CSS utility classes or component variants
8. **Add `robots.txt`, `sitemap.xml`, better meta descriptions, and `loading="lazy"`** to card thumbnails on index.html
