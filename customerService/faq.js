import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';


const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/fqa`;
const pathName=`outputData/priority/${testData.companyType}`

export async function FAQs(page) {
  await addFAQs(page);
  await page.waitForTimeout(3000);
  await editFAQs(page);
}


async function addFAQs(page) {
  console.log('Enter in add FAQs');
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'FAQs' }).click();


   await page.getByRole('button', { name: 'Add FAQs' }).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ question' }).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ question' }).fill('Is after-sales service available?');
  await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).fill('Yes, we offer complete after-sales support including maintenance, troubleshooting, and replacement of faulty parts under warranty.');
  await page.getByRole('combobox', { name: 'Select Tag' }).click();
  await page.getByRole('option', { name: 'tagFAQ' }).click();
    
     await page.waitForTimeout(1000);
  await page.locator('input[type="file"]')
  .setInputFiles('./uploadTestingFiles/leads.xlsx');
   await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(3000);
  // await page.getByText('FAQ added successfully.').click();




  await page.getByRole('button', { name: 'Add FAQs' }).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ question' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ question' }).nth(1).fill('How can I raise a service request?');
  await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).nth(1).fill('You can raise a service request through our support portal or by contacting customer support.');
  await page.getByRole('combobox', { name: 'Select Tag' }).nth(1).click();
  await page.getByRole('option', { name: 'tagFAQ' }).click();
    await page.waitForTimeout(1000);
  await page.locator('input[type="file"]').nth(1)
  .setInputFiles('./uploadTestingFiles/leads.xlsx');
   await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(3000);
 

  await page.getByRole('button', { name: 'Add FAQs' }).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ question' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ question' }).nth(2).fill('How can I raise a service request?');
  await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).nth(2).fill('You can raise a service request through our support portal or by contacting customer support.');
  await page.getByRole('combobox', { name: 'Select Tag' }).nth(2).click();
  await page.getByRole('option', { name: 'tagFAQ' }).click();
    await page.waitForTimeout(1000);
  await page.locator('input[type="file"]').nth(2)
  .setInputFiles('./uploadTestingFiles/leads.xlsx');
   await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(3000);

  await page.waitForTimeout(1000);
    if (await page.getByText('FAQ added successfully').first().isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/addFAQs.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addFAQs","true",`./${screenshotPath}/addFAQs.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/addFAQs.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addFAQs","false",`./${screenshotPath}/addFAQs.png`)
    }
      
    await page.reload();
  console.log('Add FAQs Completed');
}

async function editFAQs(page) {
  console.log('Enter in edit FAQs');

   await page.getByRole('textbox', { name: 'Enter your FAQ question' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ question' }).nth(1).fill('Are your EV chargers compatible with all vehicles?');
  await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Enter your FAQ answer' }).nth(1).fill('Our EV chargers are compatible with most electric vehicles that follow standard charging protocols.');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(1000);
  if (await page.getByText('FAQ updated successfully').isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editFAQs.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editFAQs","true",`./${screenshotPath}/editFAQs.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editFAQs.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editFAQs","false",`./${screenshotPath}/editFAQs.png`)
  }
    
  await page.reload();
  console.log('Edit FAQs completed');
}