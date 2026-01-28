import fs from 'fs/promises';
import path from 'path';
//updateOpJson('product_category', 'product_category_updation', 'update_id_1', 'some/path', 'this is a note');
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function updateOpJson(categoryKey, subCategoryKey,  noteValue,screenshotPath,resultStatus) {
    const filePath = path.join(__dirname, 'parent.json');

    let jsonData = {};

    try {
        const content = await fs.readFile(filePath, 'utf-8');
        if (content.trim()) {
            jsonData = JSON.parse(content);
        }
    } catch (err) {
        // File might not exist yet, which is fine
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }

    if (!jsonData[categoryKey]) {
        jsonData[categoryKey] = {};
    }

    if (!jsonData[categoryKey][subCategoryKey]) {
        jsonData[categoryKey][subCategoryKey] = {};
    }

    jsonData[categoryKey][subCategoryKey] = {
        path: screenshotPath,
        note: noteValue
    };

    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
}
