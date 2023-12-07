// Given an array which consists of only 0, 1 and 2.
// Sort the array without using any sorting algo

//* Time complexity -- O(n)

const sortArray = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  let i = 0;

  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      low++;
      i++;
    } else if (arr[i] === 2) {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
    } else {
      i++;
    }
  }

  return arr;
};

// Example usage:
const arr = [0, 2, 1, 0, 1, 2];
const sortedArray = sortArray(arr);
console.log(sortedArray);
