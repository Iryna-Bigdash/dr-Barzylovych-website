const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Error: sharp module not found.');
  console.log('Please install it with: npm install sharp');
  process.exit(1);
}

async function convertPngToWebp(inputPath, outputPath, quality = 90) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    await sharp(inputPath)
      .webp({ quality: quality, effort: 6 })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / 1024).toFixed(1);
    const percent = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (saved ${savings}KB, ${percent}%)`);
    
    return { originalSize, newSize, savings: originalSize - newSize };
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  const iconsDir = path.join(__dirname, 'assets/images/icons');
  const pngFiles = [
    'medical-consultation.png',
    'follow-up-consultation.png',
    'child-care-recommendations.png'
  ];

  console.log('Converting PNG icons to WebP...\n');

  for (const pngFile of pngFiles) {
    const inputPath = path.join(iconsDir, pngFile);
    const webpFile = pngFile.replace('.png', '.webp');
    const outputPath = path.join(iconsDir, webpFile);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠ Skipping ${pngFile}: file not found`);
      continue;
    }

    await convertPngToWebp(inputPath, outputPath);
  }

  console.log('\n✓ Conversion complete!');
}

main().catch(console.error);

