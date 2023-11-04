//* Bubble Sort Ascending - Worst Time complexity - Quadratic - O(n^2)
// Bubble Sort is a simple and inefficient sorting algorithm
// with the following time complexity:

//     Best Case: O(n)
//     Average Case: O(n^2)
//     Worst Case: O(n^2)

// The best-case time complexity occurs when the input data is already
// sorted or nearly sorted, and Bubble Sort can detect that no
// swaps are needed,resulting in a linear time complexity of O(n).

const bubbleSort = (array) => {
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

function bubbleSort2(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const arr = [-6, 20, 8, -2];
let result = bubbleSort2(arr);

console.log(arr);
