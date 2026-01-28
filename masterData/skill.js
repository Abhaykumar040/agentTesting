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
//  await addSkill(page);
//  await page.waitForTimeout(3000);
//  await editForm(page);
//   await page.waitForTimeout(3000);
//   await deleteForm(page);
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
async function deletePreviousProficiency(page){

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


async function addProficiency(page){
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Skill' }).click();
  await page.getByRole('tab', { name: 'Proficiency Level' }).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('beginner');
  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('beginnerD');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('Intermediate');

  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('IntermediateD');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('Expert');
  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('ExpertD');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('Delete1');
  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('Delete1D');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('Delete2');
  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('Delete2D');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();

  await page.getByRole('button', { name: 'Add Level' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).click();
  await page.getByRole('textbox', { name: 'e.g., Intermediate, Expert' }).fill('Delete3');
  await page.getByRole('textbox', { name: 'Level description' }).click();
  await page.getByRole('textbox', { name: 'Level description' }).fill('Delete3');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await expect(page.getByText('Delete1D')).toBeVisible();



}