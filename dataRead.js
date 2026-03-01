import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';
import pdf from "pdf-parse as pdfjsLib";

export async function dataRead(
  fileName,
  matchArray = [],
  notMatchArray = [],
  options = { caseSensitive: false }
) {

  if (!fs.existsSync(fileName)) {
    throw new Error("File does not exist");
  }

  const ext = path.extname(fileName).toLowerCase();
  let content = "";

  // ---------- PDF Handling ----------
  if (ext === ".pdf") {

    const data = new Uint8Array(fs.readFileSync(fileName));
    const pdf = await pdfjsLib.getDocument({ data }).promise;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(" ");
      content += pageText + "\n";
    }
  }

  // ---------- XLSX Handling ----------
  else if (ext === ".xlsx") {

    const workbook = XLSX.readFile(fileName);

    workbook.SheetNames.forEach(sheet => {
      content += XLSX.utils.sheet_to_csv(workbook.Sheets[sheet]) + "\n";
    });
  }

  else {
    throw new Error("Unsupported file type");
  }

  // ---------- Case Handling ----------
  if (!options.caseSensitive) {
    content = content.toLowerCase();
  }

  const requiredResults = matchArray.map(v => ({
    value: v,
    found: options.caseSensitive
      ? content.includes(v)
      : content.includes(v.toLowerCase())
  }));

  const unwantedResults = notMatchArray.map(v => ({
    value: v,
    found: options.caseSensitive
      ? content.includes(v)
      : content.includes(v.toLowerCase())
  }));

  const allRequiredMatched = requiredResults.every(r => r.found);
  const allUnwantedAbsent = unwantedResults.every(r => !r.found);

  return {
    success: allRequiredMatched && allUnwantedAbsent,
    fileType: ext,
    requiredCheck: requiredResults,
    unwantedCheck: unwantedResults
  };
}

// Example usage
// (async () => {
//   try {
//     const result = await dataRead(
//       "./c.pdf",
//       ["Job Type", "Job ID"],
//       ["J-1", "Dealer Code"]
//     );

//     console.log(result);
//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// })();