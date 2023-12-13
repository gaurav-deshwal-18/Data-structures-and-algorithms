//*find maximum product subarray

//* Time complexity ---> O(N)

const findMaximumProduct = (nums) => {
  if (nums.length === 0) return 0;

  let maxProduct = nums[0];
  let maxSoFar = nums[0];
  let minSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num < 0) {
      // Swap maxSoFar and minSoFar
      const temp = maxSoFar;
      maxSoFar = minSoFar;
      minSoFar = temp;
    }
    // Update maxSoFar and minSoFar considering the current number
    maxSoFar = Math.max(num, maxSoFar * num);
    minSoFar = Math.min(num, minSoFar * num);

    // Update maxProduct if a larger product is found
    maxProduct = Math.max(maxProduct, maxSoFar);
  }

  return maxProduct;
};

const input = [-3, -1, -1];
console.log(findMaximumProduct(input));
