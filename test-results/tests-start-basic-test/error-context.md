# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\start.spec.js >> basic test
- Location: tests\start.spec.js:60:1

# Error details

```
ReferenceError: path is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - link "Zynka" [ref=e7] [cursor=pointer]:
          - /url: /
          - img "Zynka" [ref=e8]
        - button [ref=e9] [cursor=pointer]:
          - img [ref=e10]
      - list [ref=e16]:
        - listitem [ref=e17]:
          - link "Dashboard" [ref=e18] [cursor=pointer]:
            - /url: /dashboard/
            - img [ref=e20]
            - paragraph [ref=e25]: Dashboard
        - listitem [ref=e26]:
          - button "Dashboards (NEW)" [ref=e27] [cursor=pointer]:
            - img [ref=e29]
            - generic [ref=e33]:
              - paragraph [ref=e34]: Dashboards (NEW)
              - img [ref=e36]
        - listitem [ref=e38]:
          - generic [ref=e39]: Applications
        - listitem [ref=e40]:
          - button "Field Service" [ref=e41] [cursor=pointer]:
            - img [ref=e43]
            - generic [ref=e45]:
              - paragraph [ref=e46]: Field Service
              - img [ref=e48]
        - listitem [ref=e50]:
          - button "Customer Service" [ref=e51] [cursor=pointer]:
            - img [ref=e53]
            - generic [ref=e55]:
              - paragraph [ref=e56]: Customer Service
              - img [ref=e58]
        - listitem [ref=e60]:
          - button "Sales" [ref=e61] [cursor=pointer]:
            - img [ref=e63]
            - generic [ref=e71]:
              - paragraph [ref=e72]: Sales
              - img [ref=e74]
          - list [ref=e76]:
            - generic [ref=e78]:
              - listitem [ref=e79]:
                - link "Lead Management" [ref=e80] [cursor=pointer]:
                  - /url: /sales/leads/list-v2/
                  - img [ref=e82]
                  - paragraph [ref=e85]: Lead Management
              - listitem [ref=e86]:
                - link "Opportunities" [ref=e87] [cursor=pointer]:
                  - /url: /sales/opportunities/
                  - img [ref=e89]
                  - paragraph [ref=e92]: Opportunities
              - listitem [ref=e93]:
                - link "Customers" [ref=e94] [cursor=pointer]:
                  - /url: /sales/customers/
                  - img [ref=e96]
                  - paragraph [ref=e99]: Customers
              - listitem [ref=e100]:
                - link "Sales-Agents" [ref=e101] [cursor=pointer]:
                  - /url: /sales/agent/
                  - img [ref=e103]
                  - paragraph [ref=e106]: Sales-Agents
              - listitem [ref=e107]:
                - link "Quotations" [ref=e108] [cursor=pointer]:
                  - /url: /sales/quotations/list-v2/
                  - img [ref=e110]
                  - paragraph [ref=e113]: Quotations
              - listitem [ref=e114]:
                - link "Invoices" [ref=e115] [cursor=pointer]:
                  - /url: /sales/invoices/list-v2/
                  - img [ref=e117]
                  - paragraph [ref=e123]: Invoices
              - listitem [ref=e124]:
                - link "Proforma Invoices" [ref=e125] [cursor=pointer]:
                  - /url: /sales/proforma-invoices/list-v2/
                  - img [ref=e127]
                  - paragraph [ref=e133]: Proforma Invoices
        - listitem [ref=e134]:
          - button "E-Sign" [ref=e135] [cursor=pointer]:
            - img [ref=e137]
            - generic [ref=e139]:
              - paragraph [ref=e140]: E-Sign
              - img [ref=e142]
        - listitem [ref=e144]:
          - button "Master Data" [ref=e145] [cursor=pointer]:
            - img [ref=e147]
            - generic [ref=e150]:
              - paragraph [ref=e151]: Master Data
              - img [ref=e153]
        - listitem [ref=e155]:
          - button "Settings" [ref=e156] [cursor=pointer]:
            - img [ref=e158]
            - generic [ref=e160]:
              - paragraph [ref=e161]: Settings
              - img [ref=e163]
    - generic [ref=e167]:
      - banner [ref=e168]:
        - generic [ref=e172] [cursor=pointer]:
          - generic [ref=e173]:
            - paragraph [ref=e174]: Play Test
            - generic [ref=e175]: suzuki
          - img [ref=e178]
      - main [ref=e182]:
        - generic [ref=e185]:
          - generic [ref=e187]:
            - generic [ref=e190]:
              - generic [ref=e191]:
                - heading "suzuki" [level=4] [ref=e193]
                - generic [ref=e194]:
                  - paragraph [ref=e195]: abhay+32222@zynka.ai
                  - generic [ref=e196]:
                    - paragraph [ref=e197]: Khadi Machine Chowk Kondhwa
                    - paragraph [ref=e198]: Prayagraj, Uttar Pradesh, , India
                    - paragraph [ref=e199]: "PIN/POST: 221306"
                  - paragraph [ref=e200]: "7697850924"
                  - paragraph
              - generic [ref=e201]:
                - generic [ref=e202]:
                  - heading "Quotation:" [level=6] [ref=e203]
                  - paragraph [ref=e204]: Q-61
                - generic [ref=e205]:
                  - heading "Date Issued:" [level=6] [ref=e206]
                  - paragraph [ref=e207]: 31/07/2026
            - generic [ref=e210]:
              - heading "Quotation To:" [level=6] [ref=e211]
              - generic [ref=e212]:
                - paragraph [ref=e213]: Anil Rathor
                - paragraph [ref=e214]: Khamaria
                - paragraph [ref=e215]: Khamaria Uttar Pradesh India
                - paragraph [ref=e216]: "PIN/POST: 221306"
                - paragraph [ref=e217]: akbk6551+1136@gmail.com
                - paragraph [ref=e218]: "8000000014"
                - paragraph
            - table [ref=e221]:
              - rowgroup [ref=e222]:
                - row "Item & Description HSN Code Price Quantity Cost Discount" [ref=e223]:
                  - columnheader "Item & Description" [ref=e224]
                  - columnheader "HSN Code" [ref=e225]
                  - columnheader "Price" [ref=e226]
                  - columnheader "Quantity" [ref=e227]
                  - columnheader "Cost" [ref=e228]
                  - columnheader "Discount" [ref=e229]
              - rowgroup [ref=e230]:
                - row "fuseByLead ₹90.00 1 ₹80.00 10" [ref=e231]:
                  - cell "fuseByLead" [ref=e232]
                  - cell [ref=e233]
                  - cell "₹90.00" [ref=e234]
                  - cell "1" [ref=e235]
                  - cell "₹80.00" [ref=e236]
                  - cell "10" [ref=e237]
            - generic [ref=e238]:
              - generic [ref=e239]:
                - generic [ref=e241]:
                  - paragraph [ref=e242]: "Salesperson:"
                  - paragraph [ref=e243]: Play Test
                - generic [ref=e244]:
                  - generic [ref=e245]:
                    - paragraph [ref=e246]: "Subtotal:"
                    - paragraph [ref=e247]: ₹80.00
                  - generic [ref=e248]:
                    - paragraph [ref=e249]: "Discount:"
                    - paragraph [ref=e250]: ₹10.00
                  - generic [ref=e251]:
                    - paragraph [ref=e252]: "CGST (2.5%):"
                    - paragraph [ref=e253]: ₹2.00
                  - generic [ref=e254]:
                    - paragraph [ref=e255]: "SGST (2.5%):"
                    - paragraph [ref=e256]: ₹2.00
                  - separator [ref=e257]
                  - generic [ref=e258]:
                    - paragraph [ref=e259]: "Total:"
                    - paragraph [ref=e260]: ₹84.00
              - generic [ref=e261]:
                - paragraph [ref=e262]:
                  - strong [ref=e263]: "Total In Words:"
                - paragraph [ref=e264]: Eighty Four Rupees Only
            - generic [ref=e265]:
              - separator [ref=e266]
              - paragraph [ref=e267]: "Note:"
              - generic [ref=e268]:
                - paragraph [ref=e269]: "Terms & Conditions:"
                - paragraph
            - button "Back to list" [ref=e271] [cursor=pointer]: Back to list
          - generic [ref=e276]:
            - button "Send Quotation" [active] [ref=e277] [cursor=pointer]:
              - img [ref=e279]
              - text: Send Quotation
            - button "Send for Signature" [ref=e281] [cursor=pointer]:
              - img [ref=e283]
              - text: Send for Signature
            - button "Edit" [ref=e286] [cursor=pointer]: Edit
            - button "PDF" [ref=e287] [cursor=pointer]:
              - img [ref=e289]
              - text: PDF
            - button "Share via Whatsapp" [ref=e291] [cursor=pointer]:
              - img [ref=e293]
              - text: Share via Whatsapp
  - alert [ref=e295]: Zynka - Portal for EV Charger Installation and Maintenance
```

