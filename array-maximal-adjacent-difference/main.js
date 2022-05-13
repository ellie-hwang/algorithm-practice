function solution(inputArray) {
  let diffArray = [];
  for (let i = 1; i < inputArray.length; i++) {
    let diff = 0;
    diff = Math.abs(inputArray[i] - inputArray[i - 1]);
    diffArray.push(diff);
  }
  return Math.max(...diffArray);
}
