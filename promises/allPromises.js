function allPromises(promises) {
  return new Promise((resolve, reject) => {
    try {
      const result = new Array(promises.length)
      let count = 0
      promises.forEach(async (promise, index) => {
        const currentResult = await promise
        result[index] = currentResult
        count++
        if (count === promises.length) {
          resolve(result)
        }
      })
    } catch (error) {
      reject(error)
    }
  })
}

const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo')
})

allPromises([promise1, promise2, promise3]).then((values) => {
  console.log(values)
})
