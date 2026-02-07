import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function internalJob(page){
 await createInternalJob(page);
 await page.waitForTimeout(3000);
 await editInternalJob(page);
 await page.waitForTimeout(3000);
 await deleteInternalJob(page);
//  await page.waitForTimeout(3000);
//  await exportInternalJOb(page);
//  await page.waitForTimeout(3000);
 
}


async function createInternalJob(page){
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('button', { name: 'Jobs' }).click();
  await page.getByRole('link', { name: 'Internal Jobs' }).click();
  await page.getByRole('link', { name: 'Add New Job' }).click();
  await page.locator('div').filter({ hasText: /^Commercial$/ }).first().click();
  await page.getByRole('option', { name: 'Individual' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Shujit Dubey' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Bhadohi' }).click();
  await page.getByRole('combobox', { name: 'Asset' }).click();
  await page.getByText('Charger', { exact: true }).click();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation6' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).fill('kjhfdgh');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'midum - medium' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('fdgdg');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.getByRole('option', { name: 'installed - installed' }).click();
  await page.getByRole('button', { name: 'Zone' }).click();
  await page.getByRole('option', { name: 'NI' }).click();
  await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: 'Engineer' }).click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.getByRole('option', { name: 'Installation' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.getByRole('option', { name: 'suhani singh' }).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
   await expect(page.getByText('Job created successfully')).toBeVisible()
     await page.reload();
  await page.waitForLoadState('networkidle');
}


async function editInternalJob(page){
    await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('button', { name: 'Jobs' }).click();
 await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-16ed1nj').first().click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('installation job');
  await page.getByRole('button', { name: 'Priority midum - medium' }).click();
  await page.getByRole('option', { name: 'High - Fast service' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('installation fast');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('tab', { name: 'Job Details' }).click();
  await page.getByRole('tab', { name: 'Agent Notes' }).click();
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('installtion Job tiltle');
  await page.getByRole('textbox', { name: 'Note' }).click();
  await page.getByRole('textbox', { name: 'Note' }).fill('Installtion is very important for today');
  await page.getByRole('button', { name: 'Save Note' }).click();
  await page.getByRole('button', { name: 'Back to list' }).click();
    await page.reload();
  await page.waitForLoadState('networkidle');

}
async function deleteInternalJob(page){
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('button', { name: 'Jobs' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').click();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();
  await page.waitForLoadState('networkidle');
}
async function exportInternalJOb(page){

  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
     await page.waitForTimeout(3000);


    while( true){
     const text = await page.textContent('text=Showing');
  const match = text.match(/of\s+(\d+)\s+entries/);
  const total = match ? parseInt(match[1]) : 0;

  // Stop loop if total <= 0
  if (total <= 0) {
    break;
  }
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();

    await expect(page.getByText('Skill deleted successfully').first()).toBeVisible();
    await page.waitForTimeout(1000);
    }
   
await page.reload();
}

