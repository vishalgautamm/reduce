const bigData = () => {
  var bigData = [];
  for (var i = 0; i < 100000000; i++) {
    bigData.push(i);
  }
  return bigData;
}

var big = bigData()


const bigDataChaining = bigData => bigData
      .filter(item => item % 2 !== 0)
      .map(item => item * 2)


console.time('BigDataChaining');
bigDataChaining(big)
console.timeEnd('BigDataChaining');

const bigDataReduce = bigData => bigData
      .reduce((acc, item) => {
        if (item % 2 !== 0) acc.push(item * 2)
        return acc;
      }, [])

console.time('BigDataReduce');
bigDataReduce(big)
console.timeEnd('BigDataReduce');

// Results

// BigDataChaining: 26769ms
// BigDataReduce: 3463ms

// Aka reduce is blazing fast compared to map filter chaining
