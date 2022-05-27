var twoSum = function (nums, target) {
  const solution = [];
  for (let i = 0; i < nums.length; i++) {
    const value = element => element === (target - nums[i]);
    if (nums.slice(i + 1).findIndex(value) !== -1) {
      solution.push(i);
      solution.push(nums.slice(i + 1).findIndex(value) + i + 1);
      break;
    } else continue;
  }
  return solution;
};
