//* Max Consecutive Ones III

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]

var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let max = 0;
  let n = nums.length;
  let zeroCounter = 0;

  while (right < n) {
    if (nums[right] === 0) {
      zeroCounter++;
    }
    if (zeroCounter > k) {
      if (nums[left] === 0) {
        zeroCounter -= 1;
      }
      left++;
    }

    max = Math.max(right - left + 1, max);
    right++;
  }

  return max;
};
let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
const result = longestOnes(nums, k);
console.log(result);
