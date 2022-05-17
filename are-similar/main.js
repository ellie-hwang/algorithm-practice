function solution(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let aSort = [...a].sort();
  let bSort = [...b].sort();
  if (aSort.join('') !== bSort.join('')) {
    return false;
  }
  let diffCount = 0;
  for (let i = 0; i < a.length; i++) {
    if ((a[i] !== b[i])) {
      diffCount += 1;
    }
    if (diffCount > 2) {
      return false;
    }
  }
  if (diffCount <= 2) {
    return true;
  }
}
