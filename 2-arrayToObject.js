// Transforming array into object

const medalsWon = [
  'usa',
  'china',
  'india',
  'russia',
  'canada',
  'russia',
  'usa',
  'china',
  'china'
];

const medalsCount = arr => {
  return arr.reduce((obj, country) => {
    if (!obj[country]) obj[country] = 1;
    obj[country] += 1;
    return obj;
  }, {});
};

const result = medalsCount(medalsWon);
console.log(result);
