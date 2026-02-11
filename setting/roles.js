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
 await page.waitForTimeout(3000);
 await editRole(page);
 await page.waitForTimeout(3000);
 await deleteRole(page);
}

async function addRole(page) {
  console.log("Enter in add role");
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
  await page.waitForTimeout(1000);
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
  await page.waitForTimeout(1000);
  await page.locator('input[name="access.12.create"]').check({ force: true });
// await page.locator('input[name="access.12.create"]').check({ force: true });
  
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
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Master data handling');
  await page.getByRole('main').getByRole('button', { name: 'Customer Service' }).click();
    await page.waitForTimeout(1000);
  await page.locator('input[name="access.11.create"]').check();
  await page.locator('input[name="access.11.delete"]').check();
  await page.locator('input[name="access.20.create"]').check();
  await page.locator('input[name="access.20.create"]').click();
  await page.locator('input[name="access.20.create"]').check();
  await page.locator('input[name="access.28.create"]').check();
  await page.locator('input[name="access.28.update"]').check();
  await page.locator('input[name="access.29.create"]').check();
  await page.locator('input[name="access.29.update"]').check();
  await page.locator('input[name="access.29.delete"]').check();
  await page.locator('input[name="access.31.create"]').check();
  await page.locator('input[name="access.31.update"]').check();
  await page.locator('input[name="access.31.delete"]').check();
  await page.locator('input[name="access.32.create"]').check();
  await page.locator('input[name="access.32.update"]').check();
  await page.locator('input[name="access.32.delete"]').check();
  await page.locator('input[name="access.33.create"]').check();
  await page.locator('input[name="access.33.update"]').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Field Service Engineer')).toBeVisible();

  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Customer Service');
  await page.getByRole('main').getByRole('button', { name: 'Customer Service' }).click();
    await page.waitForTimeout(1000);
  await page.locator('input[name="access.11.create"]').first().check();
  await page.locator('input[name="access.11.delete"]').check();
  await page.locator('input[name="access.20.create"]').check();
  await page.locator('input[name="access.20.create"]').click();
  await page.locator('input[name="access.20.create"]').check();
  await page.locator('input[name="access.28.create"]').check();
  await page.locator('input[name="access.28.update"]').check();
  await page.locator('input[name="access.29.create"]').check();
  await page.locator('input[name="access.29.update"]').check();
  await page.locator('input[name="access.29.delete"]').check();
  await page.locator('input[name="access.31.create"]').check();
  await page.locator('input[name="access.31.update"]').check();
  await page.locator('input[name="access.31.delete"]').check();
  await page.locator('input[name="access.32.create"]').check();
  await page.locator('input[name="access.32.update"]').check();
  await page.locator('input[name="access.32.delete"]').check();
  await page.locator('input[name="access.33.create"]').check();
  await page.locator('input[name="access.33.update"]').check();
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Field Service Manager');
  await page.getByRole('main').getByRole('button', { name: 'Sales' }).click();
    await page.waitForTimeout(1000);
  await page.locator('input[name="access.12.create"]').first().check();
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
  await page.reload();
  await page.waitForTimeout(3000);
  
  if (await page.getByText('Field Service Engineer').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/addRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addRole","true",`./${screenshotPath}/addRole.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addRole","false",`./${screenshotPath}/addRole.png`)
  }
  await page.reload();
  console.log("Add role completed");
}

async function editRole(page) {
  console.log("Enter in edit role");
  await page.locator('tr:nth-child(5) > td:nth-child(4) > .MuiBox-root > button').first().click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).dblclick();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).press('ControlOrMeta+ArrowRight');
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).press('ControlOrMeta+ArrowRight');
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Sales Executive ');
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).press('ControlOrMeta+ArrowLeft');
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).press('ControlOrMeta+ArrowLeft');
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).press('ControlOrMeta+ArrowLeft');
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Edited Sales Executive ');
  await page.getByRole('main').getByRole('button', { name: 'Sales' }).click();
  await page.locator('input[name="access.13.update"]').check();
  await page.locator('input[name="access.34.update"]').check();
  await page.locator('input[name="access.34.update"]').uncheck();
  await page.locator('input[name="access.34.update"]').check();
  await page.locator('input[name="access.37.update"]').uncheck();
  await page.getByRole('button', { name: 'Submit' }).click();
  
  // await expect(page.getByText('Edited Sales Executive')).toBeVisible();
  // await expect(page.getByText('Role updated successfully')).toBeVisible();
  await page.reload();
  await page.waitForTimeout(3000);
  
  if (await page.getByText('Edited Sales Executive', { exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editRole","true",`./${screenshotPath}/editRole.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editRole","false",`./${screenshotPath}/editRole.png`)
  }
  await page.reload();
  console.log("Edit role completed");
}
async function deleteRole(page) {
  console.log("Enter in delete role");
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Roles' }).click();
  await page.locator('button').nth(3).first().click();
  await expect(page.getByText('Role deleted successfully')).toBeVisible();
  await page.reload();
  await page.waitForTimeout(3000);
  
  if (!await page.getByText('Field Service Manager').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteRole","true",`./${screenshotPath}/deleteRole.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteRole","false",`./${screenshotPath}/deleteRole.png`)
  }
  await page.reload();
  console.log("delete role completed");
}

async function deletePreviuosRole(page){
  console.log("Enter in delete previous role");
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
   
  // await page.locator('button').nth(3).first().click();
  await page.locator('button').nth(3).first().click();
  await page.waitForTimeout(1000);
  await expect(page.getByText('Role deleted successfully').first()).toBeVisible();
    
  }
  await page.reload();
  await page.waitForTimeout(3000);
  
  if (!await page.getByText('Field Service Manager').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/deletePreviuosRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deletePreviuosRole","true",`./${screenshotPath}/deletePreviuosRole.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deletePreviuosRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deletePreviuosRole","false",`./${screenshotPath}/deletePreviuosRole.png`)
  }
  await page.reload();
  await page.reload();
  console.log("delete previous role completed");
  
}
