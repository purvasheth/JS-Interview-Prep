function sum(a, b, c) {
  return a + b + c
}

function curry(func) {
  const maxLength = func.length
  return (nested = function () {
    if (arguments.length >= maxLength) {
      return func(...arguments)
    }
    return nested.bind(null, ...arguments)
  })
}

const curriedSum = curry(sum)
console.log(curriedSum(1)(2, 3))

// did not implement the placeholder part
