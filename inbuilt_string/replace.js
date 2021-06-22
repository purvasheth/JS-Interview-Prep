// practiced adding methods to prototype for strings

String.prototype.mySubstring = function (start, end = -1) {
  const str = this.toString()
  let result = ''
  const adaptedEnd = end === -1 ? str.length : end
  for (let i = start; i < adaptedEnd; i++) {
    result = result + str[i]
  }
  return result
}
// console.log("some string".mySubstring(2,6))

String.prototype.myReplace = function (subStr, newSubStr) {
  const str = this.toString()
  let result = ''
  if (!subStr) {
    return str
  }
  let i = 0
  const subStrLength = subStr.length
  while (i < str.length) {
    if (
      str[i] === subStr[0] &&
      subStr === str.mySubstring(i, i + subStrLength)
    ) {
      result = result + newSubStr
      i = i + subStrLength
    } else {
      result = result + str[i]
      i++
    }
  }
  return result
}

console.log('abcdedcdf'.myReplace('cd', 'pqr'))
