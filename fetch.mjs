import fs from 'fs';

async function fetchShopify() {
  const res = await fetch('https://qx-shooz.myshopify.com/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
  });
  const html = await res.text();
  
  // Try to find image URLs that look like slider images
  const matches = html.match(/\/\/qx-shooz\.myshopify\.com\/cdn\/shop\/files\/[^"'\s]*\.(jpg|png|webp)/g) || [];
  
  // Deduplicate
  const uniqueUrls = [...new Set(matches)];
  
  // Filter likely slider images (slider, hero, slid)
  const sliderMatches = uniqueUrls.filter(u => u.includes('slider') || u.includes('hero'));
  
  console.log("Found slider images:");
  console.log(sliderMatches.join('\n'));
  
  if (sliderMatches.length === 0) {
    // Just print the first 20 unique images to guess
    console.log("Top 20 image URLs:");
    console.log(uniqueUrls.slice(0, 20).join('\n'));
  }
}

fetchShopify().catch(console.error);
