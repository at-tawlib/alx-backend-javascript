export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }

  const array = [...set];
  const filterText = array.filter((element) => {
    if (element !== undefined) {
      return element.startsWith(startString);
    }
    return '';
  });
  const text = filterText.map((element) => {
    if (element !== undefined) {
      return element.slice(startString.length);
    }
    return '';
  });
  return text.join('-');
}
