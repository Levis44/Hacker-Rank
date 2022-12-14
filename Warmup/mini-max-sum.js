// get minimum and maximun sum of array

function miniMaxSum(arr) {
  const sortLowToHigh = arr.slice().sort((a, b) => a - b);

  const minimumSum = sortLowToHigh
    .slice(0, 4)
    .reduce((acc, n) => (acc += n), 0);

  const sortHighToLow = arr.slice().sort((a, b) => b - a);
  const maximumSum = sortHighToLow
    .slice(0, 4)
    .reduce((acc, n) => (acc += n), 0);

  console.log(minimumSum, maximumSum);
}

miniMaxSum([1, 3, 5, 7, 9]);
