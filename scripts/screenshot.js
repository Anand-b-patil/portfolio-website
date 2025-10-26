const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const urls = [
    { path: '/', name: 'hero' },
    { path: '/#about', name: 'about' },
    { path: '/#projects', name: 'projects' },
  ];

  const outDir = 'scripts/screenshots';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  for (const u of urls) {
    const url = `http://localhost:5173${u.path}`;
    console.log('Navigating to', url);
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      // small wait to allow animations to settle
      await page.waitForTimeout(400);
      const filePath = `${outDir}/${u.name}.png`;
      await page.screenshot({ path: filePath, fullPage: true });
      console.log('Saved', filePath);
    } catch (err) {
      console.error('Failed to capture', url, err.message);
    }
  }

  await browser.close();
  console.log('All screenshots captured.');
})();
