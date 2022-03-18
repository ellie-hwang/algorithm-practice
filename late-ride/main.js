function solution(n) {
  var hours = Math.floor(n / 60);
  var minutes = n % 60;
  var sum = Math.floor(hours / 10) + (hours % 10) + Math.floor(minutes / 10) + (minutes % 10);
  return sum;
}
