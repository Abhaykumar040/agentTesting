// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 120000000, // ⏱ 2 minutes per test

  use: {
    acceptDownloads: true,
    slowMo: 1000,
    headless: false,
    viewport: { width: 1366, height: 768 },
  },
});
