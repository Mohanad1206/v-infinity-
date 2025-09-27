# Changelog

## v1.2.1 - 2025-09-27
- **Fix:** Resolved Node.js SyntaxError `Unexpected token '.'` by consolidating Commander.js option chaining onto a single line (no leading-dot line breaks). This affected `src/scrape.js`.
- **Note:** GitHub Action can now run without parsing errors on Node v20.x.
