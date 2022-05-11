function solution(inputArray) {
  let firstValue = inputArray[0];
  let moves = 0;
  debugger;
  let leveledArray = inputArray.map(x => {
    if (x < firstValue) {
      moves += (firstValue - x);
      return x = firstValue;
    } return x = x;
  })
  for (let i = 1; i < leveledArray.length; i++) {
    if (leveledArray[i] <= leveledArray[i - 1]) {
      moves += (leveledArray[i - 1] - leveledArray[i] + 1);
      leveledArray[i] = leveledArray[i - 1] + 1;
    }
  }
  return moves;
}
