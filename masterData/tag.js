import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';


const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/tag`;
const pathName=`outputData/priority/${testData.companyType}`

export async function tag(page){


}
async function addTag(page){
await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Tag Manager' }).click();
  await page.getByRole('button', { name: 'Add Tag' }).click();
  await page.getByRole('button', { name: 'Select Feature' }).click();
  await page.getByRole('option', { name: 'Customer' }).click();
  await page.getByRole('textbox', { name: 'Tag name' }).click();
  await page.getByRole('textbox', { name: 'Tag name' }).fill('tagForCustomer');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByText('Select FeatureCustomerTag namePick A ColorSave').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Add Tag' }).click();
  await page.getByRole('button', { name: 'Select Feature' }).click();
  await page.getByRole('option', { name: 'Charger' }).click();
  await page.getByRole('textbox', { name: 'Tag name' }).click();
  await page.getByRole('textbox', { name: 'Tag name' }).fill('tagCharger1');
  await page.locator('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-1sthncq').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Add Tag' }).click();
  await page.getByRole('button', { name: 'Select Feature' }).click();
  await page.getByRole('option', { name: 'Engineer' }).click();
  await page.getByRole('textbox', { name: 'Tag name' }).click();
  await page.getByRole('textbox', { name: 'Tag name' }).fill('tagEng');
  await page.locator('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-1r9omxi').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('TagEng')).toBeVisible();
  await expect(page.getByText('TagCharger1')).toBeVisible();
  await expect(page.getByText('TagForCustomer')).toBeVisible();
  await page.locator('.icons').first().click();
  await page.getByRole('textbox', { name: 'Tag name' }).click();
  await page.getByRole('textbox', { name: 'Tag name' }).fill('tagEng12');
  await page.getByRole('button', { name: 'Select Feature Engineer' }).click();
  await page.getByRole('option', { name: 'Installation' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('TagEng12')).toBeVisible();
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('button', { name: 'Jobs' }).click();
  await page.getByRole('button', { name: 'Jobs' }).click();
  await page.getByRole('button', { name: 'Field Service' }).click();
}
async function editTag(page){
    
}
async function deleteTag(page){
    
}

