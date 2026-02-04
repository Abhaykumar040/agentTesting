import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';




export async function customer(page){
 await deletePreviuosCustomer(page);
 await page.waitForTimeout(3000);
 await addCustomer(page);
 await page.waitForTimeout(3000);
//  await editCustomer(page);
//  await page.waitForTimeout(3000);
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
  await page.getByRole('tab', { name: 'Assets' }).click();
  await page.getByRole('tab', { name: 'Installation Completion Form' }).click();
  await page.getByRole('tab', { name: 'Pre-Installation Checklist' }).click();
  await page.getByRole('checkbox', { name: 'Power Supply Available' }).check();
  await page.getByRole('checkbox', { name: 'Earthing Available' }).check();
  await page.getByRole('checkbox', { name: 'MCB / RCCB Installed' }).check();
  await page.getByRole('checkbox', { name: 'Load Capacity Verified' }).check();
  await page.getByText('Internet / SIM Available').click();
  await page.getByText('Parking Space Available').click();
  await page.getByRole('button', { name: 'Installation Location Type' }).click();
  await page.getByRole('option', { name: 'Public Charging Station' }).click();
  await page.getByRole('textbox', { name: 'Site Remarks' }).click();
  await page.getByRole('textbox', { name: 'Site Remarks' }).fill('Installlation');
  await page.locator('canvas').click({
    position: {
      x: 180,
      y: 73
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 116,
      y: 81
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 180,
      y: 108
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 92,
      y: 124
    }
  });
  await page.getByRole('button', { name: 'Save Signature' }).click();
  await page.getByRole('button', { name: 'Choose date' }).click();
  await page.getByRole('gridcell', { name: '2', exact: true }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await expect(page.getByRole('cell', { name: '-' }).first()).toBeVisible();


  // await page.getByRole('button', { name: 'Sales' }).click();
  // await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Sanjya');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk1120@gmail.com');
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
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1120@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724789');
  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803942');
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
  await page.getByRole('tab', { name: 'Assets' }).click();
  await page.getByRole('tab', { name: 'Installation Completion Form' }).click();
  await page.getByRole('tab', { name: 'Pre-Installation Checklist' }).click();
  await page.getByRole('checkbox', { name: 'Power Supply Available' }).check();
  await page.getByRole('checkbox', { name: 'Earthing Available' }).check();
  await page.getByRole('checkbox', { name: 'MCB / RCCB Installed' }).check();
  await page.getByRole('checkbox', { name: 'Load Capacity Verified' }).check();
  await page.getByText('Internet / SIM Available').click();
  await page.getByText('Parking Space Available').click();
  await page.getByRole('button', { name: 'Installation Location Type' }).click();
  await page.getByRole('option', { name: 'Public Charging Station' }).click();
  await page.getByRole('textbox', { name: 'Site Remarks' }).click();
  await page.getByRole('textbox', { name: 'Site Remarks' }).fill('Installlation');
  await page.locator('canvas').click({
    position: {
      x: 180,
      y: 73
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 116,
      y: 81
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 180,
      y: 108
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 92,
      y: 124
    }
  });
  await page.getByRole('button', { name: 'Save Signature' }).click();
  await page.getByRole('button', { name: 'Choose date' }).click();
  await page.getByRole('gridcell', { name: '2', exact: true }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await expect(page.getByRole('cell', { name: '-' }).first()).toBeVisible();
  await page.reload();
  await page.waitForLoadState('networkidle');
  

}
async function editCustomer(page){
  
}
async function deleteCustomer(page){
  
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Delete' }).first().click();
  await expect(page.getByText('Customer deleted successfully')).toBeVisible();

}