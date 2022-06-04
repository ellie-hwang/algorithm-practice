function solution(cell1, cell2) {
  const alpha1 = ['A', 'C', 'E', 'G'];
  const alpha2 = ['B', 'D', 'F', 'H'];
  const cellColors = [];
  const cells = [cell1, cell2];
  cells.forEach((element) => {
    if (alpha1.includes(element[0])) {
      if (element[1] % 2 === 0) {
        cellColors.push('white');
      } else {
        cellColors.push('black');
      }
    } else {
      if (element[1] % 2 === 0) {
        cellColors.push('black');
      } else {
        cellColors.push('white');
      }
    }
  });
  return cellColors[0] === cellColors[1];
}
