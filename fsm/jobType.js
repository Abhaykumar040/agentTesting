import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/jobType`
const pathName=`outputData/status/${testData.companyType}`


export async function jobType(page){
  // await deletePreviousJobType(page);
  // await page.waitForTimeout(3000);
   await createJobType(page);
   await page.waitForTimeout(3000);
   await editJobType(page);
   await page.waitForTimeout(3000);
   await deleteJobType(page);

}
async function createJobType(page){
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Job Type' }).click();
  await page.getByRole('link', { name: 'Job Type' }).click();
  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('pre-Installaton1');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('pre-installation');
  await page.locator('.MuiInputBase-root.MuiOutlinedInput-root').click();
  await page.getByRole('option', { name: 'Installation Form.' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'job' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'job', exact: true }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'Job_Default' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'installation', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.reload();
  await page.waitForLoadState('networkidle');

}
async function editJobType(page){
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Job Type' }).click();
  await page.getByRole('row', { name: 'Pre-Installaton1 pre-' }).getByLabel('Edit').click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installaton Process');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('Installation Process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'Repair Job Form' }).click();
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'SERVICE FORM' }).click();
  await page.getByRole('button', { name: 'Priority * job' }).click();
  await page.getByRole('option', { name: 'Job_Default' }).click();
  await page.getByRole('button', { name: 'Status Profile * Job_Default' }).click();
  await page.getByRole('option', { name: 'Job_Default' }).click();
  await page.getByRole('button', { name: 'Skill installation' }).click();
  await page.getByRole('option', { name: 'Installation Site Inspection' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.getByText('Job type updated successfully')).toBeVisible()
  await page.reload();
  await page.waitForLoadState('networkidle');
  
}
async function deleteJobType(page){
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Job Type' }).click();
  // await page.locator('div').filter({ hasText: 'Job type updated successfully' }).nth(4).click();
  await page.getByRole('row', { name: 'Pre-Installaton1 pre-' }).getByLabel('Delete').click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  
  await expect(page.getByText('Job type deleted successfully')).toBeVisible()
  await page.reload();
  await page.waitForLoadState('networkidle');
}


// async function deletePreviousJobType(page){

//   await page.getByRole('button', { name: 'Field Service' }).click();
//   await page.getByRole('link', { name: 'Job Type' }).click();
//      await page.waitForTimeout(3000);


//     while( true){
//      const text = await page.textContent('text=Showing');
//   const match = text.match(/of\s+(\d+)\s+entries/);
//   const total = match ? parseInt(match[1]) : 0;

//   // Stop loop if total <= 0
//   if (total <= 0) {
//     break;
//   }
//   await page.getByRole('row', { name: 'Pre-Installaton1 pre-' }).getByLabel('Delete').click();
//   await page.getByRole('button', { name: 'Proceed' }).click();

//   await expect(page.getByText('Job type deleted successfully')).toBeVisible()
//     await page.waitForTimeout(1000);
//     }
   
// await page.reload();
// }

