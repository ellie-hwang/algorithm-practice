function solution(statues) {
  var statuesSorted = statues.sort();
  var solution = 0;
  for (let i = 0; i<statuesSorted.length; i++) {
    if (!statuesSorted.includes(statuesSorted[i] + 1)) {
      solution++;
    }
  }
}
