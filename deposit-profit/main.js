function solution(deposit, rate, threshold) {
  let balance = deposit;
  for (let i = 1; balance < threshold; i++) {
    balance = balance * (1 + (rate / 100));
    if (balance >= threshold) return i;
  }
};
