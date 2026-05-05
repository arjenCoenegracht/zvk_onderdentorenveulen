import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const targetDirs = [
  'src/assets/players',
  'src/assets/motm',
  'src/assets/sponsors',
];

const dataImagePattern = /data:image\/(?<type>[^;]+);base64,(?<data>[^"'<>]+)/i;

const extensionByMime = {
  jpeg: 'jpg',
  jpg: 'jpg',
  png: 'png',
  webp: 'webp',
};

const mappings = [];

for (const dir of targetDirs) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile() || path.extname(entry.name).toLowerCase() !== '.svg') {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    const svg = await readFile(fullPath, 'utf8');
    const match = svg.match(dataImagePattern);

    if (!match?.groups) {
      continue;
    }

    const mimeType = match.groups.type.toLowerCase();
    const extension = extensionByMime[mimeType];

    if (!extension) {
      continue;
    }

    const baseName = path.basename(entry.name, '.svg');
    const outputName = `${baseName}.asset.${extension}`;
    const outputPath = path.join(dir, outputName);
    const imageBuffer = Buffer.from(match.groups.data, 'base64');

    await mkdir(dir, { recursive: true });
    await writeFile(outputPath, imageBuffer);

    mappings.push({
      svg: fullPath.replaceAll('\\', '/'),
      extracted: outputPath.replaceAll('\\', '/'),
      bytes: imageBuffer.length,
      type: mimeType,
    });
  }
}

for (const mapping of mappings.sort((a, b) => a.svg.localeCompare(b.svg))) {
  console.log(`${mapping.svg} -> ${mapping.extracted} (${mapping.type}, ${mapping.bytes} bytes)`);
}
