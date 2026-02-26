// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 120000000, // ⏱ 2 minutes per test

  use: {
    acceptDownloads: true,
  
    headless: false,
    viewport: { width: 1366, height: 768 },
  },
   launchOptions: {
    slowMo: 1000, // ✅ 1 second delay har action me
  },
});
