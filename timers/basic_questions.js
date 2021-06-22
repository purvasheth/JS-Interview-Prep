// Q: write a function which takes a message and a delay and print that message after the delay.
function delayMessage(message, delay) {
  setTimeout(() => {
    console.log(message)
  }, delay)
}
// delayMessage('prints after 3 sec', 3000)

// Q: write a function which takes a message and time. The function should print that message every X interval.
function repeatMessage(message, delay) {
  setInterval(() => {
    console.log(message)
  }, delay)
}
// repeatMessage('prints after every 2 sec', 2000)

// Q: Write a function which takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!"
function countdown(number, delay) {
  const interval = setInterval(() => {
    if (number === 0) {
      console.log('Bang Bang!')
      clearInterval(interval)
    } else {
      console.log(number)
    }
    number--
  }, delay)
}
// countdown(5, 1000)
