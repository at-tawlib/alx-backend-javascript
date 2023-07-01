/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let names = '';
  for (const [index, item] of Object.entries(reportWithIterator)) {
    names += `${item}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      names += ' | ';
    }
  }
  return names;
}
