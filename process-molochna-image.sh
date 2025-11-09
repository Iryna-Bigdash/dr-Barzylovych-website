#!/bin/bash

# Script to create responsive versions of molochna-drabyna.png
# Uses sips (macOS) or ImageMagick

INPUT="assets/molochna-drabyna.png"
OUTPUT_DIR="assets/images/molochna-drabyna"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Check for available tools
if command -v sips &> /dev/null; then
    USE_SIPS=true
    echo "Using sips (macOS built-in)"
elif command -v magick &> /dev/null; then
    USE_SIPS=false
    CONVERT_CMD="magick"
    echo "Using ImageMagick"
elif command -v convert &> /dev/null; then
    USE_SIPS=false
    CONVERT_CMD="convert"
    echo "Using ImageMagick (convert)"
else
    echo "Error: No image processing tool found. Please install ImageMagick (brew install imagemagick)"
    exit 1
fi

# Check if cwebp is available
if command -v cwebp &> /dev/null; then
    USE_CWEBP=true
    echo "Using cwebp for WebP conversion"
else
    USE_CWEBP=false
    echo "Warning: cwebp not found. Will use JPEG only."
fi

echo "Processing molochna-drabyna.png for responsive images..."

# Mobile: 800px width
echo "Creating mobile version (800px)..."
if [ "$USE_SIPS" = true ]; then
    sips -Z 800 "$INPUT" --out "$OUTPUT_DIR/800x450.jpg" > /dev/null 2>&1
else
    $CONVERT_CMD "$INPUT" -resize 800x -quality 85 "$OUTPUT_DIR/800x450.jpg"
fi
if [ "$USE_CWEBP" = true ]; then
    cwebp -q 80 "$OUTPUT_DIR/800x450.jpg" -o "$OUTPUT_DIR/800x450.webp" 2>/dev/null || echo "WebP conversion failed for 800px"
fi

# Tablet: 1200px width
echo "Creating tablet version (1200px)..."
if [ "$USE_SIPS" = true ]; then
    sips -Z 1200 "$INPUT" --out "$OUTPUT_DIR/1200x675.jpg" > /dev/null 2>&1
else
    $CONVERT_CMD "$INPUT" -resize 1200x -quality 85 "$OUTPUT_DIR/1200x675.jpg"
fi
if [ "$USE_CWEBP" = true ]; then
    cwebp -q 80 "$OUTPUT_DIR/1200x675.jpg" -o "$OUTPUT_DIR/1200x675.webp" 2>/dev/null || echo "WebP conversion failed for 1200px"
fi

# Desktop: 1600px width
echo "Creating desktop version (1600px)..."
if [ "$USE_SIPS" = true ]; then
    sips -Z 1600 "$INPUT" --out "$OUTPUT_DIR/1600x900.jpg" > /dev/null 2>&1
else
    $CONVERT_CMD "$INPUT" -resize 1600x -quality 85 "$OUTPUT_DIR/1600x900.jpg"
fi
if [ "$USE_CWEBP" = true ]; then
    cwebp -q 80 "$OUTPUT_DIR/1600x900.jpg" -o "$OUTPUT_DIR/1600x900.webp" 2>/dev/null || echo "WebP conversion failed for 1600px"
fi

# Large desktop: 2400px width
echo "Creating large desktop version (2400px)..."
if [ "$USE_SIPS" = true ]; then
    sips -Z 2400 "$INPUT" --out "$OUTPUT_DIR/2400x1350.jpg" > /dev/null 2>&1
else
    $CONVERT_CMD "$INPUT" -resize 2400x -quality 85 "$OUTPUT_DIR/2400x1350.jpg"
fi
if [ "$USE_CWEBP" = true ]; then
    cwebp -q 80 "$OUTPUT_DIR/2400x1350.jpg" -o "$OUTPUT_DIR/2400x1350.webp" 2>/dev/null || echo "WebP conversion failed for 2400px"
fi

echo ""
echo "Done! Images created in $OUTPUT_DIR"
echo "File sizes:"
ls -lh "$OUTPUT_DIR"/*.{jpg,webp} 2>/dev/null | awk '{print $5, $9}' || echo "Checking files..."
