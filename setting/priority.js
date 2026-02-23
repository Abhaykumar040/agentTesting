import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/priority`
const pathName=`outputData/priority/${testData.companyType}`


export async function priority(page){
await deletePreviuosPriority(page);
 await page.waitForTimeout(3000);
await addPriorit(page);
 await page.waitForTimeout(3000);
 await editPriority(page);
  await page.waitForTimeout(3000);
  await deletePriority(page);
}
async function deletePreviuosPriority(page){
  console.log("Enter in delete previous priority.")
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Priority' }).click();
   await page.waitForTimeout(3000);

    while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

 
  if (total <= 0) {
    break;
  }
 await page.locator('table tbody tr').first().getByLabel('Delete').click();
await page.getByRole('button', { name: 'Proceed' }).click();
    await expect(page.getByText('Priority deleted successfully').first()).toBeVisible();
     await page.waitForTimeout(1000);
    }
   
await page.reload();
  //  await page.waitForTimeout(3000);
//  await expect(page.getByText('Showing 1 to 10 of 13 entries')).toBeVisible();
console.log("previous priority delete completed");
 

}
async function addPriorit(page) {
  console.log("Enter in Add priority");
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Priority' }).click();
  await page.getByRole('button', { name: 'Add New Priority' }).click();
  await page.getByRole('textbox', { name: 'Enter Priority Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Priority Type' }).fill('InstallationPriorityJob');
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Job' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).fill('High');
  await page.getByRole('textbox', { name: 'Priority Description *' }).click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).fill('High installation');
  await page.getByRole('textbox', { name: 'Position' }).click();
  await page.getByRole('textbox', { name: 'Position' }).fill('1');
  await page.getByRole('checkbox', { name: 'Default' }).check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(3000);



  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().fill('Low');
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().fill('Low installation');
  await page.getByRole('textbox', { name: 'Position' }).first().click();
  await page.getByRole('textbox', { name: 'Position' }).first().fill('2');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(3000);



  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().fill('Medium');
  await page.getByRole('textbox', { name: 'Priority *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().fill('Medium');
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().fill('Medium installation');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(1000);

   if (await page.getByText('position must be a number').isVisible())  {
        await page.screenshot({ path: `./${screenshotPath}/priorityWitoutPosition.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"priorityWitoutPosition","true",`./${screenshotPath}/priorityWitoutPosition.png`)
        
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/priorityWitoutPosition.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"priorityWitoutPosition","false",`./${screenshotPath}/priorityWitoutPosition.png`)
      }
 
  await page.getByRole('textbox', { name: 'Position' }).first().click();
  await page.getByRole('textbox', { name: 'Position' }).first().fill('3');
  await page.getByRole('button', { name: 'Create' }).click();
      await page.waitForTimeout(3000);



  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().fill('deleteInternalInstallation');
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().fill('DeleteInternalInstallation');
  await page.getByRole('textbox', { name: 'Position' }).first().click();
  await page.getByRole('textbox', { name: 'Position' }).first().fill('4');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().fill('DeleteExternalPriority');
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().fill('DeleteExternalPriority');
  await page.getByRole('textbox', { name: 'Position' }).first().click();
  await page.getByRole('textbox', { name: 'Position' }).first().fill('5');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().fill('EditDelete');
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().fill('Delete During Edit');
  await page.getByRole('textbox', { name: 'Position' }).first().click();
  await page.getByRole('textbox', { name: 'Position' }).first().fill('6');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
    await page.getByRole('button', { name: 'Back to List' }).click();
