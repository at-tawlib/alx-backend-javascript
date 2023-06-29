export default function createIteratorObject(report) {
  const reportArray = [];

  for (const item of Object.values(report.allEmployees)) {
    reportArray.push(...item);
  }
  return reportArray;
}
