import fs from "fs";
import path from "path";
import XLSX from "xlsx";
import pdf from "pdf-parse";

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

  // ---------- PDF Handling (Fixed) ----------
  if (ext === ".pdf") {

    const dataBuffer = fs.readFileSync(fileName);
    const data = await pdf(dataBuffer);
    content = data.text;

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