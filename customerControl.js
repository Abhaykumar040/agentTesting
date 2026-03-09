import fs from 'fs/promises';

export async function getTestData() {
  const rawData = await fs.readFile('./data.json', 'utf8');
  return JSON.parse(rawData);
}

export async function markCustomerCreated(sectionName) {
  const rawData = await fs.readFile('./data.json', 'utf8');
  const testData = JSON.parse(rawData);

  testData.customerCreated = true;
  testData.customerCreatedSection = sectionName;

  await fs.writeFile('./data.json', JSON.stringify(testData, null, 2), 'utf8');
}

export async function isCustomerCreated() {
  const rawData = await fs.readFile('./data.json', 'utf8');
  const testData = JSON.parse(rawData);
  return testData.customerCreated;
}