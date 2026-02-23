import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/internlJob`;
const pathName=`outputData/status/${testData.companyType}`


export async function internalJob(page){
  await deletePreviousinternalJob(page);
  await page.waitForTimeout(3000);
 await createInternalJob(page);
 await page.waitForTimeout(3000);
 await editInternalJob(page);
 await page.waitForTimeout(3000);
 await deleteInternalJob(page);
 await page.waitForTimeout(3000);
 await exportInternalJObNormal(page);
 await page.waitForTimeout(3000);
 await exportInternalJObFilter(page);
 await page.waitForTimeout(3000);
 await createJobByAssetManagements(page);
 
}
async function deletePreviousinternalJob(page){
  console.log("Enter in delete previous internal job");
  await page.getByRole('button', { name: 'Field Service' }).click();
await page.getByRole('button', { name: 'Jobs' }).click();
await page.getByRole('link', { name: 'Internal Jobs' }).click();

await page.waitForTimeout(3000);

while (true) {

  const text = await page.textContent('text=Showing');
  const match = text.match(/of\s+(\d+)\s+entries/);
  const total = match ? parseInt(match[1]) : 0;

  if (total <= 0) {
    break;
  }

  await page
    .locator('tbody tr')
    .first()
    .locator('button:has(path[d^="M4 7h16"])') // delete icon
    .click();

  await page.getByRole('button', { name: 'OK' }).click();

  await page.waitForTimeout(2000);
}
await page.reload();
console.log("delete previous internal job completed");
}

async function createInternalJob(page){
  console.log('Enter in create internal job ');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('button', { name: 'Jobs' }).click();
  // await page.getByRole('link', { name: 'Internal Jobs' }).click();
  // await page.getByRole('link', { name: 'Add New Job' }).click();
  // await page.locator('div').filter({ hasText: /^Commercial$/ }).first().click();
  // await page.getByRole('option', { name: 'Individual' }).click();
  // await page.getByRole('combobox', { name: 'Customer' }).click();
  // await page.getByRole('option', { name: 'Susil Rana' }).click();
  // // await page.getByRole('button', { name: 'Address' }).click();
  // // await page.getByRole('option', { name: 'Bhadohi' }).click();
  // // await page.getByRole('combobox', { name: 'Asset' }).click();
  // await page.getByText('Charger', { exact: true }).click();
  // await page.getByRole('button', { name: 'Job Type' }).click();
  // await page.getByRole('option', { name: 'Installation6' }).click();
  // await page.getByRole('textbox', { name: 'Job Description' }).click();
  // await page.getByRole('textbox', { name: 'Job Description' }).fill('kjhfdgh');
  // await page.getByRole('button', { name: 'Priority' }).click();
  // await page.getByRole('option', { name: 'least' }).click();
  // await page.getByRole('textbox', { name: 'Comments' }).click();
  // await page.getByRole('textbox', { name: 'Comments' }).fill('fdgdg');
  // await page.getByRole('button', { name: 'Status Profile' }).click();
  // await page.getByRole('option', { name: 'installed - installed' }).click();
  // await page.getByRole('button', { name: 'Zone' }).click();
  // await page.getByRole('option', { name: 'NI' }).click();
  // await page.getByRole('radio', { name: 'Engineer' }).check();
  // await page.getByRole('button', { name: 'Engineer' }).click();
  // await page.locator('.MuiBackdrop-root').click();
  // await page.getByRole('button', { name: '+ Add Skill' }).click();
  // await page.getByRole('button', { name: 'Skill', exact: true }).click();
  // await page.getByRole('option', { name: 'Installation' }).click();
  // await page.getByRole('button', { name: 'Person Responsible' }).click();
  // await page.getByRole('option', { name: 'suhani singh' }).click();
  // await page.getByRole('checkbox').check();
  // await page.getByRole('button', { name: 'Save', exact: true }).click();
  //  await expect(page.getByText('Job created successfully')).toBeVisible()
   await page.getByRole('link', { name: 'Add New Job' }).click();
  await page.getByRole('button', { name: 'Customer Type * Commercial' }).click();
  await page.getByRole('option', { name: 'Individual' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
   await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Ghosia Ghosia' }).first().click();
  await page.getByRole('checkbox').first().check();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation5' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).fill('installaion');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'least - Low installationX' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('intallaion least important');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.getByRole('option', { name: 'created - createdD' }).click();
  await page.getByRole('textbox', { name: 'Start Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Sunday, February 22nd,' }).click();
  await page.getByText('15:00').click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Saturday, February 28th,' }).click();
  await page.getByText('15:15').click();
  await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: 'Engineer' }).click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.getByRole('option', { name: 'Testing & Troubleshooting' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.getByRole('option', { name: 'suhani singh' }).first().click();
  await page.getByRole('row', { name: 'FormJCASInstallation' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save', exact: true }).click();

  //  await page.getByRole('link', { name: 'Internal Jobs' }).click();
  await page.getByRole('link', { name: 'Add New Job' }).click();
  await page.getByRole('button', { name: 'Customer Type * Commercial' }).click();
  await page.getByRole('option', { name: 'Commercial' }).first().click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
   await page.getByRole('option', { name: 'Mayank Singh (1245836)' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
   await page.getByRole('option', { name: 'Mukundpatti' }).click();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation6' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).fill('Installation');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'High - High installation' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('high priority hai isako jaldi install karan hai');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.getByRole('option', { name: 'doneJob - doneJob' }).click();
  await page.getByRole('textbox', { name: 'Start Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Sunday, February 22nd,' }).click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Sunday, February 22nd,' }).click();
  await page.getByText('08:30').click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByText('16:00').click();
  await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.getByRole('option', { name: 'Embedded Systems' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.getByRole('option', { name: 'Mahesh Rajput' }).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save', exact: true }).click();

  

  // await page.getByRole('link', { name: 'Internal Jobs' }).click();
  await page.getByRole('link', { name: 'Add New Job' }).click();
  await page.getByRole('button', { name: 'Customer Type * Commercial' }).click();
  await page.getByRole('option', { name: 'Commercial' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Bilal Ahamad (1275836)' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Ghosia Ghosia' }).click();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation6' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).fill('Installation');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'High - High installation' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('high priority hai isako jaldi install karan hai');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.getByRole('option', { name: 'doneJob - doneJob' }).click();
  await page.getByRole('textbox', { name: 'Start Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Sunday, February 22nd,' }).click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Sunday, February 22nd,' }).click();
  await page.getByText('08:30').click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByText('16:00').click();
  await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.getByRole('option', { name: 'Embedded Systems' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.getByRole('option', { name: 'Mahesh Rajput' }).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save', exact: true }).click();

  // await page.getByRole('link', { name: 'Internal Jobs' }).click();
  await page.getByRole('link', { name: 'Add New Job' }).click();
  await page.getByRole('button', { name: 'Customer Type * Commercial' }).click();
  await page.getByRole('option', { name: 'Commercial' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Bilal Ahamad (1275836)' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Ghosia Ghosia' }).click();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation3' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).fill('Power issue');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'least - Low installationX' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('high priority hai isako jaldi resolve karan hai');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.getByRole('option', { name: 'doneJob - doneJob' }).click();
  await page.getByRole('textbox', { name: 'Start Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Sunday, February 22nd,' }).click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Sunday, February 22nd,' }).click();
  await page.getByText('08:30').click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByText('16:00').click();
  await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.getByRole('option', { name: 'Embedded Systems' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.getByRole('option', { name: 'Mahesh Rajput' }).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save', exact: true }).click();

  await page.getByRole('link', { name: 'Add New Job' }).click();
  await page.getByRole('button', { name: 'Customer Type * Commercial' }).click();
  await page.getByRole('option', { name: 'Commercial' }).click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Bilal Ahamad (1275836)' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Ghosia Ghosia' }).click();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation4' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).fill('installation 2');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'High - High installation' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('high priority hai isako jaldi install 2 karan hai');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.getByRole('option', { name: 'doneJob - doneJob' }).click();
  await page.getByRole('textbox', { name: 'Start Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Sunday, February 22nd,' }).click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Sunday, February 22nd,' }).click();
  await page.getByText('08:30').click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByText('16:00').click();
  await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.getByRole('option', { name: 'Embedded Systems' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.getByRole('option', { name: 'Mahesh Rajput' }).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save', exact: true }).click();

  await page.getByRole('link', { name: 'Add New Job' }).click();
  await page.getByRole('button', { name: 'Customer Type * Commercial' }).click();
  await page.getByRole('option', { name: 'Commercial' }).first().click();
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Bilal Ahamad (1275836)' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Ghosia Ghosia' }).click();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation6' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).fill('Installation 3');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'High - High installation' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('high priority hai isako jaldi install 3 karan hai');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.getByRole('option', { name: 'doneJob - doneJob' }).click();
  await page.getByRole('textbox', { name: 'Start Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Sunday, February 22nd,' }).click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Sunday, February 22nd,' }).click();
  await page.getByText('08:30').click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByText('16:00').click();
  await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.getByRole('option', { name: 'Embedded Systems' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.getByRole('option', { name: 'Mahesh Rajput' }).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save', exact: true }).click();


  await page.waitForTimeout(2000);
  if (await page.getByText('Job created successfully').isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/createInternalJob.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"createInternalJob","true",`./${screenshotPath}/createInternalJob.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/createInternalJob.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"createInternalJob","false",`./${screenshotPath}/createInternalJob.png`)
  }
  await page.reload();
  console.log("Creatre internal job completed");
}
async function editInternalJob(page){
  console.log('Enter in edit internal job');
    await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('button', { name: 'Jobs' }).click();
  await page.locator('tbody tr').first().locator('button.MuiIconButton-root').first().click();
   await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'Low - Low installation' }).click();
  await page.getByRole('textbox', { name: 'End Date Time' }).click();
  await page.getByRole('option', { name: 'Choose Saturday, February 28th,' }).click();
  await page.getByText('15:15').click();
  await page.getByRole('button', { name: 'Skill Embedded Systems' }).click();
  await page.getByRole('option', { name: 'Soldering & Rework' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Skill Soldering & Rework' }).click();
  await page.getByRole('option', { name: 'Soldering & Rework' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.getByRole('option', { name: 'Ravi Tiwari' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(2000);
  if (await page.getByText('Job updated successfully').isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/editInternalJob.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editInternalJob","true",`./${screenshotPath}/editInternalJob.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/editInternalJob.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"editInternalJob","false",`./${screenshotPath}/editInternalJob.png`)
  }
  await page.getByRole('button', { name: 'Back to list' }).click();
  await page.reload();
  console.log('Edit internal job');

}
async function deleteInternalJob(page){
  console.log('Enter in delete Internal job');
  // await page.getByRole('button', { name: 'Field Service' }).click();
  // await page.getByRole('button', { name: 'Jobs' }).click();
  await page
    .locator('tbody tr')
    .first()
    .locator('button:has(path[d^="M4 7h16"])') // delete icon
    .click();

  await page.getByRole('button', { name: 'OK' }).click();

  await page.waitForTimeout(2000);
  if (await page.getByText('Job deleted successfully').isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteInternalJob.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteInternalJob","true",`./${screenshotPath}/deleteInternalJob.png`)

  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteInternalJob.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteInternalJob","false",`./${screenshotPath}/deleteInternalJob.png`)
  }
    await page.reload();
    console.log('Delete internal job completed');
}
async function exportInternalJObNormal(page){
  console.log('Enter in export internal job');
  // excel file
  const [excelDownload] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload.saveAs('downloads/exportExcelInternalJObNormal.xlsx');
  // pdf file
  const [pdfDownload] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload.saveAs('downloads/exportPDFInternalJObNormal.pdf');
    await page.waitForTimeout(2000);
  
    if (await page.getByText('Bilal Ahamad',{exact:true}).first().isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportInternalJObNormal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInternalJObNormal","true",`./${screenshotPath}/exportInternalJObNormal.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportInternalJObNormal.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInternalJObNormal","false",`./${screenshotPath}/exportInternalJObNormal.png`)
    }
    await page.reload();
  console.log('export internal job completed');
}
async function exportInternalJObFilter(page){
  console.log('Enter in export internal job');
  // filter on basis of state, city
  await expect(page.getByText('Bilal Ahamad').first()).toBeVisible();
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.getByRole('option', { name: 'Uttar Pradesh' }).click();
  await page.getByRole('combobox', { name: 'Select City' }).click();
  await page.getByRole('option', { name: 'Khamaria' }).click();
  // excel file
  const [excelDownload1] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload1.saveAs('downloads/exportExcelInternalJObFilter1.xlsx');
  // pdf file
  const [pdfDownload1] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload1.saveAs('downloads/exportPDFInternalJObFilter.pdf');
    await page.waitForTimeout(2000);
  
    if (await page.getByText('Mayank Singh',{exact:true}).first().isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportInternalJObFilter1.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInternalJObFilter1","true",`./${screenshotPath}/exportInternalJObFilter1.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportInternalJObFilter1.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInternalJObFilter1","false",`./${screenshotPath}/exportInternalJObFilter1.png`)
    }
    await page.reload();

    // filter on basis of job type
  await page.getByRole('combobox', { name: 'Select Job Type' }).click();
  await page.getByRole('option', { name: 'Installation5' }).click();
   // excel file
  const [excelDownload2] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload2.saveAs('downloads/exportExcelInternalJObFilter2.xlsx');
  // pdf file
  const [pdfDownload2] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload2.saveAs('downloads/exportPDFInternalJObFilter2.pdf');
    await page.waitForTimeout(2000);
  
    if (await page.getByText('Installation5',{exact:true}).first().isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportInternalJObFilter2.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInternalJObFilter2","true",`./${screenshotPath}/exportInternalJObFilter2.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportInternalJObFilter2.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInternalJObFilter2","false",`./${screenshotPath}/exportInternalJObFilter2.png`)
    }
    await page.reload();
// filter on basis of date.
  await page.getByRole('textbox', { name: 'Start Date' }).fill('2026-02-21');
  await page.getByRole('textbox', { name: 'End Date' }).fill('2026-02-28');
  // excel file
  const [excelDownload3] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload3.saveAs('downloads/exportExcelInternalJObFilter3.xlsx');
  // pdf file
  const [pdfDownload3] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('button', { name: 'Export To PDF' }).click()

  ]);
  await pdfDownload3.saveAs('downloads/exportPDFInternalJObFilter3.pdf');
    await page.waitForTimeout(2000);
  
    if (await page.getByText('Installation5',{exact:true}).first().isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/exportInternalJObFilter3.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInternalJObFilter3","true",`./${screenshotPath}/exportInternalJObFilter3.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/exportInternalJObFilter3.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"exportInternalJObFilter3","false",`./${screenshotPath}/exportInternalJObFilter3.png`)
    }
    await page.reload();
  await expect(page.getByText('Bilal Ahamad').first()).toBeVisible();
  console.log('export internal job completed');
}

