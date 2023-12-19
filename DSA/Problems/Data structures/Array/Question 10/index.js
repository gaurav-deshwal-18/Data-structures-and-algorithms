//* Minimum no. of Jumps to reach end of an array
//* Time complexity O(N)
function minJumpsToEnd(nums) {
  if (nums.length === 1) {
    return 0;
  }

  let position = 0;
  let coverage = 0;
  let jumps = 0;
  let destination = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    coverage = Math.max(coverage, nums[i] + i);

    if (i === position) {
      position = coverage;
      jumps++;

      if (coverage >= destination) {
        return jumps;
      }
    }
  }
}

// Example usage:
const array = [2, 3, 1, 1, 4];
console.log(minJumpsToEnd(array)); // Output: 2
