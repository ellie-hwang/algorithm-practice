function solution(inputArray) {
  var productArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    productArray.push(inputArray[i] * inputArray[i + 1]);
  }
  var max = productArray[0];
  for (let i = 0; i < productArray.length; i++) {
    if (max < productArray[i]) {
      max = productArray[i];
    }
  }
  return max;
}
