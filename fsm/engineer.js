import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function skill(page){
   await deletePreviousProficiency(page);
     await page.waitForTimeout(3000);
await deletePreviousSkill(page);
 await page.waitForTimeout(3000);
await addProficiency(page);
 await page.waitForTimeout(3000);

}
async function deletePreviousSkill(page){

  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
     await page.waitForTimeout(3000);


    while( true){
     const text = await page.textContent('text=Showing');
  const match = text.match(/of\s+(\d+)\s+entries/);
  const total = match ? parseInt(match[1]) : 0;

  // Stop loop if total <= 0
  if (total <= 0) {
    break;
  }
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();

    await expect(page.getByText('Skill deleted successfully').first()).toBeVisible();
    await page.waitForTimeout(1000);
    }
   
await page.reload();
}

async function createEngineer(page){
  await page.goto('https://erp-company.zynkatech.com/login/?returnUrl=%2Fsettings%2Fcompany-setup%2F');
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Engineers' }).click();
  await page.getByRole('button', { name: 'Add New Engineer' }).click();
  await page.getByRole('button', { name: 'Title *' }).click();
  await page.getByRole('button', { name: 'Title *' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('EngineerTest');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('K');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('abhay+321@zynka.ai');
  await page.getByRole('textbox', { name: 'Contact *' }).click();
  await page.getByRole('textbox', { name: 'Contact *' }).fill('8090809080');
  await page.getByRole('textbox', { name: 'Alternate Contact' }).click();
  await page.getByRole('textbox', { name: 'Alternate Contact' }).fill('8090809080');
  await page.getByRole('combobox', { name: 'Zone *' }).click();
  await page.getByRole('option', { name: 'zone1' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('hyderabad');
  await page.getByText('Hyderabad Decan Railway').click();
  await page.getByRole('textbox', { name: 'Address Line 3' }).click();
  await page.getByRole('textbox', { name: 'Address Line 3' }).fill('near Station');
  await page.getByRole('combobox', { name: 'State *' }).click();
  await page.getByRole('option', { name: 'Uttar Pradesh' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Error: U')).toBeVisible();
  await expect(page.getByText('Engineer added successfully')).toBeVisible();

}

async function editEngineerfsm(page){
   await expect(page.getByText('EngineerTest K')).toBeVisible();
  await page.locator('div').filter({ hasText: /^EngineerTest K$/ }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name *' }).fill('EngineerTestXX');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('KX');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('1-46X');
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill('Red Hills, MalakpetX');
  await page.getByRole('textbox', { name: 'Address Line 3' }).click();
  await page.getByRole('textbox', { name: 'Address Line 3' }).fill('near StationX');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('HyderabadX');
  await page.getByRole('combobox', { name: 'Country *' }).click();
  await page.getByRole('combobox', { name: 'Country *' }).fill('NEPAL');
  await page.getByRole('option', { name: 'Nepal' }).click();
  await page.getByRole('combobox', { name: 'State *' }).click();
  await page.getByRole('option', { name: 'Bagmati' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://erp-company.zynkatech.com/fsm/engineers/');
  await expect(page.getByText('Engineer updated successfully')).toBeVisible();
  await expect(page.getByText('EngineerTestXX KX')).toBeVisible();
  await page.getByRole('row', { name: 'EngineerTestXX KX Engineer is' }).getByLabel('Email not verified').click();
  await expect(page.getByText('Onboarding email resent')).toBeVisible();
}

async function engineerDelete(page){
    await page.getByRole('row', { name: 'Neeraj Joshia Engineer is' }).getByLabel('Delete').click();
  await expect(page.getByText('Engineer deleted successfully')).toBeVisible();
}

