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

export async function ticketInsideCustomer(page){
  // await addNewTickets(page);
  // await page.waitForTimeout(3000);
  await editTicket(page);
  await page.waitForTimeout(3000);
  await sendTicket(page);
  await page.waitForTimeout(1000);
  // await exportExcelInTicketsNormal(page);
  // await page.waitForTimeout(1000);
  // await exportExcelInTicketInsideFilter(page);
  await uploadFilesTicket(page);

}

async function addNewTickets(page) {
  console.log('Enter in add new tickets');
  // await page.getByRole('button', { name: 'Customer Service' }).click();
    await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Anil Rathor').click();
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
   await page.getByRole('button', { name: 'Next: Additional Info' }).click();
  await page.getByRole('button', { name: 'Create Case' }).click();
  // await expect(page.getByText('Support Case created')).toBeVisible();


//2nd ticket
 await page.getByRole('tab', { name: 'Support Tickets' }).click();
  await page.getByRole('button', { name: 'New Case' }).click();
   await page.getByRole('textbox', { name: 'Enter case title' }).click();
  await page.getByRole('textbox', { name: 'Enter case title' }).fill('Power cutoff issue');

  await page.getByRole('button', { name: 'Select Case Issue' }).click();
  await page.getByRole('option', { name: 'Product Not Working',exact:true }).click();
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
   await page.getByRole('button', { name: 'Next: Additional Info' }).click();
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
  //         await page.goto("https://erp-customer-web-b6dretg6gbercne0.z01.azurefd.net/");
  //         await page.getByRole('link', { name: 'Support Tickets' }).click();
  //         if(await page.getByText('Power cutoff issue').first().isVisible()){
  //          console.log("Internal Job in Engineer portal is visible");
   
  //          await page.screenshot({ path: `./${screenshotPath}/checkSupportTicketInCustomerPortal.png`, fullPage: true });
  //          await updateOpJson(`./${screenshotPath}/`,"checkSupportTicketInCustomerPortal","true",`./${screenshotPath}/checkSupportTicketInCustomerPortal.png`)
  //         }else{
  //          console.log("Internal Job in Engineer portal is not visible");
         
  //          await page.screenshot({ path: `./${screenshotPath}/checkSupportTicketInCustomerPortal.png`, fullPage: true });
  //          await updateOpJson(`./${screenshotPath}/`,"checkSupportTicketInCustomerPortal","false",`./${screenshotPath}/checkSupportTicketInCustomerPortal.png`)
  //        }
          
  //      await page.waitForTimeout(2000);
  //       console.log("Going back to company portal...");
  //      await page.goto("https://strgerpcmpwebinddev.z29.web.core.windows.net/");
  //      console.log("Company portal login completed");
  // console.log('add new tickets completed');
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
          await page.goto("https://erp-customer-web-b6dretg6gbercne0.z01.azurefd.net/");
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
       await page.goto("https://strgerpcmpwebinddev.z29.web.core.windows.net/");
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
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
  await page.getByRole('tab', { name: 'Support Tickets' }).click();
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
  if (result1.success
      && await page.getByText("power issue").first().isVisible() 
    && !await page.getByText('Mayank').isVisible()
  ) 
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



async function  exportExcelInTicketInsideFilter(page) {
console.log('Enter in export excel in ticket filter');
await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
  await page.getByRole('tab', { name: 'Support Tickets' }).click();
await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Agent' }).click();
  await page.getByRole('menuitem', { name: 'Mukesh kumar' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
   const [excelDownload] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload.saveAs('downloads/exportExcelInTicketInsideFilter.xlsx');
  await page.waitForTimeout(2000);
  const result2 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter.xlsx",
        ["support case","akbk6551+1119@gmail.com"],
       ["power issue","Abhay"]
         
    );
    console.log(result2);
  if (result2.success
    && await page.getByText("akbk6551+1119@gmail.com").first().isVisible() 
    && !await page.getByText('Abhay').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter","true",`./${screenshotPath}/exportExcelInTicketInsideFilter.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter","false",`./${screenshotPath}/exportExcelInTicketInsideFilter.png`)
  }


  // await page.getByRole('button', { name: 'Customer Service' }).click();
  // await page.getByRole('link', { name: 'Customers' }).click();
  // await page.getByText('Jony Rathor').first().click();
  //   await page.getByRole('tab', { name: 'Support Tickets' }).click();
  // await page.getByRole('button', { name: 'Filter By' }).click();
  // await page.getByRole('menuitem', { name: 'Queue' }).click();
  // await page.getByRole('menuitem', { name: 'Technical Queue' }).getByRole('checkbox').check();
  // await page.getByRole('button', { name: 'OK' }).click();
  // const [excelDownload1] = await Promise.all([

  //   page.waitForEvent('download'),
  //   page.getByRole('button', { name: 'Export To Excel' }).click()

  // ]);
  // await excelDownload1.saveAs('downloads/exportExcelInTicketInsideFilter1.xlsx');
  // await page.waitForTimeout(2000);
  // const result3 = await dataRead(
  //       "./downloads/exportExcelInTicketInsideFilter1.xlsx",
  //       ["Power cutoff issue","akbk6551+1217@gmail.com"],
  //      ["power issue","akbk6551+1186@gmail.com"]
         
  //   );
  //   console.log(result3);
  // if (result3.success
  //      && await page.getByText("Power cutoff issue").first().isVisible() 
  //   && !await page.getByText('Power issue').isVisible()
  // ) 
  // {
  //   await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter1.png`, fullPage: true });
  //   await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter1","true",`./${screenshotPath}/exportExcelInTicketInsideFilter1.png`)
    
  // }
  // else{
  //   await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter1.png`, fullPage: true });
  //   await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter1","false",`./${screenshotPath}/exportExcelInTicketInsideFilter1.png`)
  // }

  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
    await page.getByRole('tab', { name: 'Support Tickets' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Priority' }).click();
  await page.getByRole('menuitem', { name: 'createdSupport2' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  const [excelDownload2] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload2.saveAs('downloads/exportExcelInTicketInsideFilter2.xlsx');
  await page.waitForTimeout(2000);
  const result4 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter2.xlsx",
        ["New support case","akbk6551+1119@gmail.com"],
       ["create","akbk65510000+16@gmail.com"]
         
    );
    console.log(result4);
  if (result4.success
       && await page.getByText("akbk6551+1119@gmail.com").first().isVisible() 
    && !await page.getByText('akbk65510000+16@gmail.com').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter2","true",`./${screenshotPath}/exportExcelInTicketInsideFilter2.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter2.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter2","false",`./${screenshotPath}/exportExcelInTicketInsideFilter2.png`)
  }

  await page.reload();
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
      await page.getByRole('tab', { name: 'Support Tickets' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Ticket Status' }).click();
  await page.getByRole('menuitem', { name: 'ResolvedSupport' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  const [excelDownload3] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload3.saveAs('downloads/exportExcelInTicketInsideFilter3.xlsx');
  await page.waitForTimeout(2000);
  const result5 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter3.xlsx",
       ["New support case","akbk6551+1119@gmail.com"],
       ["create","akbk65510000+16@gmail.com"]
         
    );
    console.log(result5);
  if (result5.success
     && await page.getByText("akbk6551+1119@gmail.com").first().isVisible() 
    && !await page.getByText('akbk65510000+16@gmail.com').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter3","true",`./${screenshotPath}/exportExcelInTicketInsideFilter3.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter3.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter3","false",`./${screenshotPath}/exportExcelInTicketInsideFilter3.png`)
  }

  await page.reload();
  await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
  await page.getByRole('tab', { name: 'Support Tickets' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
 await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('12/01/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('13/02/2026');
  await page.getByRole('button', { name: 'OK' }).click();
  const [excelDownload4] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload4.saveAs('downloads/exportExcelInTicketInsideFilter4.xlsx');
  await page.waitForTimeout(2000);
  const result7 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter4.xlsx",
          ["New support case","akbk6551+1119@gmail.com"],
       ["create","akbk65510000+16@gmail.com"]
         
    );
    console.log(result7);
  if (result7.success
     && await page.getByText("akbk6551+1119@gmail.com").first().isVisible() 
    && !await page.getByText('akbk65510000+16@gmail.com').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter4.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter4","true",`./${screenshotPath}/exportExcelInTicketInsideFilter4.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter4.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter4","false",`./${screenshotPath}/exportExcelInTicketInsideFilter4.png`)
  }

    await page.reload();
     await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
  await page.getByRole('tab', { name: 'Support Tickets' }).click();
   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Agent' }).click();
  await page.getByRole('menuitem', { name: 'Mukesh kumar' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Queue' }).click();
  await page.getByRole('menuitem', { name: 'Check Queue' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();

   
  
    const [excelDownload5] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload5.saveAs('downloads/exportExcelInTicketInsideFilter5.xlsx');
  await page.waitForTimeout(2000);
  const result8 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter5.xlsx",
        [" support case","akbk6551+1119@gmail.com"],
          ["create","akbk65510000+16@gmail.com"]
         
    );
    console.log(result8);
  if (result8.success
     && await page.getByText("Open").first().isVisible() 
    && !await page.getByText('Resolved').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter5.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter5","true",`./${screenshotPath}/exportExcelInTicketInsideFilter5.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter5.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter5","false",`./${screenshotPath}/exportExcelInTicketInsideFilter5.png`)
  }






  await page.reload();
   await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
  await page.getByRole('tab', { name: 'Support Tickets' }).click();
   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Agent' }).click();
  await page.getByRole('menuitem', { name: 'Mukesh kumar' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Priority' }).click();
  await page.getByRole('menuitem', { name: 'doneSupport2' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();

  

      const [excelDownload6] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload6.saveAs('downloads/exportExcelInTicketInsideFilter6.xlsx');
  await page.waitForTimeout(2000);
  const result9 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter6.xlsx",
        [" support case","akbk6551+1119@gmail.com"],
          ["create","akbk65510000+16@gmail.com"]
         
    );
    console.log(result9);
  if (result9.success
     && await page.getByText("akbk6551+1119@gmail.com").first().isVisible() 
    && !await page.getByText('akbk65510000+16@gmail.com').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter6.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter6","true",`./${screenshotPath}/exportExcelInTicketInsideFilter6.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter6.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter6","false",`./${screenshotPath}/exportExcelInTicketInsideFilter6.png`)
  }



  
  await page.reload();
    await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
  await page.getByRole('tab', { name: 'Support Tickets' }).click();
   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Agent' }).click();
  await page.getByRole('menuitem', { name: 'Mukesh kumar' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Ticket Status' }).click();
  await page.getByRole('menuitem', { name: 'ReslovedSupport' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();

  
      const [excelDownload7] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload7.saveAs('downloads/exportExcelInTicketInsideFilter7.xlsx');
  await page.waitForTimeout(2000);
  const result10 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter7.xlsx",
       [" support case","akbk6551+1119@gmail.com"],
          ["create","akbk65510000+16@gmail.com"]
         
    );
    console.log(result10);
  if (result10.success
     && await page.getByText("akbk6551+1119@gmail.com").first().isVisible() 
    && !await page.getByText('akbk65510000+16@gmail.com').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter7.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter7","true",`./${screenshotPath}/exportExcelInTicketInsideFilter7.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter7.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter7","false",`./${screenshotPath}/exportExcelInTicketInsideFilter7.png`)
  }



  await page.reload();
    await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Agent' }).click();
  await page.getByRole('menuitem', { name: 'Mukesh kumar' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('12/03/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('14/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();




      const [excelDownload8] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload8.saveAs('downloads/exportExcelInTicketInsideFilter8.xlsx');
  await page.waitForTimeout(2000);
  const result11 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter8.xlsx",
        [" support case","akbk6551+1119@gmail.com"],
          ["create","akbk65510000+16@gmail.com"]
         
    );
    console.log(result11);
  if (result11.success
     && await page.getByText("akbk6551+1119@gmail.com").first().isVisible() 
    && !await page.getByText('akbk65510000+16@gmail.com').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter8.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter8","true",`./${screenshotPath}/exportExcelInTicketInsideFilter8.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter8.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter8","false",`./${screenshotPath}/exportExcelInTicketInsideFilter8.png`)
  }


  //    await page.reload();
  //      await page.getByRole('button', { name: 'Customer Service' }).click();
  // await page.getByRole('link', { name: 'Customers' }).click();
  // await page.getByText('Jony Rathor').first().click();
  //  await page.getByRole('button', { name: 'Filter By' }).click();
  // await page.getByRole('menuitem', { name: 'Queue' }).click();
  // await page.getByRole('menuitem', { name: 'Check Queue' }).getByRole('checkbox').check();
  // await page.getByRole('button', { name: 'OK' }).click();
  // await page.getByRole('button', { name: 'Filter By' }).click();
  // await page.getByRole('menuitem', { name: 'Priority' }).click();
  // await page.getByRole('menuitem', { name: 'doneSupport2' }).getByRole('checkbox').check();
  // await page.getByRole('button', { name: 'OK' }).click();


  //     const [excelDownload9] = await Promise.all([

  //   page.waitForEvent('download'),
  //   page.getByRole('button', { name: 'Export To Excel' }).click()

  // ]);
  // await excelDownload9.saveAs('downloads/exportExcelInTicketInsideFilter6.xlsx');
  // await page.waitForTimeout(2000);
  // const result12 = await dataRead(
  //       "./downloads/exportExcelInTicketInsideFilter9.xlsx",
  //       ["Open","akbk6551+1217@gmail.com"],
  //      ["Resolved","akbk6551+4136@gmail.com"]
         
  //   );
  //   console.log(result12);
  // if (result12.success
  //    && await page.getByText("Open").first().isVisible() 
  //   && !await page.getByText('Resolved').isVisible()
  // ) 
  // {
  //   await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter9.png`, fullPage: true });
  //   await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter9","true",`./${screenshotPath}/exportExcelInTicketInsideFilter9.png`)
    
  // }
  // else{
  //   await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter9.png`, fullPage: true });
  //   await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter9","false",`./${screenshotPath}/exportExcelInTicketInsideFilter9.png`)
  // }

  //   await page.reload();
  //     await page.getByRole('button', { name: 'Customer Service' }).click();
  // await page.getByRole('link', { name: 'Customers' }).click();
  // await page.getByText('Jony Rathor').first().click();
  //  await page.getByRole('button', { name: 'Filter By' }).click();
  // await page.getByRole('menuitem', { name: 'Queue' }).click();
  // await page.getByRole('menuitem', { name: 'Check Queue' }).getByRole('checkbox').check();
  // await page.getByRole('button', { name: 'OK' }).click();
  // await page.getByRole('button', { name: 'Filter By' }).click();
  // await page.getByRole('menuitem', { name: 'Ticket Status' }).click();
  // await page.getByRole('menuitem', { name: 'ResolvedSupport' }).getByRole('checkbox').check();
  // await page.getByRole('button', { name: 'OK' }).click();
   

  //     const [excelDownload10] = await Promise.all([

  //   page.waitForEvent('download'),
  //   page.getByRole('button', { name: 'Export To Excel' }).click()

  // ]);
  // await excelDownload10.saveAs('downloads/exportExcelInTicketInsideFilter10.xlsx');
  // await page.waitForTimeout(2000);
  // const result13 = await dataRead(
  //       "./downloads/exportExcelInTicketInsideFilter10.xlsx",
  //       ["Open","akbk6551+1217@gmail.com"],
  //      ["Resolved","akbk6551+4136@gmail.com"]
         
  //   );
  //   console.log(result13);
  // if (result13.success
  //    && await page.getByText("Open").first().isVisible() 
  //   && !await page.getByText('Resolved').isVisible()
  // ) 
  // {
  //   await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter10.png`, fullPage: true });
  //   await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter10","true",`./${screenshotPath}/exportExcelInTicketInsideFilter10.png`)
    
  // }
  // else{
  //   await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter10.png`, fullPage: true });
  //   await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter10","false",`./${screenshotPath}/exportExcelInTicketInsideFilter10.png`)
  // }




  //    await page.reload();
  //      await page.getByRole('button', { name: 'Customer Service' }).click();
  // await page.getByRole('link', { name: 'Customers' }).click();
  // await page.getByText('Jony Rathor').first().click();
  //  await page.getByRole('menuitem', { name: 'Queue' }).click();
  // await page.getByRole('menuitem', { name: 'Check Queue' }).getByRole('checkbox').check();
  // await page.getByRole('button', { name: 'OK' }).click();
  // await page.getByRole('button', { name: 'Filter By' }).click();
  // await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  // await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  // await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('12/03/2026');
  // await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  // await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('04/04/2026');
  // await page.getByRole('button', { name: 'OK' }).click();

      const [excelDownload11] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload11.saveAs('downloads/exportExcelInTicketInsideFilter11.xlsx');
  await page.waitForTimeout(2000);
  const result14 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter11.xlsx",
        ["Open","akbk6551+1217@gmail.com"],
       ["Resolved","akbk6551+4136@gmail.com"]
         
    );
    console.log(result14);
  if (result14.success
     && await page.getByText("Open").first().isVisible() 
    && !await page.getByText('Resolved').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter11.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter11","true",`./${screenshotPath}/exportExcelInTicketInsideFilter11.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter11.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter11","false",`./${screenshotPath}/exportExcelInTicketInsideFilter11.png`)
  }


    await page.reload();
      await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
  await page.getByRole('menuitem', { name: 'Priority' }).click();
  await page.getByRole('menuitem', { name: 'doneSupport2' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Ticket Status' }).click();
  await page.getByRole('menuitem', { name: 'ResolvedSupport' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();


      const [excelDownload12] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload12.saveAs('downloads/exportExcelInTicketInsideFilter12.xlsx');
  await page.waitForTimeout(2000);
  const result15 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter12.xlsx",
        ["New support case","akbk6551+1119@gmail.com"],
        ["create","akbk65510000+16@gmail.com"]
         
    );
    console.log(result12);
  if (result12.success
     && await page.getByText("akbk6551+1119@gmail.com").first().isVisible() 
    && !await page.getByText('akbk65510000+16@gmail.com').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter12.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter12","true",`./${screenshotPath}/exportExcelInTicketInsideFilter12.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter12.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter12","false",`./${screenshotPath}/exportExcelInTicketInsideFilter12.png`)
  }



    await page.reload();
      await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Priority' }).click();
  await page.getByRole('menuitem', { name: 'doneSupport2' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('14/03/20265');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('15/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();


      const [excelDownload13] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload13.saveAs('downloads/exportExcelInTicketInsideFilter13.xlsx');
  await page.waitForTimeout(2000);
  const result16 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter13.xlsx",
        ["New support case","akbk6551+1119@gmail.com"],
        ["create","akbk65510000+16@gmail.com"]
         
    );
    console.log(result16);
  if (result16.success
     && await page.getByText("akbk6551+1119@gmail.com").first().isVisible() 
    && !await page.getByText('akbk65510000+16@gmail.com').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter13.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter13","true",`./${screenshotPath}/exportExcelInTicketInsideFilter13.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter13.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter13","false",`./${screenshotPath}/exportExcelInTicketInsideFilter13.png`)
  }


     await page.reload();
       await page.getByRole('button', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByText('Jony Rathor').first().click();
   await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Ticket Status' }).click();
  await page.getByRole('menuitem', { name: 'ReslovedSupport' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('12/03/20264');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('14/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();


      const [excelDownload14] = await Promise.all([

    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()

  ]);
  await excelDownload14.saveAs('downloads/exportExcelInTicketInsideFilter14.xlsx');
  await page.waitForTimeout(2000);
  const result17 = await dataRead(
        "./downloads/exportExcelInTicketInsideFilter14.xlsx",
         ["New support case","akbk6551+1119@gmail.com"],
        ["create","akbk65510000+16@gmail.com"]
         
    );
    console.log(result17);
  if (result17.success
     && await page.getByText("akbk6551+1119@gmail.com").first().isVisible() 
    && !await page.getByText('kbk65510000+16@gmail.com').isVisible()
  ) 
  {
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter14.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter14","true",`./${screenshotPath}/exportExcelInTicketInsideFilter14.png`)
    
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/exportExcelInTicketInsideFilter14.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"exportExcelInTicketInsideFilter14","false",`./${screenshotPath}/exportExcelInTicketInsideFilter14.png`)
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