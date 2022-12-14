// Candle heights are [3,2,1,3] The tallest candles are 3 units, and there are 2 of them. Return 2

function birthdayCakeCandles(candles) {
  const max = Math.max(...candles);

  const maxNumberTimes = candles.filter((a) => a === max);

  return maxNumberTimes.length;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
