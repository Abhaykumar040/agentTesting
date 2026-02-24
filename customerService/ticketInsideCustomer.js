import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/ticket`;
const pathName=`outputData/priority/${testData.companyType}`

export async function ticketInsideCustomer(page){
  await addNewTickets(page);
  await page.waitForTimeout(30000);
//   await editTicket(page);
//  await sendTicket(page);
//   await exportExcelInTicketsNormal(page);
//   await page.waitForTimeout(1000);
//   await exportExcelInTicketFilter(page);

//   await uploadFilesTicket(page);

  

  

}

async function addNewTickets(page) {
  console.log('Enter in add new tickets');
  await page.getByRole('button', { name: 'Customer Service' }).click();
    await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
  await page.getByRole('tab', { name: 'Support Tickets' }).click();


  await page.getByRole('button', { name: 'New Case' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).fill('Power cutoff issue');

  // await page.getByRole('button', { name: 'Select Case Issue' }).click();
  await page.getByRole('button', { name: 'Select Case Issue' }).click();
  await page.getByRole('option', { name: 'Product Not Working' }).first().click();
  await page.getByRole('button', { name: 'Select Priority' }).click();
  await page.getByRole('option', { name: 'createdSupport2' }).click();
  await page.getByRole('button', { name: 'Select Status Profile' }).click();
  await page.getByRole('option', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Portal' }).click();
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Describe the case in detail...' }).click();
  await page.getByRole('textbox', { name: 'Describe the case in detail...' }).fill('There is a power cutoff issue in device ');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Select a Queue' }).click();
  await page.getByRole('option', { name: 'Technical Queue' }).click();
  await page.getByRole('button', { name: 'Select an Agent' }).click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('button', { name: 'Next: SLA' }).click();
  await page.getByRole('button', { name: 'Select SLA' }).click();
  await page.getByRole('option', { name: 'Critical / Breakdown Issue 3' }).click();
  await page.getByRole('button', { name: 'Create Case' }).click();
  await expect(page.getByText('Support Case created')).toBeVisible();


//2nd ticket
 await page.getByRole('tab', { name: 'Support Tickets' }).click();
  await page.getByRole('button', { name: 'New Case' }).click();
   await page.getByRole('textbox', { name: 'Enter case title' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).fill('Power cutoff issue');

  await page.getByRole('button', { name: 'Select Case Issue' }).click();
  await page.getByRole('option', { name: 'Installation Request1' }).click();
  await page.getByRole('button', { name: 'Select Priority' }).click();
  await page.getByRole('option', { name: 'createSupport1' }).click();
  await page.getByRole('button', { name: 'Select Status Profile' }).click();
  await page.getByRole('option', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Portal' }).click();
  await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Describe the case in detail...' }).click();
  await page.getByRole('textbox', { name: 'Describe the case in detail...' }).fill('There is a power cutoff issue in device ');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Select a Queue' }).click();
  await page.getByRole('option', { name: 'Technical Queue' }).click();
  await page.getByRole('button', { name: 'Select an Agent' }).click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('button', { name: 'Next: SLA' }).click();
  await page.getByRole('button', { name: 'Select SLA' }).click();
  await page.getByRole('option', { name: 'AMC / Maintenance 3' }).click();
  await page.getByRole('button', { name: 'Create Case' }).click();


  await page.waitForTimeout(1000);
   await page.getByRole('tab', { name: 'Support Tickets' }).click();
    await page.waitForTimeout(2000);
  
    if (page.getByText('Showing 1 to 1 of 1 entries').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/addNewTickets.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addNewTickets","true",`./${screenshotPath}/addNewTickets.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/addNewTickets.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addNewTickets","false",`./${screenshotPath}/addNewTickets.png`)
    }
   
  console.log('add new tickets completed');
}


