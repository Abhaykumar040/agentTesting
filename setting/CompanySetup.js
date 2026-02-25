import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/CompanySetup`
const pathName=`outputData/status/${testData.companyType}`


export async function companySetup(page){
await editCompanySetup(page);
 await page.waitForTimeout(3000);
 await quotationSettingInCompanySetup(page);
 await page.waitForTimeout(3000);
 await invoiceSettingInCompanySetup(page);
 await page.waitForTimeout(3000);
 await bellingAddressInCompanySetup(page);

}


async function editCompanySetup(page){
  console.log('Enter in edit company setup completed');
   await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Company Setup' }).click();
  await page.getByRole('textbox', { name: 'Company Name *' }).click();
  await page.getByRole('textbox', { name: 'Company Name *' }).fill('EV charge Pvt Ltd');
  await page.getByRole('textbox', { name: 'Registration Number' }).click();
  await page.getByRole('textbox', { name: 'Registration Number' }).press('End');
  await page.getByRole('textbox', { name: 'Registration Number' }).fill('654650');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Bhadohi Ghosia');
  await page.getByRole('button', { name: 'Open' }).nth(2).click();
  await page.getByRole('combobox', { name: 'Currency *' }).fill('rupee');
  await page.getByRole('option', { name: 'Indian Rupee (INR)' }).click();
  await page.getByRole('textbox', { name: 'Company Phone *' }).click();
  await page.getByRole('textbox', { name: 'Company Phone *' }).fill('');
  await page.getByRole('textbox', { name: 'Company Phone *' }).press('ControlOrMeta+z');
  await page.getByRole('textbox', { name: 'Company Phone *' }).fill('4154756477');
  await page.getByRole('textbox', { name: 'Alternate Contact Numbers' }).click();
  await page.getByRole('textbox', { name: 'Alternate Contact Numbers' }).fill('7896325411');
  await page.getByRole('textbox', { name: 'PAN', exact: true }).click();
  await page.getByRole('textbox', { name: 'PAN', exact: true }).fill('JUPMS3818I');
  await page.getByRole('textbox', { name: 'Tax Type Number' }).click();
  await page.getByRole('textbox', { name: 'Tax Type Number' }).fill('222');
  await page.getByRole('button', { name: 'Open' }).nth(4).click();
  await page.getByRole('option', { name: 'Razorpay' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
 
  await page.waitForTimeout(2000);
  if (await page.getByText('Company updated successfully').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editCompanySetup1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editCompanySetup1","true",`./${screenshotPath}/editCompanySetup1.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editCompanySetup1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editCompanySetup1","false",`./${screenshotPath}/editCompanySetup1.png`)
  } 
  await page.reload();

  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.waitForTimeout(2000);
  if (await page.getByRole('heading', { name: 'EV charge Pvt Ltd' }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editCompanySetup2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editCompanySetup2","true",`./${screenshotPath}/editCompanySetup2.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editCompanySetup2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editCompanySetup2","false",`./${screenshotPath}/editCompanySetup2.png`)
  } 
  await page.reload();
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Company Setup' }).click();
  await page.getByRole('textbox', { name: 'Company Name *' }).click();
  await page.getByRole('textbox', { name: 'Company Name *' }).fill('EV charge');
  await page.getByRole('textbox', { name: 'Registration Number' }).click();
  await page.getByRole('textbox', { name: 'Registration Number' }).fill('654654');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Bhadohi');
  await page.getByRole('combobox', { name: 'Currency *' }).click();
  await page.getByRole('combobox', { name: 'Currency *' }).fill('Unite');
  await page.getByRole('option', { name: 'United States Dollar (USD)' }).click();
  await page.getByRole('textbox', { name: 'Company Phone *' }).click();
  await page.getByRole('textbox', { name: 'Company Phone *' }).fill('4154756478');
  await page.getByRole('textbox', { name: 'Alternate Contact Numbers' }).click();
  await page.getByRole('textbox', { name: 'Alternate Contact Numbers' }).fill('');
  await page.getByRole('textbox', { name: 'PAN', exact: true }).click();
  await page.getByRole('textbox', { name: 'PAN', exact: true }).fill('');
  await page.getByRole('textbox', { name: 'Tax Type Number' }).click();
  await page.getByRole('textbox', { name: 'Tax Type Number' }).fill('');
  await page.getByRole('combobox', { name: 'Payment Type' }).click();
  await page.getByRole('option', { name: 'Stripe' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Company updated successfully').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editCompanySetup3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editCompanySetup3","true",`./${screenshotPath}/editCompanySetup3.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editCompanySetup3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editCompanySetup3","false",`./${screenshotPath}/editCompanySetup3.png`)
  } 
  await page.reload();
  console.log('edit company setup completed');
}

