export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  // create the buffer with length
  const buffer = new ArrayBuffer(length);
  const int8view = new DataView(buffer, 0);
  int8view.setInt8(position, value);
  return int8view;
}
