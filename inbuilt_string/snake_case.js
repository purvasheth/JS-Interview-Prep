// remove all symbols. only numbers and letters are allowed
// input: --FOO-BAR--, fooBar, Foo Bar -> foo_bar
// output: foo_bar

function toLowerCase(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code - 65 + 97)
    } else {
      result += str[i]
    }
  }
  return result
}

function findGroup(code) {
  if (code >= 48 && code <= 57) {
    return 'number'
  }
  if (code >= 97 && code <= 122) {
    return 'lower_letter'
  }
  if (code >= 65 && code <= 90) {
    return 'upper_letter'
  }
  return 'symbol'
}

function isSameGroupOrLowerCaseAfterUpperCase(prevGroup, group) {
  return (
    group === prevGroup ||
    (group === 'lower_letter' && prevGroup === 'upper_letter')
  )
}

function toSnakeCase(str) {
  let result = ''
  let i = 1
  let prevGroup = findGroup(str.charCodeAt(0))
  if (prevGroup != 'symbol') {
    result = str[i]
  }
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i)
    let group = findGroup(code)
    if (isSameGroupOrLowerCaseAfterUpperCase(prevGroup, group)) {
      result = prevGroup != 'symbol' ? result + str[i] : ''
    } else if (group != 'symbol') {
      result = result ? result + '_' + str[i] : str[i]
    }
    prevGroup = group
  }
  return toLowerCase(result)
}

console.log(toSnakeCase('--FOO1-BAR23--'))
console.log(toSnakeCase('--fooBar--'))
console.log(toSnakeCase('--Foo Bar--'))

// Approach: if both groups are same, add to result directly else add to result with '_'
// Corner Case: when lower case letter comes after upper case letter.
//  Eg: fooBar => foo_bar, a comes after B but, they are in same group
