# CLAUDE.md — Project Guidelines for ibarron.dev

## Project Overview

Personal faculty website for Dr. Irving Barron, University of Rochester ECE.
Single-file CSS design system, no frameworks, no build step.

## Communication Style

- All content must be written in **first person** (e.g., "I welcome inquiries", "My research focuses on...")
- Avoid passive or third-person phrasing in page copy

## Writing and Punctuation Rules

- **No em-dashes**: Do not use em-dashes (`—`, `&mdash;`, `--`, `---`, or `–`) anywhere in page content or copy.
  Use commas, periods, or rephrased sentences instead.
- **No italics for notes**: Notes and disclaimers should not use `<em>` or `<i>` tags. Write them as plain text.

## Color Conventions

- Navy (`#001E5F`, `--color-navy`): primary text and headings
- Yellow (`#FFD82B`, `--color-yellow`): accent borders
- Meliora Blue (`#0045A0`, `--color-meliora-blue`): hover states on links
- Dark Gray (`#707070`, `--color-dark-gray`): reserved for secondary UI elements (labels, tags) — do not use for body copy or detail text in cards
- White (`#FFFFFF`): backgrounds in hero/navy sections
- Butter (`#FFFBF0`): warm background tint where needed

## CSS Architecture

- All styles live in `css/style.css` — single file, no preprocessors
- Use CSS custom properties (`var(--token-name)`) for all colors and spacing
- Card titles (`h2` inside `.card`) should be `text-align: center` on contact and similar info pages
- Spacing tokens: `--spacing-xs` (4px) through `--spacing-3xl` (64px)

## HTML Conventions

- Use `aria-current="page"` on the active nav link in each page
- Decorative SVGs use `aria-hidden="true" focusable="false"`
- Include a `.skip-link` for accessibility on every page
- Section comments use all-caps labels (e.g., `<!-- CONTACT DETAILS SECTION -->`)

## Content Pages

- Pages should start directly with content cards where possible (no mandatory navy header bar)
- Card h2 titles should be centered on detail/info pages (contact, students, etc.)
- Note text (disclaimers, caveats) should use `.contact-note` or equivalent class, plain text, navy color
