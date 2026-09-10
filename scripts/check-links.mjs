import fs from "node:fs";
import path from "node:path";
const root = path.resolve("dist");
const files = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith(".html")) files.push(p);
  }
}
walk(root);
const failures = [];
let checked = 0;
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)) continue;
    const [pathname, fragment] = href.split("#");
    const target = path.resolve(
      pathname?.startsWith("/") ? root : path.dirname(file),
      decodeURIComponent((pathname || path.basename(file)).split("?")[0]).replace(/^\//, "")
    );
    const candidates = [target, path.join(target, "index.html"), target + ".html"];
    const found = candidates.find((p) => fs.existsSync(p) && fs.statSync(p).isFile());
    checked++;
    if (!found) {
      failures.push(`${path.relative(root, file)} → ${href}`);
      continue;
    }
    if (fragment && found.endsWith(".html")) {
      const content = fs.readFileSync(found, "utf8");
      const ids = [...content.matchAll(/\bid=["']([^"']+)["']/g)].map((m) => m[1]);
      if (!ids.includes(decodeURIComponent(fragment))) failures.push(`${path.relative(root, file)} → missing #${fragment}`);
    }
  }
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Checked ${checked} local links and assets across ${files.length} pages.`);
