function solution(statues) {
  var count = 0;
  var completeStatues = [];
  var min = Math.min(...statues);
  var max = Math.max(...statues);
  for (let i = min; i <= max; i++) {
    completeStatues.push(i);
  }
  for (let i = 0; i < completeStatues.length; i++) {
    if (!statues.includes(completeStatues[i])) {
      count++;
    }
  }
  return count;
}
