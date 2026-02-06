import { test, expect }  from '@playwright/test';
import fs from 'fs/promises';
import { Tickets } from '../customerService/ticket';
import { setting } from '../customerService/setting';
import { FAQs } from '../customerService/fqa';
import { customerInC_service } from '../customerService/customerInC_Service';
import { loginRight } from './login';
import { team } from '../customerService/team';
import { cs_agent } from '../customerService/cs-agent';
import { Invoices } from '../sales/invoices';
import { Quotation } from '../sales/quotation';
import { zone } from '../masterData/zone';
import { customer } from '../sales/customer';
import { assetsCategory } from '../masterData/assets-category';
import { priority } from '../setting/priority';
import { salesAgents } from '../sales/sales-agents';
import { roles } from '../setting/roles';
import { status } from '../setting/status';
import { form } from '../setting/form';
import { productCategory } from '../setting/productCategory';
import { product } from '../masterData/product';
import { skill } from '../masterData/skill';
import { customerfsm } from '../fsm/customerfsm';
import { lead } from '../sales/lead';

let testData; 

test.beforeAll(async () => {
  const rawData = await fs.readFile('./data.json', 'utf8');
  testData = JSON.parse(rawData);
});
test('basic test', async ({ page }) => {
await loginRight(page);
await page.waitForTimeout(30000);
// await customerInC_service(page);
await customerfsm(page);
// await Tickets(page);
// await FAQs(page);
// await team(page);
// await cs_agent(page);
// await setting(page);
// await Invoices(page);
// await Quotation(page);
// await customer(page);
// await assetsCategory(page);
// await zone(page);
// await roles(page);
// await salesAgents(page);
// await priority(page);
// await status(page);

//form creation is done ,other are pending
// await form(page);
// await productCategory(page);
// await product(page);
// await skill(page);
// await customerfsm(page);
// await lead(page);
});
