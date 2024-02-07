//* SLiding Window Maximum

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

var maxSlidingWindow = function (nums, k) {
  let res = [];

  let n = nums.length;

  let left = 0;

  while (left + k <= n) {
    let currentMax = -Infinity;

    for (let i = left; i < left + k; i++) {
      if (nums[i]) {
        currentMax = Math.max(currentMax, nums[i]);
      }
    }

    res.push(currentMax);

    left++;
  }

  return res;
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
const result = maxSlidingWindow(nums, k);
console.log(result);
