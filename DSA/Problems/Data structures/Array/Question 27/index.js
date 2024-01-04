//* Find Minimum in rotated sorted array

//* Suppose an array of length n sorted in ascending order
//*  is rotated between 1 and n times

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  let answer = Infinity;
  while (left <= right) {
    let middle = Math.floor(left + right / 2);
    if (nums[left] <= nums[right]) {
      if (nums[left] < answer) {
        answer = nums[left];
        index = left;
        break;
      }
    }
    if (nums[left] <= nums[middle]) {
      if (nums[left] < answer) {
        answer = nums[left];
        index = left;
      }
      left = middle + 1;
    } else {
      if (nums[middle] < answer) {
        answer = nums[middle];
        index = middle;
      }
      right = middle - 1;
    }
  }

  return answer;
}

// Example usage:
const nums = [17, 11, 13, 15];
console.log(findMin(nums)); // Output: 0
