// 1: Not passing initial value
// Not passing initial value gives wierd results

const ironThrone = ['Stark', 'Stark', 'Lannister', 'Lannister', 'Lannister', 'Greyjoy']
const reducer = ((tally, house) => {
  if (!tally[house]) tally[house] = 1
  tally[house] += 1
  return tally
})
ironThrone.reduce(reducer) // Returns 'Stark'
ironThrone.reduce(reducer, {}) // Returns { Stark: 3, Lannister: 4, Greyjoy: 2 }


// 2: Failing to return the accumulator

const reducer2 = ((tally, house) => {
  if (!tally[house]) tally[house] = 1
  tally[house] += 1
})
ironThrone.reduce(reducer2, {}) // throws TypeError
