// scripts/import-wix.js
// This script converts scraped Wix HTML files into Markdown for Astro content
// and copies any referenced assets (images, videos) into the project's asset folder.

const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');
const fse = require('fs-extra');

// === CONFIGURATION ===
// Adjust these paths as needed before running the script.
const INPUT_DIR = path.resolve(__dirname, '../scraped-wix'); // folder containing scraped HTML
const OUTPUT_CONTENT_DIR = path.resolve(__dirname, '../src/content'); // generated markdown files
const OUTPUT_ASSET_DIR = path.resolve(__dirname, '../src/assets'); // copied assets (images, videos)

// Ensure output directories exist
fse.ensureDirSync(OUTPUT_CONTENT_DIR);
fse.ensureDirSync(OUTPUT_ASSET_DIR);

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

turndown.addRule('image', {
  filter: 'img',
  replacement: function (content, node) {
    const src = node.getAttribute('src');
    if (!src) return '';
    // Copy image asset to output folder and return markdown image link
    const srcPath = path.resolve(INPUT_DIR, src);
    const fileName = path.basename(src);
    const destPath = path.join(OUTPUT_ASSET_DIR, fileName);
    try {
      fse.copyFileSync(srcPath, destPath);
    } catch (e) {
      console.warn(`Unable to copy asset ${src}: ${e.message}`);
    }
    return `![${fileName}](/assets/${fileName})`;
  }
});

function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext !== '.html' && ext !== '.htm') return;
  const fileName = path.basename(filePath, ext);
  const rawHtml = fs.readFileSync(filePath, 'utf8');
  const markdown = turndown.turndown(rawHtml);
  const outputPath = path.join(OUTPUT_CONTENT_DIR, `${fileName}.md`);
  fs.writeFileSync(outputPath, markdown, 'utf8');
  console.log(`Converted ${filePath} → ${outputPath}`);
}

// Recursively walk input directory
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

walk(INPUT_DIR);
console.log('Import completed.');
