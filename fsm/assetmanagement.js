import fs from 'fs/promises';
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { copyFileSync } from 'fs';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath = `screenshot/${testData.companyType}/AssetManagement`
const pathName = `outputData/status/${testData.companyType}`


export async function AssetManagement(page) {
  await createAssetManagement(page);
  await page.waitForTimeout(3000);
  await createChildAssetManagement(page);
  await page.waitForTimeout(3000);
  await editAssetManagement(page);
  await page.waitForTimeout(3000);
  await deleteAssetManagement(page);
}

async function createAssetManagement(page) {
  console.log('Enter in create asset management');
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Asset Management' }).click();

  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('textbox', { name: 'Asset Name' }).click();
  await page.getByRole('textbox', { name: 'Asset Name' }).fill('Charger 20');
  await page.getByRole('textbox', { name: 'Asset Number' }).click();
  await page.getByRole('textbox', { name: 'Asset Number' }).press('Home');
  await page.getByRole('textbox', { name: 'Asset Number' }).fill('789654');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Charger for EV ');
  await page.getByRole('combobox', { name: 'Asset Category' }).click();
  await page.getByRole('option', { name: 'Assets3' }).click();
  await page.locator('.MuiSelect-select').click();
  await page.getByRole('option', { name: 'Available' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).fill('EV charger');
  await page.getByRole('textbox', { name: 'Model' }).click();
  await page.getByRole('textbox', { name: 'Model' }).fill('charger-123');
  await page.getByRole('textbox', { name: 'Serial Number' }).click();
  await page.getByRole('textbox', { name: 'Serial Number' }).press('Enter');
  await page.getByRole('textbox', { name: 'Serial Number' }).fill('C-12');
  await page.getByRole('textbox', { name: 'Installation Date' }).fill('2026-02-21');
  await page.getByRole('textbox', { name: 'Warranty Expire' }).fill('2027-10-21');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByText('Jony Rathor (akbk6551+1109@').click();
  await page.locator('.MuiSelect-select').click();
  await page.getByRole('option', { name: '+ Add New Address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Aurai');
  await page.waitForTimeout(2000);
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Ghosia');
  await page.getByRole('textbox', { name: 'Building' }).click();
  await page.getByRole('textbox', { name: 'Building' }).fill('12');
  await page.getByRole('textbox', { name: 'Floor' }).click();
  await page.getByRole('textbox', { name: 'Floor' }).fill('2');
  await page.getByRole('textbox', { name: 'Room' }).click();
  await page.getByRole('textbox', { name: 'Room' }).fill('10');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Asset' }).click();

  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Create' }).first().click();
  await page.getByRole('textbox', { name: 'Asset Name' }).click();
  await page.getByRole('textbox', { name: 'Asset Name' }).fill('Charger');
  await page.getByRole('textbox', { name: 'Asset Number' }).click();
  await page.getByRole('textbox', { name: 'Asset Number' }).fill('8964');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Mobile charger for all mobile company');
  await page.getByRole('combobox', { name: 'Asset Category' }).click();
  await page.getByRole('option', { name: 'Assets3' }).click();
  await page.locator('.MuiSelect-select').click();
  await page.getByRole('option', { name: 'Available' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).fill('Eka EV pvt Ltd');
  await page.getByRole('textbox', { name: 'Model' }).click();
  await page.getByRole('textbox', { name: 'Model' }).fill('7414');
  await page.getByRole('textbox', { name: 'Serial Number' }).click();
  await page.getByRole('textbox', { name: 'Serial Number' }).fill('1238');
  await page.getByRole('textbox', { name: 'Installation Date' }).fill('2026-02-21');
  await page.getByRole('textbox', { name: 'Warranty Expire' }).fill('2027-10-21');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByText('Mayank Rathor (akbk6551+1139@').click();
  await page.locator('.MuiSelect-select').click();
  await page.getByRole('option', { name: '+ Add New Address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Aurai');
  await page.waitForTimeout(2000);
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Ghosia');
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill('Ghosia');
  await page.getByRole('textbox', { name: 'Building' }).click();
  await page.getByRole('textbox', { name: 'Building' }).fill('79');
  await page.getByRole('textbox', { name: 'Floor' }).click();
  await page.getByRole('textbox', { name: 'Floor' }).fill('2');
  await page.getByRole('textbox', { name: 'Room' }).click();
  await page.getByRole('textbox', { name: 'Room' }).fill('9');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Asset' }).click();


  await page.waitForTimeout(2000);
  
  await page.getByRole('button', { name: 'Create' }).first().click();
  await page.getByRole('textbox', { name: 'Asset Name' }).click();
  await page.getByRole('textbox', { name: 'Asset Name' }).fill('Mobile charger');
  await page.getByRole('textbox', { name: 'Asset Number' }).click();
  await page.getByRole('textbox', { name: 'Asset Number' }).fill('8963');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Mobile charger for all mobile company');
  await page.getByRole('combobox', { name: 'Asset Category' }).click();
  await page.getByRole('option', { name: 'Assets3' }).click();
  await page.locator('.MuiSelect-select').click();
  await page.getByRole('option', { name: 'Available' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).fill('Eka EV pvt Ltd');
  await page.getByRole('textbox', { name: 'Model' }).click();
  await page.getByRole('textbox', { name: 'Model' }).fill('7414');
  await page.getByRole('textbox', { name: 'Serial Number' }).click();
  await page.getByRole('textbox', { name: 'Serial Number' }).fill('1238');
  await page.getByRole('textbox', { name: 'Installation Date' }).fill('2026-02-21');
  await page.getByRole('textbox', { name: 'Warranty Expire' }).fill('2027-10-21');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByText('Mayank Rathor (akbk6551+1139@').click();
  await page.locator('.MuiSelect-select').click();
  await page.getByRole('option', { name: '+ Add New Address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Aurai');
  await page.waitForTimeout(2000);
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Ghosia');
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill('Ghosia');
  await page.getByRole('textbox', { name: 'Building' }).click();
  await page.getByRole('textbox', { name: 'Building' }).fill('7');
  await page.getByRole('textbox', { name: 'Floor' }).click();
  await page.getByRole('textbox', { name: 'Floor' }).fill('2');
  await page.getByRole('textbox', { name: 'Room' }).click();
  await page.getByRole('textbox', { name: 'Room' }).fill('10');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Asset' }).click();

  await page.waitForTimeout(2000);
 
  await page.getByRole('button', { name: 'Create' }).first().click();
  await page.getByRole('textbox', { name: 'Asset Name' }).click();
  await page.getByRole('textbox', { name: 'Asset Name' }).fill('Delete Charger 20');
  await page.getByRole('textbox', { name: 'Asset Number' }).click();
  await page.getByRole('textbox', { name: 'Asset Number' }).fill('8965');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Mobile charger for all mobile company');
  await page.getByRole('combobox', { name: 'Asset Category' }).click();
  await page.getByRole('option', { name: 'Assets3' }).click();
  await page.locator('.MuiSelect-select').click();
  await page.getByRole('option', { name: 'Available' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).fill('Eka EV pvt Ltd');
  await page.getByRole('textbox', { name: 'Model' }).click();
  await page.getByRole('textbox', { name: 'Model' }).fill('7413');
  await page.getByRole('textbox', { name: 'Serial Number' }).click();
  await page.getByRole('textbox', { name: 'Serial Number' }).fill('1238-w');
  await page.getByRole('textbox', { name: 'Installation Date' }).fill('2026-02-21');
  await page.getByRole('textbox', { name: 'Warranty Expire' }).fill('2027-10-21');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByText('Jony Rathor (akbk6551+1119@').click();
  await page.locator('.MuiSelect-select').click();
  await page.getByRole('option', { name: '+ Add New Address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Aurai');
  await page.waitForTimeout(2000);
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Ghosia');
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill('Ghosia');
  await page.getByRole('textbox', { name: 'Building' }).click();
  await page.getByRole('textbox', { name: 'Building' }).fill('7');
  await page.getByRole('textbox', { name: 'Floor' }).click();
  await page.getByRole('textbox', { name: 'Floor' }).fill('2');
  await page.getByRole('textbox', { name: 'Room' }).click();
  await page.getByRole('textbox', { name: 'Room' }).fill('10');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Asset' }).click();


  // await page.getByText('Asset created successfully').click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Asset created successfully').isVisible()) {
    await page.screenshot({ path: `./${screenshotPath}/createAssetManagement.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "createAssetManagement", "true", `./${screenshotPath}/createAssetManagement.png`)

  }
  else {
    await page.screenshot({ path: `./${screenshotPath}/createAssetManagement.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "createAssetManagement", "false", `./${screenshotPath}/createAssetManagement.png`)
  }
  await page.reload();
  console.log('Create asset management completed');
}

async function createChildAssetManagement(page) {
  console.log('Enter in create child asset management');
  await page.locator('button').nth(3).click();
  await page.getByText('Add Child Asset').click();
  await page.getByRole('textbox', { name: 'Asset Name' }).click();
  await page.getByRole('textbox', { name: 'Asset Name' }).fill('Child Mobile charger');
  await page.getByRole('textbox', { name: 'Asset Number' }).click();
  await page.getByRole('textbox', { name: 'Asset Number' }).fill('1233');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Child mobile charger');
  await page.getByRole('combobox', { name: 'Asset Category' }).click();
  await page.getByRole('option', { name: 'Assets3' }).click();
  await page.locator('.MuiSelect-select').first().click();
  await page.getByRole('option', { name: 'Assigned' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).fill('Eka child');
  await page.getByRole('textbox', { name: 'Model' }).click();
  await page.getByRole('textbox', { name: 'Model' }).fill('78966');
  await page.getByRole('textbox', { name: 'Serial Number' }).click();
  await page.getByRole('textbox', { name: 'Serial Number' }).fill('12363');
  await page.getByRole('textbox', { name: 'Installation Date' }).fill('2026-02-21');
  await page.getByRole('textbox', { name: 'Warranty Expire' }).fill('2028-11-23');
  // await page.getByRole('button', { name: 'Ghosia Ghosia Aurai Uttar Pradesh' }).click();
  // await page.getByRole('option', { name: 'Ghosia Ghosia Aurai Uttar Pradesh' }).click();
  await page.getByRole('button', { name: 'Create Child Asset' }).click();
  // await page.getByText('Asset created successfully').click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Asset created successfully').isVisible()) {
    await page.screenshot({ path: `./${screenshotPath}/createChildAssetManagement.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "createChildAssetManagement", "true", `./${screenshotPath}/createChildAssetManagement.png`)

  }
  else {
    await page.screenshot({ path: `./${screenshotPath}/createChildAssetManagement.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "createChildAssetManagement", "false", `./${screenshotPath}/createChildAssetManagement.png`)
  }
  await page.reload();
  console.log('Create child asset management completed');
}

async function editAssetManagement(page) {
  console.log('Enter in edit asset management');
  await page.locator('div').filter({ hasText: /^Mobile charger$/ }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('textbox', { name: 'Asset Name' }).click();
  await page.getByRole('textbox', { name: 'Asset Name' }).click();
  await page.getByRole('textbox', { name: 'Asset Name' }).fill('Mobile charger Edited');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Mobile charger for all mobile company Edited');
  await page.getByRole('button', { name: 'Available' }).click();
  await page.getByRole('option', { name: 'Assigned' }).click();
  await page.getByRole('tab', { name: 'Technical Details' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).click();
  await page.getByRole('textbox', { name: 'Manufacturer' }).fill('Eka Edited');
  await page.getByRole('textbox', { name: 'Serial Number' }).click();
  await page.getByRole('textbox', { name: 'Serial Number' }).fill('12361');
  await page.getByRole('tab', { name: 'Location Details' }).click();
  await page.getByText('Selected Address Details (You').click();
  await page.getByText('Selected Address Details (You').click();
  await page.getByRole('tab', { name: 'Form' }).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByText('Asset updated successfully').click();

  await page.waitForTimeout(2000);
  if (await page.getByText('Asset updated successfully').isVisible()) {
    await page.screenshot({ path: `./${screenshotPath}/editAssetManagement.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "editAssetManagement", "true", `./${screenshotPath}/editAssetManagement.png`)

  }
  else {
    await page.screenshot({ path: `./${screenshotPath}/editAssetManagement.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "editAssetManagement", "false", `./${screenshotPath}/editAssetManagement.png`)
  }
  await page.reload();
  console.log('Edit asset management completed');
}

async function deleteAssetManagement(page) {
  console.log('Enter in deleted asset management');
  await page.locator('div').filter({ hasText: /^🏢8965Delete Charger 20$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Asset deleted successfully').isVisible()) {
    await page.screenshot({ path: `./${screenshotPath}/deleteAssetManagement.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "deleteAssetManagement", "true", `./${screenshotPath}/deleteAssetManagement.png`)

  }
  else {
    await page.screenshot({ path: `./${screenshotPath}/deleteAssetManagement.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "deleteAssetManagement", "false", `./${screenshotPath}/deleteAssetManagement.png`)
  }
  await page.reload();
  console.log('Delete asset management');
}

