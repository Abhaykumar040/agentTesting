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
 await deleteRole(page);
}

async function addRole(page) {
  console.log("Enter in add role");

  await page.getByRole('link', { name: 'Roles' }).click();
  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Sales manager');
  await page.getByRole('main').getByRole('button', { name: 'Sales' }).click();
  await page.waitForTimeout(3000);
  
  // await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
 
  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
    //  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='View']").click();
     await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Delete']").click();
     await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Update']").click();

    await page.locator("//h6[normalize-space()='Invoices']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
    //  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='View']").click();
     await page.locator("//h6[normalize-space()='Invoices']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Delete']").click();
     await page.locator("//h6[normalize-space()='Invoices']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Update']").click();



  await page.getByRole('button', { name: 'Submit' }).click();
 

  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Sales Executive');
  await page.getByRole('main').getByRole('button', { name: 'Sales' }).click();
  await page.waitForTimeout(1000);

  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
    //  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='View']").click();
     await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Delete']").click();
     await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Update']").click();

  await page.getByRole('button', { name: 'Submit' }).click();
  

  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Field Service Engineer');
  await page.getByRole('main').getByRole('button', { name: 'Field Service' }).click();
  // await page.getByRole('main').getByRole('button', { name: 'Field Service' }).click();
  await page.waitForTimeout(1000);
  await page.locator("//h6[normalize-space()='Jobs']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
  await page.locator("//h6[normalize-space()='Jobs']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Delete']").click();
  await page.locator("//h6[normalize-space()='Jobs']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Update']").click();

  await page.locator("//h6[normalize-space()='FS-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
  //  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='View']").click();
  await page.locator("//h6[normalize-space()='FS-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Delete']").click();
  await page.locator("//h6[normalize-space()='FS-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Update']").click();
     
  await page.locator("//h6[normalize-space()='Engineers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
  //  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='View']").click();
  await page.locator("//h6[normalize-space()='Engineers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Delete']").click();
  await page.locator("//h6[normalize-space()='Engineers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Update']").click();


  await page.getByRole('button', { name: 'Submit' }).click();
 

  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Master data handling');
await page.getByRole('main').getByRole('button', { name: 'Master Data' }).click();
  // await page.getByRole('main').getByRole('button', { name: 'Master Data' }).click();
    await page.waitForTimeout(1000);

  await page.locator("//h6[normalize-space()='Tag Manager']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
  //  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='View']").click();
  await page.locator("//h6[normalize-space()='Tag Manager']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Delete']").click();
  await page.locator("//h6[normalize-space()='Tag Manager']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Update']").click();

  await page.getByRole('button', { name: 'Submit' }).click();

  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Customer Service');
 await page.getByRole('main').getByRole('button', { name: 'Customer Service' }).click();
  // await page.getByRole('main').getByRole('button', { name: 'Customer Service' }).click();
    await page.waitForTimeout(1000);
  await page.locator("//h6[normalize-space()='Tickets']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
     await page.locator("//h6[normalize-space()='Tickets']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Delete']").click();
     await page.locator("//h6[normalize-space()='Tickets']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Update']").click();

       await page.locator("//h6[normalize-space()='CS-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
     await page.locator("//h6[normalize-space()='CS-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Delete']").click();
     await page.locator("//h6[normalize-space()='CS-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Update']").click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).click();
  await page.getByRole('textbox', { name: 'Enter Role Name*' }).fill('Field Service Manager');
  await page.getByRole('main').getByRole('button', { name: 'Sales' }).click();
  // await page.getByRole('main').getByRole('button', { name: 'Field Service' }).click();
    await page.waitForTimeout(1000);

  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
  // await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='View']").click();
  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Delete']").click();
  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Update']").click();

  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Create']").click();
  // await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='View']").click();
  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Delete']").click();
  await page.locator("//h6[normalize-space()='Sales-Customers']/ancestor::div[1]/following-sibling::div//span[normalize-space()='Update']").click();


  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(3000);
    await page.reload();
await page.waitForTimeout(3000);

  
  if (await page.getByText('Field Service Engineer').isVisible()&& await page.getByText('Sales Executive').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/addRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addRole","true",`./${screenshotPath}/addRole.png`, "6 roles are created")

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addRole","false",`./${screenshotPath}/addRole.png`, "6 roles are created")
  }
    await page.waitForTimeout(3000);
  await page.reload();
    await page.waitForTimeout(3000);
  console.log("Add role completed");

//   await page.getByText('Sales manager').click();
//   await page.getByRole('main').getByRole('button', { name: 'Sales' }).click();
//    await page.waitForTimeout(3000);
// if (await page.locator("//span[normalize-space()='Update']/preceding-sibling::input[@type='checkbox']").isChecked())
//   {
//     await page.screenshot({ path: `./${screenshotPath}/roleVerify.png`, fullPage: true });
//     await updateOpJson(`./${screenshotPath}/`,"roleVerify","true",`./${screenshotPath}/roleVerify.png`,"role verify assignment ")

//   }
//   else{
//     await page.screenshot({ path: `./${screenshotPath}/roleVerify.png`, fullPage: true });
//     await updateOpJson(`./${screenshotPath}/`,"roleVerify","false",`./${screenshotPath}/roleVerify.png`,"role verify assignment ")
//   }
}


async function deleteRole(page) {
  console.log("Enter in delete role");

   await page.waitForTimeout(3000);
  await page.click("body tr:nth-of-type(1) td:nth-of-type(4) div button:last-of-type svg");
   await page.waitForTimeout(3000);
  // await expect(page.getByText('Role deleted successfully')).toBeVisible();
  await page.reload();

   await page.waitForTimeout(3000);
  
  if (!await page.getByText('Field Service Manager').isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteRole","true",`./${screenshotPath}/deleteRole.png`,"Role is Deleted 'Field Service Manager'")

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteRole.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteRole","false",`./${screenshotPath}/deleteRole.png`,"Role is Deleted 'Field Service Manager'")
  }
   await page.waitForTimeout(3000);
  await page.reload();
await page.waitForTimeout(3000);
  console.log("delete role completed");
}

async function deletePreviuosRole(page){
  console.log("Enter in delete previous role");
  // await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Roles' }).click();
  await page.waitForTimeout(3000);
  while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

    // Stop loop if total <= 0
   
    if (total <= 0) {
      break;
    }
   
  // await page.locator('button').nth(3).first().click();
  await page.locator('button').nth(3).click();

  await page.waitForTimeout(1000);
 
    
  }
   await page.waitForTimeout(3000);
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
await page.waitForTimeout(3000);
  console.log("delete previous role completed");
  
}
