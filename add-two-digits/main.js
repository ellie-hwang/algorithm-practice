function solution(n) {
  var nStr = JSON.stringify(n);
  var firstDigit = parseInt(nStr[0]);
  var secondDigit = parseInt(nStr[1]);
  return (firstDigit + secondDigit);
}
