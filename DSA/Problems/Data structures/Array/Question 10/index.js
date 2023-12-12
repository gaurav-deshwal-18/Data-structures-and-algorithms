//* Minimum no. of Jumps to reach end of an array
//* Time complexity O(N)
function minJumpsToEnd(nums) {
  // Function definition that takes an array 'nums' as input
  let jump = 0; // Initialize a variable 'jump' to track the number of jumps
  let position = 0; // Initialize a variable 'position' to track the current position
  let destination = 0; // Initialize a variable 'destination' to store the farthest
  // reachable position

  // Loop through the array 'nums' except for the last element
  for (let i = 0; i < nums.length - 1; i++) {
    // Determine the farthest position reachable from the current position
    // and the value in the array
    destination = Math.max(destination, nums[i] + i);

    // If the current position 'position' reaches the index 'i'
    if (position === i) {
      jump++; // Increment the number of jumps required
      position = destination; // Update the current position to the farthest reachable position
    }
  }

  return jump; // Return the total number of jumps needed to reach the end
}

// Example usage:
const array = [2, 3, 1, 1, 4];
console.log(minJumpsToEnd(array)); // Output: 2
