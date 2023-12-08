//* Minimum no. of Jumps to reach end of an array
//* Time complexity O(N)
const minJumpsToEnd = (nums) => {
  if (nums.length <= 1) {
    return 0; // If the array has 0 or 1 element, no jump is needed
  }

  let jumps = 1; // Number of jumps to reach the current position
  let maxReach = nums[0]; // Maximum reachable position from the current index
  let steps = nums[0]; // Steps remaining at the current index

  for (let i = 1; i < nums.length; i++) {
    if (i === nums.length - 1) {
      return jumps; // Reached the end of the array
    }

    maxReach = Math.max(maxReach, i + nums[i]); // Update the maximum reachable position

    steps--; // Use a step

    if (steps === 0) {
      jumps++; // Jump to the position with the maximum reachable index
      steps = maxReach - i; // Set steps as the difference between the maximum reachable index and the current index
    }
  }

  return jumps;
};

// Example usage:
const array = [2, 3, 1, 1, 4];
console.log(minJumpsToEnd(array)); // Output: 2
