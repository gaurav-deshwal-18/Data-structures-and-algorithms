//* Minimum Number of Swaps to Make The String Balanced
var minSwaps = function (s) {
  let open = 0;
  let max = 0;
  for (let item of s) {
    if (item === "[") {
      open--;
    } else {
      open++;
    }
    max = Math.max(open, max);
  }
  return Math.floor((max + 1) / 2);
};
