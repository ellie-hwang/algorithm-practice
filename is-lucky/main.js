function solution(n) {
  let string = n.toString();
  let firstHalf = string.slice(0, (string.length/2));
  let secondHalf = string.slice((string.length/2), string.length);
  let firstSum = 0;
  let secondSum = 0;
  for (let i = 0; i < firstHalf.length; i++) {
    firstSum += Number(firstHalf[i]);
  }
  for (let i = 0; i <secondHalf.length; i++) {
    secondSum += Number(secondHalf[i]);
  }
  if (firstSum === secondSum) {
    return true;
  } else {
    return false;
  }
}
