import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { dataRead } from '../dataRead';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/ticket`;
const pathName=`outputData/priority/${testData.companyType}`

export async function Tickets(page){
  // await addNewTickets(page);
  // await page.waitForTimeout(3000);
  // await editTicket(page);
//  await sendTicket(page);
  await exportExcelInTicketsNormal(page);
  await page.waitForTimeout(3000);
  await exportExcelInTicketFilter(page);

  // await uploadFilesTicket(page);

  

  

}

async function addNewTickets(page) {
  console.log('Enter in add new tickets');
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Tickets' }).click();
  await page.getByRole('button', { name: 'New Case' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).fill('Power cutoff issue');
  await page.getByRole('combobox', { name: 'Search or type customer email' }).click();
  await page.waitForTimeout(1000);
   await page.getByRole('option', { name: 'Anil Rathor (akbk6551+1136@' }).click();
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


  await page.getByRole('button', { name: 'New Case' }).click();
   await page.getByRole('textbox', { name: 'Enter case title' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).fill('Power cutoff issue');
  await page.getByRole('combobox', { name: 'Search or type customer email' }).click();
  await page.waitForTimeout(1000);
   await page.getByRole('option', { name: 'Neeraj Rathor (akbk6551+1217@' }).click();
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
  await expect(page.getByText('Support Case created')).toBeVisible();

  await page.waitForTimeout(2000);
  
    if (await page.getByText('Support Case created').first().isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/addNewTickets.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addNewTickets","true",`./${screenshotPath}/addNewTickets.png`)
      
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/addNewTickets.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addNewTickets","false",`./${screenshotPath}/addNewTickets.png`)
    }
    await page.reload();
  console.log('add new tickets completed');
}


async function editTicket(page){
    await page.getByText('createSupport1').click();
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
  const result1 = await dataRead(
        "./downloads/exportExcelInTicketsNormal.xlsx",
        ["power issue","akbk6551+1136@gmail.com"],
        ["Mayank Rathor","akbk6551+1139@gmail.com"]
    );
    console.log(result1);
  if (result1.success) 
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
console.log('Enter in export excel in ticket filter');
await page.getByRole('combobox', { name: 'Select Agent' }).click();
  await page.getByRole('option', { name: 'Jay kumar Rathor' }).click();
   const [excelDownload] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload.saveAs('downloads/exportExcelInTicketFilter.xlsx');
  await page.waitForTimeout(2000);
  const result2 = await dataRead(
        "./downloads/exportExcelInTicketFilter.xlsx",
       ["power issue","akbk6551+1136@gmail.com"],
         ["Power cutoff issue","akbk6551+1217@gmail.com"]
    );
    console.log(result2);
  if (result2.success) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter","true",`./${screenshotPath}/exportExcelInTicketFilter.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter","false",`./${screenshotPath}/exportExcelInTicketFilter.png`)
  }

  await page.reload();
  await page.getByRole('combobox', { name: 'Select Queue' }).click();
  await page.getByRole('option', { name: 'Technical Queue' }).click();
  const [excelDownload1] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload1.saveAs('downloads/exportExcelInTicketFilter1.xlsx');
  await page.waitForTimeout(2000);
  const result3 = await dataRead(
        "./downloads/exportExcelInTicketFilter1.xlsx",
        ["Power cutoff issue","akbk6551+1217@gmail.com"],
       ["power issue","akbk6551+1186@gmail.com"]
         
    );
    console.log(result3);
  if (result3.success) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter1","true",`./${screenshotPath}/exportExcelInTicketFilter1.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter1.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter1","false",`./${screenshotPath}/exportExcelInTicketFilter1.png`)
  }

  await page.reload();
   await page.getByRole('combobox', { name: 'Select Priority' }).click();
  await page.getByRole('option', { name: 'createSupport1' }).click();
  const [excelDownload2] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload2.saveAs('downloads/exportExcelInTicketFilter2.xlsx');
  await page.waitForTimeout(2000);
  const result4 = await dataRead(
        "./downloads/exportExcelInTicketFilter2.xlsx",
        ["createSupport1","akbk6551+1217@gmail.com"],
       ["createSupport2","akbk6551+1136@gmail.com"]
         
    );
    console.log(result4);
  if (result4.success) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter2","true",`./${screenshotPath}/exportExcelInTicketFilter2.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter2","false",`./${screenshotPath}/exportExcelInTicketFilter2.png`)
  }

  await page.reload();
   await page.getByRole('combobox', { name: 'Select Ticket Status' }).click();
  await page.getByRole('option', { name: 'Open' }).click();
  const [excelDownload3] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload3.saveAs('downloads/exportExcelInTicketFilter3.xlsx');
  await page.waitForTimeout(2000);
  const result5 = await dataRead(
        "./downloads/exportExcelInTicketFilter3.xlsx",
        ["Open","akbk6551+1217@gmail.com"],
       ["Resolved","akbk6551+4136@gmail.com"]
         
    );
    console.log(result5);
  if (result5.success) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter3","true",`./${screenshotPath}/exportExcelInTicketFilter3.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter3","false",`./${screenshotPath}/exportExcelInTicketFilter3.png`)
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