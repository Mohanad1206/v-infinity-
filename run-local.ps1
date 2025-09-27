#!/usr/bin/env pwsh
New-Item -ItemType Directory -Force -Path out | Out-Null
node src/scrape.js --in examples/urls-test.txt --out out/test-results.ndjson --max 5 --concurrency 2 --timeout 30000
node scripts/sanity.js out/test-results.ndjson
Write-Host "Standalone test run complete. Output: out/test-results.ndjson"
