// Flattening an array

const flattenArr = arr => arr.reduce(reducer, []);

const reducer = (acc, curr) => {
  const result = acc.concat(curr)
  return result
}

const arr = [[1,2], [3,4], [5,6]]

console.log(flattenArr(arr))

// which is same as this
console.log(Array.prototype.concat.apply([], arr))