await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Add New Priority' }).click();
  await page.getByRole('textbox', { name: 'Enter Priority Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Priority Type' }).fill('PrioritySupport1');
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Support Case' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).fill('createSupport1');
  await page.getByRole('textbox', { name: 'Priority Description *' }).click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).fill('createSupport1d');
  await page.getByRole('textbox', { name: 'Position' }).click();
  await page.getByRole('textbox', { name: 'Position' }).fill('1');
  await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().fill('progressSupport1');
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().fill('progressSupport1d');
  await page.getByRole('textbox', { name: 'Position' }).first().click();
  await page.getByRole('textbox', { name: 'Position' }).first().fill('2');
  await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().fill('doneSupport1');
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().fill('doneSupport1d');
  await page.getByRole('textbox', { name: 'Position' }).first().click();
  await page.getByRole('textbox', { name: 'Position' }).first().fill('3');
  await page.getByRole('button', { name: 'Create' }).first().click();
    await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Back to List' }).click();
  await page.getByRole('button', { name: 'Add New Priority' }).click();
  await page.getByRole('textbox', { name: 'Enter Priority Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Priority Type' }).fill('PrioritySupport2');
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Support Case' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).fill('createdSupport2');
  await page.getByRole('textbox', { name: 'Priority Description *' }).click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).fill('createdSupport2d');
  await page.getByRole('textbox', { name: 'Position' }).click();
  await page.getByRole('textbox', { name: 'Position' }).fill('1');
  await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().fill('doneSupport2');
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().fill('DoneSupport2');
  await page.getByRole('textbox', { name: 'Position' }).first().click();
  await page.getByRole('textbox', { name: 'Position' }).first().fill('2');
  await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Back to List' }).click();
    await page.waitForTimeout(3000);

 if (!await page.getByText('DeleteInternalInstallation').first().isVisible() &&
await page.getByText('InstallationPriorityJob').nth(4).isVisible()
&&await page.getByText('EditDelete').isVisible())  {
        await page.screenshot({ path: `./${screenshotPath}/PriorityCreateAndDeleteDuringCreation.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"PriorityCreateAndDeleteDuringCreation","true",`./${screenshotPath}/PriorityCreateAndDeleteDuringCreation.png`)
        
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/PriorityCreateAndDeleteDuringCreation.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"PriorityCreateAndDeleteDuringCreation","false",`./${screenshotPath}/PriorityCreateAndDeleteDuringCreation.png`)
      }
  console.log("Added priority complete")    
}
async function editPriority(page){
  console.log("Enter in Edit priority");
  await page.getByText('InstallationPriorityJob').first().click();

  await page.getByRole('textbox', { name: 'Priority *' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Priority *' }).nth(3).fill('XLowX');
  await page.getByRole('textbox', { name: 'Priority Description *' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).nth(3).fill('Low installationX');
  await page.getByRole('textbox', { name: 'Position' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Position' }).nth(3).fill('21');
  await page.getByRole('button', { name: 'Update' }).nth(3).click();
   await page.waitForTimeout(1000);
     await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority *' }).first().fill('createDuringEdit');
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().click();
  await page.getByRole('textbox', { name: 'Priority Description *' }).first().fill('createDuringEditD');
  await page.getByRole('textbox', { name: 'Position' }).first().click();
  await page.getByRole('textbox', { name: 'Position' }).first().fill('7');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(1000);
   await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
    await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Back to List' }).click();
  await page.reload();
  await page.waitForTimeout(2000);


 if (await page.getByText('XLowX').isVisible()&&
await page.getByText('Low installationX').isVisible()&&
await page.getByText('21').isVisible()&& 
!await page.getByText('EditDelete').isVisible()&&
await page.getByText('createDuringEditD').isVisible()&&
await page.getByText('CreateDuringEdit').first().isVisible())  {
        await page.screenshot({ path: `./${screenshotPath}/editPriority.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"editPriority","true",`./${screenshotPath}/editPriority.png`)
        
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/editPriority.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"editPriority","false",`./${screenshotPath}/editPriority.png`)
      }
  await page.reload();    
  console.log("Edit priority completed");
}

async function deletePriority(page){
  console.log("Enter in delete priority");
    await page.getByRole('row', { name: 'InstallationPriorityJob DeleteExternalPriority DeleteExternalPriority 5 Hour' }).getByLabel('Delete').click();
  

  await page.getByRole('button', { name: 'Proceed' }).click();
  
  await page.waitForTimeout(3000);
  await page.reload();
 await page.waitForTimeout(3000);
 if (!await page.getByText('DeleteExternalPriority').isVisible()&&
await page.getByText('Medium installation').isVisible())  {
        await page.screenshot({ path: `./${screenshotPath}/deletePriority.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"deletePriority","true",`./${screenshotPath}/deletePriority.png`)
        
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/deletePriority.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"deletePriority","false",`./${screenshotPath}/deletePriority.png`)
      }
  console.log("delete priority");    
  await page.reload();
}