async function quotationSettingInCompanySetup(page){
  console.log('Enter in quotation setting in company setup');
    await page.getByRole('tab', { name: 'Quotation Settings' }).click();
  await page.getByRole('textbox', { name: 'Terms and Conditions' }).click();
  await page.getByRole('textbox', { name: 'Terms and Conditions' }).fill('Term and condition ');
  await page.getByRole('textbox', { name: 'Notes' }).click();
  await page.getByRole('textbox', { name: 'Notes' }).fill('never return ');
  await page.getByRole('button', { name: 'Save' }).click();
 await page.waitForTimeout(2000);
  if (await page.getByText('Company updated successfully').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/quotationSettingInCompanySetup1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"quotationSettingInCompanySetup1","true",`./${screenshotPath}/quotationSettingInCompanySetup1.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/quotationSettingInCompanySetup1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"quotationSettingInCompanySetup1","false",`./${screenshotPath}/quotationSettingInCompanySetup1.png`)
  } 
  await page.reload();


  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Term and condition').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/quotationSettingInCompanySetup2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"quotationSettingInCompanySetup2","true",`./${screenshotPath}/quotationSettingInCompanySetup2.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/quotationSettingInCompanySetup2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"quotationSettingInCompanySetup2","false",`./${screenshotPath}/quotationSettingInCompanySetup2.png`)
  } 
  await page.reload();

  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Company Setup' }).click();
  await page.getByRole('tab', { name: 'Quotation Settings' }).click();
  await page.getByRole('textbox', { name: 'Terms and Conditions' }).click();
  await page.getByRole('textbox', { name: 'Terms and Conditions' }).fill('');
  await page.getByRole('textbox', { name: 'Notes' }).click();
  await page.getByRole('textbox', { name: 'Notes' }).fill('');
  await page.getByRole('button', { name: 'Save' }).click();
  // await page.getByText('Company updated successfully').click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Company updated successfully').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/quotationSettingInCompanySetup3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"quotationSettingInCompanySetup3","true",`./${screenshotPath}/quotationSettingInCompanySetup3.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/quotationSettingInCompanySetup3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"quotationSettingInCompanySetup3","false",`./${screenshotPath}/quotationSettingInCompanySetup3.png`)
  } 
  await page.reload();

  console.log('Quotation setting in company completed');
}

