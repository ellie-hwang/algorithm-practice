function solution(inputString) {
  let arr = inputString.split('.');
  if (arr.length !== 4) return false;
  let arr2 = [...arr];
  arr.map(x => Number(x));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && (arr[i] >= 0) && (arr[i] < 256) && (Number(arr[i]).toString() === arr2[i])) {
      continue;
    } else return false;
  }
  return true;

}
