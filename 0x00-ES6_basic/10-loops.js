export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];
  for (const item of array) {
    newarray.push(appendString + item);
  }

  return newarray;
}
