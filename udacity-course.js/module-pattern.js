function Person() {
  let privateAge = 0
  let privateName = 'Andrew'

  function privateAgeOneYear() {
    privateAge += 1
    console.log(`One year has passed! Current age is ${privateAge}`)
  }

  this.displayName = function () {
    // public
    console.log(`Name: ${privateName}`)
  }

  this.ageOneYear = function () {
    // public
    privateAgeOneYear()
  }
}

const person = new Person()
person.ageOneYear()
person.displayName()
