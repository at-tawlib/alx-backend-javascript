export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }

  const array = [...set];
  const filterText = array.filter((element) => element.startsWith(startString));
  const text = filterText.map((element) => element.slice(startString.length));
  return text.join('-');
}
