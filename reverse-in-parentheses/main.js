function solution(inputString) {
  while (inputString.indexOf(")") !== -1) {
    let nestRightP = inputString.indexOf(")", 0);
    let nestLeftP = inputString.lastIndexOf("(", nestRightP);
    let reverseString = inputString.slice(nestLeftP + 1, nestRightP).split('').reverse().join('');
    inputString = inputString.slice(0, nestLeftP) + reverseString + inputString.slice(nestRightP + 1);
  }
  return inputString;
}
