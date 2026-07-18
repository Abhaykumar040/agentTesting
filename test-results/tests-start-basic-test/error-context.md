# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\start.spec.js >> basic test
- Location: tests\start.spec.js:50:1

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Back to list' })

```

# Test source

```ts
  1406 |   await page.locator('body tr:nth-of-type(4) td:nth-of-type(9) div button:last-of-type svg').click();
  1407 |     await page.getByRole('menuitem', { name: 'Reject' }).click();
  1408 |   await page.getByRole('textbox').click();
  1409 |   await page.getByRole('textbox').fill('rejected by manager');
  1410 |   await page.getByRole('button', { name: 'Save' }).click();
  1411 |   await page.waitForTimeout(1000);
  1412 | 
  1413 |   if (
  1414 |       await page.getByText('MANAGER REJECTED').first().isVisible()
  1415 |      ) 
  1416 |   {
  1417 |     await page.screenshot({ path: `./${screenshotPath}/rejectQuotation.png`, fullPage: true });
  1418 |     await updateOpJson(`./${screenshotPath}/`,"rejectQuotation","true",`./${screenshotPath}/rejectQuotation.png`)
  1419 |     
  1420 |   }
  1421 |   else{
  1422 |     await page.screenshot({ path: `./${screenshotPath}/rejectQuotation.png`, fullPage: true });
  1423 |     await updateOpJson(`./${screenshotPath}/`,"rejectQuotation","false",`./${screenshotPath}/rejectQuotation.png`)
  1424 |   }
  1425 |   await page.reload();
  1426 |   console.log('reject quotation complited');
  1427 | }
  1428 | 
  1429 | async function rejectedByCustomerQuotation(page) {
  1430 |   console.log('Enter in reject by customer quotation');
  1431 |   await page.locator('body tr:nth-of-type(1) td:nth-of-type(9) div button:last-of-type svg').click();
  1432 |   await page.getByRole('menuitem', { name: 'Approve' }).click();
  1433 |   await page.waitForTimeout(3000);
  1434 |    await page.locator('body tr:nth-of-type(1) td:nth-of-type(9) div button:last-of-type svg').click();
  1435 |   await page.getByRole('menuitem', { name: 'Reject' }).click();
  1436 |   await page.waitForTimeout(1000);
  1437 |   await page.reload();
  1438 |  await page.waitForTimeout(3000);
  1439 | 
  1440 |   if (
  1441 |       await page.getByText('REJECTED',{exact:true}).first().isVisible()
  1442 |     ) 
  1443 |   {
  1444 |     await page.screenshot({ path: `./${screenshotPath}/rejectedByCustomerQuotation.png`, fullPage: true });
  1445 |     await updateOpJson(`./${screenshotPath}/`,"rejectedByCustomerQuotation","true",`./${screenshotPath}/rejectedByCustomerQuotation.png`)
  1446 |     
  1447 |   }
  1448 |   else{
  1449 |     await page.screenshot({ path: `./${screenshotPath}/rejectedByCustomerQuotation.png`, fullPage: true });
  1450 |     await updateOpJson(`./${screenshotPath}/`,"rejectedByCustomerQuotation","false",`./${screenshotPath}/rejectedByCustomerQuotation.png`)
  1451 |   }
  1452 |   await page.reload();
  1453 |     await page.waitForTimeout(3000);
  1454 |   console.log('rejected by customer quotation completed');
  1455 | }
  1456 | 
  1457 | async function copyQuotation(page){
  1458 |    console.log('Enter in copy quotation');
  1459 |    await page.locator('body tr:nth-of-type(2) td:nth-of-type(9) div button:last-of-type svg').click();
  1460 |      await page.getByRole('menuitem', { name: 'Copy' }).click();
  1461 |   await page.getByRole('combobox', { name: 'Customer' }).click();
  1462 |   await page.getByRole('option', { name: 'Anil Rathor' }).click();
  1463 |   await page.getByRole('combobox', { name: 'Address' }).click();
  1464 |   await page.getByRole('option', { name: 'Khamaria Khamaria Uttar' }).click();
  1465 |   await page.getByRole('button', { name: 'Save' }).click();
  1466 |   await page.waitForTimeout(1000);
  1467 |   await page.reload();
  1468 |   await page.waitForTimeout(3000);
  1469 | 
  1470 |   if (await page.getByText('CREATED').first().isVisible()) 
  1471 |   {
  1472 |     await page.screenshot({ path: `./${screenshotPath}/copyQuotation.png`, fullPage: true });
  1473 |     await updateOpJson(`./${screenshotPath}/`,"copyQuotation","true",`./${screenshotPath}/copyQuotation.png`)
  1474 |     
  1475 |   }
  1476 |   else{
  1477 |     await page.screenshot({ path: `./${screenshotPath}/copyQuotation.png`, fullPage: true });
  1478 |     await updateOpJson(`./${screenshotPath}/`,"copyQuotation","false",`./${screenshotPath}/copyQuotation.png`)
  1479 |   }
  1480 |     await page.waitForTimeout(1000);
  1481 |   await page.reload();
  1482 |     await page.waitForTimeout(3000);
  1483 |   console.log('copy quotation completed');
  1484 | }
  1485 | async function editQuotation(page) {
  1486 |   console.log('Enter in edited quotation');
  1487 |   await page.getByRole('link', { name: 'Quotations' }).click();
  1488 |   await page.getByText('REJECTED').first().click();
  1489 |   await page.waitForTimeout(1000);
  1490 |   await page.getByRole('button', { name: 'Edit' }).click();
  1491 |   await page.waitForTimeout(500);
  1492 |   // await expect(page.getByText('Please create a new quotation')).toBeVisible();
  1493 | 
  1494 | 
  1495 | 
  1496 |    if (await page.getByText('Please create a new quotation').first().isVisible()) 
  1497 |   {
  1498 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationRejected.png`, fullPage: true });
  1499 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationRejected","true",`./${screenshotPath}/editQuotationRejected.png`)
  1500 |     
  1501 |   }
  1502 |   else{
  1503 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationRejected.png`, fullPage: true });
  1504 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationRejected","false",`./${screenshotPath}/editQuotationRejected.png`)
  1505 |   }
