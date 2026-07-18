import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/productCategory`
const pathName=`outputData/status/${testData.companyType}`


export async function productCategory(page){
  await deletePreviousProductCategory(page);
  await page.waitForTimeout(3000);
  await addProductCategory(page);
  await page.waitForTimeout(3000);
  await editProductCategry(page);
  await page.waitForTimeout(3000);
  await deleteProductCategory(page);
}
async function deletePreviousProductCategory(page){
  console.log('Enter in delete previous product category');
    await page.getByRole('button', { name: 'Settings' }).click();
    await page.getByRole('link', { name: 'Product Category' }).click();
    await page.waitForTimeout(3000);
    while( true){
      const text = await page.textContent('text=Showing');
      const match = text.match(/of\s+(\d+)\s+entries/);
      const total = match ? parseInt(match[1]) : 0;

      // Stop loop if total <= 0
      if (total <= 0) {
      break;
      }
      
      await page.locator('button').nth(3).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.waitForTimeout(2000);

    }
    await page.waitForTimeout(3000);
await page.reload();
 await page.waitForTimeout(3000);
console.log("delete previous product category completed");
}

async function addProductCategory(page){
  console.log('Enter in add product category ');
  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Title *' }).fill('PC1');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('PC1D');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('PC1C');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('PC2');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('PC2D');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('PC2C');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('EV Charger');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('charger for electric vehical');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('best model');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('Mobile charger');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('all type of mobile charger ');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Best product');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('Power cable');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('Power cable for mobile charger or data trasfar');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('One of the best product ');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('Fiber optical cable ');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('use for data transfer ');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('best quality');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('Ethernet cable');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('use for connetion to internet via cable');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('best sells');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('laptop charger cable');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('use in laptop charger');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('cost effective');
  await page.getByRole('button', { name: 'Add' }).click();

    await page.getByRole('button', { name: 'Add Category' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('PC3');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('PC3D');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('PC3C');
  await page.getByRole('button', { name: 'Add' }).click();


  await page.waitForTimeout(3000);
  await page.reload();
  await page.getByRole('link', { name: 'Product Category' }).click();
  await page.waitForTimeout(3000);
  if (await page.getByText('use in laptop charger').first().isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/addProductCategory.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addProductCategory","true",`./${screenshotPath}/addProductCategory.png`,"Total 9 PC are added")
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addProductCategory.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addProductCategory","false",`./${screenshotPath}/addProductCategory.png`,"Total 9 PC are added")
  }
  await page.reload();
  console.log("add product Category completed");
}

async function  editProductCategry(page) {
  console.log("Enter in edit product category")
  // await page.getByRole('button', { name: 'Settings' }).click();
  // await page.getByRole('link', { name: 'Product Category' }).click();
    await page.getByText('PC2').first().click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('PC2X');
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('PC2DX');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('PC2CX');

  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);
  if (await page.getByText('PC2X' ,{ exact: true }).first().isVisible()&&
  await page.getByText('PC2DX' ,{ exact: true }).last().isVisible()&&
  await page.getByText('PC2CX' ,{ exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editProductCategry.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editProductCategry","true",`./${screenshotPath}/editProductCategry.png`,"Edit is From PC2 to PC2X")
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editProductCategry.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editProductCategry","false",`./${screenshotPath}/editProductCategry.png`,"Edit is From PC2 to PC2X")
  }
  await page.reload();
  console.log("edit product category completed");
}

async function deleteProductCategory(page) {
 console.log("Enter in delete product category");
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Product Category' }).click();
   await page.locator("table tbody tr").first().locator("td").nth(3).getByRole("button").last().click();

  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await expect(page.getByText('Product category deleted')).toBeVisible();
    await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);
  if (!await page.getByText('PC3', { exact: true }).first().isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteProductCategory.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteProductCategory","true",`./${screenshotPath}/deleteProductCategory.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteProductCategory.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteProductCategory","false",`./${screenshotPath}/deleteProductCategory.png`)
  }
    await page.waitForTimeout(3000);
  await page.reload();
    await page.waitForTimeout(3000);
  console.log("delete product category completed");
}