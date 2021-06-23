function throttle(func, delay) {
  let wait = false
  const context = this
  return function () {
    if (!wait) {
      func.apply(context, arguments)
      wait = true
      setTimeout(() => {
        wait = false
      }, delay)
    }
  }
}

function sayHello(name) {
  console.log(`hello ${name}`)
}

const throttled = throttle(sayHello, 2000)

throttled('Max')
setTimeout(() => throttled('Mark'), 500) // this call is skipped
setTimeout(() => throttled('Zane'), 2500)
