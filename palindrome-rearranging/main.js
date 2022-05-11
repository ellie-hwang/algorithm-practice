function solution(inputString) {
  let charCount = {};
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] in charCount) {
      charCount[inputString[i]] += 1;
    } else {
      charCount[inputString[i]] = 1;
    }
  }
  let charsOddCount = 0;
  debugger;
  for (x in charCount) {
    if (charCount[x] % 2 !== 0) {
      charsOddCount += 1;
    }
    if (charsOddCount > 1) {
      return false
    }
  }
  return true;
}
