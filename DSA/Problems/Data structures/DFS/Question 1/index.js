function jump(nums) {
  // Base case: if the array has only one element, no jump is needed
  if (nums.length === 1) {
    return 0;
  }

  // Call the recursive DFS function
  return dfs(nums, 0);
}

function dfs(nums, index) {
  // Base case: if the current index reaches or exceeds the last index, return 0
  if (index >= nums.length - 1) {
    return 0;
  }

  // Initialize the minimum jumps to Infinity
  let minJumps = Infinity;

  // Explore all possible jumps from the current index
  for (let j = 1; j <= nums[index]; j++) {
    // Recursive call to explore the next index
    const jumps = dfs(nums, index + j);
    // Update the minimum jumps if necessary
    minJumps = Math.min(minJumps, jumps + 1);
  }

  return minJumps;
}

// Test the function with the provided input
const nums = [2, 3, 1, 1, 4];
console.log(jump(nums)); // Output: 2
