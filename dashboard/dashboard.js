import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';



const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/dashboard`
const pathName=`outputData/status/${testData.companyType}`

export async function dashboard(page){
  await dealerVarificaionInDashboard(page);
  await page.waitForTimeout(3000);
  await JobsByTypeInDashboard(page);
  await page.waitForTimeout(3000);
  await JobsByStatusInDashboard(page);
  await page.waitForTimeout(3000);
  await CustomerServiceInDashboard(page);
  await page.waitForTimeout(3000);
  await SalesInDashboard(page);
}

async function dealerVarificaionInDashboard(page){
  console.log("Enter in deaer varificaion in dashboard");
  await page.getByText('Verified Customers', { exact: true }).click();
    await page.waitForTimeout(2000);
    if (await page.getByText('Form field updated').isVisible())  
    {
      await page.screenshot({ path: `./${screenshotPath}/dealerVarifiedInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"dealerVarifiedInDashboard","true",`./${screenshotPath}/dealerVarifiedInDashboard.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/dealerVarifiedInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"dealerVarifiedInDashboard","false",`./${screenshotPath}/dealerVarifiedInDashboard.png`)
    } 
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByText('Non-Verified Customers').click();
    await page.waitForTimeout(2000);
  if (await page.getByText('Form field updated').isVisible())  
    {
      await page.screenshot({ path: `./${screenshotPath}/dealerNonVarifiedInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"dealerNonVarifiedInDashboard","true",`./${screenshotPath}/dealerVarifiedInDashboard.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/dealerNonVarifiedInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"dealerNonVarifiedInDashboard","false",`./${screenshotPath}/dealerNonVarifiedInDashboard.png`)
    } 
  await page.getByRole('link', { name: 'Dashboard' }).click();
  console.log("dealer varificaion in dashboard completed");
}

async function JobsByTypeInDashboard(page){
  console.log("Enter in job type in dashboard");
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByText('Installation6').click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Installation6').first().isVisible())  
    {
      await page.screenshot({ path: `./${screenshotPath}/JobsByTypeInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"JobsByTypeInDashboard","true",`./${screenshotPath}/JobsByTypeInDashboard.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/JobsByTypeInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"JobsByTypeInDashboard","false",`./${screenshotPath}/JobsByTypeInDashboard.png`)
    } 
  await page.getByRole('link', { name: 'Dashboard' }).click();
  console.log("Enter in job type in dashboard");
}

async function JobsByStatusInDashboard(page){
  console.log("Enter in jobs by in dashboard");
   await page.getByText('doneJob').click();
   await page.waitForTimeout(2000);
  if (await page.getByText('Sushil Singh').first().isVisible())  
    {
      await page.screenshot({ path: `./${screenshotPath}/JobsByStatusInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"JobsByStatusInDashboard","true",`./${screenshotPath}/JobsByStatusInDashboard.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/JobsByStatusInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"JobsByStatusInDashboard","false",`./${screenshotPath}/JobsByStatusInDashboard.png`)
    } 
  await page.getByRole('link', { name: 'Dashboard' }).click();
  console.log("Job by in dashboard");
}

async function CustomerServiceInDashboard(page){
  console.log("Enter in customer servide in dashboard");
   await page.getByRole('tab', { name: 'Customer Service' }).click();
  await page.getByText('Resolved').click();
  await page.waitForTimeout(2000);
  if (await page.getByText('General Problem').first().isVisible())  
    {
      await page.screenshot({ path: `./${screenshotPath}/CustomerServiceResolvedInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"CustomerServiceResolvedInDashboard","true",`./${screenshotPath}/CustomerServiceResolvedInDashboard.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/CustomerServiceResolvedInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"CustomerServiceResolvedInDashboard","false",`./${screenshotPath}/CustomerServiceResolvedInDashboard.png`)
    } 
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('tab', { name: 'Customer Service' }).click();
  await page.getByText('Open').click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Power cutoff issue').first().isVisible())  
    {
      await page.screenshot({ path: `./${screenshotPath}/CustomerServiceResolvedInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"CustomerServiceResolvedInDashboard","true",`./${screenshotPath}/CustomerServiceResolvedInDashboard.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/CustomerServiceResolvedInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"CustomerServiceResolvedInDashboard","false",`./${screenshotPath}/CustomerServiceResolvedInDashboard.png`)
    } 
  await page.getByRole('link', { name: 'Dashboard' }).click();
  console.log("Customer service in dashboard completed");

}

async function SalesInDashboard(page){
  console.log("Enter in sales in dashboard");
   await page.getByRole('tab', { name: 'Sales' }).click();
 await page.locator('.apexcharts-bar-area').first().click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Bilal Ahamad').first().isVisible())  
    {
      await page.screenshot({ path: `./${screenshotPath}/SalesQuotationInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"SalesQuotationInDashboard","true",`./${screenshotPath}/SalesQuotationInDashboard.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/SalesQuotationInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"SalesQuotationInDashboard","false",`./${screenshotPath}/SalesQuotationInDashboard.png`)
    } 
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('tab', { name: 'Sales' }).click();
  await page.locator('.apexcharts-bar-area').first().click();
  await page.waitForTimeout(2000);
  if (await page.getByText('Neeraj Rathor').first().isVisible())  
    {
      await page.screenshot({ path: `./${screenshotPath}/SalesInvoiceInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"SalesInvoiceInDashboard","true",`./${screenshotPath}/SalesInvoiceInDashboard.png`)
  
    }
    else{
      await page.screenshot({ path: `./${screenshotPath}/SalesInvoiceInDashboard.png`, fullPage: true });
      await updateOpJson(`./${screenshotPath}/`,"SalesInvoiceInDashboard","false",`./${screenshotPath}/SalesInvoiceInDashboard.png`)
    } 
  console.log("Sales in dashboard completed");

}