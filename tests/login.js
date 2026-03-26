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
  await page.getByRole('textbox', { name: 'Email' }).fill('akbk6551+1111@gmail.com');
  console.log("Email filled");
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Anshil@123');
  console.log("Password filled");
  await page.getByRole('button', { name: 'Login' }).click();
  console.log("Login button clicked")
  await page.waitForURL('**/dashboard/');
  console.log("click on dashboard");
  await page.waitForLoadState('networkidle');
  console.log('Company portal fully loaded')

   
}


export async function loginCustomerPortal(page){
  
  await page.goto("https://strgerpcuswebinddev.z29.web.core.windows.net/profile-detail/");

  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('akbk6551+1140@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('India@123');
  await page.getByRole('checkbox', { name: 'I accept the Terms and' }).check();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();

   
}
export async function loginEngineerPortal(page){
  await page.goto(" https://strgerpengwebinddev.z29.web.core.windows.net/");

  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('akbk6551+1133@gmail.com');

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Anshil@123');

  await page.getByRole('checkbox', { name: 'I accept the Terms and' }).check();
  await page.waitForTimeout(2000);
  
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Jobs' }).click();
}