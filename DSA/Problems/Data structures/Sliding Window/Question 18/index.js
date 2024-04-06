//* Maximum Sum of Distinct Subarrays With Length K
// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15
// Explanation: The subarrays of nums with length 3 are:
// - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

var maximumSubarraySum = function (nums, k) {
  let left = 0;
  let right = 0;
  let n = nums.length;

  let total = 0;
  let max = 0;

  let set = new Set();

  while (right < n) {
    while (set.has(nums[right]) && left <= right) {
      total -= nums[left];
      set.delete(nums[left]);
      left++;
    }

    if (!set.has(nums[right])) {
      total += nums[right];
    }
    set.add(nums[right]);

    if (right - left + 1 === k) {
      max = Math.max(max, total);
      total -= nums[left];
      set.delete(nums[left]);
      left++;
    }
    right++;
  }
  return max;
};

const result = maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3);
console.log(result);
