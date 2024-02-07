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

function maxSlidingWindow(nums, k) {
  // Get the length of the input array 'nums'
  let n = nums.length;

  // Initialize an empty array 'queue' to store indices of elements in the sliding window
  let queue = [];

  // Initialize pointers 'left' and 'right' for the sliding window, and an empty array 'res' to store results
  let left = 0;
  let right = 0;
  let res = [];

  // Iterate through the array 'nums' using the sliding window
  while (right < n) {
    // Remove elements from the back of the 'queue' if they are smaller than the current element
    while (queue.length && nums[queue[queue.length - 1]] < nums[right]) {
      queue.pop();
    }

    // Add the current index 'right' to the 'queue'
    queue.push(right);

    // If the size of the sliding window is equal to 'k', add the maximum element to 'res' and move the window
    if (right - left + 1 === k) {
      res.push(nums[queue[0]]);
      left++;
    }

    // If the left pointer is greater than the index at the front of the 'queue', remove that index from the 'queue'
    if (left > queue[0]) {
      queue.shift();
    }

    // Move the 'right' pointer to expand the sliding window
    right++;
  }

  // Return the array containing the maximum values in each sliding window
  return res;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
const result = maxSlidingWindow(nums, k);
console.log(result);
