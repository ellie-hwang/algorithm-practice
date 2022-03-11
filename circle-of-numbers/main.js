function solution(n, firstNumber) {
  var spots = n / 2;
  if (firstNumber >= spots) {
    return firstNumber - spots;
  }
  if (firstNumber < spots) {
    return firstNumber + spots;
  }
}
