import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/formCustomization`
const pathName=`outputData/status/${testData.companyType}`


export async function formCustomization(page){
  await editformCustomization(page);
  await page.waitForTimeout(3000);
  await checkformVisiblity(page);
  await page.waitForTimeout(3000);
  await checkFormEditable(page);
}

async function editformCustomization(page){
  console.log('Enter in edit form customization');
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Form Customization' }).click();
  await page.getByRole('button', { name: 'Customer', exact: true }).click();
  await page.getByRole('option', { name: 'Engineer' }).click();
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('TitleA');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  // await page.getByText('').click();
  await page.waitForTimeout(2000);
    
  if (await page.getByText('Form field updated').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editformCustomization1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editformCustomization1","true",`./${screenshotPath}/editformCustomization1.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editformCustomization1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editformCustomization1","false",`./${screenshotPath}/editformCustomization1.png`)
  } 
  // await page.reload();
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Engineers' }).click();
  await page.getByRole('button', { name: 'Add New Engineer' }).click();
  await page.waitForTimeout(2000);
    
  if (await page.getByText('TitleA', {exact:true}).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editformCustomization2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editformCustomization2","true",`./${screenshotPath}/editformCustomization2.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editformCustomization2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editformCustomization2","false",`./${screenshotPath}/editformCustomization2.png`)
  } 
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Form Customization' }).click();
  await page.getByRole('button', { name: 'Customer', exact: true }).click();
  await page.getByRole('option', { name: 'Engineer' }).click();
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('Title');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByText('Form field updated').click();
   await page.waitForTimeout(2000);
    
  if (await page.getByText('Form field updated').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/editformCustomization3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editformCustomization3","true",`./${screenshotPath}/editformCustomization3.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editformCustomization3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editformCustomization3","false",`./${screenshotPath}/editformCustomization3.png`)
  } 
  await page.reload();
  console.log('Edit form customization completed');
}

async function checkformVisiblity(page) {
  console.log('Enter in check form visiblity');
  // await page.getByRole('link', { name: 'Form Customization' }).click();
  await page.getByRole('button', { name: 'Customer', exact: true }).click();
  await page.getByRole('option', { name: 'Engineer' }).click();
  await page.locator('tr:nth-child(9) > td:nth-child(5) > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').uncheck();
  await page.getByRole('button', { name: 'Save Changes' }).click();
   await page.waitForTimeout(2000);
    
  if (await page.getByText('Form field updated').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/checkformVisiblity1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"checkformVisiblity1","true",`./${screenshotPath}/checkformVisiblity1.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/checkformVisiblity1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"checkformVisiblity1","false",`./${screenshotPath}/checkformVisiblity1.png`)
  } 
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Engineers' }).click();
  await page.getByRole('button', { name: 'Add New Engineer' }).click();
  // await page.getByRole('button', { name: 'Field Service' }).click();
   await page.waitForTimeout(2000);
    
  if (!await page.getByText('Title', {exact:true}).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/checkformVisiblity2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"checkformVisiblity2","true",`./${screenshotPath}/checkformVisiblity2.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/checkformVisiblity2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"checkformVisiblity2","false",`./${screenshotPath}/checkformVisiblity2.png`)
  } 
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Form Customization' }).click();
  await page.getByRole('button', { name: 'Customer', exact: true }).click();
  await page.getByRole('option', { name: 'Engineer' }).click();
  await page.locator('tr:nth-child(9) > td:nth-child(5) > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.reload();
  // await page.getByText('Form field updated').click();
  console.log('check form visiblity completed');
}

async function checkFormEditable(page){
  console.log('Enter in check form editable');
  //  await page.getByRole('button', { name: 'Settings' }).click();
  // await page.getByRole('link', { name: 'Form Customization' }).click();
  await page.getByRole('button', { name: 'Customer', exact: true }).click();
  await page.getByRole('option', { name: 'Engineer' }).click();
  await page.locator('tr:nth-child(9) > td:nth-child(6) > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').uncheck();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.waitForTimeout(2000);
    
  if (await page.getByText('Form field updated').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/checkFormEditable1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"checkFormEditable1","true",`./${screenshotPath}/checkFormEditable1.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/checkFormEditable1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"checkFormEditable1","false",`./${screenshotPath}/checkFormEditable1.png`)
  } 
  await page.reload();
  // await page.getByText('Form field updated').click();
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Engineers' }).click();
  await page.getByRole('button', { name: 'Add New Engineer' }).click();
  // await page.getByRole('button', { name: 'Title' }).click();
  await page.waitForTimeout(2000);
    
  if (await page.getByText('Title', {exact:true}).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/checkFormEditable2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"checkFormEditable2","true",`./${screenshotPath}/checkFormEditable2.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/checkFormEditable2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"checkFormEditable2","false",`./${screenshotPath}/checkFormEditable2.png`)
  } 
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Form Customization' }).click();
  await page.getByRole('button', { name: 'Customer', exact: true }).click();
  await page.getByRole('option', { name: 'Engineer' }).click();
  await page.locator('tr:nth-child(9) > td:nth-child(6) > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.getByText('Form field updated')).toBeVisible();
  await page.reload();
  console.log('check form editable completed');
}