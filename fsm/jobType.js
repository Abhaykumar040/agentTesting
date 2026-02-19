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
  await deletePreviousJobType(page);
  await page.waitForTimeout(3000);
   await createJobType(page);
   await page.waitForTimeout(3000);
   await editJobType(page);
   await page.waitForTimeout(3000);
   await deleteJobType(page);

}
async function createJobType(page){
  console.log('Enter in create job ');
  // quotation
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation Q1');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'quotation' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Embedded Systems edited' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation Q2');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'quotation' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Testing & Troubleshooting' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation Q3');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'quotation' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Embedded Systems edited' }).click();
  await page.getByRole('button', { name: 'Save' }).click();


  // job 
  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation J1');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'job' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Embedded Systems edited' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation J2');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'job' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Testing & Troubleshooting' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation J3');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'job' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Embedded Systems edited' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

// support case

  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation1');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'supportCase' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Embedded Systems edited' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation2');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'supportCase' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Embedded Systems edited' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation3');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'supportCase' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Embedded Systems edited' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation4');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'supportCase' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Embedded Systems edited' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation5');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'supportCase' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Embedded Systems edited' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Installation6');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('installation process');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJCASInstallation' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'supportCase' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Testing & Troubleshooting' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Add New Job Type' }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('sample');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('sample');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormJ1' }).click();
  await page.getByRole('checkbox', { name: 'Engineer/Vendor' }).check();
  await page.getByRole('button', { name: 'Number Range ID *' }).click();
  await page.getByRole('option', { name: 'supportCase' }).click();
  await page.getByRole('button', { name: 'Priority *' }).click();
  await page.getByRole('option', { name: 'InstallationPriorityJob' }).click();
  await page.getByRole('button', { name: 'Status Profile *' }).click();
  await page.getByRole('option', { name: 'installationStatusJob' }).click();
  await page.getByRole('button', { name: 'Skill' }).click();
  await page.getByRole('option', { name: 'Repairing' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  //  await page.reload();
   await page.waitForTimeout(2000);
    if (await page.getByText('Job type created successfully').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/createJobType.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"createJobType","true",`./${screenshotPath}/createJobType.png`)
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/createJobType.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"createJobType","false",`./${screenshotPath}/createJobType.png`)
    }

  await page.reload();
  console.log('Created job completed');

}
async function editJobType(page){
  console.log('Enter in edit job type');
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Job Type' }).click();
   await page.getByRole('row', { name: 'Sample sample' }).getByLabel('Edit').click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).click();
  await page.getByRole('textbox', { name: 'INST', exact: true }).fill('Edited');
  await page.getByRole('textbox', { name: 'Installation' }).click();
  await page.getByRole('textbox', { name: 'Installation' }).fill('sample Edited');
  await page.getByRole('combobox', { name: 'Search forms' }).click();
  await page.getByRole('option', { name: 'FormDelete' }).click();
  await page.getByRole('checkbox', { name: 'Customer' }).check();
  await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(2000);
    if (await page.getByText('Job type updated successfully').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/editJobType.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"editJobType","true",`./${screenshotPath}/editJobType.png`)
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/editJobType.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"editJobType","false",`./${screenshotPath}/editJobType.png`)
    }

  await page.reload();
  console.log('Edit job completed');
  
}
async function deleteJobType(page){
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Job Type' }).click();
  // await page.locator('div').filter({ hasText: 'Job type updated successfully' }).nth(4).click();
  await page.locator('table tbody tr').first().getByLabel('Delete').click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  
  // await expect(page.getByText('Job type deleted successfully')).toBeVisible()
  await page.waitForTimeout(1000);
    if (await page.getByText('Job type deleted successfully').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/deleteJobType.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"deleteJobType","true",`./${screenshotPath}/deleteJobType.png`)
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/deleteJobType.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"deleteJobType","false",`./${screenshotPath}/deleteJobType.png`)
    }

  await page.reload();
  await page.waitForLoadState('networkidle');
}


async function deletePreviousJobType(page){

  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Job Type' }).click();
  await page.waitForTimeout(3000);


  while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

    // Stop loop if total <= 0
    if (total <= 0) {
    break;
    }
    await page.locator('table tbody tr').first().getByLabel('Delete').click();
    await page.getByRole('button', { name: 'Proceed' }).click();

    // await expect(page.getByText('Job type deleted successfully')).toBeVisible()
    await page.waitForTimeout(1000);
  }
   
await page.reload();
}

