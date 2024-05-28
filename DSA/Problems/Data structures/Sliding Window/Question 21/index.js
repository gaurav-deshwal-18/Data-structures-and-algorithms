//*Count the Number of Good Subarrays

// Example 1:

// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

var numberOfSubarrays = function (nums, k) {
  const n = nums.length;
  let left = 0;
  let count = 0;
  let pairCount = 0;
  const freq = {};

  for (let right = 0; right < n; right++) {
    // Update the frequency map and the pair count
    let num = nums[right];
    if (freq[num]) {
      pairCount += freq[num];
    }
    freq[num] = (freq[num] || 0) + 1;

    // While the number of pairs is at least k, adjust the window from the left
    while (pairCount >= k) {
      // Count all subarrays starting from left to right
      count += n - right; // All subarrays from left to the end of the array are valid

      freq[nums[left]] -= 1;
      if (freq[nums[left]]) {
        pairCount -= freq[nums[left]];
      }
      left += 1;
    }
  }

  return count;
};
