//*  Maximum Points You Can Obtain from Cards

// Example 1:

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1.
// However, choosing the rightmost card first will maximize your total score.
// The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

var maxScore = function (cardPoints, k) {
  let n = cardPoints.length;

  let totalPoints = cardPoints.reduce((acc, num) => acc + num, 0);

  let len = n - k;
  if (len === 0) {
    return totalPoints;
  }

  let min = Infinity;

  let left = 0;
  let right = 0;

  let currentSum = 0;

  while (right < n) {
    currentSum += cardPoints[right];

    if (right - left + 1 === len) {
      min = Math.min(min, currentSum);
      currentSum -= cardPoints[left];
      left++;
    }

    right++;
  }

  return totalPoints - min;
};

const result = maxScore([1, 2, 3, 4, 5, 6, 1], 3);
console.log(result);
