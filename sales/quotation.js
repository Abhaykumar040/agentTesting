import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/quotation`;
const pathName=`outputData/priority/${testData.companyType}`


export async function Quotation(page){
  // await deletePreviuosQuotation(page);
  // await page.waitForTimeout(3000);
  await createQuotation(page);
  await page.waitForTimeout(3000);
  await approveQuotation(page);
  await page.waitForTimeout(3000);
  await rejectQuotation(page);
  await page.waitForTimeout(3000);
  await rejectedByCustomerQuotation(page);
  await page.waitForTimeout(3000);
  await copyQuotation(page);
  await page.waitForTimeout(3000);
  await acceptQuotation(page);
  await page.waitForTimeout(3000);
  await sendQuotation(page);
  await page.waitForTimeout(3000);
  await editQuotation(page);
  await page.waitForTimeout(3000);
  await deleteQuotation(page);
}




async function createQuotation(page){
  console.log('Enter in create quotation');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Smart watch charger' }).first().click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  //  await page.getByRole('combobox').first().click();
  // await page.waitForTimeout(1000);
  // await page.getByRole('option', { name: 'Wifi charger' }).click();
  // await page.getByRole('button', { name: 'Add Item' }).click();
  //  await page.getByRole('combobox').first().click();
  // await page.waitForTimeout(1000);
  // await page.getByRole('option', { name: 'Tourch charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  // await expect(page.getByText('Quotation created successfully')).toBeVisible();

  
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
    await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Tourch charger' }).first().click();
  await page.getByRole('button', { name: 'Add Item' }).click();
   await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Wifi charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();


  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
    await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Wifi charger' }).first().click();
   await page.getByRole('button', { name: 'Add Item' }).click();
   await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Tourch charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
    await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Tourch charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Quotation created successfully')).toBeVisible();
  await page.reload();
 await page.waitForTimeout(3000);

  if (!await page.getByText('Mayank Rathor',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/createQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"createQuotation","true",`./${screenshotPath}/createQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/createQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"createQuotation","false",`./${screenshotPath}/createQuotation.png`)
  }
  await page.reload();
  console.log('create quotation completed');
}

async function approveQuotation(page) {
  console.log('Enter in approve quotation');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Wifi charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  // await expect(page.getByText('Quotation updated successfully')).toBeVisible();

  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Tourch charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();

  await page.reload();
 await page.waitForTimeout(3000);

  if (!await page.getByText('Mayank Rathor',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/approveQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"approveQuotation","true",`./${screenshotPath}/approveQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/approveQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"approveQuotation","false",`./${screenshotPath}/approveQuotation.png`)
  }
  await page.reload();
  console.log('approve quotation complited');
  
}

async function acceptQuotation(page) {
  console.log('Enter in accept quotation');
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Smart watch charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Accept' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();

  
    await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Smart watch charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Accept' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();
 await page.reload();
 await page.waitForTimeout(3000);

  if (!await page.getByText('Mayank Rathor',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/acceptQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"acceptQuotation","true",`./${screenshotPath}/acceptQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/acceptQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"acceptQuotation","false",`./${screenshotPath}/acceptQuotation.png`)
  }
  await page.reload();
  console.log('accept quotation complited');
 
}

async function rejectQuotation(page){
  console.log('Enter in reject quotation');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Tourch charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
   await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Reject' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('THis is not right quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();
  await page.reload();
 await page.waitForTimeout(3000);

  if (!await page.getByText('Mayank Rathor',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/rejectQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"rejectQuotation","true",`./${screenshotPath}/rejectQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/rejectQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"rejectQuotation","false",`./${screenshotPath}/rejectQuotation.png`)
  }
  await page.reload();
  console.log('reject quotation complited');
}

async function rejectedByCustomerQuotation(page) {
  console.log('Enter in reject by customer quotation');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Wifi charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
   await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
   await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Approve' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Reject' }).click();
  await expect(page.getByText('Quotation updated successfully')).toBeVisible();
  await page.reload();
 await page.waitForTimeout(3000);

  if (!await page.getByText('Mayank Rathor',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/rejectedByCustomerQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"rejectedByCustomerQuotation","true",`./${screenshotPath}/rejectedByCustomerQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/rejectedByCustomerQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"rejectedByCustomerQuotation","false",`./${screenshotPath}/rejectedByCustomerQuotation.png`)
  }
  await page.reload();
  console.log('rejected by customer quotation completed');
}