# Test source

```ts
  1513 |    await page.getByText('ACCEPTED').first().click();
  1514 |    await page.waitForTimeout(1000);
  1515 |   await page.getByRole('button', { name: 'Edit' }).click();
  1516 | await page.waitForTimeout(500);
  1517 |   if (await page.getByText('Please create a new quotation').first().isVisible()) 
  1518 |   {
  1519 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationAccepted.png`, fullPage: true });
  1520 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationAccepted","true",`./${screenshotPath}/editQuotationAccepted.png`)
  1521 |     
  1522 |   }
  1523 |   else{
  1524 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationAccepted.png`, fullPage: true });
  1525 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationAccepted","false",`./${screenshotPath}/editQuotationAccepted.png`)
  1526 |   }
  1527 |   await page.getByRole('button', { name: 'Back to list' }).click();
  1528 | await page.waitForTimeout(1000);
  1529 | 
  1530 | 
  1531 | 
  1532 |     await page.getByText('MANAGER APPROVED').first().click();
  1533 |     await page.waitForTimeout(1000);
  1534 |   await page.getByRole('button', { name: 'Edit' }).click();
  1535 |   await page.waitForTimeout(1000);
  1536 |   await page.getByRole('button', { name: 'Add Item' }).click();
  1537 |   await page.waitForTimeout(1000);
  1538 |   await page.getByRole('combobox').nth(1).click();
  1539 |   await page.getByRole('option', { name: 'Laptop charger' }).click();
  1540 |   await page.locator('input[name="products.1.discount"]').click();
  1541 |   await page.locator('input[name="products.1.discount"]').fill('090');
  1542 |   await page.getByRole('textbox', { name: 'Note:' }).click();
  1543 |   await page.waitForTimeout(500);
  1544 |   await page.getByRole('textbox', { name: 'Note:' }).fill('Quotation notesEdit');
  1545 |   await page.getByRole('checkbox', { name: 'Terms and Conditions' }).uncheck();
  1546 |   await page.getByRole('button', { name: 'Update' }).click();
  1547 |  await page.getByRole('button', { name: 'Back to list' }).click();
  1548 | 
  1549 |  await page.waitForTimeout(1000);
  1550 | 
  1551 |   if (!await page.getByText('MANAGER APPROVED').first().isVisible()) 
  1552 |   {
  1553 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationManagerApproved.png`, fullPage: true });
  1554 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationManagerApproved","true",`./${screenshotPath}/editQuotationManagerApproved.png`)
  1555 |     
  1556 |   }
  1557 |   else{
  1558 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationManagerApproved.png`, fullPage: true });
  1559 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationManagerApproved","false",`./${screenshotPath}/editQuotationManagerApproved.png`)
  1560 |   }
  1561 |   await page.getByText('₹1655.28').click();
  1562 |     await page.waitForTimeout(3000);
  1563 |     
  1564 | 
  1565 |   if (await page.getByRole('cell', { name: 'Laptop charger' }).isVisible()) 
  1566 |   {
  1567 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationManagerApprovedCheck.png`, fullPage: true });
  1568 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationManagerApprovedCheck","true",`./${screenshotPath}/editQuotationManagerApprovedCheck.png`)
  1569 |     
  1570 |   }
  1571 |   else{
  1572 |     await page.screenshot({ path: `./${screenshotPath}/editQuotationManagerApprovedCheck.png`, fullPage: true });
  1573 |     await updateOpJson(`./${screenshotPath}/`,"editQuotationManagerApprovedCheck","false",`./${screenshotPath}/editQuotationManagerApprovedCheck.png`)
  1574 |   }
  1575 |   console.log('edited quotation completed');
  1576 | }
  1577 | 
  1578 | async function sendQuotation(page){
  1579 |   console.log('Enter in send quotation');
  1580 |  await page.getByText('REJECTED').first().click();
  1581 |  await page.waitForTimeout(1000);
  1582 |   await page.getByRole('button', { name: 'Send Quotation' }).click();
  1583 |   await page.waitForTimeout(1000);
  1584 |   await page.getByRole('textbox', { name: 'To' }).click();
  1585 |   await page.getByRole('textbox', { name: 'To' }).fill('akbk6551+23101@gmail.com');
  1586 |   await page.getByRole('textbox', { name: 'CC' }).click();
  1587 |   await page.getByRole('textbox', { name: 'CC' }).fill('akbk6551+23102@gmail.com,akbk6551+23103@gmail.com');
  1588 |   await page.getByRole('textbox', { name: 'Message' }).click();
  1589 | 
  1590 |   await page.getByRole('textbox', { name: 'Message' }).fill('Dear Customer,\n  Thank you for your business, always a pleasure to work with you!\n  We have generated a new quotation.X');
  1591 |   await page.getByRole('textbox', { name: 'Subject' }).click();
  1592 |  
  1593 |   await page.getByRole('textbox', { name: 'Subject' }).fill('Quotation of services and items to be purchasedX');
  1594 |   await page.getByRole('button', { name: 'Send' }).click();
  1595 |   await page.waitForTimeout(10000);
  1596 | 
  1597 | 
  1598 | const email1 = await waitForEmail("akbk6551+23101@gmail.com");
  1599 | const match = email1?.body?.match(/Dear Customer/i);
  1600 | console.log(email1,"abhay")
  1601 | if (match) {
  1602 |     const verificationLink = match[0];
  1603 |     console.log(verificationLink);
  1604 | 
  1605 | 
  1606 |     
  1607 | if (email1?.body?.includes("Dear Customer")) {
  1608 |   const pdf = email1.attachments?.find(
  1609 |     (a) => a.contentType === "application/pdf"
  1610 |   );
  1611 | 
  1612 |   if (pdf) {
> 1613 |     const filePath = path.join(
       |                      ^ ReferenceError: path is not defined
  1614 |       process.cwd(),
  1615 |       "downloads",
  1616 |       "quotationSendByEmail.pdf"
  1617 |     );
  1618 | 
  1619 |     fs.writeFileSync(filePath, pdf.content);
  1620 | 
  1621 |     console.log("PDF saved:", filePath);
  1622 |   }
  1623 | }
  1624 |     await page.screenshot({ path: `./${screenshotPath}/sendQuotationToCustomerByEmail.png`, fullPage: true });
  1625 |     await updateOpJson(
  1626 |         `./${screenshotPath}/`,
  1627 |         "sendQuotationToCustomerByEmail",
  1628 |         "true",
  1629 |         `./${screenshotPath}/sendQuotationToCustomerByEmail.png`
  1630 |     );
  1631 | } else {
  1632 |     await page.screenshot({ path: `./${screenshotPath}/sendQuotationToCustomerByEmail.png`, fullPage: true });
  1633 |     await updateOpJson(
  1634 |         `./${screenshotPath}/`,
  1635 |         "sendQuotationToCustomerByEmail",
  1636 |         "false",
  1637 |         `./${screenshotPath}/sendQuotationToCustomerByEmail.png`
  1638 |     );
  1639 | }
  1640 | 
  1641 | await page.reload();
  1642 |   await page.getByRole('button', { name: 'Back to list' }).click();
  1643 |     await page.waitForTimeout(1000);
  1644 |   await page.reload();
  1645 |   console.log('send quotation completed');
  1646 | }
  1647 | 
  1648 | async function deleteQuotation(page) {
  1649 |   console.log('Enter in deleted quotaion');
  1650 |   await page.getByRole('button', { name: 'Sales' }).click();
  1651 |   await page.getByRole('link', { name: 'Quotations' }).click();
  1652 |   await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  1653 |   await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  1654 |   await page.getByRole('menuitem', { name: 'Delete' }).click();
  1655 |   await page.getByRole('button', { name: 'Proceed' }).click();
  1656 |   await page.reload();
  1657 |  await page.waitForTimeout(3000);
  1658 | 
  1659 |   if (!await page.getByText('Ishan Singh (1345836)',{exact:true}).first().isVisible()) 
  1660 |   {
  1661 |     await page.screenshot({ path: `./${screenshotPath}/deleteQuotation.png`, fullPage: true });
  1662 |     await updateOpJson(`./${screenshotPath}/`,"deleteQuotation","true",`./${screenshotPath}/deleteQuotation.png`)
  1663 |     
  1664 |   }
  1665 |   else{
  1666 |     await page.screenshot({ path: `./${screenshotPath}/deleteQuotation.png`, fullPage: true });
  1667 |     await updateOpJson(`./${screenshotPath}/`,"deleteQuotation","false",`./${screenshotPath}/deleteQuotation.png`)
  1668 |   }
  1669 |   await page.reload();
  1670 |   console.log('Deleted quotation completed');
  1671 | }
  1672 | 
  1673 | 
  1674 | // async function exportQuotationFilter(page) {
  1675 | //   console.log('Enter in export quotation filter'); 
  1676 | //   // filter on basis of State, City, and Customer name.
  1677 | //   await page.getByRole('button', { name: 'Filter By' }).click();
  1678 | //   await page.getByRole('menuitem', { name: 'State' }).click();
  1679 | //   await page.getByRole('menuitem', { name: 'Uttar Pradesh' }).getByRole('checkbox').check();
  1680 | //   await page.getByRole('button', { name: 'OK' }).click();
  1681 | //   await page.getByRole('button', { name: 'Filter By' }).click();
  1682 | //   await page.getByText('City').click();
  1683 | //   await page.getByRole('menuitem', { name: 'Khamaria' }).getByRole('checkbox').check();
  1684 | //   await page.getByRole('button', { name: 'OK' }).click();
  1685 | //    await page.getByRole('button', { name: 'Filter By' }).click();
  1686 | //   await page.locator('div').filter({ hasText: /^1$/ }).nth(2).click();
  1687 | //   await page.getByRole('menuitem', { name: 'Arjun Singh' }).getByRole('checkbox').check();
  1688 | //   await page.getByRole('button', { name: 'OK' }).click();
  1689 | //   await page.waitForTimeout(1000);
  1690 | 
  1691 | //   if (await page.getByText('Arjun Singh',{exact:true}).first().isVisible()) 
  1692 | //   {
  1693 | //     await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter1.png`, fullPage: true });
  1694 | //     await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter1","true",`./${screenshotPath}/exportQuotationFilter1.png`)
  1695 |     
  1696 | //   }
  1697 | //   else{
  1698 | //     await page.screenshot({ path: `./${screenshotPath}/exportQuotationFilter1.png`, fullPage: true });
  1699 | //     await updateOpJson(`./${screenshotPath}/`,"exportQuotationFilter1","false",`./${screenshotPath}/exportQuotationFilter1.png`)
  1700 | //   }
  1701 | //     // Exel
  1702 | //   const [excelDownload1] = await Promise.all([
  1703 | //     page.waitForEvent('download'),
  1704 | //     page.getByRole('button', { name: 'Export To Excel' }).click()
  1705 | //   ]);
  1706 | //   await excelDownload1.saveAs('downloads/exportQuotationFilter1.xlsx');
  1707 | //   const result1 = await dataRead(
  1708 | //               "./downloads/exportQuotationFilter1.xlsx",
  1709 | //               ["Mayank Rathor","akbk6551+1139@gmail.com"],
  1710 | //               []
  1711 | //           );
  1712 | //           console.log(result1);
  1713 | //         await page.waitForTimeout(2000)
```