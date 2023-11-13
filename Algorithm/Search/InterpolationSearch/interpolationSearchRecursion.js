/**
 * Interpolation search is an algorithm used to search for a specific element
 * in a sorted array or list of values. It works well when the data is sorted
 * and uniformly distributed.
 *
 * Time complexity is O(1) in the best case (sorted and uniformly distributed),
 * and the worst-case time complexity is O(n).
 *
 * Formula:
 * pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
 */

function interpolationSearchRecursion(arr, target, low, high) {
  if (low <= high && target >= arr[low] && target <= arr[high]) {
    const pos = Math.floor(
      low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
    );

    if (arr[pos] === target) {
      return pos; // Target element found
    }

    if (arr[pos] < target) {
      return interpolationSearchRecursion(arr, target, pos + 1, high); // Search in the right subarray
    } else {
      return interpolationSearchRecursion(arr, target, low, pos - 1); // Search in the left subarray
    }
  }

  return -1; // Target element not found
}

const sortedArray = [1, 3, 5, 14, 21, 25, 26, 27];
const targetElement = 21;

const index = interpolationSearchRecursion(
  sortedArray,
  targetElement,
  0,
  sortedArray.length - 1
);

if (index !== -1) {
  console.log(`Element ${targetElement} found at index ${index}`);
} else {
  console.log(`Element ${targetElement} not found in the array`);
}