async function copyQuotation(page){
   console.log('Enter in copy quotation');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
 await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Kolpit Singh' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Mobile charger' }).first().click();
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover Quotatons');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('menuitem', { name: 'Copy' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Anil Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Wifi charger' }).click();
  await page.locator('div:nth-child(2) > .MuiBox-root.css-v64yv8 > div > .MuiFormControl-root > .MuiInputBase-root').first().click();
  await page.locator('textarea[name="products.1.description"]').fill('printer ');
  await page.getByRole('textbox', { name: 'Note:' }).click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('/quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.reload();
  await page.waitForTimeout(3000);

  if (!await page.getByText('Mayank Rathor',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/copyQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"copyQuotation","true",`./${screenshotPath}/copyQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/copyQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"copyQuotation","false",`./${screenshotPath}/copyQuotation.png`)
  }
  await page.reload();
  console.log('copy rejected quotation');
}
async function editQuotation(page) {
  console.log('Enter in edited quotation');
  await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'EV charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.reload();
 await page.waitForTimeout(3000);

  if (!await page.getByText('Mayank Rathor',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQuotation","true",`./${screenshotPath}/editQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editQuotation","false",`./${screenshotPath}/editQuotation.png`)
  }
  await page.reload();
  console.log('edited quotation completed');
}

async function sendQuotation(page){
  console.log('Enter in send quotation');
   await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'EV charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Send Quotation' }).click();
  await page.getByRole('textbox', { name: 'CC' }).click();
  await page.getByRole('textbox', { name: 'CC' }).fill('akbk6551+1112@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.locator('div').filter({ hasText: 'Quotation mailed successfully' }).nth(4).click();
  await expect(page.getByText('Quotation mailed successfully')).toBeVisible()
  await page.getByRole('button', { name: 'Back to list' }).click();

    await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('link', { name: 'Add Quotation' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Khamaria undefined Khamaria' }).click();
  await page.getByRole('combobox').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Wifi charger' }).first().click();
  await page.locator('.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-vai4lc > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Note:' }).fill('cover product quotation');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Send Quotation' }).click();
  await page.getByRole('textbox', { name: 'CC' }).click();
  await page.getByRole('textbox', { name: 'CC' }).fill('akbk6551+1112@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.locator('div').filter({ hasText: 'Quotation mailed successfully' }).nth(4).click();
  await expect(page.getByText('Quotation mailed successfully')).toBeVisible()
  await page.getByRole('button', { name: 'Back to list' }).click();
  await page.reload();
 await page.waitForTimeout(3000);

  if (!await page.getByText('Mayank Rathor',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/sendQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"sendQuotation","true",`./${screenshotPath}/sendQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/sendQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"sendQuotation","false",`./${screenshotPath}/sendQuotation.png`)
  }
  await page.reload();
  console.log('send quotation completed');
}

async function deleteQuotation(page) {
  console.log('Enter in deleted quotaion');
  await page.getByRole('button', { name: 'Sales' }).click();
  await page.getByRole('link', { name: 'Quotations' }).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.reload();
 await page.waitForTimeout(3000);

  if (!await page.getByText('Mayank Rathor',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteQuotation","true",`./${screenshotPath}/deleteQuotation.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteQuotation.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteQuotation","false",`./${screenshotPath}/deleteQuotation.png`)
  }
  await page.reload();
  console.log('Deleted quotation completed');
}

async function exportQuotationNormal(page) {
  console.log('Enter in export quotation normal');
  console.log('export quotation normal completed');
}
async function exportQuotationFilter(page) {
  console.log('Enter in export quotation filter'); 
  // filter on basis of State, City, and Customer name.
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.getByRole('option', { name: 'Uttar Pradesh' }).click();
  await page.getByRole('combobox', { name: 'Select City' }).click();
  await page.getByRole('option', { name: 'Khamaria' }).click();
  await page.getByRole('combobox', { name: 'Select Customer Name' }).click();
  await page.getByRole('option', { name: 'Arjun Singh' }).click();
  await page.waitForTimeout(1000);

  if (!await page.getByText('Arjun Singh',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter1","true",`./${screenshotPath}/exportQuotationFilter1.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter1","false",`./${screenshotPath}/exportQuotationFilter1.png`)
  }
    // Exel
  const [excelDownload1] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload1.saveAs('downloads/exportQuotationFilter1.xlsx');

  // PDF
  const [pdfDownload1] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
  await pdfDownload1.saveAs('downloads/exportQuotationFilter2.pdf');
  await page.reload();
//  filter on the besis of Status, and Date filter.
  await page.getByRole('combobox', { name: 'Select Quotation Status' }).click();
  await page.getByRole('option', { name: 'Rejected', exact: true }).click();
  await page.getByRole('button', { name: 'Date Filter' }).click();
  await page.getByRole('option', { name: 'Week' }).click();
  await page.waitForTimeout(1000);
  
  if (!await page.getByText('Mayank Rathor',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter2","true",`./${screenshotPath}/exportQuotationFilter2.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter2","false",`./${screenshotPath}/exportQuotationFilter2.png`)
  }
  // Exel
  const [excelDownload2] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload2.saveAs('downloads/exportQuotationFilter3.xlsx');

  // PDF
  const [pdfDownload2] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
  await pdfDownload2.saveAs('downloads/exportQuotationFilter4.pdf');
  await page.reload();          
}
