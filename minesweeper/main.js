function solution(matrix) {
  let modArr = []
  let resultArr = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        row.push(1);
      } else if (matrix[i][j] === false) {
        row.push(0);
      }
    }
    modArr.push(row);
  }
  for (let i = 0; i < modArr.length; i++) {
    let row = [];
    debugger;
    for (let j = 0; j < modArr[i].length; j++) {
      let count = 0;
      if (j - 1 >= 0) {
        count += modArr[i][j - 1]
        if (i - 1 >= 0) {
          count += modArr[i - 1][j - 1]
        }
        if (i + 1 < modArr.length) {
          count += modArr[i + 1][j - 1];
        }

      }
      if (j + 1 < modArr[i].length) {
        count += modArr[i][j + 1]
        if (i - 1 >= 0) {
          count += modArr[i - 1][j + 1]
        }
        if (i + 1 < modArr.length) {
          count += modArr[i + 1][j + 1];
        }
      }
      if (i - 1 >= 0) {
        count += modArr[i - 1][j];
      }
      if (i + 1 < modArr.length) {
        count += modArr[i + 1][j];
      }
      row.push(count);
    }
    resultArr.push(row);
  }
  return resultArr;
}
