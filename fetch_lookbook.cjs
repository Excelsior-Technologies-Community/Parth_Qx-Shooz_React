const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://qx-shooz.myshopify.com/pages/lookbook');
  
  // Fill password
  await page.fill('input[type="password"]', '1');
  await page.click('button[type="submit"], input[type="submit"]');
  
  // Wait for the page to load
  await page.waitForTimeout(3000);
  
  const html = await page.content();
  fs.writeFileSync('lookbook.html', html);
  
  await browser.close();
})();
