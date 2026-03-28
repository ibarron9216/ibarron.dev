# Phase 6: Content Polish - Context

**Gathered:** 2026-03-27
**Status:** Ready for planning

<domain>
## Phase Boundary

Replace placeholder content with real information and add images/visual assets across all five pages. Bio, research descriptions, teaching philosophy, student resources, and contact information are complete and polished. Site moves from structural/technical baseline to content-complete faculty presence.

**Execution Strategy:** Phase 6 is broken into five mini-phases (6.1–6.5), one per page:
- **6.1**: Home page content polish
- **6.2**: Research page content polish
- **6.3**: Teaching page content polish
- **6.4**: Contact page content polish
- **6.5**: Students Hub content polish (last, due to complexity)

Each mini-phase is a complete polish of its page with all real content and imagery for that page.

</domain>

<decisions>
## Implementation Decisions

### Content Sourcing
- User will provide content as we work through each page
- Use existing approved materials where available (e.g., bio content from project memory)
- No upfront content outline needed — gather and integrate iteratively per page

### Profile Photo
- Keep CSS placeholder (navy box with yellow "IB" initials) for now
- Set up HTML/CSS structure to make real photo replacement straightforward for future
- Staged approach: placeholder functional now, real photo swap requires only image file addition

### Images & Visual Assets
- Multiple images will be added across pages (specific locations and types TBD as we work)
- All images self-hosted (no external CDN)
- User will specify image needs page-by-page during execution

### Publication Information
- 4 publications on research page will be replaced with real publications
- User will provide publication details (titles, venues, years, authors) OR direct where to find them
- Authorship highlighting and year badges follow existing structure

### Content Tone & Depth
- Follow established pattern from Phases 1-5
- User will guide tone and detail level as we work through each page
- No predetermined format — iterate based on user feedback

### Claude's Discretion
- How to structure image HTML (inline, in separate assets folder reference, etc.)
- Exact layout adjustments needed when adding images to existing pages
- Minor copyediting for consistency and clarity (subject to user approval)

</decisions>

<canonical_refs>
## Canonical References

### Content Guidelines
- `CLAUDE.md` — First-person communication required, no em-dashes, no italics for notes
- `.planning/PROJECT.md` — Core value and brand guidelines
- `.planning/REQUIREMENTS.md` — Phase 6 success criteria and page structure expectations

### Prior Phase Decisions
- All Phases 1-5 decisions carry forward (typography, color, spacing, component styling)
- First-person voice requirement from prior phases (Phase 4.1 and Phase 3)

</canonical_refs>

<code_context>
## Existing Code Insights

### Pages to Update (All 5)
- `index.html` — Hero, About Me, highlight cards (real bio, images as needed)
- `research.html` — Overview, research interests, NSF project, publications (real publication data)
- `teaching.html` — Philosophy, course cards (real descriptions, course details)
- `students.html` — Current/Prior/Prospective tabs (real office info, resources, links)
- `contact.html` — Contact details, profile links (real information)

### CSS Patterns Established
- Single `css/style.css` file — all styling already in place
- No CSS changes expected (layout and components ready for content)
- Image integration may require minor spacing/sizing adjustments

### Asset Structure
- `assets/` directory exists — fonts and CV
- Images will be added here per user specification
- File paths remain relative (no CDN dependencies)

</code_context>

<specifics>
## Specific Ideas

- Profile photo staged approach allows content polish to complete without blocking on photo sourcing
- Real publications will anchor the research credibility of the site
- Follow first-person voice consistently (requirement from prior phases)
- Images should enhance without overwhelming (faculty site, not portfolio)

</specifics>

<deferred>
## Deferred Ideas

- Profile photo replacement (v2 after content complete)
- Print-friendly stylesheet (v2 enhancement)
- Search/filtering functionality (v2 feature)
- Dark mode toggle (v2 feature)

</deferred>

---

*Phase: 06-content-polish*
*Context gathered: 2026-03-27*
