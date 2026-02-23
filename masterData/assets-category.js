import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/assets-category`;
const pathName=`outputData/priority/${testData.companyType}`



export async function assetsCategory(page){
//  await deletePreviuosAssets(page);
//  await page.waitForTimeout(2000);
//  await addAssets(page);
//  await page.waitForTimeout(2000);
 await editAssets(page);
 await page.waitForTimeout(2000);
 await deleteAssets(page);
}


async function addAssets(page) {
  console.log("Enter in add assets");
   await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Asset Category' }).click();
  await page.getByRole('button', { name: 'Add Asset Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Assets1');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await expect(page.getByRole('cell', { name: 'Asset Management' })).toBeVisible();

  await page.getByRole('button', { name: 'Add Asset Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Assets2');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'FormA' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await expect(page.getByRole('cell', { name: 'Asset Management' }).first()).toBeVisible();

  await page.getByRole('button', { name: 'Add Asset Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Assets3');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'FormDelete' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await expect(page.getByRole('cell', { name: 'Asset Management' }).first()).toBeVisible();

  await page.getByRole('button', { name: 'Add Asset Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Assets4');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  await expect(page.getByRole('cell', { name: 'Asset Management' }).first()).toBeVisible();

  await page.getByRole('button', { name: 'Add Asset Category' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Assets5');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'FormA' }).click();
  await page.getByRole('button', { name: 'Add Category' }).click();
  // await expect(page.getByRole('cell', { name: 'Asset Management' }).first()).toBeVisible();

   await page.reload();
    await page.waitForTimeout(3000);
    
     if (await page.getByText('Assets5').isVisible()) 
       {
            await page.screenshot({ path: `./${screenshotPath}/addAssets.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"addAssets","true",`./${screenshotPath}/addAssets.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/addAssets.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"addAssets","false",`./${screenshotPath}/addAssets.png`)
          }

  await page.reload();
  await page.waitForLoadState('networkidle');
  console.log("Add asset complited");
}

async function editAssets(page){
  console.log("Enter in edit assets");
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Asset Category' }).click();
  await page.locator('tr:nth-child(1) > td:nth-child(5) > div > button:first-child svg').click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Charger Cabal');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'FormJCASInstallation' , exact: true}).click();
  await page.getByRole('button', { name: 'Update Category' }).click();
  await expect(page.getByText('Asset Category updated')).toBeVisible();

 await page.locator('tr:nth-child(2) > td:nth-child(5) > div > button:first-child svg').click();
  await page.getByRole('textbox', { name: 'Category Name' }).click();
  await page.getByRole('textbox', { name: 'Category Name' }).fill('Adaptor');
  await page.getByRole('combobox', { name: 'Form *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'FormDelete' , exact:true}).click();
  await page.getByRole('button', { name: 'Update Category' }).click();
  await expect(page.getByText('Asset Category updated')).toBeVisible();

  // await page.locator('button').nth(4).click();
  // await page.getByRole('textbox', { name: 'Category Name' }).click();
  // await page.getByRole('textbox', { name: 'Category Name' }).fill('Fast Charger');
  // await page.getByRole('combobox', { name: 'Form *' }).click();
  // await page.waitForTimeout(1000);
  // await page.getByRole('option', { name: 'FormJCASInstallation' , exact:true}).click();
  // await page.getByRole('button', { name: 'Update Category' }).click();
  // await expect(page.getByText('Asset Category updated')).toBeVisible();

   await page.reload();
    await page.waitForTimeout(3000);
    
     if (await page.getByText('Charger Cabal').isVisible()&&
         await page.getByText('Adaptor').isVisible()
        ) 
       {
            await page.screenshot({ path: `./${screenshotPath}/editAssets.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"editAssets","true",`./${screenshotPath}/editAssets.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/editAssets.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"editAssets","false",`./${screenshotPath}/editAssets.png`)
          }
  
  await page.reload();
  console.log("Edit Assets completed");

}

async function deleteAssets(page){
  console.log("Enter in delete assets");
  // await page.getByRole('button', { name: 'Master Data' }).click();
  // await page.getByRole('link', { name: 'Asset Category' }).click();
  await page.locator('button').nth(3).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  // await expect(page.getByText('Asset Category deleted')).toBeVisible();
   await page.reload();
    await page.waitForTimeout(3000);
    
     if (page.getByText('East India').isVisible()) 
       {
            await page.screenshot({ path: `./${screenshotPath}/deleteAssets.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"deleteAssets","true",`./${screenshotPath}/deleteAssets.png`)
            
          }
          else{
            await page.screenshot({ path: `./${screenshotPath}/deleteAssets.png`, fullPage: true });
            await updateOpJson(`./${screenshotPath}/`,"deleteAssets","false",`./${screenshotPath}/deleteAssets.png`)
          }
  console.log("Delete Assets completed");
}

async function deletePreviuosAssets(page){
  console.log("Enter in delete previous Assets")
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Asset Category' }).click();
  await page.waitForTimeout(3000);
  while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

    // Stop loop if total <= 0
    // if (total == 1) {
    //    await page.waitForTimeout(3000);
    // }
    if (total <= 0) {
      break;
    }
    // console.log("Before delete line 185")
   await page.locator('button').nth(4).click();
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Proceed' }).click();
    await page.waitForTimeout(2000);
    // await expect(page.locator('div').filter({ hasText: 'Asset Category deleted' }).nth(4)).toBeVisible();
   
  }
  await page.reload();
 
  console.log("delete previous assets completed");
}