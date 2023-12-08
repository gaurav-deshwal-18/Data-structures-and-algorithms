//* find Largest sum contiguous Subarray [V. IMP]
//* Time complexity - O(n)
//* Kadene's Algorithm
const maxSubarraySum = (arr) => {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
};

// Example usage:
const array = [-2, -3, 4, -1, -2, 1, 5, -3];
const maxSum = maxSubarraySum(array);
console.log("Largest sum contiguous subarray:", maxSum);
