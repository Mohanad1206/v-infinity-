
/**
 * Simple NDJSON sanity check: validates field presence and prints a summary.
 * Usage:
 *   node scripts/sanity.js out/test-results.ndjson
 */
import fs from "fs";

const file = process.argv[2] || "out/test-results.ndjson";
if (!fs.existsSync(file)) {
  console.error("File not found:", file);
  process.exit(1);
}
const lines = fs.readFileSync(file, "utf-8").split(/\r?\n/).filter(Boolean);
let ok = 0, err = 0;
for (const [i, line] of lines.entries()) {
  try {
    const obj = JSON.parse(line);
    const fields = ["timestamp_iso","site_name","product_name","product_url","price_value","currency","status","raw_price_text","source_url","notes"];
    const missing = fields.filter(f => !(f in obj));
    if (missing.length) {
      console.log(`Line ${i+1}: missing fields -> ${missing.join(", ")}`);
      err++;
    } else ok++;
  } catch (e) {
    console.log(`Line ${i+1}: invalid JSON`);
    err++;
  }
}
console.log(`\nChecked ${lines.length} lines → OK: ${ok}, Issues: ${err}`);
process.exit(err ? 1 : 0);
