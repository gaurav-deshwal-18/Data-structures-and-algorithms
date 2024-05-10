//* 	Non Decreasing Array
var checkPossibility = function (nums) {
  let count = 0;
  const length = nums.length;

  for (let i = 1; i < length; i++) {
    if (nums[i] < nums[i - 1]) {
      count++;
      if (count > 1) return false;
      if (i >= 2 && nums[i - 2] > nums[i]) {
        nums[i] = nums[i - 1];
      }
    }
  }

  return true;
};
