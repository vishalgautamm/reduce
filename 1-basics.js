// 1. summing an array

const reducer = (acc, curr) => acc + curr;

const arr = [1,2,3,4,5,6];

console.log(arr.reduce(reducer, 10)); // 31

