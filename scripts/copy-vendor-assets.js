#!/usr/bin/env node
/**
 * Script to copy vendor assets to public directory
 * This is for libraries that need to be loaded as static files
 */

import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');
const vendorDir = join(publicDir, 'vendor');

// Parse command line arguments
const isVerbose = process.argv.includes('--verbose');

// Helper function to log only if verbose mode is enabled
const log = (message) => {
  if (isVerbose) {
    console.log(message);
  }
};

// Create vendor directory if it doesn't exist
if (!existsSync(vendorDir)) {
  mkdirSync(vendorDir, { recursive: true });
}

// Copy Three.js assets
const threeDir = join(rootDir, 'node_modules', 'three', 'build');
const threeFiles = [
  { src: 'three.module.min.js', dest: 'three.module.min.js' },
  { src: 'three.core.min.js', dest: 'three.core.min.js' },
];

threeFiles.forEach(({ src, dest }) => {
  const srcPath = join(threeDir, src);
  const destPath = join(vendorDir, dest);

  if (existsSync(srcPath)) {
    copyFileSync(srcPath, destPath);
    log(`✓ Copied ${src} to public/vendor/${dest}`);
  } else {
    console.warn(`⚠ File not found: ${srcPath}`);
  }
});

// Copy easing-utils assets
const easingUtilsDir = join(rootDir, 'node_modules', 'easing-utils');
const easingUtilsFiles = [
  { src: 'index.js', dest: 'easing-utils.js' },
  { src: 'index.mjs', dest: 'easing-utils.mjs' },
];

// Try to find the main file (could be index.js, index.mjs, or dist/index.js)
const possiblePaths = [
  join(easingUtilsDir, 'index.js'),
  join(easingUtilsDir, 'index.mjs'),
  join(easingUtilsDir, 'dist', 'index.js'),
  join(easingUtilsDir, 'dist', 'index.mjs'),
  join(easingUtilsDir, 'src', 'index.js'),
];

let easingUtilsMainFile = null;
for (const path of possiblePaths) {
  if (existsSync(path)) {
    easingUtilsMainFile = path;
    break;
  }
}

if (easingUtilsMainFile) {
  const destPath = join(vendorDir, 'easing-utils.js');
  copyFileSync(easingUtilsMainFile, destPath);
  log(`✓ Copied easing-utils to public/vendor/easing-utils.js`);
} else {
  console.warn(`⚠ easing-utils main file not found. Tried: ${possiblePaths.join(', ')}`);
}

// Copy Maggioli Design System loader and dependencies
const magmaDir = join(rootDir, 'node_modules', '@maggioli-design-system', 'magma');
const magmaLoaderDir = join(magmaDir, 'loader');
const magmaLoaderDestDir = join(vendorDir, 'maggioli-loader');
const magmaDistDestDir = join(vendorDir, 'maggioli-loader', 'dist');

if (existsSync(magmaLoaderDir)) {
  // Create destination directories
  if (!existsSync(magmaLoaderDestDir)) {
    mkdirSync(magmaLoaderDestDir, { recursive: true });
  }
  if (!existsSync(magmaDistDestDir)) {
    mkdirSync(magmaDistDestDir, { recursive: true });
  }

  // Copy all files from loader directory
  const loaderFiles = readdirSync(magmaLoaderDir);
  loaderFiles.forEach((file) => {
    const srcPath = join(magmaLoaderDir, file);
    const destPath = join(magmaLoaderDestDir, file);

    if (statSync(srcPath).isFile()) {
      copyFileSync(srcPath, destPath);
      log(`✓ Copied ${file} to public/vendor/maggioli-loader/${file}`);
    }
  });

  // Copy dist/esm/polyfills and dist/esm/loader.js (and its dependencies)
  const distEsmDir = join(magmaDir, 'dist', 'esm');
  const distEsmDestDir = join(magmaDistDestDir, 'esm');

  if (existsSync(distEsmDir)) {
    if (!existsSync(distEsmDestDir)) {
      mkdirSync(distEsmDestDir, { recursive: true });
    }

    // Copy polyfills directory
    const polyfillsDir = join(distEsmDir, 'polyfills');
    const polyfillsDestDir = join(distEsmDestDir, 'polyfills');
    if (existsSync(polyfillsDir)) {
      if (!existsSync(polyfillsDestDir)) {
        mkdirSync(polyfillsDestDir, { recursive: true });
      }
      const polyfillFiles = readdirSync(polyfillsDir);
      polyfillFiles.forEach((file) => {
        const srcPath = join(polyfillsDir, file);
        const destPath = join(polyfillsDestDir, file);
        if (statSync(srcPath).isFile()) {
          copyFileSync(srcPath, destPath);
          log(
            `✓ Copied polyfills/${file} to public/vendor/maggioli-loader/dist/esm/polyfills/${file}`
          );
        }
      });
    }

    // Copy loader.js and ALL JavaScript files from dist/esm
    // This includes all dependencies, entry files, and chunk files
    const loaderJsPath = join(distEsmDir, 'loader.js');
    if (existsSync(loaderJsPath)) {
      copyFileSync(loaderJsPath, join(distEsmDestDir, 'loader.js'));
      log(`✓ Copied loader.js to public/vendor/maggioli-loader/dist/esm/loader.js`);

      // Copy ALL .js files from dist/esm (dependencies, chunks, entry files, etc.)
      const distEsmFiles = readdirSync(distEsmDir);
      distEsmFiles.forEach((file) => {
        if (file.endsWith('.js')) {
          const srcPath = join(distEsmDir, file);
          const destPath = join(distEsmDestDir, file);
          if (statSync(srcPath).isFile()) {
            copyFileSync(srcPath, destPath);
            log(`✓ Copied ${file} to public/vendor/maggioli-loader/dist/esm/${file}`);
          }
        }
      });
    }
  }
} else {
  console.warn(`⚠ Maggioli loader directory not found: ${magmaLoaderDir}`);
}

console.log('✓ Vendor assets copied successfully');
