function solution(sequence) {
    var sequenceCopy = [...sequence];
    var output = null;
    debugger;
    for (let i = 0; i < sequence.length; i++ ) {
        var boolArr = [];
        var remove = sequenceCopy[i];
        sequenceCopy.splice(i, 1);
        for (let j = 0; j < sequenceCopy.length-1; j++) {
           if (sequenceCopy[j] >= sequenceCopy[j+1]) {
               output = false;
               boolArr.push(output);
           } else {
               output = true;
               boolArr.push(output);
           }
        }
        sequenceCopy.splice(i, 0, remove);
        if (boolArr.includes(false)) {
            output = false;
        } else {
            return true;
        }
    }
    if (output === false) {
        return false;
    }
}

function solution2(seq) {
  var bad = 0
  for (var i = 1; i < seq.length; i++) if (seq[i] <= seq[i - 1]) {
    bad++
    if (bad > 1) return false
    if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false
  }
  return true
}
