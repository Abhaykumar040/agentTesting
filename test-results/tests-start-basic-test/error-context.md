# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\start.spec.js >> basic test
- Location: tests\start.spec.js:50:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Queues' })

```

# Test source

```ts
  1   | import fs from 'fs/promises'; 
  2   | import { expect } from '@playwright/test';
  3   | const data = await fs.readFile('./data.json', 'utf8');
  4   | import { updateOpJson } from '../updateOp';
  5   | import { test } from '@playwright/test';
  6   | import dateCyclicJob from '../utils/dateCyclicJob';
  7   | 
  8   | 
  9   | 
  10  | const rawData = await fs.readFile('./data.json', 'utf8');
  11  | const testData = JSON.parse(rawData);
  12  | const screenshotPath=`screenshot/${testData.companyType}/status`
  13  | const pathName=`outputData/status/${testData.companyType}`
  14  | 
  15  | 
  16  | export async function webform(page){
> 17  |   await page.getByRole('link', { name: 'Queues' }).click();
      |                                                    ^ Error: locator.click: Target page, context or browser has been closed
  18  |   await page.getByRole('link', { name: 'Settings' }).click();
  19  |   await page.getByRole('tab', { name: 'Webforms' }).click();
  20  |  await page.waitForTimeout(3000);
  21  |  await deletePreviuosWebform(page);
  22  |  await page.waitForTimeout(3000);
  23  |   await addWebform(page);
  24  |   await copyUrlWebform(page);
  25  | 
  26  |   await regenerateUrl(page);
  27  | }
  28  | async function deletePreviuosWebform(page){
  29  |    
  30  | let rowCount = await page.locator("table tbody tr").count();
  31  | console.log('k',rowCount)
  32  | 
  33  | await page.waitForTimeout(3000);
  34  | while (rowCount > 0 ) {
  35  | if (await page.getByText('No webforms yet.').isVisible()) {
  36  |         break;
  37  |     }
  38  |   // Your delete logic
  39  |   await page.locator("table tbody tr").first().click();
  40  | 
  41  |   while (await page.getByLabel("Delete").count() > 0) {
  42  |     await page.getByLabel("Delete").first().click();
  43  |      page.once("dialog", async dialog => {
  44  |             await dialog.accept();   // Click OK on browser alert
  45  |         });
  46  |     await page.waitForTimeout(1000);
  47  |   }  
  48  | 
  49  |   // await expect(page.getByText("Status profile deleted").first()).toBeVisible();
  50  | 
  51  |   // Update row count after deletion
  52  |  const rowCount = await page.locator('table tbody tr').count();
  53  |  
  54  | }
  55  | 
  56  | }
  57  | 
  58  | async function addWebform(page){
  59  |       await page.getByRole('tab', { name: 'Webforms' }).click();
  60  |   await page.getByRole('button', { name: 'New webform' }).click();
  61  |   await page.getByRole('textbox', { name: 'Name' }).click();
  62  |   await page.getByRole('textbox', { name: 'Name' }).fill('contractForm');
  63  |   await page.getByRole('textbox', { name: 'Description' }).click();
  64  |   await page.getByRole('textbox', { name: 'Description' }).fill('');
  65  |   await page.getByRole('textbox', { name: 'Name' }).click();
  66  |   await page.getByRole('textbox', { name: 'Name' }).fill('Isuue-Payment Form');
  67  |   await page.getByRole('textbox', { name: 'Description' }).click();
  68  |   await page.getByRole('textbox', { name: 'Description' }).fill('PaymentIssueFormDescription');
  69  |   await page.getByRole('button', { name: 'Case form' }).click();
  70  |   await page.getByRole('option', { name: 'FormS' }).click();
  71  |   await page.getByRole('button', { name: 'Case category' }).click();
  72  |   await page.getByRole('option', { name: 'Default_Category' }).click();
  73  |   await page.getByRole('button', { name: 'Default queue' }).click();
  74  |   await page.getByRole('option', { name: 'Billing Support' }).click();
  75  | 
  76  |   const dates = dateCyclicJob(4);
  77  |   await page.getByRole('textbox', { name: 'Expiry date' }).fill(dates.second);
  78  |   await page.getByRole('textbox', { name: 'Success message' }).click();
  79  |   await page.getByRole('textbox', { name: 'Success message' }).fill('MessageAfterSuccessWebform');
  80  |   await page.getByRole('button', { name: 'Create webform' }).click();
  81  |   await expect(page.getByRole('cell', { name: 'Isuue-Payment Form' })).toBeVisible();
  82  |   await expect(page.getByRole('cell', { name: 'FormS' }).first()).toBeVisible();
  83  | }
  84  | async function copyUrlWebform(page){
  85  |   await page.waitForTimeout(3000);
  86  |   await page
  87  |   .locator("table tbody tr")
  88  |   .first()
  89  |   .locator("td")
  90  |   .last()
  91  |   .locator("button")
  92  |   .nth(0)
  93  |   .click();
  94  |     const url = await page.evaluate(() => navigator.clipboard.readText());
  95  | 
  96  |   console.log('abhay',url);
  97  | 
  98  |   await page.goto(url);
  99  |   await page.waitForTimeout(3000);
  100 | }
  101 | async function shareWebform(page){
  102 |     await page.getByRole('button', { name: 'Share public link' }).click();
  103 |   await page.getByRole('menuitem', { name: 'Email…' }).click();
  104 |   await page.getByRole('textbox', { name: 'Recipient email' }).click();
  105 |   await page.getByRole('textbox', { name: 'Recipient email' }).fill('akbk6551+4552@gmail.com');
  106 |   await page.getByRole('button', { name: 'Send' }).click();
  107 |   await expect(page.getByText('Link sent to akbk6551+4552@')).toBeVisible();
  108 | }
  109 | async function pauseResumeWebform(page){
  110 |     await page.getByRole('button', { name: 'Disable' }).click();
  111 | 
  112 |    await page.waitForTimeout(3000);
  113 |   await page
  114 |   .locator("table tbody tr")
  115 |   .first()
  116 |   .locator("td")
  117 |   .last()
```