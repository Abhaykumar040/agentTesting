import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';


const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/roles`
const pathName=`outputData/priority/${testData.companyType}`

export async function roles(page){
 await deletePreviuosRole(page);
 await page.waitForTimeout(3000);
 await addRole(page);
//  await page.waitForTimeout(3000);
//  await editRole(page);
//  await page.waitForTimeout(3000);
//  await deleteRole(page);
}

async function addRole(page) {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Roles' }).click();
  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Sales manager');
  await page.getByRole('main').getByRole('button', { name: 'Sales' }).click();
  await page.locator('input[name="access.12.create"]').check();
  await page.locator('input[name="access.12.update"]').check();
  await page.locator('input[name="access.12.delete"]').check();
  await page.locator('input[name="access.13.create"]').check();
  await page.locator('input[name="access.14.create"]').check();
  await page.locator('input[name="access.14.update"]').check();
  await page.locator('input[name="access.14.delete"]').check();
  await page.locator('input[name="access.34.create"]').check();
  await page.locator('input[name="access.34.update"]').check();
  await page.locator('input[name="access.34.delete"]').check();
  await page.locator('input[name="access.35.create"]').check();
  await page.locator('input[name="access.35.update"]').check();
  await page.locator('input[name="access.36.create"]').check();
  await page.locator('input[name="access.36.update"]').check();
  await page.locator('input[name="access.36.delete"]').check();
  await page.locator('input[name="access.37.create"]').check();
  await page.locator('input[name="access.37.update"]').check();
  await page.locator('input[name="access.37.delete"]').check();
  await page.locator('input[name="access.13.delete"]').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Sales manager')).toBeVisible();

  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Sales Executive');
  await page.getByRole('main').getByRole('button', { name: 'Sales' }).click();
  await page.locator('input[name="access.12.create"]').check();
  await page.locator('input[name="access.12.update"]').check();
  await page.locator('input[name="access.12.delete"]').check();
  await page.locator('input[name="access.13.create"]').check();
  await page.locator('input[name="access.14.create"]').check();
  await page.locator('input[name="access.14.update"]').check();
  await page.locator('input[name="access.14.delete"]').check();
  await page.locator('input[name="access.34.create"]').check();
  await page.locator('input[name="access.34.update"]').check();
  await page.locator('input[name="access.34.delete"]').check();
  await page.locator('input[name="access.35.create"]').check();
  await page.locator('input[name="access.35.update"]').check();
  await page.locator('input[name="access.36.create"]').check();
  await page.locator('input[name="access.36.update"]').check();
  await page.locator('input[name="access.36.delete"]').check();
  await page.locator('input[name="access.37.create"]').check();
  await page.locator('input[name="access.37.update"]').check();
  await page.locator('input[name="access.37.delete"]').check();
  await page.locator('input[name="access.13.delete"]').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Sales Executive')).toBeVisible();

  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Field Service Engineer');
  await page.getByRole('main').getByRole('button', { name: 'Sales' }).click();
  await page.locator('input[name="access.12.create"]').check();
  await page.locator('input[name="access.12.update"]').check();
  await page.locator('input[name="access.12.delete"]').check();
  await page.locator('input[name="access.13.create"]').check();
  await page.locator('input[name="access.14.create"]').check();
  await page.locator('input[name="access.14.update"]').check();
  await page.locator('input[name="access.14.delete"]').check();
  await page.locator('input[name="access.34.create"]').check();
  await page.locator('input[name="access.34.update"]').check();
  await page.locator('input[name="access.34.delete"]').check();
  await page.locator('input[name="access.35.create"]').check();
  await page.locator('input[name="access.35.update"]').check();
  await page.locator('input[name="access.36.create"]').check();
  await page.locator('input[name="access.36.update"]').check();
  await page.locator('input[name="access.36.delete"]').check();
  await page.locator('input[name="access.37.create"]').check();
  await page.locator('input[name="access.37.update"]').check();
  await page.locator('input[name="access.37.delete"]').check();
  await page.locator('input[name="access.13.delete"]').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Field Service Engineer')).toBeVisible();

  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Field Service Manager');
  await page.getByRole('main').getByRole('button', { name: 'Sales' }).click();
  await page.locator('input[name="access.12.create"]').check();
  await page.locator('input[name="access.12.update"]').check();
  await page.locator('input[name="access.12.delete"]').check();
  await page.locator('input[name="access.13.create"]').check();
  await page.locator('input[name="access.14.create"]').check();
  await page.locator('input[name="access.14.update"]').check();
  await page.locator('input[name="access.14.delete"]').check();
  await page.locator('input[name="access.34.create"]').check();
  await page.locator('input[name="access.34.update"]').check();
  await page.locator('input[name="access.34.delete"]').check();
  await page.locator('input[name="access.35.create"]').check();
  await page.locator('input[name="access.35.update"]').check();
  await page.locator('input[name="access.36.create"]').check();
  await page.locator('input[name="access.36.update"]').check();
  await page.locator('input[name="access.36.delete"]').check();
  await page.locator('input[name="access.37.create"]').check();
  await page.locator('input[name="access.37.update"]').check();
  await page.locator('input[name="access.37.delete"]').check();
  await page.locator('input[name="access.13.delete"]').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Field Service Manager')).toBeVisible();
  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Roles' }).click();
}
async function editRole(page) {
   await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Roles' }).click();
  await page.locator('button').nth(2).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Sales Service');
  await page.getByRole('main').getByRole('button', { name: 'Sales' }).click();
  await page.locator('input[name="access.33.view"]').uncheck();
  await page.locator('input[name="access.33.update"]').uncheck();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Role updated successfully')).toBeVisible();
}
async function deleteRole(page) {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Roles' }).click();
  await page.locator('button').nth(3).first().click();
  await expect(page.getByText('Role deleted successfully')).toBeVisible();
}

async function deletePreviuosRole(page){
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Roles' }).click();
  await page.waitForTimeout(3000);
  while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

    // Stop loop if total <= 0
    if (total == 1) {
       await page.waitForTimeout(3000);
    }
    if (total <= 0) {
      break;
    }
   
  await page.locator('button').nth(3).first().click();
  // await expect(page.getByText('Role deleted successfully')).toBeVisible();
    
  }
  await page.reload();
  
}
