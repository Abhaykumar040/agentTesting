import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import {run} from '../check'




const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/status`
const pathName=`outputData/status/${testData.companyType}`


export async function status(page){
  // // await deletePreviuosStatus(page);
  await page.waitForTimeout(3000);
  await run('statusprofiles');
  await page.reload();
   await page.waitForTimeout(3000);

  await addStatus(page);
  await page.waitForTimeout(3000);
  await editStatus(page);
  await page.waitForTimeout(3000);
 // //await deleteStatus(page);
}
async function deletePreviuosStatus(page){
 

}

async function addStatus(page){
  console.log("Enter in add status");
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('link', { name: 'Status Profile' }).click();
  await page.getByRole('button', { name: 'Add New Status' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).fill('AssetsStatus');
  await page.getByRole('button', { name: 'Select Business Object' }).click();
  await page.getByRole('option', { name: 'Asset' }).click();
  await page.getByRole('button', { name: 'Status' }).click();
   await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('AssignedAsset');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('AssignedDAsset');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('2');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('In UseAsset');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('InUseDAsset');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('3');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('AvailableAsset');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('AvailbleDAsset');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('4');
  // await page.getByText('In UseAsset').click();
  await page.getByText('AssignedAsset').click();
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('Under RepairAsset');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('ReapirAsset');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('6');
  await page.getByText('Completed').click();
  
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);


  await page.getByRole('textbox', { name: 'Status *' }).nth(4).click();
   await page.waitForTimeout(1000);
  await page.getByRole('checkbox', { name: 'Completed' }).uncheck();
  await page.getByRole('checkbox', { name: 'In UseAsset' }).check();
  await page.getByRole('checkbox', { name: 'AvailableAsset' }).check();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Back to List' }).click();
   await page.waitForTimeout(1000);


//2nd asset status
   await page.getByRole('button', { name: 'Add New Status' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).fill('AssetsStatusforDelete');
  await page.getByRole('button', { name: 'Select Business Object' }).click();
  await page.getByRole('option', { name: 'Asset' }).click();
  await page.getByRole('button', { name: 'Status' }).click();
   await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('AssetsStatusforDelete23');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('AssetsStatusforDelete23D');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('2');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Back to List' }).click();


  //1st statusFor Support
   await page.getByRole('button', { name: 'Add New Status' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).fill('Status Support Case');
  await page.getByRole('button', { name: 'Select Business Object' }).click();
  await page.getByRole('option', { name: 'Support Case' }).click();
  await page.getByRole('button', { name: 'Status' }).click();
   await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('OpenSupport');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('OpenDSupport');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('2');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('In progressSupport');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('In ProgressDSupport');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('3');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('ResolvedSupport');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('resolveDSupport');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('4');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('CloseSupport');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('Support case close');
  await page.getByRole('checkbox', { name: 'Completed' }).check();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('6');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(1000);
   await page.getByRole('button', { name: 'Back to List' }).click();
    await page.waitForTimeout(1000);


//2nd status for support


  
 await page.getByRole('button', { name: 'Add New Status' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).fill('supportStatusDelete');
  await page.getByRole('button', { name: 'Select Business Object' }).click();
  await page.getByRole('option', { name: 'Support Case' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Status' }).click();
   await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Status' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
   await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('supportStatusDelete');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('supportStatusDeleteD');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('2');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Back to List' }).click();
   await page.waitForTimeout(1000);

// 1st status for job
await page.getByRole('button', { name: 'Add New Status' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).fill('installationStatusJob');
  await page.getByRole('button', { name: 'Select Business Object' }).click();
  await page.getByRole('option', { name: 'Job' }).click();
  await page.getByRole('button', { name: 'Status' }).click();
   await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('createdJob');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('createdDJob');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('2');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Status' }).click();
   await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.locator('button').nth(5).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('In progressJob');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('In progressDJob');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('3');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('doneJob');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('doneJob');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('4');
  await page.getByRole('checkbox', { name: 'Completed' }).check();
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.locator('div').filter({ hasText: /^Status \*$/ }).nth(1).click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('deleteInternalJobStatus');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('deleteInternalJobStatus');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('6');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('deleteExternalStatusJob');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('deleteExternalStatusJob');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('7');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByText('Edit Status ConfigurationStatus Profile Type: *Business Object: *Select').click();
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('deleteEditStatusJob');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('deleteEditStatusJob');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('8');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Back to List' }).click();
   await page.waitForTimeout(1000);

  //2nd job status

   await page.getByRole('button', { name: 'Add New Status' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Status Profile Type' }).fill('jobDeleteStatus');
  await page.getByRole('button', { name: 'Select Business Object' }).click();
  await page.getByRole('option', { name: 'Job' }).click();

  await page.getByRole('button', { name: 'Status' }).click();
   await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Status *' }).first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('jobDeleteStatus12');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('jobDeleteStatusD12');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('2');
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Back to List' }).click();
 await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);
   await page.getByText('JobDeleteStatus2').click();

  if (await page.getByText('JobDeleteStatus12', { exact: true }).isVisible() && await page.getByText('InstallationStatusJob', { exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/addStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addStatus","true",`./${screenshotPath}/addStatus.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/addStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"addStatus","false",`./${screenshotPath}/addStatus.png`)
  }

  await page.reload();
  console.log("Add status completed");
}
async function editStatus(page){
  console.log("Enter in edit status");
  

  // await page.getByRole('link', { name: 'Status Profile' }).click();
  await page.getByText('InstallationStatusJob').click();
   await page.waitForTimeout(1000);
  await page.getByText('CreatedJob').click();
  await page.getByRole('textbox', { name: 'Status *' }).nth(4).click();
  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('In progressX');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('In progressDX');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('21');
   await page.getByRole('button', { name: 'Update' }).click();
  
  

  await page.waitForTimeout(1000); 
  await page.getByRole('textbox', { name: 'Status *' }).first().click();
     await page.waitForTimeout(1000);

  await page.getByRole('textbox', { name: 'Status *' }).click();
  await page.getByRole('textbox', { name: 'Status *' }).fill('createDuringEditIns');
  await page.getByRole('textbox', { name: 'Status Description *' }).click();
  await page.getByRole('textbox', { name: 'Status Description *' }).fill('createDuringEditIns');
  await page.getByRole('spinbutton', { name: 'Position *' }).click();
  await page.getByRole('spinbutton', { name: 'Position *' }).fill('71');
  await page.getByRole('button', { name: 'Update' }).click();

  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Back to List' }).click();
  await page.reload();
   await page.waitForTimeout(3000);
await page.getByText('InstallationStatusJob').click();
await page.waitForTimeout(3000);
  if (!await page.getByText('DeleteEditStatusJob', { exact: true }).isVisible()&&
  await page.getByText('CreateDuringEditIns', { exact: true }).first().isVisible() )  
  {
    await page.screenshot({ path: `./${screenshotPath}/editStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editStatus","true",`./${screenshotPath}/editStatus.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editStatus","false",`./${screenshotPath}/editStatus.png`)
  }

  await page.reload()
  console.log("Edit status completed");
}

async function deleteStatus(page) {
  console.log("Enter in delete status");
    await page.getByText('InstallationStatusJob').click();
  await page.getByRole('row', { name: 'InstallationStatusJob DeleteExternalStatusJob' }).getByLabel('Delete').first().click();
  await page.getByRole('button', { name: 'Proceed' }).click();
    await page.getByRole('row', { name: 'jobDeleteStatus' }).getByLabel('Delete').first().click();
  await page.getByRole('button', { name: 'Proceed' }).click();
    await page.getByRole('row', { name: 'supportStatusDelete' }).getByLabel('Delete').first().click();
  await page.getByRole('button', { name: 'Proceed' }).click();
   await page.getByRole('row', { name: 'AssetsStatusforDelete' }).getByLabel('Delete').first().click();
  await page.getByRole('button', { name: 'Proceed' }).click();

  await page.reload();
   await page.waitForTimeout(3000);

  if (!await page.getByText('DeleteExternalStatusJob', { exact: true }).isVisible())  
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteStatus","true",`./${screenshotPath}/deleteStatus.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteStatus.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteStatus","false",`./${screenshotPath}/deleteStatus.png`)
  }

  await page.reload()
  console.log("delete status completed");
}