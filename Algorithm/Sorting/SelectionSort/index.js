//* Selection Sort Ascending - Worst Time complexity -
//* Worst Time complexity  - O(n^2) - if array is already sorted.
//* Average Time complexity O(n^2) - if array is not sorted.
//* Best Time complexity O(n^2) - if array is not sorted.

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
const sortedArr = selectionSort(arr);
console.log(sortedArr);
