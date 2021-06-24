function zipArrays(array1, array2) {
  const length = Math.min(array1.length, array2.length)
  return array1.slice(0, length).map((elem, i) => [elem, array2[i]])
}

console.log(zipArrays([1, 2, 3], ['a', 'b', 'c']))
console.log(zipArrays([1, 2, 3, 4], ['a', 'b', 'c']))
console.log(zipArrays([1, 2, 3], ['a', 'b', 'c', 'd']))
