const mapp = (coll, fn) => {
  return coll.reduce((acc, curr) => {
    const result = fn.call(this, curr);
    acc.push(result);
    return acc;
  }, []);
}

console.log(mapp([1,2,3,4,5], x => x + 1))
