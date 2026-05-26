#!/usr/bin/env bash
set -euo pipefail

# Builds a clean gh-pages branch with only public-facing files.
# Run from the project root after committing all desired changes to main.

PUBLIC_FILES=(
  index.html
  research.html
  teaching.html
  students.html
  contact.html
  css/
  js/
  assets/
  CNAME
  robots.txt
  sitemap.xml
  LICENSE
)

echo "==> Switching to main branch..."
git checkout main

echo "==> Deleting local gh-pages branch (if any)..."
git branch -D gh-pages 2>/dev/null || true

echo "==> Creating orphan gh-pages branch..."
git checkout --orphan gh-pages

echo "==> Removing all files..."
git rm -rf .

echo "==> Restoring public files from main..."
git checkout main -- "${PUBLIC_FILES[@]}"

echo "==> Committing gh-pages branch..."
git commit -m "Deploy $(date +%Y-%m-%d)"

echo "==> Pushing gh-pages branch to origin..."
git push origin gh-pages --force

echo "==> Switching back to main..."
git checkout main

echo "Done. GitHub Pages is now serving the gh-pages branch."
