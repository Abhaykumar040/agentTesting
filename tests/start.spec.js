import { test, expect }  from '@playwright/test';
import fs from 'fs/promises';
import { internalJob } from '../fsm/internalJob';
import { cyclicJob } from '../fsm/cyclicJob';
import { AssetManagement } from '../fsm/assetmanagement';
import { jobType } from '../fsm/jobType';
import { Engineer } from '../fsm/engineer';
import { Tickets } from '../customerService/ticket';
import { setting } from '../customerService/setting';
import { FAQs } from '../customerService/faq';
import { customerInC_service } from '../customerService/customerInC_Service';
import { Queue } from '../customerService/Queues';
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
// await priority(page);
// await roles(page);
// await status(page);
// await productCategory(page);
// await form(page);
await skill(page);
//  await zone(page);
// await assetsCategory(page);
// await product(page);
// await salesAgents(page);
// await lead(page);
// await customer(page);
// await Quotation(page);
// await Invoices(page);
// await cs_agent(page);
// await team(page);
// await setting(page);
// await customerInC_service(page); 
// await Queue(page);
// await Tickets(page);
// await FAQs(page);
// await Engineer(page);
// await jobType(page);
// await customerfsm(page);
// await AssetManagement(page);
// await internalJob(page);
// await cyclicJob(page);


// await page.waitForTimeout(30000);

















//form creation is done ,other are pending




// await customerfsm(page);

});
