function delay(func, delay, ...args) {
  let context = this
  setTimeout(() => {
    func.call(context, ...args)
  }, delay)
}

delay(
  function () {
    console.log('delayed log')
  },
  2000,
  'later'
)

// why to set the context
const obj = {
  text: 'later',
  printText: function () {
    const context = this
    delay(function () {
      console.log(context.text)
    }, 2000)
  },
}

obj.printText()
