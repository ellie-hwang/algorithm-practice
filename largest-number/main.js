function solution(n) {
  var output = null;
  for (let i = 0; i < n; i++) {
    output += 9 * Math.pow(10, i);
  }
  return output;
}
