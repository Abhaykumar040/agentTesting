const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'outputData.json');
const LOCK = path.join(__dirname, 'outputData.lock');

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// ---- FILE LOCK ----
async function acquireLock() {
  while (fs.existsSync(LOCK)) {
    await sleep(50);   // wait until free
  }
  fs.writeFileSync(LOCK, process.pid.toString());
}

function releaseLock() {
  if (fs.existsSync(LOCK)) fs.unlinkSync(LOCK);
}

// ---- SAFE UPDATE ----
async function updatePermission(parent, child, value) {
  await acquireLock();        // 🔒 lock start
  try {
    const data = JSON.parse(fs.readFileSync(FILE, 'utf-8'));

    // ❌ structure change not allowed
    if (!data[parent] || !(child in data[parent])) {
      throw new Error('Invalid update attempt');
    }

    data[parent][child] = value;

    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
  } finally {
    releaseLock();            // 🔓 lock end
  }
}

module.exports = { updatePermission };
