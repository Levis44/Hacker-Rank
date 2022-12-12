const arr = [1, 1, 0, -1, -1];
/* 
expected = [
  0.400000
  0.400000
  0.200000
  ]
*/

const calculateCaseTimes = (arr) => {
  return arr.reduce(
    (acc, v) => {
      if (v < 0) acc.negativesNumbers++;
      if (v === 0) acc.zeroNumbers++;
      if (v > 0) acc.positivesNumbers++;
      return acc;
    },
    {
      positivesNumbers: 0,
      negativesNumbers: 0,
      zeroNumbers: 0,
    }
  );
};

const calculateRatios = (lenght, ratios) => {
  return Object.entries(ratios).map(([k, v]) => {
    return (v / lenght).toFixed(6);
  });
};

const ratios = calculateCaseTimes(arr);

const result = calculateRatios(arr.length, ratios);

result.forEach((e) => console.log(e));
