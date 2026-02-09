import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { globalExportDocument } from '../globalExportDocument';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/lead`;
const pathName=`outputData/status/${testData.companyType}`


export async function lead(page){
  // await deletePreviousLead(page);
  // await page.waitForTimeout(3000);
  await addLead(page);
  // await page.waitForTimeout(3000);
  // await editForm(page);
  // await page.waitForTimeout(3000);
  // await deleteForm(page);
  await exportLeadFileNormal(page);
}


async function addLead(page){
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Lead Management' }).click();
  await page.getByRole('button', { name: 'Quick Create' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Anjali');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Rathor');
  await page.getByRole('combobox', { name: 'Search or add title' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1226@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('8978346542');
  await page.getByRole('combobox', { name: 'Search or add industry' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).fill('sells');
  await page.getByRole('button', { name: 'Lead Source' }).click();
  await page.getByRole('option', { name: 'Email Campaign' }).click();
  await page.getByRole('button', { name: 'Lead Rating' }).click();
  await page.getByRole('option', { name: 'Warm' }).click();
  await page.getByRole('button', { name: 'Sales Agent' }).click();
  await page.getByRole('option', { name: 'Mahesh Kumar' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).click();
  await page.getByRole('textbox', { name: 'Referral' }).fill('Mahesh');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('this is very help full');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.getByText('Khamaria, Madhya Pradesh,').click();
  await page.locator('.gm-style > div > div:nth-child(2)').first().click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('khamaria');
  await page.getByRole('textbox', { name: 'Post Code' }).click();
  await page.getByRole('textbox', { name: 'Post Code' }).fill('221307');
  await page.getByRole('button', { name: 'Create Lead' }).click();
  await expect(page.getByText('Lead created successfully')).toBeVisible()
  
}

async function exportLeadFileNormal(page) {


  const [excelDownload] = await Promise.all([

  page.waitForEvent('download'),

 page.getByRole('button', { name: 'Export To Excel' }).click()

]);

await excelDownload.saveAs('downloads/leadNormal.xlsx');
const [pdfDownload] = await Promise.all([

  page.waitForEvent('download'),

  page.getByRole('button', { name: 'Export To PDF' }).click()

]);
await pdfDownload.saveAs('downloads/leadPdfNormal.pdf');
}