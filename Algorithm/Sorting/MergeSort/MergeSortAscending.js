//* Quick Sort Ascending - Worst Time complexity -
// Merge Sort is a stable and efficient comparison-based sorting
// algorithm that has a consistent time complexity:

//     Best Case: O(n log n)
//     Average Case: O(n log n)
//     Worst Case: O(n log n)

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort both halves
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  // Merge the sorted halves
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  const finalLeft = left.slice(leftIndex);
  const finalRight = right.slice(rightIndex);

  // Add the remaining elements from both arrays
  return [...result, ...finalLeft, ...finalRight];
}

// Example usage:
const unsortedArray = [5, 2, 9, 3, 6, 8, 1, 7];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
