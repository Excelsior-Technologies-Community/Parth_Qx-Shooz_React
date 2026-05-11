const fs = require('fs');
const path = require('path');

const componentsDir = './src/components';
const homeFile = './src/pages/Home.jsx';

const components = [
  'AnnouncementBar',
  'TopBar',
  'Header',
  'Hero',
  'PromoGrid',
  'ProductGrid',
  'FeaturedBanner',
  'BootsAndBooties',
  'TimelessStyles',
  'SeasonsEndSale',
  'SaveBigOnShoes',
  'CustomerFeedback',
  'RecentPosts',
  'Footer'
];

let allImports = new Set();
let allCode = [];

// Base imports
allImports.add("import React, { useState, useEffect } from 'react';");

// Read each component
components.forEach(comp => {
  const filePath = path.join(componentsDir, `${comp}.jsx`);
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract imports
  const lines = content.split('\n');
  const codeLines = [];
  
  let isImport = true;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('import ')) {
      // Don't import React again
      if (!line.includes('React') && !line.includes('../css/')) {
        // Collect lucide-react imports or other libraries
        allImports.add(line.trim());
      }
    } else if (line.trim().startsWith('export default ')) {
      // ignore export default
    } else {
      codeLines.push(line);
    }
  }
  
  allCode.push(`/* --- ${comp} --- */`);
  allCode.push(codeLines.join('\n').trim());
  allCode.push('\n');
});

// Combine imports
let combinedImports = Array.from(allImports);

// Combine lucide-react imports
let lucideIcons = new Set();
combinedImports = combinedImports.filter(imp => {
  if (imp.includes('lucide-react')) {
    const match = imp.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/);
    if (match) {
      match[1].split(',').forEach(icon => lucideIcons.add(icon.trim()));
      return false; // remove this line
    }
  }
  return true;
});

if (lucideIcons.size > 0) {
  combinedImports.push(`import { ${Array.from(lucideIcons).join(', ')} } from 'lucide-react';`);
}

// Home Component code
const homeCode = `
/* --- Home Page --- */
function Home() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <PromoGrid />
        <ProductGrid />
        <FeaturedBanner />
        <BootsAndBooties />
        <TimelessStyles />
        <SeasonsEndSale />
        <SaveBigOnShoes />
        <CustomerFeedback />
        <RecentPosts />
      </main>
      <Footer />
    </>
  )
}

export default Home;
`;

const finalFileContent = combinedImports.join('\n') + '\n\n' + allCode.join('\n') + '\n' + homeCode;

fs.writeFileSync(homeFile, finalFileContent);

// Delete components
components.forEach(comp => {
  const filePath = path.join(componentsDir, `${comp}.jsx`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
});
// Remove components dir if empty
if (fs.readdirSync(componentsDir).length === 0) {
  fs.rmdirSync(componentsDir);
}

console.log('Components combined successfully!');
