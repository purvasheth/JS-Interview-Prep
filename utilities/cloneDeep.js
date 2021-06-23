function cloneDeep(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  if (Array.isArray(obj)) {
    return obj.map((elem) => cloneDeep(elem))
  }
  let result = {}
  for (key in obj) {
    result = { ...result, [key]: cloneDeep(obj[key]) }
  }
  return result
}

const original = {
  key: 'value',
  arrayOfObjects: [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }],
  array: [1, 2, 3, 4],
}
const copy = cloneDeep(original)

copy.key = 'new value'
console.log(copy, original)
