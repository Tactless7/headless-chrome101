const puppeteer = require('puppeteer');
const config = require('./config.js');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.emulateMedia('screen');
    await page.viewport({ width: 1920, width: 1080 });
    await page.goto(config.url);

    await page.pdf({path: 'test.pdf', format: 'A4'});

    await page.screenshot({path: './example.png'});

    await browser.close();
  } catch (error) {
    console.error(error);
  }

})();
