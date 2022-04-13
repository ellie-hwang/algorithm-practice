var lengthOfLastWord = function (s) {
  const sArr = s.split(' ');
  return sArr[sArr.length - 1].length;
};
