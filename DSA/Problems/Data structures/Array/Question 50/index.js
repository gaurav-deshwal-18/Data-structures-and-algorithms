// Title: Remove Duplicates from Sorted Array II
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5,
// with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k

function removeDuplicates(nums) {
  let r = 0;
  let i = 0;
  let n = nums.length;
  while (r < n) {
    let count = 1;

    while (r + 1 < n && nums[r] === nums[r + 1]) {
      r++;
      count++;
    }

    for (let j = 0; j < Math.min(2, count); j++) {
      nums[i] = nums[r];
      i++;
    }

    r++;
  }

  return i;
}

// Test case
const inputArray = [1, 1, 1, 2, 2, 3];
const resultLength = removeDuplicates(inputArray);

console.log(resultLength);
