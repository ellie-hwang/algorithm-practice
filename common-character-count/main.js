function solution(s1, s2) {
  let charCountS1 = {};
  let charCountS2 = {};
  let commonChar = {};
  let finalCount = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in charCountS1) {
      charCountS1[s1[i]]++;
    } else {
      charCountS1[s1[i]] = 1;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (s2[i] in charCountS2) {
      charCountS2[s2[i]]++;
    } else {
      charCountS2[s2[i]] = 1;
    }
  }
  for (key in charCountS1) {
    if (key in charCountS2) {
      if (charCountS1[key] <= charCountS2[key]) {
        finalCount += charCountS1[key];
      } else if (charCountS2[key] < charCountS1[key]) {
        finalCount += charCountS2[key];
      }
    }
  }
  return finalCount;
}
