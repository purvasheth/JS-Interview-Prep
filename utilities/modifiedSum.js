const sum = function () {
  console.log(arguments)
  if (arguments.length === 3) {
    return [...arguments].reduce((total, elem) => total + elem, 0)
  }
  return sum.bind('null', ...arguments)
}
