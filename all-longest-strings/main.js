function solution(inputArray) {
  let maxLength = inputArray[0].length;
  let outputArray = [];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length > maxLength) {
      maxLength = inputArray[i].length;
    }
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === maxLength) {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}
