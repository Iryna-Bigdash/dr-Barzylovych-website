#!/bin/bash

# Check if sips is installed (macOS built-in)
if ! command -v sips &> /dev/null
then
    echo "sips (macOS built-in) not found."
    exit 1
fi

echo "Using sips (macOS built-in)"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null
then
    echo "Warning: cwebp not found. Will use JPEG only."
    USE_WEBP=false
else
    USE_WEBP=true
fi

INPUT_IMAGE="assets/images/recipies.png"
OUTPUT_DIR="assets/images/recipies"
IMAGE_NAME="recipies"

# Original aspect ratio: 4398 / 2474 = 1.7776 (approximately 16:9)
# Target widths for different breakpoints
WIDTHS=(800 1200 1600 2400)
HEIGHTS=(450 675 900 1350) # Calculated based on 16:9 aspect ratio

mkdir -p "$OUTPUT_DIR"

echo "Processing $INPUT_IMAGE for responsive images..."

for i in "${!WIDTHS[@]}"; do
    width=${WIDTHS[$i]}
    height=${HEIGHTS[$i]}
    
    echo "Creating version (${width}x${height})..."
    
    # JPEG version
    OUTPUT_JPEG="${OUTPUT_DIR}/${width}x${height}.jpg"
    sips -Z "$width" "$INPUT_IMAGE" --out "$OUTPUT_JPEG"
    
    # WebP version (if cwebp is available)
    if $USE_WEBP; then
        OUTPUT_WEBP="${OUTPUT_DIR}/${width}x${height}.webp"
        cwebp -q 75 "$OUTPUT_JPEG" -o "$OUTPUT_WEBP"
    fi
done

echo ""
echo "Done! Images created in $OUTPUT_DIR"
echo "File sizes:"
du -h "$OUTPUT_DIR"/*.jpg "$OUTPUT_DIR"/*.webp 2>/dev/null | awk '{print $1, $2}'

