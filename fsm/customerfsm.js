import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { dataRead } from '../dataRead';




const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/customerfsm`;
const pathName=`outputData/status/${testData.companyType}`


export async function customerfsm(page){
   await deletePreviousCustomer(page);
   await page.waitForTimeout(3000);
    //  await customerDownload(page);
       await page.waitForTimeout(3000);
//  await createFsmCustomer(page);
      const rawData = await fs.readFile('./data.json', 'utf8');
      const testData = JSON.parse(rawData);

  if (testData.companySubscription==='fsm') {
    await createFsmCustomer(page);
    
    await page.waitForTimeout(3000);
  } else if(testData.companySubscription==='all'){
    
    await createFsmCustomerOne(page);
  }
    await page.waitForTimeout(3000);
    await editFsmCustomer(page);
    await page.waitForTimeout(3000);
    await deleteFsmCustomer(page);
    await page.waitForTimeout(3000);
    await addressCreateFsmCustomerCommercial(page);
    await page.waitForTimeout(3000);
    await addressCreateFsmCustomerIndividual(page);
    await page.waitForTimeout(3000);
    await jobCreateFsmCustomerCommercial(page);
    await page.waitForTimeout(3000);
    await jobCreateFsmCustomerIndividual(page);
    await page.waitForTimeout(3000);
    await cyclicJobCreateFsmCustomer(page);
    await page.waitForTimeout(3000);
    await contactDetailsFsmCustomer(page);
    await page.waitForTimeout(3000);
    await documentsUploadFsmCustomer(page);
    await page.waitForTimeout(3000);
    // await exportCustomerFsmNormal(page);
    // await page.waitForTimeout(3000);
    // await exportCustomerFsmFilter(page);
    
}

async function exportCustomerFsmFilter(page){
  console.log("Enter in filter in customer");
  // await page.getByRole('button', { name: 'Sales' }).click();
  // await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();


  // excel code 
     const [excelDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload.saveAs('downloads/exportExelCustomerFilter1.xlsx');
  const result = await dataRead(
        "./downloads/exportExelCustomerFilter1.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result);
  await page.waitForTimeout(2000)
  if (result.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter1.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter1","true",`./${screenshotPath}/exportExelCustomerFilter1.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter1.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter1","false",`./${screenshotPath}/exportExelCustomerFilter1.png`)
        }




  // pdf code

   const [pdfDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload.saveAs('downloads/exportPdfCustomerFilter2.pdf');
 const result1 = await dataRead(
        "./downloads/exportPdfCustomerFilter2.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result1);
  await page.waitForTimeout(2000)
  if (result1.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
      {
          await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter2.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter2","true",`./${screenshotPath}/exportPdfCustomerFilter2.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter2.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter2","false",`./${screenshotPath}/exportPdfCustomerFilter2.png`)
        }



  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Prayagraj' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.reload();

  // excel code 

  const [excelDownload1] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload1.saveAs('downloads/exportExelCustomerFilter3.xlsx');
  const result2 = await dataRead(
        "./downloads/exportExelCustomerFilter3.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result2);
  await page.waitForTimeout(2000)
  if (result2.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter3.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter3","true",`./${screenshotPath}/exportExelCustomerFilter3.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter3.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter3","false",`./${screenshotPath}/exportExelCustomerFilter3.png`)
        }

    // pdf code    

     const [pdfDownload1] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload1.saveAs('downloads/exportPdfCustomerFilter4.pdf');
 const result3 = await dataRead(
        "./downloads/exportPdfCustomerFilter4.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result3);
  await page.waitForTimeout(2000)
  if (result3.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
      {
          await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter4.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter4","true",`./${screenshotPath}/exportPdfCustomerFilter4.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter4.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter4","false",`./${screenshotPath}/exportPdfCustomerFilter4.png`)
        }





   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer Type' }).getByRole('paragraph').click();
  await page.getByRole('menuitem', { name: 'commercial' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

   // excel code 
  const [excelDownload2] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload2.saveAs('downloads/exportExelCustomerFilter5.xlsx');
  const result4 = await dataRead(
        "./downloads/exportExelCustomerFilter5.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result4);
  await page.waitForTimeout(2000)
  if (result4.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter5.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter5","true",`./${screenshotPath}/exportExelCustomerFilter5.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter5.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter5","false",`./${screenshotPath}/exportExelCustomerFilter5.png`)
        }





   // pdf code


       const [pdfDownload2] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload2.saveAs('downloads/exportPdfCustomerFilter6.pdf');
 const result5 = await dataRead(
        "./downloads/exportPdfCustomerFilter6.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result5);
  await page.waitForTimeout(2000)
  if (result5.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
      {
          await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter6.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter6","true",`./${screenshotPath}/exportPdfCustomerFilter6.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter6.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter6","false",`./${screenshotPath}/exportPdfCustomerFilter6.png`)
        }


    


   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Kamlesh Maurya' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();



    // excel code 

    const [excelDownload3] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload3.saveAs('downloads/exportExelCustomerFilter7.xlsx');
  const result6 = await dataRead(
        "./downloads/exportExelCustomerFilter7.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result6);
  await page.waitForTimeout(2000)
  if (result6.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter7.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter7","true",`./${screenshotPath}/exportExelCustomerFilter7.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter7.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter7","false",`./${screenshotPath}/exportExelCustomerFilter7.png`)
        }


   // pdf code 
      const [pdfDownload3] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload3.saveAs('downloads/exportPdfCustomerFilter6.pdf');
 const result7 = await dataRead(
        "./downloads/exportPdfCustomerFilter6.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result7);
  await page.waitForTimeout(2000)
  if (result7.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter8.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter8","true",`./${screenshotPath}/exportPdfCustomerFilter8.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter8.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter8","false",`./${screenshotPath}/exportPdfCustomerFilter8.png`)
       }     



  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Dealer Code' }).click();
  await page.getByRole('menuitem', { name: '1275836' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

  // excel code

      const [excelDownload4] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload4.saveAs('downloads/exportExelCustomerFilter9.xlsx');
  const result8 = await dataRead(
        "./downloads/exportExelCustomerFilter9.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result8);
  await page.waitForTimeout(2000)
  if (result8.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter9.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter9","true",`./${screenshotPath}/exportExelCustomerFilter9.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter9.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter9","false",`./${screenshotPath}/exportExelCustomerFilter9.png`)
        }


  // pdf code   
       const [pdfDownload5] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload5.saveAs('downloads/exportPdfCustomerFilter6.pdf');
 const result9 = await dataRead(
        "./downloads/exportPdfCustomerFilter6.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result9);
  await page.waitForTimeout(2000)
  if (result9.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter10.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter10","true",`./${screenshotPath}/exportPdfCustomerFilter10.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter10.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter10","false",`./${screenshotPath}/exportPdfCustomerFilter10.png`)
       }  
  

  

  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Date Filter').click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('09/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('20/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();

  // excel code

      const [excelDownload6] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload6.saveAs('downloads/exportExelCustomerFilter11.xlsx');
  const result10 = await dataRead(
        "./downloads/exportExelCustomerFilter11.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result10);
  await page.waitForTimeout(2000)
  if (result10.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter11.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter11","true",`./${screenshotPath}/exportExelCustomerFilter11.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter11.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter11","false",`./${screenshotPath}/exportExelCustomerFilter11.png`)
        }

   // pdf code
   
      const [pdfDownload6] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload6.saveAs('downloads/exportPdfCustomerFilter12.pdf');
 const result11 = await dataRead(
        "./downloads/exportPdfCustomerFilter12.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result11);
  await page.waitForTimeout(2000)
  if (result11.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter12.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter12","true",`./${screenshotPath}/exportPdfCustomerFilter12.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter12.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter12","false",`./${screenshotPath}/exportPdfCustomerFilter12.png`)
       } 
    

   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
     await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Prayagraj' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


  // excel code

       const [excelDownload7] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload7.saveAs('downloads/exportExelCustomerFilter13.xlsx');
  const result12 = await dataRead(
        "./downloads/exportExelCustomerFilter13.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result12);
  await page.waitForTimeout(2000)
  if (result12.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter13.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter13","true",`./${screenshotPath}/exportExelCustomerFilter13.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter13.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter13","false",`./${screenshotPath}/exportExelCustomerFilter13.png`)
        }

   // pdf code
   
      const [pdfDownload7] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload7.saveAs('downloads/exportPdfCustomerFilter14.pdf');
 const result13 = await dataRead(
        "./downloads/exportPdfCustomerFilter14.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result13);
  await page.waitForTimeout(2000)
  if (result13.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter14.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter14","true",`./${screenshotPath}/exportPdfCustomerFilter14.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter14.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter18","false",`./${screenshotPath}/exportPdfCustomerFilter14.png`)
       } 




   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
     await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer Type' }).getByRole('paragraph').click();
  await page.getByRole('menuitem', { name: 'commercial' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


  // excel code 

       const [excelDownload8] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload8.saveAs('downloads/exportExelCustomerFilter15.xlsx');
  const result14 = await dataRead(
        "./downloads/exportExelCustomerFilter15.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result14);
  await page.waitForTimeout(2000)
  if (result14.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter15.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter15","true",`./${screenshotPath}/exportExelCustomerFilter15.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter15.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter15","false",`./${screenshotPath}/exportExelCustomerFilter15.png`)
        }

   // pdf code
   
      const [pdfDownload8] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload8.saveAs('downloads/exportPdfCustomerFilter16.pdf');
 const result15 = await dataRead(
        "./downloads/exportPdfCustomerFilter16.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result15);
  await page.waitForTimeout(2000)
  if (result15.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter16.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter16","true",`./${screenshotPath}/exportPdfCustomerFilter16.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter16.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter16","false",`./${screenshotPath}/exportPdfCustomerFilter16.png`)
       } 

 
   await page.waitForTimeout(2000);
 await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
     await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer', exact: true }).getByRole('paragraph').click();
  await page.getByRole('menuitem', { name: 'Kamlesh Maurya' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


    // excel code


          const [excelDownload9] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload9.saveAs('downloads/exportExelCustomerFilter17.xlsx');
  const result16 = await dataRead(
        "./downloads/exportExelCustomerFilter17.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result16);
  await page.waitForTimeout(2000)
  if (result16.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter17.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter17","true",`./${screenshotPath}/exportExelCustomerFilter17.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter17.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter17","false",`./${screenshotPath}/exportExelCustomerFilter17.png`)
        }

   // pdf code
   
      const [pdfDownload9] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload9.saveAs('downloads/exportPdfCustomerFilter18.pdf');
 const result17 = await dataRead(
        "./downloads/exportPdfCustomerFilter18.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result17);
  await page.waitForTimeout(2000)
  if (result17.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter18.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter18","true",`./${screenshotPath}/exportPdfCustomerFilter18.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter18.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter18","false",`./${screenshotPath}/exportPdfCustomerFilter18.png`)
       }




   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
     await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Dealer Code' }).click();
  await page.getByRole('menuitem', { name: '1275836' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


    const [excelDownload10] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload10.saveAs('downloads/exportExelCustomerFilter19.xlsx');
  const result18 = await dataRead(
        "./downloads/exportExelCustomerFilter19.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result18);
  await page.waitForTimeout(2000)
  if (result18.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter19.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter19","true",`./${screenshotPath}/exportExelCustomerFilter19.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter19.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter19","false",`./${screenshotPath}/exportExelCustomerFilter19.png`)
        }

   // pdf code
   
      const [pdfDownload10] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload10.saveAs('downloads/exportPdfCustomerFilter20.pdf');
 const result19 = await dataRead(
        "./downloads/exportPdfCustomerFilter20.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result19);
  await page.waitForTimeout(2000)
  if (result19.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter20.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter20","true",`./${screenshotPath}/exportPdfCustomerFilter20.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter20.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter20","false",`./${screenshotPath}/exportPdfCustomerFilter20.png`)
       }
  
  
  


   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'State' }).click();
  await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
     await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Date Filter').click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('09/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('20/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


    const [excelDownload11] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload11.saveAs('downloads/exportExelCustomerFilter21.xlsx');
  const result20 = await dataRead(
        "./downloads/exportExelCustomerFilter21.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result20);
  await page.waitForTimeout(2000)
  if (result20.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter21.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter21","true",`./${screenshotPath}/exportExelCustomerFilter21.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter21.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter21","false",`./${screenshotPath}/exportExelCustomerFilter21.png`)
        }

   // pdf code
   
      const [pdfDownload11] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload11.saveAs('downloads/exportPdfCustomerFilter22.pdf');
 const result21 = await dataRead(
        "./downloads/exportPdfCustomerFilter22.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result21);
  await page.waitForTimeout(2000)
  if (result21.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter22.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter22","true",`./${screenshotPath}/exportPdfCustomerFilter22.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter22.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter22","false",`./${screenshotPath}/exportPdfCustomerFilter22.png`)
       }   

  


   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Prayagraj' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer Type' }).getByRole('paragraph').click();
  await page.getByRole('menuitem', { name: 'commercial' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


    const [excelDownload12] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload12.saveAs('downloads/exportExelCustomerFilter23.xlsx');
  const result22 = await dataRead(
        "./downloads/exportExelCustomerFilter23.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result22);
  await page.waitForTimeout(2000)
  if (result22.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter23.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter23","true",`./${screenshotPath}/exportExelCustomerFilter23.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter23.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter23","false",`./${screenshotPath}/exportExelCustomerFilter23.png`)
        }

   // pdf code
   
      const [pdfDownload12] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload12.saveAs('downloads/exportPdfCustomerFilter24.pdf');
 const result23 = await dataRead(
        "./downloads/exportPdfCustomerFilter24.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result23);
  await page.waitForTimeout(2000)
  if (result23.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter24.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter24","true",`./${screenshotPath}/exportPdfCustomerFilter24.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter24.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter24","false",`./${screenshotPath}/exportPdfCustomerFilter24.png`)
       }   


   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Prayagraj' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer', exact: true }).getByRole('paragraph').click();
  await page.getByRole('menuitem', { name: 'Arjun Singh' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


     const [excelDownload13] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload13.saveAs('downloads/exportExelCustomerFilter25.xlsx');
  const result24 = await dataRead(
        "./downloads/exportExelCustomerFilter25.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result24);
  await page.waitForTimeout(2000)
  if (result23.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter25.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter25","true",`./${screenshotPath}/exportExelCustomerFilter25.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter25.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter25","false",`./${screenshotPath}/exportExelCustomerFilter25.png`)
        }

   // pdf code
   
      const [pdfDownload13] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload13.saveAs('downloads/exportPdfCustomerFilter26.pdf');
 const result25 = await dataRead(
        "./downloads/exportPdfCustomerFilter26.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result25);
  await page.waitForTimeout(2000)
  if (result25.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter26.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter26","true",`./${screenshotPath}/exportPdfCustomerFilter26.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter26.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter26","false",`./${screenshotPath}/exportPdfCustomerFilter26.png`)
       }  






   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Dealer Code' }).click();
  await page.getByRole('menuitem', { name: '1275836' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

  
     const [excelDownload14] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload14.saveAs('downloads/exportExelCustomerFilter27.xlsx');
  const result26 = await dataRead(
        "./downloads/exportExelCustomerFilter27.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result26);
  await page.waitForTimeout(2000)
  if (result26.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter27.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter27","true",`./${screenshotPath}/exportExelCustomerFilter27.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter27.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter27","false",`./${screenshotPath}/exportExelCustomerFilter27.png`)
        }

   // pdf code
   
      const [pdfDownload14] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload14.saveAs('downloads/exportPdfCustomerFilter28.pdf');
 const result27 = await dataRead(
        "./downloads/exportPdfCustomerFilter28.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result27);
  await page.waitForTimeout(2000)
  if (result27.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter28.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter28","true",`./${screenshotPath}/exportPdfCustomerFilter28.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter28.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter28","false",`./${screenshotPath}/exportPdfCustomerFilter28.png`)
       }  



   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'City' }).click();
  await page.getByRole('menuitem', { name: 'Prayagraj' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
     await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Date Filter').click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('09/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('15/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

     const [excelDownload15] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload15.saveAs('downloads/exportExelCustomerFilter29.xlsx');
  const result28 = await dataRead(
        "./downloads/exportExelCustomerFilter29.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result28);
  await page.waitForTimeout(2000)
  if (result28.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter29.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter29","true",`./${screenshotPath}/exportExelCustomerFilter29.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter29.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter29","false",`./${screenshotPath}/exportExelCustomerFilter29.png`)
        }

   // pdf code
   
      const [pdfDownload15] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload15.saveAs('downloads/exportPdfCustomerFilter30.pdf');
 const result29 = await dataRead(
        "./downloads/exportPdfCustomerFilter30.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result29);
  await page.waitForTimeout(2000)
  if (result29.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter30.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter30","true",`./${screenshotPath}/exportPdfCustomerFilter30.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter30.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter30","false",`./${screenshotPath}/exportPdfCustomerFilter30.png`)
       }  



   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer Type' }).getByRole('paragraph').click();
  await page.getByRole('menuitem', { name: 'commercial' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Kamlesh Maurya' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


     const [excelDownload16] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload16.saveAs('downloads/exportExelCustomerFilter31.xlsx');
  const result30 = await dataRead(
        "./downloads/exportExelCustomerFilter31.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result30);
  await page.waitForTimeout(2000)
  if (result30.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter31.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter31","true",`./${screenshotPath}/exportExelCustomerFilter31.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter31.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter31","false",`./${screenshotPath}/exportExelCustomerFilter31.png`)
        }

   // pdf code
   
      const [pdfDownload16] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload16.saveAs('downloads/exportPdfCustomerFilter32.pdf');
 const result31 = await dataRead(
        "./downloads/exportPdfCustomerFilter32.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result31);
  await page.waitForTimeout(2000)
  if (result22.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter32.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter32","true",`./${screenshotPath}/exportPdfCustomerFilter32.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter32.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter32","false",`./${screenshotPath}/exportPdfCustomerFilter32.png`)
       }  



   await page.waitForTimeout(2000); 
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer Type' }).getByRole('paragraph').click();
  await page.getByRole('menuitem', { name: 'commercial' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Dealer Code' }).click();
  await page.getByRole('menuitem', { name: '1275836' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

  
       const [excelDownload17] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload17.saveAs('downloads/exportExelCustomerFilter34.xlsx');
  const result33 = await dataRead(
        "./downloads/exportExelCustomerFilter34.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result33);
  await page.waitForTimeout(2000)
  if (result33.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter34.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter34","true",`./${screenshotPath}/exportExelCustomerFilter34.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter34.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter34","false",`./${screenshotPath}/exportExelCustomerFilter34.png`)
        }

   // pdf code
   
      const [pdfDownload17] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload17.saveAs('downloads/exportPdfCustomerFilter35.pdf');
 const result34 = await dataRead(
        "./downloads/exportPdfCustomerFilter35.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result34);
  await page.waitForTimeout(2000)
  if (result34.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter35.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter35","true",`./${screenshotPath}/exportPdfCustomerFilter35.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter35.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter35","false",`./${screenshotPath}/exportPdfCustomerFilter35.png`)
       }  



   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer Type' }).click();
  await page.getByRole('menuitem', { name: 'commercial' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
     await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Date Filter').click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('09/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('15/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();

      const [excelDownload18] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload18.saveAs('downloads/exportExelCustomerFilter36.xlsx');
  const result35 = await dataRead(
        "./downloads/exportExelCustomerFilter36.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result35);
  await page.waitForTimeout(2000)
  if (result35.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter36.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter36","true",`./${screenshotPath}/exportExelCustomerFilter36.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter36.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter36","false",`./${screenshotPath}/exportExelCustomerFilter36.png`)
        }

   // pdf code
   
      const [pdfDownload18] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload18.saveAs('downloads/exportPdfCustomerFilter37.pdf');
 const result36 = await dataRead(
        "./downloads/exportPdfCustomerFilter37.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result36);
  await page.waitForTimeout(2000)
  if (result36.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter37.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter37","true",`./${screenshotPath}/exportPdfCustomerFilter37.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter37.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter37","false",`./${screenshotPath}/exportPdfCustomerFilter24.png`)
       }  




  
   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Kamlesh Maurya' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Dealer Code' }).click();
  await page.getByRole('menuitem', { name: '1275836' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


     const [excelDownload19] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload19.saveAs('downloads/exportExelCustomerFilter38.xlsx');
  const result37 = await dataRead(
        "./downloads/exportExelCustomerFilter38.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result37);
  await page.waitForTimeout(2000)
  if (result37.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter38.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter38","true",`./${screenshotPath}/exportExelCustomerFilter38.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter38.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter38","false",`./${screenshotPath}/exportExelCustomerFilter38.png`)
        }

   // pdf code
   
      const [pdfDownload19] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload19.saveAs('downloads/exportPdfCustomerFilter39.pdf');
 const result38 = await dataRead(
        "./downloads/exportPdfCustomerFilter39.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result38);
  await page.waitForTimeout(2000)
  if (result38.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter39.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter39","true",`./${screenshotPath}/exportPdfCustomerFilter39.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter39.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter39","false",`./${screenshotPath}/exportPdfCustomerFilter39.png`)
       }  




   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Customer', exact: true }).getByRole('paragraph').click();
  await page.getByRole('menuitem', { name: 'Kamlesh Maurya' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
     await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Date Filter').click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('06/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('20/06/2026');
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


     const [excelDownload20] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload20.saveAs('downloads/exportExelCustomerFilter40.xlsx');
  const result39 = await dataRead(
        "./downloads/exportExelCustomerFilter40.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result39);
  await page.waitForTimeout(2000)
  if (result39.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter40.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter40","true",`./${screenshotPath}/exportExelCustomerFilter40.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter40.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter40","false",`./${screenshotPath}/exportExelCustomerFilter40.png`)
        }

   // pdf code
   
      const [pdfDownload20] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload20.saveAs('downloads/exportPdfCustomerFilter41.pdf');
 const result40 = await dataRead(
        "./downloads/exportPdfCustomerFilter41.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result40);
  await page.waitForTimeout(2000)
  if (result40.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter41.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter41","true",`./${screenshotPath}/exportPdfCustomerFilter41.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter41.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter41","false",`./${screenshotPath}/exportPdfCustomerFilter41.png`)
       }  


   await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByText('Dealer Code').click();
  await page.getByRole('menuitem', { name: '1275836' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Filter By' }).click();
  await page.getByRole('menuitem', { name: 'Date Filter' }).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).first().fill('04/04/2026');
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).click();
  await page.getByRole('textbox', { name: 'dd/mm/yyyy' }).nth(1).fill('09/04/2026');
  await page.getByRole('button', { name: 'OK' }).click();
    await page.reload();


     const [excelDownload21] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload21.saveAs('downloads/exportExelCustomerFilter42.xlsx');
  const result41 = await dataRead(
        "./downloads/exportExelCustomerFilter42.xlsx",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result41);
  await page.waitForTimeout(2000)
  if (result41.success 
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible() )
      {
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter42.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter42","true",`./${screenshotPath}/exportExelCustomerFilter42.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter42.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter42","false",`./${screenshotPath}/exportExelCustomerFilter42.png`)
        }

   // pdf code
   
      const [pdfDownload21] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload21.saveAs('downloads/exportPdfCustomerFilter43.pdf');
 const result42 = await dataRead(
        "./downloads/exportPdfCustomerFilter43.pdf",
        ["Imran Khan","akbk6551+1222@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result42);
  await page.waitForTimeout(2000)
  if (result42.success
    && await page.getByText('akbk6551+1222@gmail.com').first().isVisible() 
    && !await page.getByText('akbk6551+1217@gmail.com').isVisible()
  ) 
     {
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter43.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter43","true",`./${screenshotPath}/exportPdfCustomerFilter43.png`)
          
      }
      else{
        await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter43.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter43","false",`./${screenshotPath}/exportPdfCustomerFilter43.png`)
       }  


  console.log("filtering completed in side the customer");

}
 

async function exportCustomerFsmNormal(page) {
  console.log("Enter in export customer normal");
  // await page.getByRole('button', { name: 'Sales' }).click();
  // await page.getByRole('link', { name: 'Customers' }).click();
   const [excelDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To Excel' }).click()
  ]);
  await excelDownload.saveAs('downloads/exportExelCustomerNormal.xlsx');
  const result1 = await dataRead(
        "./downloads/exportExelCustomerNormal.xlsx",
        ["Mayank Rathor","akbk6551+1139@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result1);
  await page.waitForTimeout(2000);
  if (result1.success
    && await page.getByText('akbk6551+1139@gmail.com').isVisible 
    && !await page.getByText('akbk6551+1112@gmail.com').isVisible
  ) 
  {
  await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerNormal.png`, fullPage: true });
  await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerNormal","true",`./${screenshotPath}/exportExelCustomerNormal.png`)

  }
  else{
  await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerNormal.png`, fullPage: true });
  await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerNormal","false",`./${screenshotPath}/exportExelCustomerNormal.png`)
  }

  // PDF
  const [pdfDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Export To PDF' }).click()
  ]);
 await pdfDownload.saveAs('downloads/exportPdfCustomerNormal.pdf');
 const result2 = await dataRead(
        "./downloads/exportPdfCustomerNormal.pdf",
        ["Mayank Rathor","akbk6551+1139@gmail.com"],
        ["Anil Maurya","akbk6551+1112@gmail.com"]
    );
    console.log(result2);
  await page.waitForTimeout(2000);
  if (result2.success
     && await page.getByText('akbk6551+1139@gmail.com').isVisible 
    && !await page.getByText('akbk6551+1112@gmail.com').isVisible
  ) 
      {
          await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerNormal.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerNormal","true",`./${screenshotPath}/exportPdfCustomerNormal.png`)
          
        }
        else{
          await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerNormal.png`, fullPage: true });
          await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerNormal","false",`./${screenshotPath}/exportPdfCustomerNormal.png`)
        }
 await page.reload();
 console.log("export customer normal ");
  
}

// async function exportCustomerFsmFilter(page) {
//   console.log("Enter in export customer filter");
//   // Filter (State, City)
//   await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'State' }).click();
//   await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'City' }).click();
//   await page.getByRole('menu').getByText('Aurai', { exact: true }).click();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.waitForTimeout(2000);

//   // Exel
//   const [excelDownload1] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()
//   ]);
//   await excelDownload1.saveAs('downloads/exportExelCustomerFilter1.xlsx');
//   const result3 = await dataRead(
//         "./downloads/exportExelCustomerFilter1.xlsx",
//         ["Imran Khan","akbk6551+1222@gmail.com"],
//         ["Anil Maurya","akbk6551+1112@gmail.com"]
//     );
//     console.log(result3);
//   await page.waitForTimeout(2000)
//   if (result3.success
//      && await page.getByText('akbk6551+1222@gmail.com').isVisible 
//     && !await page.getByText('akbk6551+1112@gmail.com').isVisible
//   ) 
//       {
//           await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter1.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter1","true",`./${screenshotPath}/exportExelCustomerFilter1.png`)
          
//         }
//         else{
//           await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter1.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter1","false",`./${screenshotPath}/exportExelCustomerFilter1.png`)
//         }


//   // PDF
//   const [pdfDownload1] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To PDF' }).click()
//   ]);
//  await pdfDownload1.saveAs('downloads/exportPdfCustomerFilter2.pdf');
//  const result4 = await dataRead(
//         "./downloads/exportPdfCustomerFilter2.pdf",
//         ["Imran Khan","akbk6551+1222@gmail.com"],
//         ["Anil Maurya","akbk6551+1112@gmail.com"]
//     );
//     console.log(result4);
//   await page.waitForTimeout(2000)
//   if (result4.success
//      && await page.getByText('akbk6551+1222@gmail.com').isVisible
//     && !await page.getByText('akbk6551+1112@gmail.com').isVisible
//   ) 
//       {
//           await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter2.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter2","true",`./${screenshotPath}/exportPdfCustomerFilter2.png`)
          
//         }
//         else{
//           await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter2.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter2","false",`./${screenshotPath}/exportPdfCustomerFilter2.png`)
//         }


//  await page.reload();

//   // filter (Commercial or Individual)
//    await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'Customer Type' }).click();
//   await page.getByRole('menuitem', { name: 'commercial' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.waitForTimeout(2000);

//   const [excelDownload2] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()
//   ]);
//   await excelDownload2.saveAs('downloads/exportExelCustomerFilter3.xlsx');
//    const result5 = await dataRead(
//         "./downloads/exportExelCustomerFilter3.xlsx",
//         ["Imran Khan","akbk6551+1222@gmail.com"],
//         ["Anil Maurya","akbk6551+1112@gmail.com"]
//     );
//     console.log(result4);
//   await page.waitForTimeout(2000)
//   if (result5.success
//      && await page.getByText('akbk6551+1222@gmail.com').isVisible 
//     && !await page.getByText('akbk6551+1112@gmail.com').isVisible
//   ) 
//       {
//           await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter3.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter3","true",`./${screenshotPath}/exportExelCustomerFilter3.png`)
          
//         }
//         else{
//           await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter3.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter3","false",`./${screenshotPath}/exportExelCustomerFilter3.png`)
//         }

//   // PDF
//   const [pdfDownload2] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To PDF' }).click()
//   ]);
//  await pdfDownload2.saveAs('downloads/exportPdfCustomerFilter4.pdf');
//     const result6 = await dataRead(
//         "./downloads/exportPdfCustomerFilter4.pdf",
//        ["Imran Khan","akbk6551+1222@gmail.com"],
//         ["Anil Maurya","akbk6551+1112@gmail.com"]
//     );
//     console.log(result6);
//   await page.waitForTimeout(2000)
//   if (result6.success
//      && await page.getByText('akbk6551+1222@gmail.com').isVisible 
//     && !await page.getByText('akbk6551+1112@gmail.com').isVisible
//   ) 
//       {
//           await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter4.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter4","true",`./${screenshotPath}/exportPdfCustomerFilter4.png`)
          
//         }
//         else{
//           await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter4.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter4","false",`./${screenshotPath}/exportPdfCustomerFilter4.png`)
//         }


//  await page.reload();

//   // Customer name filter
//    await page.getByRole('button', { name: 'Filter By' }).click();
//   await page.getByRole('menuitem', { name: 'Customer', exact: true }).click();
//   await page.getByRole('menuitem', { name: 'Mayank Rathor' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.waitForTimeout(2000);
//   const [excelDownload3] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()
//   ]);
//   await excelDownload3.saveAs('downloads/exportExelCustomerFilter5.xlsx');
//   const result7 = await dataRead(
//         "./downloads/exportExelCustomerFilter5.xlsx",
//         ["Mayank Rathor","akbk6551+1139@gmail.com"],
//         ["Anil Maurya","akbk6551+1112@gmail.com"]
//     );
//     console.log(result7);
//   await page.waitForTimeout(2000)
//   if (result7.success
//      && await page.getByText('akbk6551+1139@gmail.com').isVisible 
//     && !await page.getByText('akbk6551+1112@gmail.com').isVisible
//   ) 
//       {
//           await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter5.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter5","true",`./${screenshotPath}/exportExelCustomerFilter5.png`)
          
//         }
//         else{
//           await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter5.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter5","false",`./${screenshotPath}/exportExelCustomerFilter5.png`)
//         }
//   // PDF
//   const [pdfDownload3] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To PDF' }).click()
//   ]);
//  await pdfDownload3.saveAs('downloads/exportPdfCustomerFilter6.pdf');
//  const result8 = await dataRead(
//         "./downloads/exportPdfCustomerFilter6.pdf",
//         ["Mayank Rathor","akbk6551+1139@gmail.com"],
//         ["Sushil Kumar","akbk6551+220@gmail.com"]
//     );
//     console.log(result8);
//   await page.waitForTimeout(2000)
//   if (result8.success
//     && await page.getByText('akbk6551+1139@gmail.com').isVisible 
//     && !await page.getByText('akbk6551+1112@gmail.com').isVisible
//   ) 
//       {
//           await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter6.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter6","true",`./${screenshotPath}/exportPdfCustomerFilter6.png`)
          
//         }
//         else{
//           await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter6.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter6","false",`./${screenshotPath}/exportPdfCustomerFilter6.png`)
//         }
//  await page.reload();

//   // Code base filter
//    await page.getByRole('button', { name: 'Filter By' }).click();
//    await page.getByRole('menuitem', { name: 'Dealer Code' }).click();
//   await page.getByRole('menuitem', { name: '1345836' }).getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.waitForTimeout(2000);
//      const [excelDownload] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To Excel' }).click()
//   ]);
//   await excelDownload.saveAs('downloads/exportExelCustomerFilter7.xlsx');
//   const result9 = await dataRead(
//         "./downloads/exportExelCustomerFilter7.xlsx",
//         ["Sushil Kumar","akbk6551+1220@gmail.com"],
//          ["Abhay Maurya","akbk6551+39@gmail.com"]
//     );
//     console.log(result9);
//   await page.waitForTimeout(2000)
//   if (result9.success
//     && await page.getByText('akbk6551+1220@gmail.com').isVisible 
//     && !await page.getByText('akbk6551+39@gmail.com').isVisible
//   ) 
//       {
//           await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter7.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter7","true",`./${screenshotPath}/exportExelCustomerFilter7.png`)
          
//         }
//         else{
//           await page.screenshot({ path: `./${screenshotPath}/exportExelCustomerFilter7.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportExelCustomerFilter7","false",`./${screenshotPath}/exportExelCustomerFilter7.png`)
//         }

//   // PDF
//   const [pdfDownload] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Export To PDF' }).click()
//   ]);
//  await pdfDownload.saveAs('downloads/exportPdfCustomerFilter8.pdf');
//  const result10 = await dataRead(
//         "./downloads/exportPdfCustomerFilter8.pdf",
//         ["Sushil Kumar","akbk6551+1220@gmail.com"],
//         ["Abhay Maurya","akbk6551+39@gmail.com"]
//     );
//     console.log(result10);
//   await page.waitForTimeout(2000)
//   if (result10.success
//      && await page.getByText('akbk6551+1220@gmail.com').isVisible 
//     && !await page.getByText('akbk6551+39@gmail.com').isVisible
//   ) 
//       {
//           await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter8.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter8","true",`./${screenshotPath}/exportPdfCustomerFilter8.png`)
          
//         }
//         else{
//           await page.screenshot({ path: `./${screenshotPath}/exportPdfCustomerFilter8.png`, fullPage: true });
//           await updateOpJson(`./${screenshotPath}/`,"exportPdfCustomerFilter8","false",`./${screenshotPath}/exportPdfCustomerFilter8.png`)
//         }
//  await page.reload();

//  console.log('export customer filter completed');
// }

async function createFsmCustomerOne(page){
 console.log("Enter in create fsm customer one ");
 await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('radio', { name: 'Commercial' }).check();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Uzma');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Khatoon');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1318@gmail.com');
  await page.getByRole('textbox', { name: 'Person In Charge *' }).click();
  await page.getByRole('textbox', { name: 'Person In Charge *' }).fill('Sushil Rana');
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).fill('Mayank Rajput');
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).fill('1245845');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9863576112');
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Aurai');
  await page.waitForTimeout(1000);
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Ghosia');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('tab', { name: 'Contact Details' }).click();
  await page.getByRole('button', { name: 'Primary Contact' }).click();
  await page.getByRole('option', { name: 'Showroom' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Anuj Kumar');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('akbk6551+1244@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('7894215411');
  await page.getByRole('textbox', { name: 'Additional notes about this' }).click();
  await page.getByRole('textbox', { name: 'Additional notes about this' }).fill('Sothing Purchess');
  await page.getByRole('button', { name: 'Add Contact' }).click();
  // await page.getByText('CancelCreate Customer').click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
 console.log("create fsm customer one completed");
}

async function createFsmCustomer(page) {
  console.log('Enter in create fsm customer');
  //  await page.getByRole('button', { name: 'Field Service' }).click();
  // await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('radio', { name: 'Commercial' }).check();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Aashna');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Khatoon');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1218@gmail.com');
  await page.getByRole('textbox', { name: 'Person In Charge *' }).click();
  await page.getByRole('textbox', { name: 'Person In Charge *' }).fill('Sushil Singh');
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).fill('Mayank Singh');
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).fill('1245836');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9863574112');
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Aurai');
  await page.waitForTimeout(1000);
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Ghosia');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('tab', { name: 'Contact Details' }).click();
  await page.getByRole('button', { name: 'Primary Contact' }).click();
  await page.getByRole('option', { name: 'Showroom' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Anuj Kumar');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('akbk6551+1219@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('78963215411');
  await page.getByRole('textbox', { name: 'Additional notes about this' }).click();
  await page.getByRole('textbox', { name: 'Additional notes about this' }).fill('Sothing Purchess');
  await page.getByRole('button', { name: 'Add Contact' }).click();
  // await page.getByText('CancelCreate Customer').click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('radio', { name: 'Commercial' }).check();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Shana');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Khan');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1220@gmail.com');
  await page.getByRole('textbox', { name: 'Person In Charge *' }).click();
  await page.getByRole('textbox', { name: 'Person In Charge *' }).fill('Sushil Kumar');
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).fill('Ishan Singh');
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).fill('1345836');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9863574192');
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Aurai');
  await page.waitForTimeout(1000);
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Ghosia');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('tab', { name: 'Contact Details' }).click();
  await page.getByRole('button', { name: 'Primary Contact' }).click();
  await page.getByRole('option', { name: 'Showroom' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Abhay Kumar');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('akbk6551+1221@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('78903215411');
  await page.getByRole('textbox', { name: 'Additional notes about this' }).click();
  await page.getByRole('textbox', { name: 'Additional notes about this' }).fill('Sothing Purchess');
  await page.getByRole('button', { name: 'Add Contact' }).click();
  // await page.getByText('CancelCreate Customer').click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.waitForTimeout(2000);
  
  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('radio', { name: 'Commercial' }).check();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Uzma');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Khatoon');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1222@gmail.com');
  await page.getByRole('textbox', { name: 'Person In Charge *' }).click();
  await page.getByRole('textbox', { name: 'Person In Charge *' }).fill('Imran Khan');
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Name' }).fill('Bilal Ahamad');
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).click();
  await page.getByRole('textbox', { name: 'Dealer/Company Code' }).fill('1275836');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9863576112');
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Aurai');
  await page.waitForTimeout(1000);
  await page.getByText('Aurai, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Ghosia');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('tab', { name: 'Contact Details' }).click();
  await page.getByRole('button', { name: 'Primary Contact' }).click();
  await page.getByRole('option', { name: 'Showroom' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Uamr Khatoon');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('akbk6551+1223@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('78963265411');
  await page.getByRole('textbox', { name: 'Additional notes about this' }).click();
  await page.getByRole('textbox', { name: 'Additional notes about this' }).fill('Sothing Purchess');
  await page.getByRole('button', { name: 'Add Contact' }).click();
  // await page.getByText('CancelCreate Customer').click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.waitForTimeout(2000);


  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Jony');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1119@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724787');
  //  await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803941');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
    
  await page.getByRole('radio', { name: 'Email' }).check();
  // await page.getByRole('option', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria Market');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Shyam');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Sundar');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1212@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724747');
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803941');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
  
  await page.getByRole('radio', { name: 'Email' }).check();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Shivam');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('maurya');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1213@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724797');
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9802948');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
  
await page.getByRole('radio', { name: 'Email' }).check();
await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Susil');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rana');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1214@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724784');
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803998');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
  
await page.getByRole('radio', { name: 'Email' }).check();
await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Manjeet');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Singh');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1215@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834794787');
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803148');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
await page.getByRole('radio', { name: 'Email' }).check();
await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Neeraj');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1217@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724790');
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803248');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
await page.getByRole('radio', { name: 'Email' }).check();
await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Mukundpatti');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Jony');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1109@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724767');
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('9803948');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
await page.getByRole('radio', { name: 'Email' }).check();
await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria Market');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.waitForTimeout(2000);


  await page.getByRole('button', { name: 'Add New Customer' }).click();
  await page.getByRole('button', { name: 'Select Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Anil');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1136@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('9103456789');
  // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
  // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039481');
  // await page.getByRole('button', { name: 'Select Access Method' }).click();
    // await page.waitForTimeout(1000);
await page.getByRole('radio', { name: 'Email' }).check();
await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
  await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.waitForTimeout(2000);
  
   await page.getByRole('button', { name: 'Add New Customer' }).click();
    await page.getByRole('button', { name: 'Select Title' }).click();
    await page.getByRole('option', { name: 'Mr.' }).click();
    await page.getByRole('textbox', { name: 'First Name *' }).click();
    await page.getByRole('textbox', { name: 'First Name *' }).fill('Mayank');
    await page.getByRole('textbox', { name: 'Last Name *' }).click();
    await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
    await page.getByRole('textbox', { name: 'Email *' }).click();
    await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1139@gmail.com');
    await page.getByRole('textbox', { name: 'Phone *' }).click();
    await page.getByRole('textbox', { name: 'Phone *' }).fill('9123456790');
    // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
    // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039482');
    // await page.getByRole('button', { name: 'Select Access Method' }).click();
      // await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Email' }).check();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: 'Search for a location' }).click();
      await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
    await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
    await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
    await page.getByRole('button', { name: 'Next' }).click();
   await page.getByRole('button', { name: 'Create Customer' }).click();
  await page.waitForTimeout(2000);
    
   await page.getByRole('button', { name: 'Add New Customer' }).click();
    await page.getByRole('button', { name: 'Select Title' }).click();
    await page.getByRole('option', { name: 'Mr.' }).click();
    await page.getByRole('textbox', { name: 'First Name *' }).click();
    await page.getByRole('textbox', { name: 'First Name *' }).fill('Kolpit');
    await page.getByRole('textbox', { name: 'Last Name *' }).click();
    await page.getByRole('textbox', { name: 'Last Name *' }).fill('Rathor');
    await page.getByRole('textbox', { name: 'Email *' }).click();
    await page.getByRole('textbox', { name: 'Email *' }).fill('akbk6551+1141@gmail.com');
    await page.getByRole('textbox', { name: 'Phone *' }).click();
    await page.getByRole('textbox', { name: 'Phone *' }).click();
    await page.getByRole('textbox', { name: 'Phone *' }).fill('9834724791');
    // await page.getByRole('textbox', { name: 'VIN Number *' }).click();
    // await page.getByRole('textbox', { name: 'VIN Number *' }).fill('98039483');
    // await page.getByRole('button', { name: 'Select Access Method' }).click();
      // await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Email' }).check();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'testing form' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: 'Search for a location' }).click();
      await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria Bhadohi Uttar Pradesh');
    await page.getByText('Khamaria, Bhadohi, Uttar Pradesh, India', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
    await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Khamaria');
    await page.getByRole('button', { name: 'Next' }).click();
   await page.getByRole('button', { name: 'Create Customer' }).click(); 
    
  // await page.reload();
      await page.waitForTimeout(3000);
      
       if (await page.getByText('akbk6551+1141@gmail.com',{exact:true}).isVisible()
          ) 
         {
              await page.screenshot({ path: `./${screenshotPath}/createFsmCustomer.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"createFsmCustomer","true",`./${screenshotPath}/createFsmCustomer.png`)
              
            }
            else{
              await page.screenshot({ path: `./${screenshotPath}/createFsmCustomer.png`, fullPage: true });
              await updateOpJson(`./${screenshotPath}/`,"createFsmCustomer","false",`./${screenshotPath}/createFsmCustomer.png`)
            }
    
  await page.waitForTimeout(2000);
    await page.reload();
   console.log('create fsm customer completed');
}

async function editFsmCustomer(page){
  console.log('Enter in edit fsm customer');
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  // await page.getByRole('combobox', { name: 'Select Customer Type' }).click();
  // await page.getByRole('option', { name: 'commercial' }).click();
   await page.getByRole('row', { name: 'Sushil Singh akbk6551+1218@' }).getByLabel('Edit').click();
   await page.getByRole('textbox', { name: 'Person In Charge *' }).click();
  await page.getByRole('textbox', { name: 'Person In Charge *' }).fill('Sushil SinghX');
   await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'FormC1Installation' }).click()
  await page.getByRole('button', { name: 'Dealer Information' }).click();
  await page.getByRole('textbox', { name: 'Trade Name' }).click();
  await page.getByRole('textbox', { name: 'Trade Name' }).fill('inTES');
  await page.getByRole('button', { name: 'Dealer Type' }).click();
  await page.getByRole('option', { name: 'Branch' }).click();
  await page.getByRole('button', { name: 'Facilities' }).click();
  await page.getByRole('option', { name: 'Premium', exact: true }).click();
  await page.getByText('Basic InformationCustomer IDTitle *Ms.Person In Charge *Company NameDealer').click();
  await page.getByRole('button', { name: 'Contact Information' }).click();
  await page.getByRole('textbox', { name: 'Alternate Phones' }).click();
  await page.getByRole('textbox', { name: 'Alternate Phones' }).fill('7896354125');
  await page.getByRole('textbox', { name: 'Alternate Emails' }).click();
  await page.getByRole('textbox', { name: 'Alternate Emails' }).fill('skdh@gmail.com');
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Ghosia market');
  await page.getByRole('button', { name: 'Management Information' }).click();
  await page.getByRole('textbox', { name: 'Area Manager' }).click();
  await page.getByRole('textbox', { name: 'Area Manager' }).fill('Anil');
  await page.getByRole('textbox', { name: 'Regional Manager' }).click();
  await page.getByRole('textbox', { name: 'Regional Manager' }).fill('Sunil');
  await page.getByRole('button', { name: 'Tax Information' }).click();
  await page.getByRole('textbox', { name: 'Tax Type', exact: true }).click();
  await page.getByRole('textbox', { name: 'Tax Type', exact: true }).fill('GST');
  await page.getByRole('textbox', { name: 'Tax Type Number' }).click();
  await page.getByRole('textbox', { name: 'Tax Type Number' }).fill('789635');
  await page.getByRole('textbox', { name: 'PAN', exact: true }).click();
  await page.getByRole('textbox', { name: 'PAN', exact: true }).fill('KUIPM1241J');
  await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000);
    if (await page.getByText('Customer updated successfully').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/editFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"editFsmCustomer","true",`./${screenshotPath}/editFsmCustomer.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/editFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"editFsmCustomer","false",`./${screenshotPath}/editFsmCustomer.png`)
    }
      
    await page.reload();
    console.log('edit fsm customer completed');
}

async function deleteFsmCustomer(page) {
  console.log('Enter in delete customer in Field service');
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page
  .locator('tbody tr')
  .first()
  .getByRole('button', { name: 'Delete' })
  .click();
  await page.getByText('Customer deleted successfully').click();
  await page.waitForTimeout(1000);
   if (await page.getByText('Customer deleted successfully',{exact:true}).isVisible()) 
  {
    await page.screenshot({ path: `./${screenshotPath}/deleteFsmCustomer.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteFsmCustomer","true",`./${screenshotPath}/deleteFsmCustomer.png`)
  }
  else{
    await page.screenshot({ path: `./${screenshotPath}/deleteFsmCustomer.png`, fullPage: true });
    await updateOpJson(`./${screenshotPath}/`,"deleteFsmCustomer","false",`./${screenshotPath}/deleteFsmCustomer.png`)
  }
  await page.reload();
  console.log('Deleted customer in Field service');
}

async function deletePreviousCustomer(page){
  console.log("Enter in delete previous customer");
  await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.waitForTimeout(3000);
  while( true){
    const text = await page.textContent('text=Showing');
    const match = text.match(/of\s+(\d+)\s+entries/);
    const total = match ? parseInt(match[1]) : 0;

    // // Stop loop if total <= 0
    // if (total == 1) {
    //    await page.waitForTimeout(3000);
    // }
    if (total <= 0) {
      break;
    }
    await page
    .locator('tbody tr')
    .first()
    .getByRole('button', { name: 'Delete' })
    .click();
     await page.waitForTimeout(2000);
  }
await page.reload();
console.log("delete previous customer completed");
}

async function addressCreateFsmCustomerCommercial(page){
  console.log('Enter in address createFsmCustomer commercial');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.waitForTimeout(3000);
   await page.getByRole('row', { name: 'Sushil Singh' }).click();
    await page.waitForTimeout(1000);

    //1st address commercial
  await page.getByRole('tab', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria');
  await page.waitForTimeout(2000);
  await page.getByRole('listitem').filter({ hasText: /^Khamaria, Uttar Pradesh, India$/ }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Mukundpatti');
  await page.getByText('Make this default shipping').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);


  //2nd address commercial biling
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('jamnagar');
  await page.waitForTimeout(2000);
  await page.getByText('Jamnagar, Gujarat, India', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Jamnagar');
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('300120');
    await page.getByText('Make this default shipping').click();
   await page.getByRole('checkbox', { name: 'Use as a billing address?' }).check();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);


  //3rd address commercial all

  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Billing AddressBilling address info here$/ }).nth(1).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('prayagraj');
  await page.waitForTimeout(2000);
  await page.getByText('Prayagraj, Uttar Pradesh, India', { exact: true }).click();
await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('mundera bajar');
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('221406');
 
  await page.getByRole('button', { name: 'Save' }).click();
await page.waitForTimeout(1000);
 


    if (await page.getByText('Site AddressDefault AddressJamnagarJamnagar, Gujarat').first().isVisible()
    && await page.getByText('Billing Addressmundera').first().isVisible()
  && await page.getByText('Site AddressMukundpattiKhamaria, Uttar Pradesh').first().isVisible()
&& await page.getByText('Billing AddressDefault AddressJamnagarJamnagar, Gujarat').first().isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/addressCreateFsmCustomerCommercial.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addressCreateFsmCustomerCommercial","true",`./${screenshotPath}/addressCreateFsmCustomerCommercial.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/addressCreateFsmCustomerCommercial.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addressCreateFsmCustomerCommercial","false",`./${screenshotPath}/addressCreateFsmCustomerCommercial.png`)
    }
    await page.reload();
  console.log('Address createFsmCustomer commercial completed');
}

async function addressCreateFsmCustomerIndividual(page){
  console.log('Enter in address createFsmCustomer');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.waitForTimeout(3000);
   await page.getByText('Anil Rathor').first().click();
   await page.getByText('Anil Rathor').first().click();
    await page.waitForTimeout(1000);

    //1st address individual
  await page.getByRole('tab', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('Khamaria');
  await page.waitForTimeout(2000);
  await page.getByRole('listitem').filter({ hasText: /^Khamaria, Uttar Pradesh, India$/ }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Mukundpatti');
  await page.getByText('Make this default shipping').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);


  //2nd address individual biling
  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('jamnagar');
  await page.waitForTimeout(2000);
  await page.getByText('Jamnagar, Gujarat, India', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Jamnagar');
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('300120');
    await page.getByText('Make this default shipping').click();
   await page.getByRole('checkbox', { name: 'Use as a billing address?' }).check();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);


  //3rd address individual all

  await page.getByRole('button', { name: 'Add new address' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Billing AddressBilling address info here$/ }).nth(1).click();
  await page.getByRole('textbox', { name: 'Search for a location' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search for a location' }).fill('prayagraj');
  await page.waitForTimeout(2000);
  await page.getByText('Prayagraj, Uttar Pradesh, India', { exact: true }).click();
await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('mundera bajar');
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).click();
  await page.getByRole('textbox', { name: 'PIN Code / Postal Code' }).fill('221406');
 
  await page.getByRole('button', { name: 'Save' }).click();
await page.waitForTimeout(1000);


    if (await page.getByText('Site AddressDefault AddressJamnagarJamnagar, Gujarat').first().isVisible()
    && await page.getByText('Billing Addressmundera').first().isVisible()
  && await page.getByText('Site AddressMukundpattiKhamaria, Uttar Pradesh').first().isVisible()
&& await page.getByText('Billing AddressDefault AddressJamnagarJamnagar, Gujarat').first().isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/addressCreateFsmCustomerIndividual.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addressCreateFsmCustomerIndividual","true",`./${screenshotPath}/addressCreateFsmCustomerIndividual.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/addressCreateFsmCustomerIndividual.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"addressCreateFsmCustomerIndividual","false",`./${screenshotPath}/addressCreateFsmCustomerIndividual.png`)
    }
    await page.reload();
  console.log('Address createFsmCustomer completed');
}

async function jobCreateFsmCustomerCommercial(page){
  console.log('Enter in jobCreateFsmCustomer');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.waitForTimeout(1000);
   await page.getByRole('row', { name: 'Sushil Singh' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Job Details' }).click();
  await page.getByRole('link', { name: 'Add New Job' }).click();
    await page.getByRole('button', { name: 'Address' }).click();
    await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Jamnagar' }).first().click();
  await page.getByRole('option', { name: 'Jamnagar' }).first().click();
  // await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Installation5' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Job Description' }).fill('Installation');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Medium - Medium installation' }).click();
  await page.getByRole('option', { name: 'Medium - Medium installation' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Comments' }).fill('Least Imp');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'In progressX - In progressDX' }).click();
  await page.getByRole('textbox', { name: 'Start Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Thursday, March 5th,' }).click();
  await page.getByText('12:00', { exact: true }).click();
  await page.getByRole('button', { name: 'Status Profile In progressX' }).click();
  await page.getByRole('option', { name: 'In progressX - In progressDX' }).click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Saturday, March 28th,' }).click();
  await page.getByText('13:00').click();
   await page.getByRole('radio', { name: 'Engineer' }).check();
   await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: 'Engineer' }).click();
  await page.getByRole('option', { name: 'suhani singh' }).click();
  await page.getByRole('option', { name: 'suhani singh' }).click();
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Embedded Systems' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Mahesh Rajput' }).click();
  await page.getByRole('row', { name: 'FormJCASInstallation' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.waitForTimeout(1000);
    if (await page.getByText('Job created successfully').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/jobCreateFsmCustomerCommercial.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"jobCreateFsmCustomerCommercial","true",`./${screenshotPath}/jobCreateFsmCustomerCommercial.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/jobCreateFsmCustomerCommercial.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"jobCreateFsmCustomerCommercial","false",`./${screenshotPath}/jobCreateFsmCustomerCommercial.png`)
    }

    // check in engineer portal 
       await loginEngineerPortal(page);
       if(await page.getByText('Installation5').first().isVisible()){
        console.log("Internal Job in Engineer portal is visible");
        await page.screenshot({ path: `./${screenshotPath}/checkInternalJobInFsmCustomer.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"checkInternalJobInFsmCustomer","true",`./${screenshotPath}/checkInternalJobInFsmCustomer.png`)
     
       }else{
        console.log("Internal Job in Engineer portal is not visible");
      
        await page.screenshot({ path: `./${screenshotPath}/checkInternalJobInFsmCustomer.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"checkInternalJobInFsmCustomer","false",`./${screenshotPath}/checkInternalJobInFsmCustomer.png`)
      
        
       }
       
    await page.waitForTimeout(3000);
     console.log("Going back to company portal...");
    // await loginRight(page);
    await page.goto("https://strgerpcmpwebinddev.z29.web.core.windows.net/");
    console.log("Company portal login completed");

    // check in engineer portal 
       await loginEngineerPortal(page);
       if(await page.getByText('Installation5').first().isVisible()){
        console.log("Internal Job in Engineer portal is visible");
        await page.screenshot({ path: `./${screenshotPath}/checkInternalJobInFsmCustomer.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"checkInternalJobInFsmCustomer","true",`./${screenshotPath}/checkInternalJobInFsmCustomer.png`)
     
       }else{
        console.log("Internal Job in Engineer portal is not visible");
      
        await page.screenshot({ path: `./${screenshotPath}/checkInternalJobInFsmCustomer.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"checkInternalJobInFsmCustomer","false",`./${screenshotPath}/checkInternalJobInFsmCustomer.png`)
      
        
       }
       
    await page.waitForTimeout(3000);
     console.log("Going back to company portal...");
    // await loginRight(page);
    await page.goto("https://strgerpcmpwebinddev.z29.web.core.windows.net/");
    console.log("Company portal login completed");
    await page.reload();
  console.log('job create fsm customer completed');
}

async function jobCreateFsmCustomerIndividual(page){
  console.log('Enter in jobCreateFsmCustomer');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Anil Rathor').click();
  await page.getByRole('tab', { name: 'Job Details' }).click();
  await page.getByRole('link', { name: 'Add New Job' }).click();
  await page.getByRole('button', { name: 'Address' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Jamnagar' }).click();
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Installation5' }).click();
  await page.getByRole('textbox', { name: 'Job Description' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Job Description' }).fill('installation');
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'High - High installation' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Comments' }).fill('very IMP');
  await page.getByRole('button', { name: 'Status Profile' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'In progressX - In progressDX' }).click();
  await page.getByRole('textbox', { name: 'Start Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Thursday, March 5th,' }).click();
  await page.getByText('12:00', { exact: true }).click();
  await page.getByRole('button', { name: 'Status Profile In progressX' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'In progressX - In progressDX' }).click();
  await page.getByRole('textbox', { name: 'End Date Time *' }).click();
  await page.getByRole('option', { name: 'Choose Saturday, March 28th,' }).click();
  await page.getByText('13:00').click();
   await page.getByRole('radio', { name: 'Engineer' }).check();
   await page.getByRole('radio', { name: 'Engineer' }).check();
  await page.getByRole('button', { name: 'Engineer' }).click();
  await page.getByRole('option', { name: 'suhani singh' }).click();
  await page.getByRole('option', { name: 'suhani singh' }).click();
  await page.getByRole('button', { name: '+ Add Skill' }).click();
  await page.getByRole('button', { name: 'Skill', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Testing & Troubleshooting' }).click();
  await page.getByRole('button', { name: 'Person Responsible' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'suhani singh' }).first().click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.waitForTimeout(1000);
    if (await page.getByText('Job created successfully').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/jobCreateFsmCustomerIndividual.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"jobCreateFsmCustomerIndividual","true",`./${screenshotPath}/jobCreateFsmCustomerIndividual.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/jobCreateFsmCustomerIndividual.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"jobCreateFsmCustomerIndividual","false",`./${screenshotPath}/jobCreateFsmCustomerIndividual.png`)
    }

    // check in engineer portal 
       await loginEngineerPortal(page);
       if(await page.getByText('Installation5').first().isVisible()){
        console.log("Internal Job in Engineer portal is visible");
        await page.screenshot({ path: `./${screenshotPath}/checkInternalJobIndividualInFsmCustomer.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"checkInternalJobIndividualInFsmCustomer","true",`./${screenshotPath}/checkInternalJobIndividualInFsmCustomer.png`)
     
       }else{
        console.log("Internal Job in Engineer portal is not visible");
      
        await page.screenshot({ path: `./${screenshotPath}/checkInternalJobIndividualInFsmCustomer.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"checkInternalJobIndividualInFsmCustomer","false",`./${screenshotPath}/checkInternalJobIndividualInFsmCustomer.png`)
      
        
       }
       
    await page.waitForTimeout(3000);
     console.log("Going back to company portal...");
    // await loginRight(page);
    await page.goto("https://strgerpcmpwebinddev.z29.web.core.windows.net/");
    console.log("Company portal login completed");


    // check in engineer portal 
       await loginEngineerPortal(page);
       if(await page.getByText('Installation5').first().isVisible()){
        console.log("Internal Job in Engineer portal is visible");
        await page.screenshot({ path: `./${screenshotPath}/checkInternalJobIndividualInFsmCustomer.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"checkInternalJobIndividualInFsmCustomer","true",`./${screenshotPath}/checkInternalJobIndividualInFsmCustomer.png`)
     
       }else{
        console.log("Internal Job in Engineer portal is not visible");
      
        await page.screenshot({ path: `./${screenshotPath}/checkInternalJobIndividualInFsmCustomer.png`, fullPage: true });
        await updateOpJson(`./${screenshotPath}/`,"checkInternalJobIndividualInFsmCustomer","false",`./${screenshotPath}/checkInternalJobIndividualInFsmCustomer.png`)
      
        
       }
       
    await page.waitForTimeout(3000);
     console.log("Going back to company portal...");
    // await loginRight(page);
    await page.goto("https://strgerpcmpwebinddev.z29.web.core.windows.net/");
    console.log("Company portal login completed");

    await page.reload();
  console.log('job create fsm customer completed');
}

async function cyclicJobCreateFsmCustomer(page){
  console.log('Enter in cyclic job create fsm customer');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  // await page.getByRole('combobox', { name: 'Select Customer Type' }).click();
  // await page.getByRole('option', { name: 'commercial' }).click();
   await page.getByRole('row', { name: 'Sushil Singh akbk6551+1218@' }).getByLabel('Edit').click();
  await page.getByRole('tab', { name: 'Cyclic Jobs' }).click();
  await page.getByRole('button', { name: 'Create Cyclic Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill('Installation');
  await page.getByRole('button', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Mukundpatti' }).first().click();
  await page.getByRole('option', { name: 'Mukundpatti' }).first().click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Installation');
  await page.getByRole('button', { name: 'Job Type' }).click();
  await page.getByRole('option', { name: 'Installation6' }).click();
  await page.getByRole('button', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'High' }).click();
 
  await page.getByRole('combobox', { name: 'Asset' }).click();
  await page.getByRole('button', { name: 'Soldering & Rework' }).click();
  await page.getByRole('button', { name: 'Embedded Systems' }).click();
  await page.getByRole('button', { name: 'Frequency Type Daily' }).click();
  await page.getByRole('option', { name: 'Weekly' }).click();
  await page.getByRole('button', { name: 'Sun' }).click();
  await page.getByRole('textbox', { name: 'Schedule Start Date' }).fill('2026-03-22');
  await page.getByRole('textbox', { name: 'Schedule End Date' }).fill('2026-03-30');
  await page.getByRole('button', { name: 'Create Job' }).click();
  await page.waitForTimeout(2000);
    if (await page.getByText('Cyclic job created').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/cyclicJobCreateFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"cyclicJobCreateFsmCustomer","true",`./${screenshotPath}/cyclicJobCreateFsmCustomer.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/cyclicJobCreateFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"cyclicJobCreateFsmCustomer","false",`./${screenshotPath}/cyclicJobCreateFsmCustomer.png`)
    }
    await page.reload();
  console.log('cyclic job create fsm customer');
}

async function contactDetailsFsmCustomer(page){
  console.log('Enter in contact detail fsm customer');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
   await page.getByRole('row', { name: 'Sushil Singh akbk6551+1218@' }).getByLabel('Edit').click();
   await page.getByRole('tab', { name: 'Contact Details' }).click();
  await page.getByRole('button', { name: 'Add Contact' }).click();
  await page.getByRole('button', { name: 'Primary Contact' }).click();
  await page.getByRole('option', { name: 'Billing' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Sushima');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('akbk6551+12122@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).press('NumLock');
  await page.getByRole('textbox', { name: 'Phone number' }).fill('7896541236');
  await page.locator('.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3.css-eic2kq > div:nth-child(5) > .MuiFormControl-root > .MuiInputBase-root').click();
  await page.getByRole('textbox', { name: 'Additional notes about this' }).fill('Personal Assistance');
  await page.getByRole('button', { name: 'Add Contact' }).click();
  await page.waitForTimeout(3000);
    if (await page.getByText('Jay kumar Showroom Delete').isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/contactDetailsFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"contactDetailsFsmCustomer","true",`./${screenshotPath}/contactDetailsFsmCustomer.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/contactDetailsFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"contactDetailsFsmCustomer","false",`./${screenshotPath}/contactDetailsFsmCustomer.png`)
    }
    await page.reload();
  console.log('contact detail fsm customer completed');
}

async function documentsUploadFsmCustomer(page){
  console.log('Enter in documents Upload fsm customer');
   await page.getByRole('button', { name: 'Field Service' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
  // await page.getByRole('combobox', { name: 'Select Customer Type' }).click();
  // await page.getByRole('option', { name: 'commercial' }).click();
   await page.getByRole('row', { name: 'Sushil Singh akbk6551+1218@' }).getByLabel('Edit').click();
    await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('button', { name: 'Browse Files' }).click();
  await page.locator('input[type="file"]').setInputFiles('./download1/leads.xlsx');
  await page.getByRole('button', { name: 'Upload Files' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Documents' }).click();
  await page.waitForTimeout(1000);
    if (await page.getByRole('link', { name: 'leads.xlsx' }).isVisible()) 
    {
      await page.screenshot({ path: `./${screenshotPath}/documentsUploadFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"documentsUploadFsmCustomer","true",`./${screenshotPath}/documentsUploadFsmCustomer.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/documentsUploadFsmCustomer.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"documentsUploadFsmCustomer","false",`./${screenshotPath}/documentsUploadFsmCustomer.png`)
    }
    await page.reload();
  // await page.getByRole('button', { name: 'Cancel' }).click();
  console.log('documents Upload fsm customer');
}






