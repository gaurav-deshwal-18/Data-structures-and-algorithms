//* H-Index

/**
 * Calculate the H-Index of a researcher based on their citation array.
 */

var calculateHIndex = function (citations) {
  let n = citations.length;

  let arr = new Array(n + 1).fill(false);

  for (let i = n; i > 0; i--) {
    let count = 0;
    for (let num of citations) {
      if (num >= i) {
        count++;
      }
    }

    if (count >= i) {
      arr[i] = true;
    }
  }

  for (i = n; i > 0; i--) {
    if (arr[i]) {
      return i;
    }
  }

  return 0;
};
// Test case
const citationsArray = [3, 0, 6, 1, 5];
const hIndexResult = calculateHIndex(citationsArray);
console.log(`H-Index for citations ${citationsArray}: ${hIndexResult}`);
