//*Count the Number of Good Subarrays

// Example 1:

// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

var numberOfSubarrays = function (nums, k) {
  let left = 0;
  let right = 0;
  let n = nums.length;
  let res = 0;
  let count = 0;
  let localOddCount = 0;
  while (right < n) {
    let num = nums[right];

    if (num % 2 !== 0) {
      count = 0;
      localOddCount++;
    }

    while (localOddCount === k) {
      count++;
      if (nums[left] % 2 !== 0) {
        localOddCount--;
      }
      left++;
    }

    res += count;
    right++;
  }

  return res;
};
