import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function eSignSetting(page){
 await page.getByRole('button', { name: 'E-Sign' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('spinbutton', { name: 'Default link expiry (days)' }).click();
  await page.getByRole('spinbutton', { name: 'Default link expiry (days)' }).fill('03');
  await page.getByRole('textbox', { name: 'Default email message' }).click();
  await page.getByRole('textbox', { name: 'Default email message' }).fill('heyThanks its Setting Configuration');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Settings saved').click();
  await expect(page.getByText('Settings saved')).toBeVisible();

}
