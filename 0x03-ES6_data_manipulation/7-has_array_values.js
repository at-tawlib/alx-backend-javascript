export default function hasValuesFromArray(set, array) {
  let bool = true;
  array.forEach((item) => {
    if (!set.has(item)) {
      bool = false;
    }
  });
  return bool;
}
