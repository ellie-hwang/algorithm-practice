function solution(image) {
  let blured = []
  for (let i = 1; i < image.length - 1; i++) {
    let row = [];
    for (let j = 1; j < image[i].length - 1; j++) {
      let average = (image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1] +
        image[i][j - 1] + image[i][j] + image[i][j + 1] + image[i + 1][j - 1] + image[i + 1][j] +
        image[i + 1][j + 1]) / 9;
      row.push(Math.floor(average));
    }
    blured.push(row);
  }
  return blured;
}
