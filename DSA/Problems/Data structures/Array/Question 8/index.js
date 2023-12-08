//* find Largest sum contiguous Subarray [V. IMP]
//* Time complexity - O(n2)
//* BruteForce
const maxSubarraySum = (arr) => {
  let maxSum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    let currentMax = 0;
    for (let j = i; j < arr.length; j++) {
      currentMax += arr[j];
      maxSum = Math.max(maxSum, currentMax);
    }
  }

  return maxSum;
};

// Example usage:
const array = [-2, -3, 4, -1, -2, 1, 5, -3];
const maxSum = maxSubarraySum(array);
console.log("Largest sum contiguous subarray:", maxSum);
