const range = (min, max) => Array(max).fill(1)
  .reduce((acc, curr, index, arr) => {
      acc.push(index)
      return (index !== arr.length - 1) ? acc : acc.slice(min)
    }, [])

range(1,10).reduce((curr, acc) => curr + acc) // 45
