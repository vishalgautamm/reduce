// finding the longest world in a sentence

const sentence = "I have come here to return accumulators and chew bubblegum...";
const longestWord = str => str.split(' ').reduce(reducer, '');

const reducer = (acc, curr, index, arr) =>
      acc.length >= curr.length ? acc : curr;

// Method2

const findLongestWord = sentence => {
  return sentence.split(' ').reduce((acc, curr, index, arr) => {
    if (acc.length < curr.length) acc = curr
    console.log(acc)

  }, '')
}

findLongestWord(sentence) // accumulators 
