//* Find First And Last Position of Element In Sorted Array

function binarySearch(nums, target, isSearchingLeft) {
  let left = 0;
  let right = nums.length - 1;
  let index = -1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      index = middle;
      if (isSearchingLeft) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return index;
}
var searchRange = function (nums, target) {
  let left = binarySearch(nums, target, true);
  let right = binarySearch(nums, target, false);

  return [left, right];
};

let result = searchRange([1, 2, 6, 6, 6, 6, 8, 9], 6);
console.log(result);
