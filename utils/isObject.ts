// Function to check if a value is an object

export function isObject(value: any) {
  return Object.prototype.toString.call(value) === '[object Object]'
}
