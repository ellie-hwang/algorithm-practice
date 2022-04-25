var isPalindrome = function (x) {
  var xString = x.toString();
  var xStringReverse = '';
  for (let i = xString.length - 1; i >= 0; i--) {
    xStringReverse += xString[i];
  }
  if (xString === xStringReverse) {
    return true;
  } else {
    return false;
  }
};
