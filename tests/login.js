import fs from 'fs/promises'; 
import { expect } from '@playwright/test';
import { test } from '@playwright/test';

const jsonText = await fs.readFile('./data.json', 'utf8');
const data = JSON.parse(jsonText); 
const pathName="login";
const screenshotPath="screenshot/login";


export async function loginRight(page){
  await page.goto(data.url);

  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('abhay+40@zynka.ai');

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Zynka@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('**/dashboard/');

   
}