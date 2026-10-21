// Links types/test/node_modules/@table-craft/table-craft → the package root, so the type tests resolve `@table-craft/table-craft`,
// `@table-craft/table-craft/react`, `/// <reference types="@table-craft/table-craft/game" />` … through package.json "exports" like an install.
// (Run by `npm run typecheck` as pretypecheck; node_modules is git-ignored and types/test is not published.)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..', '..');
const link = path.join(here, 'node_modules', '@table-craft/table-craft');
let ok = false;
try { ok = fs.realpathSync(link) === fs.realpathSync(root); } catch { /* missing or broken */ }
if (!ok) {
  fs.rmSync(link, { force: true, recursive: false });
  fs.mkdirSync(path.dirname(link), { recursive: true });
  fs.symlinkSync(root, link, 'junction');
}