async function createJobByAssetManagements(page){
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Asset Management' }).click();
  await page.getByText('Charger', { exact: true }).click();
  await page.getByRole('tab', { name: 'Jobs', exact: true }).click();
  await page.getByRole('button', { name: 'Add Job' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Ghosia Ghosia' }).nth(2).click();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation5' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).fill('installation');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'least - Low installationX' }).click();
  await page.locator('div:nth-child(7) > .MuiFormControl-root > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('least priority');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.getByRole('option', { name: 'deleteExternalStatusJob -' }).click();
  await page.getByRole('textbox', { name: 'Start Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Saturday, February 21st,' }).click();
  await page.getByText('21:30').click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Monday, February 23rd,' }).click();
  await page.getByText('22:00').click();
  await page.getByRole('radio', { name: 'Engineer' }).check(); 
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.getByRole('option', { name: 'Testing & Troubleshooting' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.getByRole('option', { name: 'Ravi Tiwari' }).click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  // await page.getByText('Job created successfully').click();
  // await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('tab', { name: 'Job Details' }).click();
   await page.waitForTimeout(2000);
  
    if (await page.getByRole('cell', { name: 'deleteExternalStatusJob' }).first().isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/createJobByAssetManagements.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"createJobByAssetManagements","true",`./${screenshotPath}/createJobByAssetManagements.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/createJobByAssetManagements.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"createJobByAssetManagements","false",`./${screenshotPath}/createJobByAssetManagements.png`)
    }
    await page.reload();
  // await expect(page.getByRole('cell', { name: 'deleteExternalStatusJob' })).toBeVisible();
  console.log('Create job bt asset management completed');
}