> 1506 |   await page.getByRole('button', { name: 'Back to list' }).click();
       |                                                            ^ Error: locator.click: Test ended.
  1507 | await page.waitForTimeout(1000);
  1508 | 
  1509 | 
  1510 | 
  1511 |    await page.getByText('ACCEPTED').first().click();
  1512 |    await page.waitForTimeout(1000);
  1513 |   await page.getByRole('button', { name: 'Edit' }).click();
  1514 | await page.waitForTimeout(500);
  1515 |   if (await page.getByText('Please create a new quotation').first().isVisible()) 
  1516 |   {
  1517 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationAccepted.png`, fullPage: true });
  1518 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationAccepted","true",`./${screenshotPath}/editQuotationAccepted.png`)
  1519 |     
  1520 |   }
  1521 |   else{
  1522 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationAccepted.png`, fullPage: true });
  1523 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationAccepted","false",`./${screenshotPath}/editQuotationAccepted.png`)
  1524 |   }
  1525 |   await page.getByRole('button', { name: 'Back to list' }).click();
  1526 | await page.waitForTimeout(1000);
  1527 | 
  1528 | 
  1529 | 
  1530 |     await page.getByText('MANAGER APPROVED').first().click();
  1531 |     await page.waitForTimeout(1000);
  1532 |   await page.getByRole('button', { name: 'Edit' }).click();
  1533 |   await page.waitForTimeout(1000);
  1534 |   await page.getByRole('button', { name: 'Add Item' }).click();
  1535 |   await page.waitForTimeout(1000);
  1536 |   await page.getByRole('combobox').nth(1).click();
  1537 |   await page.getByRole('option', { name: 'Laptop charger' }).click();
  1538 |   await page.locator('input[name="products.1.discount"]').click();
  1539 |   await page.locator('input[name="products.1.discount"]').fill('090');
  1540 |   await page.getByRole('textbox', { name: 'Note:' }).click();
  1541 |   await page.waitForTimeout(500);
  1542 |   await page.getByRole('textbox', { name: 'Note:' }).fill('Quotation notesEdit');
  1543 |   await page.getByRole('checkbox', { name: 'Terms and Conditions' }).uncheck();
  1544 |   await page.getByRole('button', { name: 'Update' }).click();
  1545 |  await page.getByRole('button', { name: 'Back to list' }).click();
  1546 | 
  1547 |  await page.waitForTimeout(1000);
  1548 | 
  1549 |   if (!await page.getByText('MANAGER APPROVED').first().isVisible()) 
  1550 |   {
  1551 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationManagerApproved.png`, fullPage: true });
  1552 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationManagerApproved","true",`./${screenshotPath}/editQuotationManagerApproved.png`)
  1553 |     
  1554 |   }
  1555 |   else{
  1556 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationManagerApproved.png`, fullPage: true });
  1557 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationManagerApproved","false",`./${screenshotPath}/editQuotationManagerApproved.png`)
  1558 |   }
  1559 |   await page.getByText('₹1655.28').click();
  1560 |     await page.waitForTimeout(3000);
  1561 |     
  1562 | 
  1563 |   if (await page.getByRole('cell', { name: 'Laptop charger' }).isVisible()) 
  1564 |   {
  1565 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationManagerApprovedCheck.png`, fullPage: true });
  1566 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationManagerApprovedCheck","true",`./${screenshotPath}/editQuotationManagerApprovedCheck.png`)
  1567 |     
  1568 |   }
  1569 |   else{
  1570 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationManagerApprovedCheck.png`, fullPage: true });
  1571 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationManagerApprovedCheck","false",`./${screenshotPath}/editQuotationManagerApprovedCheck.png`)
  1572 |   }
  1573 |   console.log('edited quotation completed');
  1574 | }
  1575 | 
  1576 | async function sendQuotation(page){
  1577 |   console.log('Enter in send quotation');
  1578 |  await page.getByText('REJECTED').first().click();
  1579 |  await page.waitForTimeout(1000);
  1580 |   await page.getByRole('button', { name: 'Send Quotation' }).click();
  1581 |   await page.waitForTimeout(1000);
  1582 |   await page.getByRole('textbox', { name: 'To' }).click();
  1583 |   await page.getByRole('textbox', { name: 'To' }).fill('akbk6551+23101@gmail.com');
  1584 |   await page.getByRole('textbox', { name: 'CC' }).click();
  1585 |   await page.getByRole('textbox', { name: 'CC' }).fill('akbk6551+23102@gmail.com,akbk6551+23103@gmail.com');
  1586 |   await page.getByRole('textbox', { name: 'Message' }).click();
  1587 | 
  1588 |   await page.getByRole('textbox', { name: 'Message' }).fill('Dear Customer,\n  Thank you for your business, always a pleasure to work with you!\n  We have generated a new quotation.X');
  1589 |   await page.getByRole('textbox', { name: 'Subject' }).click();
  1590 |  
  1591 |   await page.getByRole('textbox', { name: 'Subject' }).fill('Quotation of services and items to be purchasedX');
  1592 |   await page.getByRole('button', { name: 'Send' }).click();
  1593 |   await page.waitForTimeout(5000);
  1594 | 
  1595 | 
  1596 | const email1 = await waitForEmail("akbk6551+23101@gmail.com");
  1597 | const match = email1?.body?.match(/https?:\/\/\S+/);
  1598 | console.log(email1,"abhay")
  1599 | if (match) {
  1600 |     const verificationLink = match[0];
  1601 |     console.log(verificationLink);
  1602 | 
  1603 |     await page.screenshot({ path: `./${screenshotPath}/sendQuotationToCustomerByEmail.png`, fullPage: true });
  1604 |     await updateOpJson(
  1605 |         `./${screenshotPath}/`,
  1606 |         "sendQuotationToCustomerByEmail",
```