//* Minimum Operations to Reduce X to Zero

// Example 1:

// Input: nums = [1,1,4,2,3], x = 5
// Output: 2
// Explanation: The optimal solution is to remove the last two elements to reduce x to zero.

// Example 2:

// Input: nums = [5,6,7,8,9], x = 4
// Output: -1

var minOperations = function (nums, x) {
  let n = nums.length;

  let target = nums.reduce((acc, num) => acc + num, 0) - x;
  if (target === 0) return n;

  let left = 0;
  let right = 0;
  let maxLen = 0;
  let currSum = 0;

  while (right < n) {
    currSum += nums[right];

    while (left <= right && currSum > target) {
      currSum -= nums[left];
      left++;
    }

    if (target === currSum) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    right++;
  }

  return maxLen === 0 ? -1 : n - maxLen;
};

const result = minOperations([1, 1, 4, 2, 3], 5);
console.log(result);
