// capilatize first letter of string and rest all should be in lower case
// input: 'zANe'
// output: 'Zane'

function toUpperCase(ch) {
  const code = ch.charCodeAt(0)
  console.log(code)
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(code - 97 + 65)
  }
  return ch
}

function toLowerCase(ch) {
  const code = ch.charCodeAt(0)
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(code - 65 + 97)
  }
  return ch
}

function capitalize(str) {
  result = toUpperCase(str[0])
  for (let i = 1; i < str.length; i++) {
    result = result + toLowerCase(str[i])
  }
  return result
}

const str = 'zANe'
console.log(capitalize(str))
