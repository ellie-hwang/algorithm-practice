function solution(inputString) {
  let finalString = '';
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.charCodeAt(i) === 122) {
      finalString += 'a';
    } else {
      finalString += String.fromCharCode(inputString.charCodeAt(i) + 1);
    }
  }
  return finalString;
}
