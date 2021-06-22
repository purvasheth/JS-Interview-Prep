function sum(a, b = 0) {
  return a + b
}

function sumResolver(a, b) {
  return `${a}+${b}`
}

const memoize = function (func, resolver) {
  const cache = {}
  return function () {
    args = arguments
    const key = resolver ? resolver(...args) : args[0]
    if (!cache[key]) {
      console.log('function called')
      cache[key] = func(...args)
    }
    return cache[key]
  }
}

const memoizedSum = memoize(sum, sumResolver)
console.log(memoizedSum(5, 3))
console.log(memoizedSum(3, 4))
console.log(memoizedSum(5, 3)) // memoized result, function is not called again
