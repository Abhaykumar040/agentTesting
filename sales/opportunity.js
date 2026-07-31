import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { run } from '../check';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function opportunity(page){
  await run('opportunities');
  await addOpportunity(page);
  await page.waitForTimeout(3000);
 await emailSendOpportunity(page);
 
  await editOpportunity(page);
  await lostOpportunityInside(page);
  
}
async function deletePreviuosStatus(page){
 console.log("Enter in delete previous status")
  await page.getByRole('button', { name: 'Settings' }).click();
   await page.getByRole('link', { name: 'Status Profile' }).click();
   await page.waitForTimeout(3000);

    while( true){
     const text = await page.textContent('text=Showing');
  const match = text.match(/of\s+(\d+)\s+entries/);
  const total = match ? parseInt(match[1]) : 0;

  // Stop loop if total <= 0
  if (total <= 0) {
    break;
  }
 await page.locator('table tbody tr').first().click();
 await page.waitForTimeout(1000);
 await page.locator('table tbody tr').nth(1).click();
 while(true){
let priorityCount=await page.getByLabel('Delete').count();
if(priorityCount==0)break;
await page.locator('table tbody tr').nth(1).getByLabel('Delete').click();
await page.getByRole('button', { name: 'Proceed' }).click();
await page.waitForTimeout(1000);
 }
  await expect(page.getByText('Status profile deleted').first()).toBeVisible();

  }
   
  await page.reload();
  console.log("delete previous status completed");

}
async function addOpportunity(page){
    await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Opportunities' }).click();
  await page.getByRole('button', { name: 'New Opportunity' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).fill('He want ERP');
  await page.getByRole('textbox', { name: 'Account / Company' }).click();
  await page.getByRole('textbox', { name: 'Account / Company' }).fill('Apple');
  await page.getByRole('textbox', { name: 'Contact person' }).click();
  await page.getByRole('textbox', { name: 'Contact person' }).fill('Ramesh');
  await page.getByRole('textbox', { name: 'Contact email' }).click();
  await page.getByRole('textbox', { name: 'Contact email' }).fill('akbk6551+4601@gmail.com');
  await page.getByRole('textbox', { name: 'Contact phone' }).click();
  await page.getByRole('textbox', { name: 'Contact phone' }).fill('987655555');
  await page.getByRole('spinbutton', { name: 'Expected revenue' }).click();
  await page.getByRole('spinbutton', { name: 'Expected revenue' }).fill('012000');
  await page.getByRole('textbox', { name: 'Expected close date' }).fill('2026-07-10');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Descriopn For ERP sale');
   
  await page.getByRole('button', { name: 'Create Opportunity' }).click();
  await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'New Opportunity' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).click();
  await page.getByRole('textbox', { name: 'Topic' }).fill('He want ERP');
  await page.getByRole('textbox', { name: 'Account / Company' }).click();
  await page.getByRole('textbox', { name: 'Account / Company' }).fill('Apple');
  await page.getByRole('textbox', { name: 'Contact person' }).click();
  await page.getByRole('textbox', { name: 'Contact person' }).fill('Ramesh');
  await page.getByRole('textbox', { name: 'Contact email' }).click();
  await page.getByRole('textbox', { name: 'Contact email' }).fill('akbk6551+4601@gmail.com');
  await page.getByRole('textbox', { name: 'Contact phone' }).click();
  await page.getByRole('textbox', { name: 'Contact phone' }).fill('987655555');
  await page.getByRole('spinbutton', { name: 'Expected revenue' }).click();
  await page.getByRole('spinbutton', { name: 'Expected revenue' }).fill('012000');
  await page.getByRole('textbox', { name: 'Expected close date' }).fill('2026-07-10');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Descriopn For ERP sale');
   
  await page.getByRole('button', { name: 'Create Opportunity' }).click();
  await page.waitForTimeout(3000);

  //add by leads
   await page.getByRole('link', { name: 'Lead Management' }).click();
  await page.getByRole('cell', { name: 'EV Mobile Pvt Ltd' }).click();
  await page.getByRole('button', { name: 'Convert to Opportunity' }).click();
    await page.waitForTimeout(3000);
     await page.getByRole('link', { name: 'Opportunities' }).click();
  await expect(page.getByRole('button', { name: 'sells EV Mobile' })).toBeVisible();
await page.waitForTimeout(3000);
}
async function editOpportunity(page){


  
  await expect(page.locator('div').filter({ hasText: /^Expected valueINR 12,000$/ }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Advance to Qualified' }).click();

  await expect(page.locator('div').filter({ hasText: /^Probability25%$/ }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Advance to Proposal' }).click();
  await expect(page.locator('div').filter({ hasText: /^Probability50%$/ }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Advance to Negotiation' }).click();
  await page.locator('div').filter({ hasText: /^Probability75%$/ }).first().click();
  await expect(page.locator('div').filter({ hasText: /^Probability75%$/ }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Mark Won / Convert' }).click();
  await expect(page.locator('div').filter({ hasText: /^Probability100%$/ }).first()).toBeVisible();
  await page.getByRole('link', { name: 'Opportunities' }).click();
}

async function lostOpportunityInside(page){
await page.waitForTimeout(5000);
    
 await page.locator('div[role="button"][aria-roledescription="draggable"]').first().click();



  await expect(page.locator('div').filter({ hasText: /^Probability10%$/ }).first()).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Expected valueINR 12,000$/ }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Advance to Qualified' }).click();

  await expect(page.locator('div').filter({ hasText: /^Probability25%$/ }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Advance to Proposal' }).click();
  await expect(page.locator('div').filter({ hasText: /^Probability50%$/ }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Advance to Negotiation' }).click();
  await page.locator('div').filter({ hasText: /^Probability75%$/ }).first().click();
  await expect(page.locator('div').filter({ hasText: /^Probability75%$/ }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Mark Lost' }).click();
  await page.getByRole('textbox', { name: 'Reason for loss' }).click();
  await page.getByRole('textbox', { name: 'Reason for loss' }).fill('He did not want now');
  await page.getByRole('button', { name: 'Mark Lost' }).click();


await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Opportunities' }).click();
await page.waitForTimeout(2000);


if (
    await page.getByText('INR 12,000100%').isVisible() &&
    await page.getByText('INR 12,0000%').isVisible() &&
    await page.getByText('sells' ).isVisible()
) {
    await page.screenshot({ path: `./${screenshotPath}/oppotunityCreateAndWinLost.png`, fullPage: true });
    await updateOpJson(
        `./${screenshotPath}/`,
        "oppotunityCreateAndWinLost",
        "true",
        `./${screenshotPath}/oppotunityCreateAndWinLost.png`
    );
} else {
    await page.screenshot({ path: `./${screenshotPath}/oppotunityCreateAndWinLost.png`, fullPage: true });
    await updateOpJson(
        `./${screenshotPath}/`,
        "oppotunityCreateAndWinLost",
        "false",
        `./${screenshotPath}/oppotunityCreateAndWinLost.png`
    );
}

await page.reload();
}
async function emailSendOpportunity(page){
   await page.locator('div[role="button"][aria-roledescription="draggable"]').first().click();
  await page.getByRole('button', { name: 'Send email' }).click();
  await page.getByRole('textbox', { name: 'Cc (optional)' }).click();
  await page.getByRole('textbox', { name: 'Cc (optional)' }).fill('akbk6551+1231@gmail.com');
  await page.getByRole('button', { name: 'Template (optional) — Select' }).click();
  await page.getByRole('option', { name: 'Template-LeadX' }).click();
  await page.getByRole('button', { name: 'Send email' }).click();
}