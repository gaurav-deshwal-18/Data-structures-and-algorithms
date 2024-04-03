//* Two Sum II Input Array Is Sorted
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const total = numbers[left] + numbers[right];
    if (total === target) {
      return [left + 1, right + 1];
    } else if (total < target) {
      left++;
    } else {
      right--;
    }
  }

  // No solution found
  return null;
}

// Example usage
const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target)); // Output: [1, 2]
