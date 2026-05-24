# TODO

## Completed

### 1. GH Pages deploy script, removed unused JPEG, kept internal files tracked
- Created `scripts/deploy-gh-pages.sh` — builds clean gh-pages branch from main with only public files
- Deleted `assets/images/dr-irving-barron-profile.jpeg` — unused 1.1 MB original, replaced by .webp
- Reverted sanitization: internal files (CLAUDE.md, .planning/, .claude/, docs/) remain in git tracking for agent use across machines
- Updated `.gitignore` with JPEG pattern to prevent re-addition

### 2. Favicon update (I→IB), heading hierarchy fix, tab scroll reset
- Updated `assets/images/favicon.svg` from "I" to "IB" with navy/yellow colors
- Created `assets/images/favicon.png` (32x32 PNG, Georgia Bold) for Safari compatibility
- Added PNG favicon link before SVG link in all 5 pages
- Fixed heading hierarchy in `students.html`: 3 h3→h2 changes (Teaching Assistant Opportunities, Other Opportunities, Job Application References)
- Added scroll reset on tab switch in `js/main.js` — scrolls `.layout-1__wrapper` into view
- Added `scroll-margin-top` to `.layout-1__wrapper` in `css/style.css` for sticky header offset

### 3. Add favicon and Open Graph / Twitter Card meta tags
- Created `assets/images/favicon.svg` (navy "I" on yellow background)
- Added `<link rel="icon">` to all 5 pages
- Added 5 OG meta tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) to each page
- Added 4 Twitter Card meta tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) to each page
- Each page has unique `og:title`, `twitter:title`, and descriptions
- Social preview image points to profile photo WebP

### 4. Fix skip-link accessibility
- Added `tabindex="-1"` to `<main id="main-content">` on all 5 pages

### 5. Remove broken "Learn more →" links
- Removed 5 `<a href="#" class="course-media-card__cta">Learn more →</a>` elements from `teaching.html`
- Removed `.course-media-card__cta` and `.course-media-card__cta:hover` CSS rules from `style.css`

### 6. Delete dead CSS (~235 lines removed)
- Removed unused selectors: `card--clickable`, `card--highlighted`, `card-ur__icon`, `card--funded`, `profile-placeholder`, `tabs`, `tabs__list`, `tabs__tab`, `tabs__panel`, `page-header__grid`, `page-header__icon`, `page-header__image`, `course__header`, `course__title`, `course__description`, `research-interests__wrapper`, `research-interests__label`, `tag-pill--highlight`, `tag-pill--outline`, `tag-pill--primary`
- Removed `.course__header` reference from mobile media query
- Removed empty comment-only CSS reference block (`.btn, .card, .nav__link, .nav__brand, .tabs__tab`)
- Added missing `--color-light-gray: #F5F5F5` CSS variable to `:root`
- CSS file: 1987 → 1752 lines

### 7. Fix heading hierarchy
- **contact.html**: Changed `<h3>` to `<h2>` for "Get in Touch" and "Profiles & Links" card titles
- **students.html**: Changed first heading in each tab panel to `<h2>` (previously h1→h3 skip), added `<h2>Impact & Outcomes</h2>` to 4th panel

### 6. Remove empty `initSidebarNav` function
- Removed empty `initSidebarNav()` function definition from `js/main.js`
- Removed `initSidebarNav();` call from DOMContentLoaded handler
- JS file: 240 → 231 lines

### 7. Replace inline `style` attributes with CSS utility classes
- Added spacing utility classes: `.mt-sm`, `.mt-md`, `.mt-lg`, `.mt-xl`, `.mb-0`, `.mb-sm`, `.mb-md`, `.mb-lg`, `.mb-xl`
- Added `.text-block` class (max-width: 720px, margin-bottom)
- Added `.callout` class (blue banner for emphasized notes)
- Added `.hero--tall` class (min-height: 60vh)
- Added `margin-bottom: var(--spacing-sm)` to `.eyebrow` base style
- Changed `.course__badges` default from `justify-content: flex-end` → `flex-start`
- Replaced ~32 inline style attributes across all HTML files (only 1 remaining — font-weight/color on grant co-PI line, where spacing is extracted but font styling is one-off)

### 8. Add robots.txt, sitemap.xml, better meta descriptions, loading="lazy"
- Created `robots.txt` with sitemap reference
- Created `sitemap.xml` with all 5 pages and priorities
- Improved all 5 meta descriptions (more detailed, keyword-rich)
- Added `loading="lazy"` to 4 card thumbnails on `index.html`
