const products = [
  { id: '1', name: 'kala chasma' },
  { id: '2', name: 'japani joota' },
]
function fakeAPI(delay, error = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('sorry! something is not right')
      }
      resolve({ products })
    }, delay)
  })
}

fakeAPI(1000)
  .then((products) => console.log(products))
  .catch((error) => console.log(error))

fakeAPI(1000, true)
  .then((products) => console.log(products))
  .catch((error) => console.log(error))