async function invoiceSettingInCompanySetup(page) {
  console.log('Enter in invoice setting in company setup');
  await page.getByRole('tab', { name: 'Invoice Settings' }).click();
  await page.getByRole('textbox', { name: 'Terms and Conditions' }).click();
  await page.getByRole('textbox', { name: 'Terms and Conditions' }).fill('Term and conditionss');
  await page.getByRole('textbox', { name: 'Notes' }).click();
  await page.getByRole('textbox', { name: 'Notes' }).fill('dgfa');
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.waitForTimeout(2000);
  if (await page.getByText('Company updated successfully').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/invoiceSettingInCompanySetup1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"invoiceSettingInCompanySetup1","true",`./${screenshotPath}/invoiceSettingInCompanySetup1.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/invoiceSettingInCompanySetup1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"invoiceSettingInCompanySetup1","false",`./${screenshotPath}/invoiceSettingInCompanySetup1.png`)
  } 
  await page.reload();
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.getByRole('link', { name: 'Add Invoice' }).click();

   await page.waitForTimeout(2000);
  if (await page.getByText('Term and conditionss').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/invoiceSettingInCompanySetup2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"invoiceSettingInCompanySetup2","true",`./${screenshotPath}/invoiceSettingInCompanySetup2.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/invoiceSettingInCompanySetup2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"invoiceSettingInCompanySetup2","false",`./${screenshotPath}/invoiceSettingInCompanySetup2.png`)
  } 
  await page.reload();
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Company Setup' }).click();
  await page.getByRole('tab', { name: 'Invoice Settings' }).click();
  await page.getByRole('textbox', { name: 'Terms and Conditions' }).click();
  await page.getByRole('textbox', { name: 'Terms and Conditions' }).fill('');
  await page.getByText('dgfaNotes').click();
  await page.getByRole('textbox', { name: 'Notes' }).fill('');
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(2000);
  if (await page.getByText('Company updated successfully').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/invoiceSettingInCompanySetup3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"invoiceSettingInCompanySetup3","true",`./${screenshotPath}/invoiceSettingInCompanySetup3.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/invoiceSettingInCompanySetup3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"invoiceSettingInCompanySetup3","false",`./${screenshotPath}/invoiceSettingInCompanySetup3.png`)
  } 
  await page.reload();
  console.log('Invoice setting in company setup completed');
}

async function bellingAddressInCompanySetup(page){
  console.log('Enter in belling address in company setup');
  await page.getByRole('tab', { name: 'Billing Address' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Bhadohi');
  await page.getByRole('textbox', { name: 'Address Line 2 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2 *' }).fill('Mundera market');
  await page.getByRole('textbox', { name: 'Address Line 3' }).click();
  await page.getByRole('textbox', { name: 'Address Line 3' }).fill('mukundpatti');
  await page.getByRole('textbox', { name: 'Pin Code / Postal Code *' }).click();
  await page.getByRole('textbox', { name: 'Pin Code / Postal Code *' }).fill('211013');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('Bhadohi');
  await page.getByRole('button', { name: 'Save' }).click(); 
  await page.waitForTimeout(2000);
  if (await page.getByText('Company updated successfully').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/bellingAddressInCompanySetup1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"bellingAddressInCompanySetup1","true",`./${screenshotPath}/bellingAddressInCompanySetup1.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/bellingAddressInCompanySetup1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"bellingAddressInCompanySetup1","false",`./${screenshotPath}/bellingAddressInCompanySetup1.png`)
  } 
  await page.reload();
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
   await page.waitForTimeout(2000);
  if (await page.getByText('Bhadohi', { exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/bellingAddressInCompanySetup2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"bellingAddressInCompanySetup2","true",`./${screenshotPath}/bellingAddressInCompanySetup2.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/bellingAddressInCompanySetup2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"bellingAddressInCompanySetup2","false",`./${screenshotPath}/bellingAddressInCompanySetup2.png`)
  } 
  await page.reload();
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Company Setup' }).click();
  await page.getByRole('tab', { name: 'Billing Address' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Praygraj');
  await page.getByRole('textbox', { name: 'Address Line 2 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2 *' }).fill('Mundera mandi');
  await page.getByRole('textbox', { name: 'Address Line 3' }).click();
  await page.getByRole('textbox', { name: 'Address Line 3' }).fill('');
  await page.getByRole('textbox', { name: 'Pin Code / Postal Code *' }).click();
  await page.getByRole('textbox', { name: 'Pin Code / Postal Code *' }).fill('211011');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('Prayagraj');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Company updated successfully').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/bellingAddressInCompanySetup3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"bellingAddressInCompanySetup3","true",`./${screenshotPath}/bellingAddressInCompanySetup3.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/bellingAddressInCompanySetup3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"bellingAddressInCompanySetup3","false",`./${screenshotPath}/bellingAddressInCompanySetup3.png`)
  } 
  await page.reload();
  console.log('belling address in company setup completed');
}