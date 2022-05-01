function squareRoot(value) {
  if (value === 0 || value === 1) {
    retrun value;
  }
  let i = 1;
  let result = 1;

  while (result <= value) {
    i++;
    result = i * i;
  }
  return i-1;
}
