//*  Trapping Rain Water

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

var trap = function (heights) {
  let leftArray = [];

  let rightArray = [];

  let n = heights.length;

  let results = [];

  for (let i = 0; i < n; i++) {
    leftArray[i] = Math.max(heights[i], leftArray[i - 1] || 0);

    rightArray[n - i - 1] = Math.max(
      heights[n - i - 1],
      rightArray[n - i] || 0,
    );
  }

  for (let i = 0; i < n; i++) {
    results[i] = Math.min(leftArray[i], rightArray[i]) - heights[i];
  }

  const water = results.reduce((acc, num) => acc + num, 0);

  return water;
};
