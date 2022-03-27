function solution(s1, s2) {
  let count = 0;
  let array = []
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j] && !array.includes(s1[i])) {
        array.push(s1[i]);
        count++;
      }
    }
  }
  return count;
}
