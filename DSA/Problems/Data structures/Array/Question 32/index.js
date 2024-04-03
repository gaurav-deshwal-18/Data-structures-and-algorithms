//*	Sort Colors

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  for (let i = 0; i <= right; i++) {
    let num = nums[i];
    if (num === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    } else if (num == 2) {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
      i--;
    }
  }
};
