function solution(inputArray) {
  let length = 0;
  inputArray.sort(function (a, b) {
    return a - b;
  });
  debugger;
  for (let i = 1; i <= inputArray[inputArray.length - 1] + 1; i++) {
    if (inputArray.includes(i)) continue;
    if (inputArray.every(x => x % i !== 0)) {
      length = i;
      return length;
    } else continue;
  }
}
