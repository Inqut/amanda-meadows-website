import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to OG image dimensions
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 2, // Retina quality
  });

  // Load the HTML file
  await page.goto(`file:${path.join(__dirname, '../public/og-image.html')}`);
  
  // Wait for any animations/fonts to load
  await page.waitForTimeout(1000);

  // Take the screenshot
  await page.screenshot({
    path: path.join(__dirname, '../public/og-image.png'),
    type: 'png',
    quality: 100,
  });

  await browser.close();
})();
