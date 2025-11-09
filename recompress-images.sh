#!/bin/bash

# Script to recompress WebP images with better compression settings
# This will reduce file sizes by 60-80% while maintaining good visual quality

echo "Recompressing WebP images with optimized settings..."
echo ""

# Check if cwebp is available
if command -v cwebp &> /dev/null; then
    echo "Using cwebp..."
    
    # Hero images - compress to quality 75 (good balance)
    if [ -f "assets/images/hero-320x400-mobile.webp" ]; then
        echo "Recompressing hero-320x400-mobile.webp..."
        cwebp -q 75 -m 6 "assets/images/hero-320x400-mobile.webp" -o "assets/images/hero-320x400-mobile.webp.tmp" && \
        mv "assets/images/hero-320x400-mobile.webp.tmp" "assets/images/hero-320x400-mobile.webp"
        echo "✓ Done"
    fi
    
    if [ -f "assets/images/hero-380x500-tablet.webp" ]; then
        echo "Recompressing hero-380x500-tablet.webp..."
        cwebp -q 75 -m 6 "assets/images/hero-380x500-tablet.webp" -o "assets/images/hero-380x500-tablet.webp.tmp" && \
        mv "assets/images/hero-380x500-tablet.webp.tmp" "assets/images/hero-380x500-tablet.webp"
        echo "✓ Done"
    fi
    
    if [ -f "assets/images/photo-main.webp" ]; then
        echo "Recompressing photo-main.webp..."
        cwebp -q 75 -m 6 "assets/images/photo-main.webp" -o "assets/images/photo-main.webp.tmp" && \
        mv "assets/images/photo-main.webp.tmp" "assets/images/photo-main.webp"
        echo "✓ Done"
    fi
    
    # About section images - compress to quality 75
    if [ -f "assets/images/about/220x270.webp" ]; then
        echo "Recompressing about/220x270.webp..."
        cwebp -q 75 -m 6 "assets/images/about/220x270.webp" -o "assets/images/about/220x270.webp.tmp" && \
        mv "assets/images/about/220x270.webp.tmp" "assets/images/about/220x270.webp"
        echo "✓ Done"
    fi
    
    if [ -f "assets/images/about/260x310.webp" ]; then
        echo "Recompressing about/260x310.webp..."
        cwebp -q 75 -m 6 "assets/images/about/260x310.webp" -o "assets/images/about/260x310.webp.tmp" && \
        mv "assets/images/about/260x310.webp.tmp" "assets/images/about/260x310.webp"
        echo "✓ Done"
    fi
    
    echo ""
    echo "✓ Recompression complete!"
    echo ""
    echo "Expected savings:"
    echo "  hero-320x400-mobile.webp: ~71.5 KiB saved (from 92.4 KiB)"
    echo "  about/260x310.webp: ~60.4 KiB saved (from 73.5 KiB)"
    echo "  Total: ~132 KiB saved"
    
elif command -v magick &> /dev/null; then
    echo "Using ImageMagick..."
    
    # Hero images
    if [ -f "assets/images/hero-320x400-mobile.webp" ]; then
        echo "Recompressing hero-320x400-mobile.webp..."
        magick "assets/images/hero-320x400-mobile.webp" -quality 75 "assets/images/hero-320x400-mobile.webp.tmp" && \
        mv "assets/images/hero-320x400-mobile.webp.tmp" "assets/images/hero-320x400-mobile.webp"
        echo "✓ Done"
    fi
    
    if [ -f "assets/images/hero-380x500-tablet.webp" ]; then
        echo "Recompressing hero-380x500-tablet.webp..."
        magick "assets/images/hero-380x500-tablet.webp" -quality 75 "assets/images/hero-380x500-tablet.webp.tmp" && \
        mv "assets/images/hero-380x500-tablet.webp.tmp" "assets/images/hero-380x500-tablet.webp"
        echo "✓ Done"
    fi
    
    if [ -f "assets/images/photo-main.webp" ]; then
        echo "Recompressing photo-main.webp..."
        magick "assets/images/photo-main.webp" -quality 75 "assets/images/photo-main.webp.tmp" && \
        mv "assets/images/photo-main.webp.tmp" "assets/images/photo-main.webp"
        echo "✓ Done"
    fi
    
    # About section images
    if [ -f "assets/images/about/260x310.webp" ]; then
        echo "Recompressing about/260x310.webp..."
        magick "assets/images/about/260x310.webp" -quality 75 "assets/images/about/260x310.webp.tmp" && \
        mv "assets/images/about/260x310.webp.tmp" "assets/images/about/260x310.webp"
        echo "✓ Done"
    fi
    
    echo ""
    echo "✓ Recompression complete!"
    
else
    echo "❌ Error: No WebP conversion tool found!"
    echo ""
    echo "Please install one of the following:"
    echo "  - cwebp (WebP tools): brew install webp"
    echo "  - ImageMagick: brew install imagemagick"
    echo ""
    echo "Or use an online converter with quality 75:"
    echo "  https://cloudconvert.com/webp-to-webp"
    echo "  https://convertio.co/webp-webp/"
    echo ""
    echo "For each image, set quality to 75 (or compression level 6)"
    exit 1
fi

