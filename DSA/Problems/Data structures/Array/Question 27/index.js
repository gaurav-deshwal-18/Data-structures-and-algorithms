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
  if (nums[left] < nums[right]) {
    return nums[left];
  }

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      // If the middle element is greater than the right element,
      // the minimum must be in the right half.
      left = mid + 1;
    } else {
      // If the middle element is less than or equal to the right element,
      // the minimum must be in the left half or could be the middle element.
      right = mid;
    }
  }
  return nums[left];
}

// Example usage:
const nums = [17, 11, 13, 15];
console.log(findMin(nums)); // Output: 0
