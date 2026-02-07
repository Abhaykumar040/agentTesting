import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/customerfsm`;
const pathName=`outputData/status/${testData.companyType}`


export async function customerfsm(page){
  //  await deletePreviousCustomer(page);
    //  await page.waitForTimeout(3000);
    //  await customerDownload(page);
    //    await page.waitForTimeout(3000);
    await createFsmCustomer(page);
    await page.waitForTimeout(3000);
    await editFsmCustomer(page);
    await page.waitForTimeout(3000);
    await deleteFsmCustomer(page);
    await page.waitForTimeout(3000);
    await addressCreateFsmCustomer(page);
    await page.waitForTimeout(3000);
    await jobCreateFsmCustomer(page);
    await page.waitForTimeout(3000);
    await cyclicJobCreateFsmCustomer(page);
    await page.waitForTimeout(3000);
    await contactDetailsFsmCustomer(page);
    await page.waitForTimeout(3000);
    await documentsUploadFsmCustomer(page);



}
async function createFsmCustomer(page){
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Abhay');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('k');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('abhay+423@zynka.ai');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9876543211');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.getByText('Khamaria, Uttar Pradesh, India').click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('E hill company');
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill('khamaria road');
  await page.getByRole('textbox', { name: 'Address Line 3' }).click();
  await page.getByRole('textbox', { name: 'Address Line 3' }).fill('garden');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('radio', { name: 'Commercial' }).check();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Rahul');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('K');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email *' }).fill('abhay+4322@zynka.ai');
  await page.getByRole('textbox', { name: 'Person In Charge *' }).click();
  await page.getByRole('textbox', { name: 'Person In Charge *' }).fill('Anjali');
  await page.getByRole('textbox', { name: 'Dealer/Company Name *' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Name *' }).fill('Zynka2');
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).fill('2122');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9876543212');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('aurai');
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('near chauraha');
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill('near shop');
  await page.getByRole('textbox', { name: 'Address Line 3' }).click();
  await page.getByRole('textbox', { name: 'Address Line 3' }).fill('under bypass');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('abhay');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('abhay@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('9876543211');
  await page.getByRole('button', { name: 'Add Contact' }).click();
  await expect(page.getByRole('button', { name: 'abhay Primary Contact Expand' })).toBeVisible();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await expect(page.getByText('Added Customer successfully')).toBeVisible();
  await expect(page.getByText('Anjali')).toBeVisible();
  await expect(page.getByText('Abhay k', { exact: true })).toBeVisible();
  await expect(page.getByText('abhay+4322@zynka.ai')).toBeVisible();
  await expect(page.getByText('abhay+423@zynka.ai')).toBeVisible();
  await expect(page.getByText('Zynka2')).toBeVisible();
  await page.getByRole('button', { name: 'Export To Excel' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export To PDF' }).click();
  const download = await downloadPromise;
}

async function editFsmCustomer(page){
  await page.getByRole('cell', { name: 'Anjali' }).click();
  await page.getByRole('textbox', { name: 'Person In charge *' }).click();
  await page.getByRole('textbox', { name: 'Person In charge *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Person In charge *' }).fill('AnjaliX');
  await page.getByRole('button', { name: 'Dealer Information' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Name *' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Name *' }).fill('Zynka2X');
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).fill('21221');
  await page.getByRole('textbox', { name: 'Trade Name' }).click();
  await page.getByRole('textbox', { name: 'Trade Name' }).fill('X');
  await page.getByRole('button', { name: 'Dealer Type' }).click();
  await page.getByRole('option', { name: 'Dealer' }).click();
  await page.getByRole('button', { name: 'Facilities' }).click();
  await page.getByRole('option', { name: 'Bike Zone' }).click();
  await page.getByRole('button', { name: 'Contact Information' }).click();
  await page.getByRole('textbox', { name: 'Primary Contact Number *' }).click();
  await page.getByRole('textbox', { name: 'Primary Contact Number *' }).fill('9876543211');
  await page.getByRole('textbox', { name: 'Primary Email *' }).click();
  await page.getByRole('textbox', { name: 'Primary Email *' }).fill('abhay+4322@zynka.ai1');
  await page.getByRole('textbox', { name: 'Alternate Contact Numbers *' }).click();
  await page.getByRole('textbox', { name: 'Alternate Contact Numbers *' }).fill('9876543213');
  await page.getByRole('textbox', { name: 'Alternate Emails *' }).click();
  await page.getByRole('textbox', { name: 'Alternate Emails *' }).fill('ABHAY@ZYNKA.AI');
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('near chaurahaX');
  await page.getByRole('textbox', { name: 'Address Line 2 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2 *' }).fill('near shopX');
  await page.getByRole('textbox', { name: 'Address Line 3 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 3 *' }).fill('under bypassX');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('AuraiX');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('Uttar PradeshX');
  await page.getByRole('textbox', { name: 'Country *' }).click();
  await page.getByRole('textbox', { name: 'Country *' }).fill('IndiaX');
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('221300');
  await page.getByRole('button', { name: 'Management Information' }).click();
  await page.getByRole('textbox', { name: 'Area Manager' }).click();
  await page.getByRole('textbox', { name: 'Area Manager' }).fill('X');
  await page.getByRole('textbox', { name: 'Regional Manager' }).click();
  await page.getByRole('textbox', { name: 'Regional Manager' }).fill('X');
  await page.getByRole('button', { name: 'Tax Information' }).click();
  await page.getByRole('textbox', { name: 'Tax Type', exact: true }).click();
  await page.getByRole('textbox', { name: 'Tax Type', exact: true }).fill('X');
  await page.getByRole('textbox', { name: 'Tax Type Number' }).click();
  await page.getByRole('textbox', { name: 'Tax Type Number' }).fill('1');
  await page.getByRole('textbox', { name: 'PAN', exact: true }).click();
  await page.getByRole('textbox', { name: 'PAN', exact: true }).fill('PIUYR1234T');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Customer updated successfully')).toBeVisible();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await expect(page.getByText('AnjaliX')).toBeVisible();
  await page.locator('div').filter({ hasText: /^AnjaliX$/ }).click();
  await expect(page.getByRole('textbox', { name: 'Person In charge *' })).toBeVisible();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('button', { name: 'Management Information' }).click();
  await page.getByRole('button', { name: 'Tax Information' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
}

async function deleteFsmCustomer(page){
   await page.getByRole('row', { name: 'AnjaliX abhay+4322@zynka.ai' }).getByLabel('Email not verified').click();
  await expect(page.getByText('Onboarding email resent')).toBeVisible();
  await page.getByRole('row', { name: 'Abhay k abhay+423@zynka.ai' }).getByLabel('Delete').click();
  await expect(page.getByText('Customer deleted successfully')).toBeVisible();
}

async function addressCreateFsmCustomer(page){
 await page.locator('div').filter({ hasText: /^AnjaliX$/ }).click();
  await page.getByRole('tab', { name: 'Address' }).click();
  await expect(page.getByText('No site addresses found')).toBeVisible();
  await expect(page.getByText('near chauraha, near shopunder')).toBeVisible();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('jaunpura');
  await page.getByText('Jaunpur Bus Stand, Husainabad').click();
  await page.getByRole('textbox', { name: 'Address Line 3' }).click();
  await page.getByRole('textbox', { name: 'Address Line 3' }).fill('nearJaunpurBusStand');
  await page.getByRole('checkbox', { name: 'Use as a billing address?' }).check();
  await page.getByRole('checkbox', { name: 'Make this default shipping' }).check();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Address Added successfully').first()).toBeVisible();
  await expect(page.getByText('Site AddressDefault AddressRoadways, Husainabad,')).toBeVisible();
  await expect(page.getByText('Billing AddressDefault AddressRoadways, Husainabad,')).toBeVisible();
}
async function jobCreateFsmCustomer(page){
    await page.getByRole('tab', { name: 'Job Details' }).click();
  await page.getByRole('link', { name: 'Add New Job' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Roadways Husainabad,' }).click();
  await page.getByRole('combobox', { name: 'Asset' }).click();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Charger Maintenance' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).fill('jobDes1');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'P3 - Low' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('JobComment1');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.getByRole('option', { name: 'Created - Created' }).click();
  await page.getByRole('textbox', { name: 'Required Start Date & Time *' }).click();
  await page.getByRole('option', { name: 'Choose Thursday, February 5th,' }).click();
  await page.getByText('14:30').click();
  await page.getByRole('textbox', { name: 'Required End Date & Time *' }).click();
  await page.getByRole('option', { name: 'Choose Thursday, February 5th,' }).click();
  await page.getByText('00:0000:1500:3000:4501:0001:').click();
  await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: 'Engineer' }).click();
  await page.getByRole('option', { name: 'David' }).click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await expect(page.getByText('Job created successfully')).toBeVisible();
  await page.getByRole('tab', { name: 'Job Details' }).click();
  await expect(page.getByText('Charger Maintenance')).toBeVisible();
  await expect(page.getByText('AnjaliX')).toBeVisible();
  await expect(page.getByText('21221')).toBeVisible();
}

async function cyclicJobCreateFsmCustomer(page){
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('hardware issue');
  await page.getByRole('button', { name: 'Select Address' }).click();
  await page.getByRole('option', { name: 'Roadways Husainabad,' }).click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('cyclicJobDes1');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Charger Maintenance' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'P1' }).click();
  await page.getByRole('combobox', { name: 'Asset' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Weekly' }).click();
  await page.getByRole('button', { name: 'Mon' }).click();
  await page.getByRole('button', { name: 'Create Job' }).click();
  await expect(page.getByText('Cyclic job created')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Weekly Jobs 1 Jobs' })).toBeVisible();
  await page.getByRole('button', { name: 'Weekly Jobs 1 Jobs' }).click();
  await expect(page.getByText('Due')).toBeVisible();
}

async function contactDetailsFsmCustomer(page){
   await page.getByRole('tab', { name: 'Additional Info' }).click();
  await page.getByRole('tab', { name: 'Contact Details' }).click();
  await expect(page.getByRole('button', { name: 'abhay Primary Contact Delete' })).toBeVisible();
  await page.getByRole('button', { name: 'Add Contact' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Prabhakar');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('abhay+1@zynka.ai');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('9876543212');
  await page.getByRole('textbox', { name: 'Additional notes about this' }).click();
  await page.getByRole('textbox', { name: 'Additional notes about this' }).fill('notesDuringCustomerDetailsindisideTheCustomer');
  await page.getByRole('button', { name: 'Add Contact' }).click();
  await expect(page.getByRole('button', { name: 'Prabhakar Primary Contact New' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Customer updated successfully')).toBeVisible();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.locator('div').filter({ hasText: /^AnjaliX$/ }).click();
  await page.getByRole('tab', { name: 'Contact Details' }).click();
  await expect(page.getByRole('button', { name: 'Prabhakar Primary Contact' })).toBeVisible();
}

async function documentsUploadFsmCustomer(page){
    await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('button', { name: 'Browse Files' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Customer updated successfully')).toBeVisible();
  await page.getByRole('button', { name: 'Cancel' }).click();
}
