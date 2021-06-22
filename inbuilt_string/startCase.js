//  input : '--foo-bar--', 'fooBar', '__FOO_BAR__'
//  output: 'Foo Bar'

function getGroup(code) {
  if (code >= 65 && code <= 90) {
    return 'upperLetter'
  }
  if (code >= 97 && code <= 122) {
    return 'lowerLetter'
  }
  if (code >= 48 && code <= 57) {
    return 'number'
  }
  return 'symbol'
}

function toUpperCase(ch) {
  let code = ch.charCodeAt(0)
  let group = getGroup(code)
  return group === 'lowerLetter' ? String.fromCharCode(code - 97 + 65) : ch
}

function toLowerCase(ch) {
  code = ch.charCodeAt(0)
  group = getGroup(code)
  return group === 'upperLetter' ? String.fromCharCode(code + 97 - 65) : ch
}

function startCase(str) {
  let prevGroup = getGroup(str.charCodeAt(0))
  let result = prevGroup === 'symbol' ? '' : toUpperCase(str[0])
  for (let i = 1; i < str.length; i++) {
    const group = getGroup(str.charCodeAt(i))
    if (
      prevGroup === group ||
      (prevGroup === 'upperLetter' && group == 'lowerLetter')
    ) {
      result += group !== 'symbol' ? toLowerCase(str[i]) : ''
    } else if (group !== 'symbol') {
      result += result ? ' ' + toUpperCase(str[i]) : toUpperCase(str[i])
    }
    prevGroup = group
  }
  return result
}

console.log(startCase('--foo-bar--'))
console.log(startCase('fooBar'))
console.log(startCase('__FOO_BAR__'))
