//* Title: Remove Element

/**
 * Removes all instances of a specified value from an array in-place.
 *
 * @param {number[]} nums - The input array.
 * @param {number} val - The value to be removed.
 * @returns {number} - The new length of the modified array.
 */
var removeElement = function (nums, val) {
  let k = 0;

  for (let item of nums) {
    if (item !== val) {
      nums[k] = item;
      k++;
    }
  }

  return k;
};

//* Test Cases

// Case 1: Basic test with repeated elements
let nums1 = [3, 2, 2, 3];
let val1 = 3;
console.log("Case 1:", removeElement(nums1, val1)); // Output: 2 (modified array: [2, 2])

// Case 2: Array with no occurrences of the value
let nums2 = [1, 2, 3, 4];
let val2 = 5;
console.log("Case 2:", removeElement(nums2, val2)); // Output: 4 (array remains unchanged)

// Case 3: Empty array
let nums3 = [];
let val3 = 1;
console.log("Case 3:", removeElement(nums3, val3));
