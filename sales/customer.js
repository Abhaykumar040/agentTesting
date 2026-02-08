import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';


const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/customer`;
const pathName=`outputData/priority/${testData.companyType}`

export async function customer(page){
 await deletePreviuosCustomer(page);
 await page.waitForTimeout(3000);
 await addCustomer(page);
 await page.waitForTimeout(3000);
 await editCustomer(page);
 await page.waitForTimeout(3000);
 await deleteCustomer(page);
}


async function deletePreviuosCustomer(page){
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.waitForTimeout(3000);
  while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

    // // Stop loop if total <= 0
    // if (total == 1) {
    //    await page.waitForTimeout(3000);
    // }
    if (total <= 0) {
      break;
    }
     await page.getByRole('button', { name: 'Delete' }).first().click();
     await page.waitForTimeout(2000);
     await expect(page.getByText('Customer deleted successfully')).toBeVisible();
  }
await page.reload();
}
async function addCustomer(page){
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Jony');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk1119@gmail.com');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1119@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724787');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803948');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();


  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Anil');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk1136@gmail.com');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1136@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9123456789');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039481');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();

 await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Mayank');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk1139@gmail.com');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1139@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9123456790');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039482');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();
  
 await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Kolpit');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk1140@gmail.com');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1140@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724791');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039483');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click(); 

 await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Sonu');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk1141@gmail.com');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email *' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1140@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724792');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039484');
  await page.getByRole('button', { name: 'Select Access Method' }).click();
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
  await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Create Customer' }).click();
  

  await page.reload();
  await page.waitForLoadState('networkidle');
  

}
async function editCustomer(page){
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('row', { name: 'Kolpit Rathor akbk6551+1140@' }).getByLabel('Edit').click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Arjun');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Singh');
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria E-hill company');
  await page.getByRole('button', { name: 'Tax Information' }).click();
  await page.getByRole('button', { name: 'Contact Information' }).click();
  await page.getByRole('button', { name: 'Contact Preference' }).click();
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Best Time to Contact' }).click();
  await page.getByRole('option', { name: 'All Day' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('tab', { name: 'Address' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByText('Billing AddressBilling').click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.getByRole('listitem').filter({ hasText: /^Khamaria, Uttar Pradesh, India$/ }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('E-Hill company');
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('E-Hill company');
  await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('tab', { name: 'Quotation' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'E-Hill company Khamaria Uttar' }).click();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product Quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('tab', { name: 'Invoice' }).click();
  await page.getByRole('link', { name: 'Add Invoice' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'E-Hill company Khamaria Uttar' }).click();
  await page.getByRole('checkbox', { name: 'UPI Transfer' }).check();
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'COVER' }).first().click();
  await page.locator('textarea[name="note"]').click();
  await page.locator('textarea[name="note"]').fill('Cover product Invoice');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('tab', { name: 'Additional Info' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  // await page.getByRole('tab', { name: 'Documents' }).click();
  // await page.getByRole('button', { name: 'Browse Files' }).click();
  // await page.getByRole('button', { name: 'Upload Files' }).click();
  // await page.getByRole('button', { name: 'Save' }).click();
  await page.reload();
}
async function deleteCustomer(page){
  
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Delete' }).first().click();
  await expect(page.getByText('Customer deleted successfully')).toBeVisible();
  await page.reload();
}