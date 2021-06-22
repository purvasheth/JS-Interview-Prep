function delay(func, delay, ...args) {
  setTimeout(() => {
    func(...args)
  }, delay)
}

delay(
  function (text) {
    console.log(text)
  },
  2000,
  'later'
)
