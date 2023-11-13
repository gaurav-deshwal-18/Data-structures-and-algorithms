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

function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    const pos = Math.floor(
      low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
    );

    if (arr[pos] === target) {
      return pos; // Target element found
    }

    if (arr[pos] < target) {
      low = pos + 1; // Search in the right subarray
    } else {
      high = pos - 1; // Search in the left subarray
    }
  }

  return -1;
}

const sortedArray = [1, 3, 5, 14, 21, 25, 26, 27];
const targetElement = 25;

const index = interpolationSearch(sortedArray, targetElement);

if (index !== -1) {
  console.log(`Element ${targetElement} found at index ${index}`);
} else {
  console.log(`Element ${targetElement} not found in the array`);
}
