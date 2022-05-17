function solution(n) {
  let nArr = n.toString().split('');
  let arr = nArr.map((x) => Number(x));
  let result = arr.every((x) => (x % 2 === 0));
  return result;
}
