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
  // await addNewTickets(page);
  // await page.waitForTimeout(3000);
  // await editTicket(page);
  // await page.waitForTimeout(3000);
  // await sendTicket(page);
  // await page.waitForTimeout(1000);
  await exportExcelInTicketsNormal(page);
  await page.waitForTimeout(1000);
  await exportExcelInTicketFilter(page);
  await uploadFilesTicket(page);

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
  await page.getByRole('option', { name: 'Product Not Workings6' }).click();
  await page.getByRole('button', { name: 'Select Priority' }).click();
  await page.getByRole('option', { name: 'createdSupport2' }).click();
  await page.getByRole('button', { name: 'Select Status Profile' }).click();
  await page.getByRole('option', { name: 'OpenSupport' }).click();
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

   // check in customer portal 
          await page.goto(data.customerPortal);
          await page.getByRole('link', { name: 'Support Tickets' }).click();
          if(await page.getByText('Power cutoff issue').first().isVisible()){
           console.log("Internal Job in Engineer portal is visible");
   
           await page.screenshot({ path: `./${screenshotPath}/checkSupportTicketInCustomerPortal.png`, fullPage: true });
           await updateOpJson(`./${screenshotPath}/`,"checkSupportTicketInCustomerPortal","true",`./${screenshotPath}/checkSupportTicketInCustomerPortal.png`)
          }else{
           console.log("Internal Job in Engineer portal is not visible");
         
           await page.screenshot({ path: `./${screenshotPath}/checkSupportTicketInCustomerPortal.png`, fullPage: true });
           await updateOpJson(`./${screenshotPath}/`,"checkSupportTicketInCustomerPortal","false",`./${screenshotPath}/checkSupportTicketInCustomerPortal.png`)
         }
          
       await page.waitForTimeout(2000);
        console.log("Going back to company portal...");
       await page.goto("https://strgerpcmpwebinddev.z29.web.core.windows.net/");
       console.log("Company portal login completed");
  console.log('add new tickets completed');
}


async function editTicket(page){
     await page.getByText('createdSupport2').first().click();
  await page.getByRole('button', { name: 'Select an Agent' }).click();
  await page.getByRole('option', { name: 'Jony Rathor' }).click();

  await page.getByRole('button', { name: 'Product Not Workings6' }).click();
  await page.getByRole('menuitem', { name: 'Product Not Working', exact: true }).click();
  await page.getByRole('button').nth(4).click();
  await page.getByRole('menuitem', { name: 'ResolvedSupport' }).click();
  await page.getByRole('main').getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('menuitem', { name: 'doneSupport2' }).click();

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
    await page.reload();
    
    // check in customer portal 

          // await page.goto("https://erp-customer-web-b6dretg6gbercne0.z01.azurefd.net/");
          await page.getByRole('link', { name: 'Support Tickets' }).click();
          if(await page.getByText('doneSupport2').first().isVisible()){
           console.log("Internal Job in Engineer portal is visible");
   
           await page.screenshot({ path: `./${screenshotPath}/checkeditedSupportTicketInCustomerPortal.png`, fullPage: true });
           await updateOpJson(`./${screenshotPath}/`,"checkeditedSupportTicketInCustomerPortal","true",`./${screenshotPath}/checkeditedSupportTicketInCustomerPortal.png`)
          }else{
           console.log("Internal Job in Engineer portal is not visible");
         
           await page.screenshot({ path: `./${screenshotPath}/checkeditedSupportTicketInCustomerPortal.png`, fullPage: true });
           await updateOpJson(`./${screenshotPath}/`,"checkeditedSupportTicketInCustomerPortal","false",`./${screenshotPath}/checkeditedSupportTicketInCustomerPortal.png`)
         }
          
       await page.waitForTimeout(2000);
        console.log("Going back to company portal...");
       await page.goto(data.url);
       console.log("Company portal login completed");
}

async function sendTicket(page){
  await page.getByText('createdSupport2').first().click();
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
await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Agent' }).click();
  await page.getByRole('menuitem', { name: 'Yogesh Yadav' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
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
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Queue' }).click();
  await page.getByRole('menuitem', { name: 'Technical Queue' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
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
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Priority' }).click();
  await page.getByRole('menuitem', { name: 'createdSupport2' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
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
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Ticket Status' }).click();
  await page.getByRole('menuitem', { name: 'OpenSupport' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  const [excelDownload3] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload3.saveAs('downloads/exportExcelInTicketFilter3.xlsx');
  await page.waitForTimeout(2000);
  const result5 = await dataRead(
        "./downloads/exportExcelInTicketFilter3.xlsx",
        ["OpenSupport","akbk6551+1136@gmail.com"],
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

  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('button', { name: 'Choose date' }).first().click();
  await page.getByRole('gridcell', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Choose date', exact: true }).click();
  await page.getByRole('gridcell', { name: '26' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  const [excelDownload4] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload3.saveAs('downloads/exportExcelInTicketFilter4.xlsx');
  await page.waitForTimeout(2000);
  const result6 = await dataRead(
        "./downloads/exportExcelInTicketFilter4.xlsx",
        ["Open","akbk6551+1217@gmail.com"],
       ["Resolved","akbk6551+4136@gmail.com"]
         
    );
    console.log(result6);
  if (result6.success) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter4.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter4","true",`./${screenshotPath}/exportExcelInTicketFilter4.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketFilter4.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketFilter4","false",`./${screenshotPath}/exportExcelInTicketFilter4.png`)
  }

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