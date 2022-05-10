function solution(a) {
  let weights = [];
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      evenSum += a[i];
    } else {
      oddSum += a[i];
    }
  }
  weights.push(evenSum);
  weights.push(oddSum);
  return weights;
}
