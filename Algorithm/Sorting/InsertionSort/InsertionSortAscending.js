//* Insertion Sort Ascending - Worst Time complexity - O(n^2)
// Insertion Sort is a simple and straightforward sorting algorithm
// that works well for small datasets but becomes less efficient for
// larger ones. Its time complexity is as follows:

//     Best Case: O(n)
//     Average Case: O(n^2)
//     Worst Case: O(n^2)

// Insertion Sort performs quite well when the input data is nearly sorted,
// making the best-case time complexity linear (O(n)). In this case,
// it only needs to make a few comparisons and shifts to sort the data.

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    array[j + 1] = numberToInsert;
  }
};

const arr = [-6, 20, 8, -2, 4];
let result = insertionSort(arr);

console.log(arr);
