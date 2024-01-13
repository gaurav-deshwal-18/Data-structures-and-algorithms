//* Jump Game

//* Time complexity ---> O(n)

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

var canJump = function (nums) {
  let reachable = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > reachable) {
      return false;
    }

    reachable = Math.max(reachable, i + nums[i]);
  }

  return true;
};

let input = [2, 3, 1, 1, 4];
const result = canJump(input);

console.log(result);