async function editTicket(page){
     await page.getByText('doneSupport2').click();
  await page.getByRole('button', { name: 'Select an Agent' }).click();
  await page.getByRole('option', { name: 'Yogesh Yadav' }).click();
  await page.getByRole('button', { name: 'Update Case' }).click();
  await page.getByRole('link', { name: 'Tickets' }).click();

    await page.waitForTimeout(2000);
  
    if (await page.getByText('Support Case created').first().isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/editTicket.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"editTicket","true",`./${screenshotPath}/editTicket.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/editTicket.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"editTicket","false",`./${screenshotPath}/editTicket.png`)
    }
}

async function sendTicket(page){
  await page.getByText('createSupport1').click();
  await page.locator('div').filter({ hasText: /^Case DetailsEmail ThreadTimelineDocumentsAdditional Info$/ }).first().click();
  await page.getByRole('tab', { name: 'Email Thread' }).click();
  await page.getByRole('combobox', { name: 'Enter email and press Enter' }).first().click();
  await page.getByRole('combobox', { name: 'Enter email and press Enter' }).first().fill('akbk04+4@gmail.com');
  await page.getByRole('combobox', { name: 'Enter email and press Enter' }).first().press('Tab');
  await page.getByRole('combobox', { name: 'Enter email and press Enter' }).nth(1).click();
  await page.getByRole('combobox', { name: 'Enter email and press Enter' }).nth(1).fill('abhay@zynka.ai');
  await page.getByRole('textbox', { name: 'Enter email subject...' }).click();
  await page.getByRole('textbox', { name: 'Enter email subject...' }).fill('test1');
  await page.locator('.editor-content').click();
  await page.locator('.editor-content').fill('test2');
  await page.getByRole('button', { name: 'Attach Files' }).click();
  await page.getByRole('button', { name: 'Send Email' }).click();


    await page.waitForTimeout(2000);
  
    if (await page.getByText('Support Case created').first().isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/sendTicket.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"sendTicket","true",`./${screenshotPath}/sendTicket.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/sendTicket.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"sendTicket","false",`./${screenshotPath}/sendTicket.png`)
    }
}

async function exportExcelInTicketsNormal(page) {
   // excel file
  const [excelDownload] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload.saveAs('downloads/exportExcelInTicketsNormal.xlsx');
  await page.waitForTimeout(2000);

  if (await page.getByText('createSupport1',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketsNormal.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketsNormal","true",`./${screenshotPath}/exportExcelInTicketsNormal.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketsNormal.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketsNormal","false",`./${screenshotPath}/exportExcelInTicketsNormal.png`)
  }
  await page.reload();
}

async function exportExcelInTicketFilter(page) {
   const [excelDownload] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload.saveAs('downloads/exportExcelInTicketFilter.xlsx');
  await page.waitForTimeout(2000);

  if (await page.getByText('createdSupport2',{exact:true}).first().isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter","true",`./${screenshotPath}/exportExcelInTicketFilter.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter","false",`./${screenshotPath}/exportExcelInTicketFilter.png`)
  }
  await page.reload();
}

async function uploadFilesTicket(page){
  await page.getByRole('link', { name: 'Tickets' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('cell', { name: 'createSupport1' }).click();
   await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Documents' }).click();
  //  await page.waitForTimeout(1000);
  // await page.getByRole('button', { name: 'Browse Files' }).click();
     await page.waitForTimeout(1000);
  await page.locator('input[type="file"]')
  .setInputFiles('./uploadTestingFiles/leads.xlsx');
   await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
 await page.waitForTimeout(2000);

  await page.getByRole('tab', { name: 'Additional Info' }).click();
  await page.locator('div').filter({ hasText: /^Name$/ }).nth(1).click();
 
  await page.getByRole('textbox', { name: 'Name' }).fill('abhay');
  await page.getByRole('textbox', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address' }).fill('KHAMARIA');
 
  await page.getByRole('button', { name: 'Click To Upload Files' }).click();
   await page.waitForTimeout(1000);
  await page.locator('input[type="file"]')
  .setInputFiles('./uploadTestingFiles/leads.xlsx');
     await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Update Case' }).click();
    await page.waitForTimeout(2000);
}