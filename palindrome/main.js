function solution(inputString) {
  var tempString = '';
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== ' ') {
      tempString += inputString[i];
    }
  }
  var tempStringReversed = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    tempStringReversed += tempString[i];
  }
  if (tempString === tempStringReversed) {
    return true;
  } else {
    return false;
  }
}
