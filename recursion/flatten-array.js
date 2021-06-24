// input: [1, [2, [3,4], 5], 6]
// output: [1, 2, 3, 4, 5, 6]

function flattenArray(array) {
  const result = []
  function recursiveFlatten(array) {
    if (!Array.isArray(array)) {
      result.push(array)
    } else {
      array.forEach((elem) => {
        recursiveFlatten(elem)
      })
    }
  }
  recursiveFlatten(array)
  return result
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]))
