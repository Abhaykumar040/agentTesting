import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/customerinC_Service`;
const pathName=`outputData/priority/${testData.companyType}`

export async function customerInC_service(page) {
  // await addCustomerInC_Service(page);
  // // await page.waitTimeout(3000);
  // await emailCustomerInC_Service(page)
  // await page.waitTimeout(3000);
  // await editCustomerInC_Service(page);
  // await page.waitTimeout(2000);
  await deleteCustomerInC_Service(page);

}

async function addCustomerInC_Service(page) {
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Ajay');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Singh');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1167@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9876543210');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria');
  await page.getByText('Khamaria, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('khamaria E-hill company');
  // await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  // await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('221306');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'NameS' }).click();
  await page.getByRole('textbox', { name: 'NameS' }).fill('dsfasd');
  await page.getByRole('textbox', { name: 'AddressS' }).click();
  await page.getByRole('textbox', { name: 'AddressS' }).fill('fagdgfa');
  await page.getByRole('tab', { name: 'FormC1Installation' }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.reload();
  await page.waitForLoadState('networkidle');
}


async function emailCustomerInC_Service(page){
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click()

//  await page.getByRole('row', { name: 'Shujit Dubey akbk6551+1143@' }).getByLabel('Edit').click();
  await page.getByRole('row', { name: 'Ajay Singh akbk6551+1167@' }).getByLabel('Email not verified').click();
  await expect(page.getByText('Onboarding email resent')).toBeVisible();
  await page.reload();
  await page.waitForLoadState('networkidle');
}

async function editCustomerInC_Service(page){
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click()
 await page.getByRole('row', { name: 'Ajay Singh akbk6551+1167@' }).getByLabel('Edit').click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Anil');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Dubey');
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('khamaria Market');
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill('Khalavapur');
  await page.getByRole('button', { name: 'Tax Information' }).click();
  await page.getByRole('textbox', { name: 'Tax Type', exact: true }).click();
  await page.getByRole('textbox', { name: 'Tax Type', exact: true }).fill('GST');
  await page.getByRole('textbox', { name: 'Tax Type Number' }).click();
  await page.getByRole('textbox', { name: 'Tax Type Number' }).fill('656945');
  await page.getByRole('textbox', { name: 'PAN' }).click();
  await page.getByRole('textbox', { name: 'PAN' }).fill('KJIPM2313');
  await page.getByRole('textbox', { name: 'PAN' }).press('ControlOrMeta+h');
  await page.getByRole('textbox', { name: 'PAN' }).fill('KJIPM2313H');
  await page.getByRole('button', { name: 'Contact Information' }).click();
  await page.getByRole('button', { name: 'Contact Preference' }).click();
  await page.getByRole('option', { name: 'Phone' }).click();
  await page.getByRole('button', { name: 'Best Time to Contact' }).click();
  await page.getByRole('option', { name: 'Morning' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('tab', { name: 'Address' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByText('Billing AddressBilling').click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria');
  await page.getByText('Khamaria, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('khamaria E-hill company');
  await page.getByText('Make this default billing').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.reload();
  await page.waitForLoadState('networkidle');
}

async function deleteCustomerInC_Service(page) {
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click()
  await page
  .locator('tbody tr')
  .first()
  .getByRole('button', { name: 'Delete' })
  .click();
  await page.getByText('Customer deleted successfully').click();
}

async function deletePreviousCustomerC_Service(page){
    console.log("Enter In delete Previous proficiency ")
      await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
      await page.getByRole('tab', { name: 'Proficiency Level' }).click();
  
     await page.waitForTimeout(3000);


    while( true){
    await page.waitForTimeout(1000);
  if ( await page
  .getByRole('heading', { name: 'No Proficiency Levels' })
  .isVisible()) {
    break;
  }
await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
    
    }
   
await page.reload();
}