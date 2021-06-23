function sayHello() {
  console.log('hello, this is ', this.name)
}

function debounce(func, delay) {
  let timeout
  return function () {
    args = arguments
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

const debounced = debounce(sayHello, 2000)

const person = {
  name: 'Purva',
  sayHello: debounce(sayHello, 2000),
}

person.sayHello()

// debounced()
