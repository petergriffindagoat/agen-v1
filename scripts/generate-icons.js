/**
 * Generate PNG favicons and OG image from SVG sources
 * Run: node scripts/generate-icons.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Sharp not found. Installing...');
  require('child_process').execSync('npm install sharp', { stdio: 'inherit' });
  sharp = require('sharp');
}

const publicDir = path.join(__dirname, '..', 'public');
const faviconSvg = path.join(publicDir, 'favicon.svg');
const ogSvg = path.join(publicDir, 'og-default.svg');

async function generateIcons() {
  console.log('Generating icons from SVG sources...\n');

  try {
    // Generate favicon.ico (32x32)
    await sharp(faviconSvg)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✓ Created favicon-32x32.png');

    // Generate favicon-16x16.png
    await sharp(faviconSvg)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✓ Created favicon-16x16.png');

    // Generate apple-touch-icon.png (180x180)
    await sharp(faviconSvg)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ Created apple-touch-icon.png');

    // Generate logo.png (256x256 for schema)
    await sharp(faviconSvg)
      .resize(256, 256)
      .png()
      .toFile(path.join(publicDir, 'logo.png'));
    console.log('✓ Created logo.png');

    // Generate OG image (1200x630)
    await sharp(ogSvg)
      .resize(1200, 630)
      .png()
      .toFile(path.join(publicDir, 'og-default.png'));
    console.log('✓ Created og-default.png (1200x630)');

    // Note: ICO format requires special handling
    // For now, we'll copy the 32x32 PNG as favicon.ico
    // Browsers will accept PNG data in .ico files
    fs.copyFileSync(
      path.join(publicDir, 'favicon-32x32.png'),
      path.join(publicDir, 'favicon.ico')
    );
    console.log('✓ Created favicon.ico');

    console.log('\n✅ All icons generated successfully!');
    console.log('\nGenerated files:');
    console.log('  • favicon.ico (32x32)');
    console.log('  • favicon-16x16.png');
    console.log('  • favicon-32x32.png');
    console.log('  • apple-touch-icon.png (180x180)');
    console.log('  • logo.png (256x256)');
    console.log('  • og-default.png (1200x630)');

  } catch (error) {
    console.error('\n❌ Error generating icons:', error.message);
    process.exit(1);
  }
}

generateIcons();
