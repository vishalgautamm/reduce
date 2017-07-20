const arr = [1,2,3,4,5,6,7,8,9,10]

const filterr = (coll, fn) => {
  return coll.reduce((acc, v) => {
    if (fn(v)) acc.push(v)
    return acc
  }, [])
}

const result = filterr(arr, x => x % 2 === 0)

console.log(result)
