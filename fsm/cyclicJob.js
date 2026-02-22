import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/cyclicJob`
const pathName=`outputData/status/${testData.companyType}`


export async function cyclicJob(page){
  await createCyclicJob(page);
  await page.waitForTimeout(3000);
  // await startCyclicJob(page);
  // await page.waitForTimeout(3000);
  // await cancleWholeSessionCyclicJob(page);
  // await page.waitForTimeout(3000);
  await cancleCurrentSessionCyclicJob(page);
  await page.waitForTimeout(3000);
   // await deleteCyclicJob(page);
  // await page.waitForTimeout(3000);
  // await deleteAllCyclicJob(page);
  // await page.waitForTimeout(3000);
  await cyclicJobByInternalJob(page);
  await page.waitForTimeout(3000);
  await createCyclicJobByCustomer(page);
  await page.waitForTimeout(3000);
  await jobScheduleInInternalJobDelete(page)
  await page.waitForTimeout(3000);
  await jobScheduleInInternalJobEdit(page)
  await page.waitForTimeout(3000);
  await exportCyclicJobNormal(page);
  await page.waitForTimeout(3000);
  await exportCyclicJobFilter(page);
}


async function createCyclicJob(page){
  console.log('Enter in create cyclic job');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Asset Management' }).click();
  await page.getByText('Charger', { exact: true }).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.locator('div').filter({ hasText: /^8963$/ }).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('Intallation4');
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Ghosia Ghosia' }).first().click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Hello');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation4' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'least' }).click();
  await page.getByRole('button', { name: 'Testing & Troubleshooting' }).click();
  await page.getByRole('button', { name: 'Soldering & Rework' }).click();
  await page.getByRole('button', { name: 'Repairing' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Yearly' }).click();
  await page.getByRole('textbox', { name: 'Schedule Start Date' }).fill('2026-03-12');
  await page.getByRole('textbox', { name: 'Schedule End Date' }).fill('2027-04-28');
  await page.getByRole('button', { name: 'Create Job' }).click();
  // await page.getByText('Cyclic job created').click();

  
  await page.locator('div').filter({ hasText: /^8963$/ }).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('Installation8');
  await page.getByRole('combobox', { name: 'Customer' }).click();
   await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
   await page.getByRole('option', { name: 'Ghosia Ghosia' }).first().click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('rdgfar');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation6' }).click(); 
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'least' }).click();
   await page.getByRole('button', { name: 'Soldering & Rework' }).click();
  await page.getByRole('button', { name: 'Repairing' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Weekly' }).click();
  await page.getByRole('spinbutton', { name: 'Interval' }).click();
  await page.getByRole('spinbutton', { name: 'Interval' }).fill('9');
  await page.getByRole('button', { name: 'Mon' }).click();
  await page.getByRole('textbox', { name: 'Schedule Start Date' }).fill('2026-02-23');
  await page.getByRole('textbox', { name: 'Schedule End Date' }).fill('2026-05-27');
  await page.getByRole('button', { name: 'Create Job' }).click();
  
  await page.locator('div').filter({ hasText: /^8963$/ }).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('Installation7');
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
   await page.getByRole('option', { name: 'Ghosia Ghosia' }).first().click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('rdgfar');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation6' }).click(); 
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'least' }).click();
   await page.getByRole('button', { name: 'Soldering & Rework' }).click();
  await page.getByRole('button', { name: 'Repairing' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Monthly' }).click();
  await page.getByRole('spinbutton', { name: 'Interval' }).click();
  await page.getByRole('spinbutton', { name: 'Interval' }).fill('6');
  await page.getByRole('spinbutton', { name: 'Days Of Month' }).click();
  await page.getByRole('spinbutton', { name: 'Days Of Month' }).fill('23');
  await page.getByRole('button', { name: 'Create Job' }).click();

   await page.waitForTimeout(2000);
     if (await page.getByText('Cyclic job created').isVisible()) {
       await page.screenshot({ path: `./${screenshotPath}/createCyclicJob.png`, fullPage: true });
       await updateOpJson(`./${screenshotPath}/`, "createCyclicJob", "true", `./${screenshotPath}/createCyclicJob.png`)
   
     }
     else {
       await page.screenshot({ path: `./${screenshotPath}/createCyclicJob.png`, fullPage: true });
       await updateOpJson(`./${screenshotPath}/`, "createCyclicJob", "false", `./${screenshotPath}/createCyclicJob.png`)
     }
     await page.reload();
  //  await expect(page.getByText('Cyclic job created')).toBeVisible()
    //  await page.reload();
 console.log('Create cyclic job completed');

}

async function startCyclicJob(page){
  console.log('Enter in start cyclic job');
  await page.locator('div').filter({ hasText: /^8963$/ }).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Weekly Jobs' }).click();
  await page.locator('div:nth-child(2) > .MuiBox-root.css-meypkx > .MuiButtonBase-root').first().click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Start Now' }).click();

  await page.waitForTimeout(2000);
  if (await page.getByRole('region').getByText('Completed').isVisible()) {
    await page.screenshot({ path: `./${screenshotPath}/startCyclicJob.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "startCyclicJob", "true", `./${screenshotPath}/startCyclicJob.png`)

  }
  else {
    await page.screenshot({ path: `./${screenshotPath}/startCyclicJob.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "startCyclicJob", "false", `./${screenshotPath}/startCyclicJob.png`)
  }
  await page.reload();


 console.log('Start cyclic job completed');
}
// async function deleteCyclicJob(page){

// }
// async function deleteAllCyclicJob(page){

//   await page.getByRole('button', { name: 'Master Data' }).click();
//   await page.getByRole('link', { name: 'Skill' }).click();
//      await page.waitForTimeout(3000);


//     while( true){
//      const text = await page.textContent('text=Showing');
//   const match = text.match(/of\s+(\d+)\s+entries/);
//   const total = match ? parseInt(match[1]) : 0;

//   // Stop loop if total <= 0
//   if (total <= 0) {
//     break;
//   }
//   await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
//   await page.getByRole('menuitem', { name: 'Delete' }).click();

//     await expect(page.getByText('Skill deleted successfully').first()).toBeVisible();
//     await page.waitForTimeout(1000);
//     }
   
// await page.reload();
// }
// async function exportCyclicJob(page){

// }
async function cancleWholeSessionCyclicJob(page){
  console.log('Enter in cancel whole session cyclic job');
  await page.locator('div').filter({ hasText: /^8963$/ }).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Daily Jobs' }).click();
 await page.locator('div:nth-child(3) > .MuiBox-root.css-meypkx > .MuiButtonBase-root').click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Cancel Whole Session' }).click();

  await page.reload();
   console.log('Cancel whole session cyclic job completed');
}
async function cancleCurrentSessionCyclicJob(page){
  console.log('Enter in cancle current session cyclic job');
  await page.locator('div').filter({ hasText: /^8963$/ }).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  // await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Monthly Jobs' }).click();
  await page.locator('div:nth-child(3) > .MuiBox-root.css-dshcag > .MuiPaper-root > .MuiBox-root.css-meypkx > .MuiButtonBase-root').first().click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Cancel Current Session' }).click();

  await page.reload();
  console.log('cancel current session cyclic job completed');

}

async function exportCyclicJobNormal(page) {
  console.log('Enter in export Cyclic job normal');
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Asset Management' }).click();
  await page.getByText('Charger', { exact: true }).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.locator('div').filter({ hasText: /^8963$/ }).click();
  // excel file
    const [excelDownload] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload.saveAs('downloads/exportExcelCyclicJobNormal.xlsx');
    // pdf file
    const [pdfDownload] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload.saveAs('downloads/exportPDFCyclicJobNormal.pdf');
      await page.waitForTimeout(2000);
    
      if (await page.getByText('Bilal Ahamad',{exact:true}).first().isVisible()) 
      {
        await page.screenshot({ path: `./${screenshotPath}/exportCyclicJobNormal.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCyclicJobNormal","true",`./${screenshotPath}/exportCyclicJobNormal.png`)
        
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportCyclicJobNormal.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCyclicJobNormal","false",`./${screenshotPath}/exportCyclicJobNormal.png`)
      }
      await page.reload();
  console.log('Export Cyclic job normal completed');
}

async function exportCyclicJobFilter(page) {
  console.log('Enter in export cyclic job filter');
  await page.getByText('Charger', { exact: true }).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.locator('div').filter({ hasText: /^8963$/ }).click();
  await page.getByRole('combobox', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation3' }).click();
  // excel file
    const [excelDownload1] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload1.saveAs('downloads/exportExcelCyclicJobFilte1.xlsx');
    // pdf file
    const [pdfDownload1] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload1.saveAs('downloads/exportPdfCyclicJobFilter1.pdf');
      await page.waitForTimeout(2000);
    
      if (await page.getByText('Daily Jobs').first().isVisible()) 
      {
        await page.screenshot({ path: `./${screenshotPath}/exportCyclicJobFilter1.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCyclicJobFilter1","true",`./${screenshotPath}/exportCyclicJobFilter1.png`)
        
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportCyclicJobFilter1.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCyclicJobFilter1","false",`./${screenshotPath}/exportCyclicJobFilter1.png`)
      }
      await page.reload();
   await page.locator('div').filter({ hasText: /^8963$/ }).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('combobox', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'least' }).click();
  // excel file
    const [excelDownload2] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload2.saveAs('downloads/exportExcelCyclicJobFilter2.xlsx');
    // pdf file
    const [pdfDownload2] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload2.saveAs('downloads/exportPdfCyclicJobFilter2.pdf');
      await page.waitForTimeout(2000);
    
      if (await page.getByText('Monthly Jobs').first().isVisible()) 
      {
        await page.screenshot({ path: `./${screenshotPath}/exportCyclicJobFilter2.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCyclicJobFilter2","true",`./${screenshotPath}/exportCyclicJobFilter2.png`)
        
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportCyclicJobFilter2.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCyclicJobFilter2","false",`./${screenshotPath}/exportCyclicJobFilter2.png`)
      }
      await page.reload();
   await page.locator('div').filter({ hasText: /^8963$/ }).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
   await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  // excel file
    const [excelDownload3] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload3.saveAs('downloads/exportExcelCyclicJobFilter3.xlsx');
    // pdf file
    const [pdfDownload3] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload3.saveAs('downloads/exportPdfCyclicJobFilter3.pdf');
      await page.waitForTimeout(2000);
    
      if (await page.getByText('Monthly Jobs').first().isVisible()) 
      {
        await page.screenshot({ path: `./${screenshotPath}/exportCyclicJobFilter3.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCyclicJobFilter3","true",`./${screenshotPath}/exportCyclicJobFilter3.png`)
        
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportCyclicJobFilter3.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCyclicJobFilter3","false",`./${screenshotPath}/exportCyclicJobFilter3.png`)
      }
      await page.reload();
  await page.locator('div').filter({ hasText: /^8963$/ }).click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('combobox', { name: 'Asset' }).click();
  await page.getByRole('option', { name: 'Mobile charger Edited' }).click();
  // excel file
    const [excelDownload4] = await Promise.all([
  
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Export To Excel' }).click()
  
    ]);
    await excelDownload4.saveAs('downloads/exportExcelCyclicJobFilter4.xlsx');
    // pdf file
    const [pdfDownload4] = await Promise.all([
  
      page.waitForEvent('download'),
  
      page.getByRole('button', { name: 'Export To PDF' }).click()
  
    ]);
    await pdfDownload4.saveAs('downloads/exportPdfCyclicJobFilter4.pdf');
      await page.waitForTimeout(2000);
    
      if (await page.getByText('Monthly Jobs').first().isVisible()) 
      {
        await page.screenshot({ path: `./${screenshotPath}/exportCyclicJobFilter4.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCyclicJobFilter4","true",`./${screenshotPath}/exportCyclicJobFilter4.png`)
        
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportCyclicJobFilter4.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportCyclicJobFilter4","false",`./${screenshotPath}/exportCyclicJobFilter4.png`)
      }
      await page.reload();
      console.log("Export cyclic job filter completed");
}

async function cyclicJobByInternalJob(page) {
  console.log('Enter in cyclic job by internal job');
  //  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('button', { name: 'Jobs' }).click();
  await page.getByRole('link', { name: 'Internal Jobs' }).click();
  await page.getByRole('tab', { name: 'Cyclic Batch Jobs' }).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('Intallation4');
  await page.getByRole('combobox', { name: 'Customer' }).click();
  await page.getByRole('option', { name: 'Mayank Rathor' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Ghosia Ghosia' }).first().click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Hello');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation4' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'least' }).click();
  await page.getByRole('combobox', { name: 'Asset' }).click();
  await page.getByText('Mobile charger Edited').click();
  await page.getByRole('button', { name: 'Testing & Troubleshooting' }).click();
  await page.getByRole('button', { name: 'Soldering & Rework' }).click();
  await page.getByRole('button', { name: 'Repairing' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Yearly' }).click();
  await page.getByRole('textbox', { name: 'Schedule Start Date' }).fill('2026-03-12');
  await page.getByRole('textbox', { name: 'Schedule End Date' }).fill('2027-04-28');
  await page.getByRole('button', { name: 'Create Job' }).click();
  // await page.getByText('Cyclic job created').click();await page.waitForTimeout(2000);
  await page.waitForTimeout(2000);
     if (await page.getByText('Cyclic job created').isVisible()) {
       await page.screenshot({ path: `./${screenshotPath}/cyclicJobByInternalJob.png`, fullPage: true });
       await updateOpJson(`./${screenshotPath}/`, "cyclicJobByInternalJob", "true", `./${screenshotPath}/cyclicJobByInternalJob.png`)
   
     }
     else {
       await page.screenshot({ path: `./${screenshotPath}/cyclicJobByInternalJob.png`, fullPage: true });
       await updateOpJson(`./${screenshotPath}/`, "cyclicJobByInternalJob", "false", `./${screenshotPath}/cyclicJobByInternalJob.png`)
     }
     await page.reload();
  console.log('create cyclic job by internal job completed');

}

async function createCyclicJobByCustomer(page){
  console.log('Enter create cyclic job by customer');
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('row', { name: 'Mayank Rathor akbk6551+1139@' }).getByLabel('Edit').click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
   await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('Intallation4');
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Ghosia Ghosia' }).first().click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Hello');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation4' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'least' }).click();
  await page.getByRole('combobox', { name: 'Asset' }).click();
  await page.getByText('Mobile charger Edited').click();
  await page.getByRole('button', { name: 'Testing & Troubleshooting' }).click();
  await page.getByRole('button', { name: 'Soldering & Rework' }).click();
  await page.getByRole('button', { name: 'Repairing' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Yearly' }).click();
  await page.getByRole('textbox', { name: 'Schedule Start Date' }).fill('2026-03-12');
  await page.getByRole('textbox', { name: 'Schedule End Date' }).fill('2027-04-28');
  await page.getByRole('button', { name: 'Create Job' }).click();
   // await page.getByText('Cyclic job created').click();
   await page.waitForTimeout(2000);
     if (await page.getByText('Cyclic job created').isVisible()) {
       await page.screenshot({ path: `./${screenshotPath}/createCyclicJobByCustomer.png`, fullPage: true });
       await updateOpJson(`./${screenshotPath}/`, "createCyclicJobByCustomer", "true", `./${screenshotPath}/createCyclicJobByCustomer.png`)
   
     }
     else {
       await page.screenshot({ path: `./${screenshotPath}/createCyclicJobByCustomer.png`, fullPage: true });
       await updateOpJson(`./${screenshotPath}/`, "createCyclicJobByCustomer", "false", `./${screenshotPath}/createCyclicJobByCustomer.png`)
     }
     await page.reload();
  console.log('create cyclic job by customer completed');
}

async function jobScheduleInInternalJobEdit(page){
  console.log('Enter in job schedule in  internal job edit');
    await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('button', { name: 'Jobs' }).click();
  await page.getByRole('link', { name: 'Internal Jobs' }).click();
  await page.getByRole('tab', { name: 'Cyclic Batch Jobs' }).click();
  await page.getByRole('tab', { name: 'Job Schedules' }).click();
  await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-16ed1nj').first().click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Installation process');
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('just installation');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.getByRole('option', { name: 'doneJob - doneJob' }).click();
  await page.getByRole('textbox', { name: 'Start Date Time' }).click();
  await page.getByRole('option', { name: 'Choose Saturday, February 28th,' }).click();
  await page.getByText('18:30').click();
  await page.getByRole('textbox', { name: 'End Date Time' }).click();
  await page.getByRole('button', { name: 'Next Month' }).click();
  await page.getByRole('option', { name: 'Choose Saturday, March 28th,' }).click();
  await page.getByText('18:30').click();
  await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.getByRole('option', { name: 'Testing & Troubleshooting' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.getByRole('option', { name: 'Ravi Tiwari' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Cyclic Job updated').click();
  await page.getByRole('button', { name: 'Back to list' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByText('Job deleted successfully').click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Cyclic Job updated').isVisible()) {
    await page.screenshot({ path: `./${screenshotPath}/jobScheduleInInternalJobEdit.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "jobScheduleInInternalJobEdit", "true", `./${screenshotPath}/jobScheduleInInternalJobEdit.png`)

  }
  else {
    await page.screenshot({ path: `./${screenshotPath}/jobScheduleInInternalJobEdit.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "jobScheduleInInternalJobEdit", "false", `./${screenshotPath}/jobScheduleInInternalJobEdit.png`)
  }
  await page.reload();
  console.log('Enter in job schedule in  internal job edit');
}

async function jobScheduleInInternalJobDelete(page) {
  console.log('Enter in job schedule in  internal job delete');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('button', { name: 'Jobs' }).click();
  await page.getByRole('link', { name: 'Internal Jobs' }).click();
  await page.getByRole('tab', { name: 'Cyclic Batch Jobs' }).click();
  await page.getByRole('tab', { name: 'Job Schedules' }).click();
  await page.locator('.MuiBox-root.css-70qvj9 > button:nth-child(2)').first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(1000);
  if (await page.getByText('Job deleted successfully').first().isVisible()) {
    await page.screenshot({ path: `./${screenshotPath}/jobScheduleInInternalJobDelete.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "jobScheduleInInternalJobDelete", "true", `./${screenshotPath}/jobScheduleInInternalJobDelete.png`)

  }
  else {
    await page.screenshot({ path: `./${screenshotPath}/jobScheduleInInternalJobDelete.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`, "jobScheduleInInternalJobEditjobScheduleInInternalJobDelete", "false", `./${screenshotPath}/jobScheduleInInternalJobDelete.png`)
  }
  await page.reload();
  console.log('job schedule in  internal job delete completed');
}