import path from 'path';
import fs from 'fs';

export async function globalExportDocument(page, locator, filename, savePath = 'downloads') {

  const dir = path.resolve(process.cwd(), savePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    locator.click()
  ]);

  const suggested = await download.suggestedFilename();
  const finalName = filename || suggested;
  const fullPath = path.join(dir, finalName);

  await download.saveAs(fullPath);

  const fail = await download.failure();
  if (fail) throw new Error('Download failed: ' + fail);

  console.log('Saved →', fullPath);
  return fullPath;
}
