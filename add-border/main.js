function solution(picture) {
  let top = '';
  let bottom = '';
  let borderLength = picture[0].length + 2;
  for (let i = 0; i < borderLength; i++) {
    top = top.concat('*');
    bottom = bottom.concat('*');
  }
  for (let i = 0; i < picture.length; i++) {
    picture[i] = '*'.concat(picture[i], '*');
  }
  picture.unshift(top);
  picture.push(bottom);
  return picture;
}
