// input: 'this is a string'
// output: 'gnirts a si siht'

function reverse(str) {
  let result = ''
  const n = str.length
  for (let i = n - 1; i >= 0; i--) {
    result = result + str[i]
  }
  return result
  // return str.split('').reverse().join('')
}

console.log(reverse('this is a string'))

// Takeaways
// strings are immutable. s[i] = 'c does not work
// with inbuilt functions, .split('').reverse().join('') can be done
