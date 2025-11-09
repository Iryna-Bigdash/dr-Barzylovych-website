const fs = require('fs');
const path = require('path');

// Check if sharp is available (best option)
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('sharp not found, trying to install...');
  console.log('Please run: npm install sharp');
  process.exit(1);
}

async function compressWebP(inputPath, outputPath, quality = 75) {
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
    console.error(`✗ Error compressing ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('Compressing WebP images with quality 75...\n');
  
  const images = [
    'assets/images/hero-320x400-mobile.webp',
    'assets/images/hero-380x500-tablet.webp',
    'assets/images/photo-main.webp',
    'assets/images/about/220x270.webp',
    'assets/images/about/260x310.webp',
  ];
  
  let totalSavings = 0;
  let processed = 0;
  
  for (const imagePath of images) {
    if (fs.existsSync(imagePath)) {
      const tempPath = imagePath + '.tmp';
      const result = await compressWebP(imagePath, tempPath, 75);
      
      if (result && result.savings > 0) {
        // Replace original with compressed version
        fs.renameSync(tempPath, imagePath);
        totalSavings += result.savings;
        processed++;
      } else if (result) {
        // No savings, remove temp file
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
    } else {
      console.log(`⚠ ${imagePath} not found, skipping...`);
    }
  }
  
  console.log(`\n✓ Compression complete!`);
  console.log(`  Processed: ${processed} images`);
  console.log(`  Total savings: ${(totalSavings / 1024).toFixed(1)} KB`);
}

main().catch(console.error);

