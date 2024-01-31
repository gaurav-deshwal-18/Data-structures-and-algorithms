//* Merge Intervals
class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  display() {
    return this.items;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const merge = (nums) => {
  if (nums.length === 1) {
    return nums;
  }

  nums.sort((a, b) => a[0] - b[0]);

  const stack = new Stack();

  stack.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    let [startOne, endOne] = stack.peek();
    let [startTwo, endTwo] = nums[i];

    if (endOne >= startTwo) {
      let maxEnd = Math.max(endOne, endTwo);
      stack.pop();
      stack.push([startOne, maxEnd]);
    } else {
      stack.push(nums[i]);
    }
  }

  return stack.items;
};

// Test Case
const testInput = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

const result = merge(testInput);
console.log(result);
