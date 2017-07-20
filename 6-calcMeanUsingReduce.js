const arr = [1,2,3,4,5]

// imperative method

const calcMeanI = coll => {
  var sum = 0
  for (let i = 0; i < coll.length; i++) {
    sum += coll[i]
  }
  return sum/coll.length
}


// reduce method 1
const reducer = (acc, val) => acc + val
console.log(arr.reduce(reducer)/ arr.length) // 3


// reduce method 2 
const reducer1 = (acc, val, index, coll) => {
  const sum = acc + val
  if (index !== coll.length - 1) return sum
  return sum / coll.length
}

const calcMean = coll => coll.reduce(reducer1)
