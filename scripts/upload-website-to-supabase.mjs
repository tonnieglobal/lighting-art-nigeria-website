/**
 * Uploads website source files to Supabase Storage (bucket: website-source).
 * Run: npm run upload:supabase
 *
 * Skips: node_modules, dist, .git, .cursor, .env.local (secrets).
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, relative, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const SKIP_DIRS = new Set(["node_modules", "dist", ".git", ".cursor"]);
const SKIP_FILES = new Set([".env.local"]);

function loadEnv() {
  const envPath = join(root, ".env.local");
  if (!existsSync(envPath)) {
    throw new Error("Missing .env.local — add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY");
  }
  const raw = readFileSync(envPath, "utf8");
  const env = {};
  for (const line of raw.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i === -1) continue;
    env[t.slice(0, i).trim()] = t.slice(i + 1).trim();
  }
  return env;
}

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, files);
    else {
      if (SKIP_FILES.has(name)) continue;
      files.push(full);
    }
  }
  return files;
}

function mimeFromPath(p) {
  const lower = p.toLowerCase();
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".svg")) return "image/svg+xml";
  if (lower.endsWith(".css")) return "text/css";
  if (lower.endsWith(".html")) return "text/html";
  if (lower.endsWith(".json")) return "application/json";
  if (lower.endsWith(".ts")) return "text/plain";
  if (lower.endsWith(".tsx")) return "text/plain";
  if (lower.endsWith(".mjs") || lower.endsWith(".js")) return "text/javascript";
  if (lower.endsWith(".md")) return "text/markdown";
  if (lower.endsWith(".pdf")) return "application/pdf";
  return "application/octet-stream";
}

async function main() {
  const env = loadEnv();
  const url = env.VITE_SUPABASE_URL;
  const key = env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set in .env.local");
  }

  const supabase = createClient(url, key);
  const bucket = "website-source";
  const files = walk(root);
  let ok = 0;
  let fail = 0;

  for (const filePath of files) {
    const rel = relative(root, filePath).replace(/\\/g, "/");
    const data = readFileSync(filePath);
    const { error } = await supabase.storage.from(bucket).upload(rel, data, {
      upsert: true,
      contentType: mimeFromPath(rel),
    });
    if (error) {
      console.error("FAIL", rel, error.message);
      fail += 1;
    } else {
      console.log("OK", rel);
      ok += 1;
    }
  }

  console.log(`\nUploaded ${ok} files, ${fail} failed. Bucket: ${bucket}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
