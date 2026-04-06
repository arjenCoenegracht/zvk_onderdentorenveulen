import { cpSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const sourceFile = path.join(distDir, 'index.html');

const routes = [
  'competitie',
  'spelers',
  'sponsors',
  'spotlight',
  'uitstapjes',
  path.join('uitstapjes', 'eindhoven'),
];

if (!existsSync(sourceFile)) {
  throw new Error(`Could not find ${sourceFile}. Run the build first.`);
}

for (const route of routes) {
  const targetDir = path.join(distDir, route);
  mkdirSync(targetDir, { recursive: true });
  cpSync(sourceFile, path.join(targetDir, 'index.html'));
}
