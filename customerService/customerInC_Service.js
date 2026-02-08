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
  // await page.waitTimeout(3000);
  await emailCustomerInC_Service(page)
  // await page.waitTimeout(3000);
  // await editCustomerInC_Service(page);
}

async function addCustomerInC_Service(page) {
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Manjesh');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Raje');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1443@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9093738371');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('khamaria');
  await page.getByText('Khamaria, Uttar Pradesh, India').click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('khamaria');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('heading', { name: 'Installation' }).click();
  await page.getByRole('tab', { name: 'Assets' }).click();
  await page.getByRole('tab', { name: 'Installation Completion Form' }).click();
  await page.getByRole('tab', { name: 'Pre-Installation Checklist' }).click();
  await page.locator('label').filter({ hasText: 'Power Supply Available' }).click();
  await page.getByRole('checkbox', { name: 'Earthing Available' }).check();
  await page.getByRole('checkbox', { name: 'MCB / RCCB Installed' }).check();
  await page.locator('label').filter({ hasText: 'Load Capacity Verified' }).click();
  await page.getByText('Internet / SIM Available').click();
  await page.locator('label').filter({ hasText: 'Parking Space Available' }).click();
  await page.locator('label').filter({ hasText: 'Mounting Area Ready' }).click();
  await page.getByRole('button', { name: 'Installation Location Type' }).click();
  await page.getByRole('listbox', { name: 'Installation Location Type *' }).click();
  await page.getByRole('option', { name: 'Residential' }).click();
  await page.getByRole('textbox', { name: 'Site Remarks' }).click();
  await page.getByRole('textbox', { name: 'Site Remarks' }).click({
    modifiers: ['Shift']
  });
  await page.getByRole('textbox', { name: 'Site Remarks' }).fill('Instalation');
  // await page.getByRole('button', { name: 'Click To Upload Files' }).click();
  // await page.getByRole('button', { name: 'Click To Upload Files' }).setInputFiles('iron-man-red-glow-5120x2880-24338.png');
  await page.locator('canvas').click({
    position: {
      x: 230,
      y: 70
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 194,
      y: 102
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 168,
      y: 98
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 156,
      y: 72
    }
  });
  await page.getByRole('button', { name: 'Save Signature' }).click();
  await page.getByRole('button', { name: 'Choose date' }).click();
  await page.getByRole('gridcell', { name: '13' }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.reload();
  await page.waitForLoadState('networkidle');
}


async function emailCustomerInC_Service(page){
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click()

//  await page.getByRole('row', { name: 'Shujit Dubey akbk6551+1143@' }).getByLabel('Edit').click();
  await page.getByRole('row', { name: 'Shujit Dubey akbk6551+1143@' }).getByLabel('Email not verified').click();
  await expect(page.getByText('Onboarding email resent')).toBeVisible();
  await page.reload();
  await page.waitForLoadState('networkidle');
}

async function editCustomerInC_Service(page){
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click()
  await page.getByRole('row', { name: 'Shujit Dubey akbk6551+1143@' }).getByLabel('Edit').click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Shujit');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('');
  await page.getByRole('textbox', { name: 'Last Name *' }).press('Enter');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Dubey');
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Jhapatpur');
  await page.getByRole('button', { name: 'Tax Information' }).click();
  await page.getByRole('textbox', { name: 'PAN' }).click();
  await page.getByRole('textbox', { name: 'PAN' }).fill('JILPM1231L');
  await page.getByRole('button', { name: 'Contact Information' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('tab', { name: 'Address' }).click();
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByText('Billing AddressBilling').click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Market');
  await page.getByRole('listitem').filter({ hasText: 'Khamaria market, Khamariya,' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Khamaria Market');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('tab', { name: 'Support Tickets' }).click();
  await page.getByRole('cell').filter({ hasText: /^$/ }).first().click();
  await page.getByRole('tab', { name: 'Additional Info' }).click();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('button', { name: 'Browse Files' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.reload();
  await page.waitForLoadState('networkidle');
}