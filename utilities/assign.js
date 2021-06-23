function assign(source, ...rest) {
  return rest.reduce((result, target) => ({ ...result, ...target }), source)
}

console.log(assign({ a: 0 }, { a: 1, c: 3 }, { d: 4 }))
