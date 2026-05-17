# Project Retrospective

*A living document updated after each milestone. Lessons feed forward into future planning.*

## Milestone: v1.0 — MVP

**Shipped:** 2026-05-17
**Phases:** 12 | **Plans:** 27

### What Was Built

- A complete five-page static faculty website: Home, Research, Teaching, Students, and Contact.
- A zero-dependency HTML/CSS/JS design system with self-hosted font, responsive layout, reusable components, and accessible interactions.
- A refined Students Hub with sidebar/select topic navigation and detailed guidance for current, prospective, and former students.
- A final content polish pass with real biography, research, teaching, contact, and student impact/outcomes content.

### What Worked

- Static-file constraints kept the implementation simple, portable, and easy to verify.
- Phase 5's cross-cutting verification pass caught and closed issues that earlier phase artifacts had missed.
- Page-specific content polish phases helped avoid broad, unfocused editing late in the milestone.

### What Was Inefficient

- Some summary extraction produced noisy milestone accomplishments because several summaries had weak one-liners.
- Phase 3 verification was not reconciled when Phase 5 fixed its gaps, which later blocked milestone close until artifacts were corrected.
- Nyquist validation files remained draft/partial even after practical verification passed.

### Patterns Established

- Treat final cross-page verification as authoritative, but immediately update stale phase artifacts when it closes earlier gaps.
- Keep post-milestone living docs small and archive detailed historical context into `.planning/milestones/`.
- Use direct static HTML/CSS/JS patterns unless a future milestone introduces a real maintenance need for tooling.

### Key Lessons

1. Verification artifacts need the same maintenance discipline as code; stale failure reports become close blockers.
2. Milestone summaries should be curated, not blindly extracted from every plan summary.
3. For a small static site, late broad polish is safest when it is broken into page-specific passes.

### Cost Observations

- Model mix: not tracked.
- Sessions: multiple sessions across March and May 2026.
- Notable: most rework came from planning artifact drift, not implementation defects.

---

## Cross-Milestone Trends

### Process Evolution

| Milestone | Sessions | Phases | Key Change |
|-----------|----------|--------|------------|
| v1.0 | Multiple | 12 | Established archive-and-close workflow for static faculty site delivery |

### Cumulative Quality

| Milestone | Tests | Coverage | Zero-Dep Additions |
|-----------|-------|----------|-------------------|
| v1.0 | Phase 5 accessibility, link, responsive, browser, and offline verification | 110/110 v1 requirements | Five-page static site, self-hosted font, vanilla JS interactions |

### Top Lessons (Verified Across Milestones)

1. Keep verification artifacts synchronized with later closure work.
2. Curate milestone accomplishments before archiving.
