function solution(nCols, nRows, col, row) {
  var rows = nRows - row;
  var columns = nCols - col + 1;
  return rows * columns;
}
