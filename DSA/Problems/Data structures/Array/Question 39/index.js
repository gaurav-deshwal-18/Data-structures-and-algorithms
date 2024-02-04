/**
 * Top K Frequent Elements
 * Time Complexity: O(n + k*log(n)), where n is the number of elements in the input array.
 */
var topKFrequent = function (nums, k) {
  let map = {};

  // Count the frequency of each element
  for (let item of nums) {
    map[item] = (map[item] || 0) + 1;
  }

  // Create an array of buckets, each bucket contains elements with the same frequency
  let arr = new Array(nums.length + 1).fill(0).map(() => []);

  for (let key in map) {
    let index = map[key];
    arr[index].push(key);
  }

  let res = [];

  // Iterate through the buckets in reverse order and add elements to the result array
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length) {
      for (let item of arr[i]) {
        res.push(item);
        if (res.length === k) {
          return res;
        }
      }
    }
  }

  return res;
};

// Test cases
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
console.log(topKFrequent([1, 2], 2)); // Output: [1, 2]
console.log(topKFrequent([1], 1)); // Output: [1]
