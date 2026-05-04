import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/product`;
const pathName=`outputData/status/${testData.companyType}`


export async function product(page){
  await deletePreviousProduct(page);
  await page.waitForTimeout(3000);
  await addProduct(page);
  await page.waitForTimeout(3000);
  await editProduct(page);
  await page.waitForTimeout(3000);
  // await referencedProduct(page);
  // await page.waitForTimeout(3000);
  await deleteProduct(page);
}
async function deletePreviousProduct(page){
  console.log("Enter in delete previous product");
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Products' }).click();
     await page.waitForTimeout(3000);


    while( true){
     const text = await page.textContent('text=Showing');
  const match = text.match(/of\s+(\d+)\s+entries/);
  const total = match ? parseInt(match[1]) : 0;

  // Stop loop if total <= 0
  if (total <= 0) {
    break;
  }
     await page.locator('tbody tr').first().locator('td').nth(7).locator('button:has(svg)').last().click();
  await page.getByRole('menuitem', { name: 'Delete' }).first().click();
    await page.waitForTimeout(2000);
    
    // await page.waitForTimeout(1000);
    }
   
await page.reload();
console.log("Delete previous product completed");
}

async function addProduct(page){
  console.log("Enter in Add product");

  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.getByRole('button', { name: 'Product Category *' }).click();
  await page.getByRole('option', { name: 'laptop charger cable - use in' }).click();
  await page.getByRole('button', { name: 'Status Active' }).click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('Laptop charger');
  await page.getByRole('textbox', { name: 'SKU' }).click();
  await page.getByRole('textbox', { name: 'SKU' }).fill('5415156');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Laptop charger for all company');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('1254');
  await page.getByRole('textbox', { name: 'Tax (%)' }).click();
  await page.getByRole('textbox', { name: 'Tax (%)' }).fill('18');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('1');
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('6532');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.getByRole('button', { name: 'Product Category *' }).click();
  await page.getByRole('option', { name: 'laptop charger cable - use in' }).click();
  await page.getByRole('button', { name: 'Status Active' }).click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('Mobile charger');
  await page.getByRole('textbox', { name: 'SKU' }).click();
  await page.getByRole('textbox', { name: 'SKU' }).fill('5415156');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Mobile charger for all company');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('1223');
  await page.getByRole('textbox', { name: 'Tax (%)' }).click();
  await page.getByRole('textbox', { name: 'Tax (%)' }).fill('18');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('1');
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('6532');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.getByRole('button', { name: 'Product Category *' }).click();
  await page.getByRole('option', { name: 'laptop charger cable - use in' }).click();
  await page.getByRole('button', { name: 'Status Active' }).click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('EV charger');
  await page.getByRole('textbox', { name: 'SKU' }).click();
  await page.getByRole('textbox', { name: 'SKU' }).fill('5415156');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('EV charger for all company');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('12549');
  await page.getByRole('textbox', { name: 'Tax (%)' }).click();
  await page.getByRole('textbox', { name: 'Tax (%)' }).fill('18');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('1');
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('6532');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.getByRole('button', { name: 'Product Category *' }).click();
  await page.getByRole('option', { name: 'laptop charger cable - use in' }).click();
  await page.getByRole('button', { name: 'Status Active' }).click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('Wifi charger');
  await page.getByRole('textbox', { name: 'SKU' }).click();
  await page.getByRole('textbox', { name: 'SKU' }).fill('5415156');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Wifi charger for all company');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('454');
  await page.getByRole('textbox', { name: 'Tax (%)' }).click();
  await page.getByRole('textbox', { name: 'Tax (%)' }).fill('18');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('1');
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('6532');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.getByRole('button', { name: 'Product Category *' }).click();
  await page.getByRole('option', { name: 'laptop charger cable - use in' }).click();
  await page.getByRole('button', { name: 'Status Active' }).click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill(' Tourch charger');
  await page.getByRole('textbox', { name: 'SKU' }).click();
  await page.getByRole('textbox', { name: 'SKU' }).fill('5415156');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Tourch charger for all company');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('754');
  await page.getByRole('textbox', { name: 'Tax (%)' }).click();
  await page.getByRole('textbox', { name: 'Tax (%)' }).fill('18');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('1');
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('6532');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.getByRole('button', { name: 'Product Category *' }).click();
  await page.getByRole('option', { name: 'laptop charger cable - use in' }).click();
  await page.getByRole('button', { name: 'Status Active' }).click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('Smart watch charger');
  await page.getByRole('textbox', { name: 'SKU' }).click();
  await page.getByRole('textbox', { name: 'SKU' }).fill('5415156');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('smart watch charger for all company');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('1254');
  await page.getByRole('textbox', { name: 'Tax (%)' }).click();
  await page.getByRole('textbox', { name: 'Tax (%)' }).fill('18');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('1');
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('6532');
  await page.getByRole('button', { name: 'Add' }).click();

  
  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.getByRole('button', { name: 'Product Category *' }).click();
  await page.getByRole('option', { name: 'laptop charger cable - use in' }).click();
  await page.getByRole('button', { name: 'Status Active' }).click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('Deleted Product');
  await page.getByRole('textbox', { name: 'SKU' }).click();
  await page.getByRole('textbox', { name: 'SKU' }).fill('5410');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Deleted Product');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('7540');
  await page.getByRole('textbox', { name: 'Tax (%)' }).click();
  await page.getByRole('textbox', { name: 'Tax (%)' }).fill('18');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('10');
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('65320');
  await page.getByRole('button', { name: 'Add' }).click();

    await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Products' }).click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Smart watch charger', { exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/addProduct.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addProduct","true",`./${screenshotPath}/addProduct.png`,"6 products are added")

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addProduct.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addProduct","false",`./${screenshotPath}/addProduct.png`,"6 products are added")
  }
  await page.reload();
    await page.waitForTimeout(3000);

  console.log("Add product completed");
}

async function editProduct(page) {
  console.log("Enter in Edit product");

    await page.getByText('Mobile charger', { exact: true }).click();
  await page.getByRole('button', { name: 'Product Category * laptop' }).click();
  await page.getByRole('option', { name: 'Fiber optical cable - use for' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill(' Fiber Optics cable');
  await page.getByRole('textbox', { name: 'SKU' }).dblclick();
  await page.getByRole('textbox', { name: 'SKU' }).fill('6545');
  await page.getByRole('textbox', { name: 'Description' }).dblclick();
  await page.getByRole('textbox', { name: 'Description' }).fill('Fiber cable for data transmission');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('4789');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('2');
  await page.getByRole('textbox', { name: 'HSN Code' }).dblclick();
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('54852');
  await page.getByRole('button', { name: 'Status Active' }).click();
  await page.getByRole('option', { name: 'InActive' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
    await page.waitForTimeout(3000);
  await page.reload();
    await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Products' }).click();
  await page.waitForTimeout(1000);
    
  if (await page.getByText('Fiber Optics cable', { exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editProduct.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editProduct","true",`./${screenshotPath}/editProduct.png`,"Mobile charger to Fiber Optics cable")

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editProduct.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editProduct","false",`./${screenshotPath}/editProduct.png`,"Mobile charger to Fiber Optics cable")
  }
  await page.reload();
    await page.waitForTimeout(3000);
  console.log("Edit Product Completed");
}

async function deleteProduct(page) {
  console.log("Enter in delete Product");

 await page.locator('button').nth(2).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.waitForLoadState('networkidle');
  await page.reload();
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Products' }).click();
  await page.waitForTimeout(1000);
    
  if (!await page.getByText('Deleted Product', { exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteProduct.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteProduct","true",`./${screenshotPath}/deleteProduct.png`,"Product is deleted 'Deleted Product'")

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteProduct.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteProduct","false",`./${screenshotPath}/deleteProduct.png`,"Product is deleted 'Deleted Product'")
  }
  await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);
  console.log("Delete product");
}

async function referencedProduct(page) {
  console.log("Enter in referenced Product ");
  await page.getByRole('button', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.getByRole('button', { name: 'Product Category *' }).click();
  await page.getByRole('option', { name: 'EV Charger - charger for' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('Charger');
  await page.getByRole('textbox', { name: 'SKU' }).click();
  await page.getByRole('textbox', { name: 'SKU' }).fill('5654');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('All Type Charger');
  await page.getByRole('textbox', { name: 'Price *' }).click();
  await page.getByRole('textbox', { name: 'Price *' }).fill('478');
  await page.getByRole('textbox', { name: 'Tax (%)' }).click();
  await page.getByRole('textbox', { name: 'Tax (%)' }).fill('18');
  await page.getByRole('textbox', { name: 'Quantity *' }).click();
  await page.getByRole('textbox', { name: 'Quantity *' }).fill('1');
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).fill('5205');
  await page.getByRole('tab', { name: 'Referenced Products' }).click();
  await page.getByRole('button', { name: 'Attach Products' }).click();
  await page.getByRole('checkbox', { name: 'q C-' }).check();
  await page.getByRole('button', { name: 'NEXT', exact: true }).click();
  await page.getByRole('checkbox', { name: 'gg' }).check();
  await page.getByRole('checkbox', { name: 'P3' }).check();
  await page.getByRole('checkbox', { name: 'Charger', exact: true }).check();
  await page.getByRole('checkbox', { name: 'P1' }).check();
  await page.getByRole('checkbox', { name: 'DC Charger' }).check();
  await page.getByRole('button', { name: 'NEXT', exact: true }).click();
  await page.getByRole('button', { name: 'ATTACH' }).click();
  await page.waitForTimeout(2000);
    
  if (await page.getByLabel('Referenced Products').getByText('Product Category').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/referencedProduct.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"referencedProduct","true",`./${screenshotPath}/referencedProduct.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/referencedProduct.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"referencedProduct","false",`./${screenshotPath}/referencedProduct.png`)
  }
  await page.getByRole('tab', { name: 'General' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.reload();
  console.log("Referenced Product completed");
  
}