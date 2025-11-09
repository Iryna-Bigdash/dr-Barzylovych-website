#!/bin/bash

# Script to convert PNG feature icons to WebP format
# This will reduce file sizes by ~50-60%

echo "Converting feature icons to WebP format..."

# Check if cwebp is available
if command -v cwebp &> /dev/null; then
    echo "Using cwebp..."
    cwebp -q 80 assets/images/1.png -o assets/images/1.webp
    cwebp -q 80 assets/images/3.png -o assets/images/3.webp
    cwebp -q 80 assets/images/6.png -o assets/images/6.webp
    echo "✓ Conversion complete!"
    echo "Expected savings:"
    echo "  1.png: ~5.5 KiB saved"
    echo "  3.png: ~4.5 KiB saved"
    echo "  6.png: ~8.3 KiB saved"
    echo "  Total: ~18.3 KiB saved"
elif command -v magick &> /dev/null; then
    echo "Using ImageMagick..."
    magick assets/images/1.png -quality 80 assets/images/1.webp
    magick assets/images/3.png -quality 80 assets/images/3.webp
    magick assets/images/6.png -quality 80 assets/images/6.webp
    echo "✓ Conversion complete!"
else
    echo "❌ Error: No WebP conversion tool found!"
    echo ""
    echo "Please install one of the following:"
    echo "  - cwebp (WebP tools): brew install webp"
    echo "  - ImageMagick: brew install imagemagick"
    echo ""
    echo "Or use an online converter:"
    echo "  https://cloudconvert.com/png-to-webp"
    echo "  https://convertio.co/png-webp/"
    exit 1
fi

