import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
const data = await fs.readFile('./data.json', 'utf8');
import { updateOpJson } from '../updateOp';
import { test } from '@playwright/test';
import { dataRead } from '../dataRead';

const rawData = await fs.readFile('./data.json', 'utf8');
const testData = JSON.parse(rawData);
const screenshotPath=`screenshot/${testData.companyType}/invoices`;
const pathName=`outputData/priority/${testData.companyType}`

export async function Invoices(page){
  await addPerformaInvoices(page);
  await page.waitForTimeout(3000);
   await page.waitForTimeout(3000);
  await cancelInvoice(page);
  await page.waitForTimeout(3000);
  await editInvoices(page);
  await page.waitForTimeout(3000);
  await sendInvoices(page);
  await page.waitForTimeout(3000);
  await createInvoiceByQuotation(page);
  await page.waitForTimeout(3000);
  await exportInvoiceInCustomerNormal(page);
  await page.waitForTimeout(3000);
  await exportInvoiceInCustomerFilter(page);
  await page.waitForTimeout(3000);
  await exportInvoiceNormal(page);
  await page.waitForTimeout(3000);
  await exportInvoiceFilter(page);
}