export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let iter = 0;
  if (weakMap.get(endpoint)) iter = weakMap.get(endpoint);
  weakMap.set(endpoint, iter + 1);
  if (iter + 1 >= 5) throw new Error('Endpoint load is high');
}
