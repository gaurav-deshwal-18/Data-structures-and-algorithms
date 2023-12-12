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
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  display() {
    return this.items;
  }
}

const mergeIntervals = (intervals) => {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);

  const result = new Stack();
  result.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const [startOne, endOne] = result.peek();
    const [startTwo, endTwo] = intervals[i];

    if (endOne >= startTwo) {
      const finalEnd = Math.max(endOne, endTwo);
      result.pop();
      result.push([startOne, finalEnd]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result.display();
};

// Test cases
const testIntervals1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const testIntervals2 = [
  [1, 4],
  [4, 5],
];
const testIntervals3 = [
  [1, 4],
  [2, 3],
  [5, 7],
];

console.log(mergeIntervals(testIntervals1)); // Expected output: [[1, 6], [8, 10], [15, 18]]
console.log(mergeIntervals(testIntervals2)); // Expected output: [[1, 5]]
console.log(mergeIntervals(testIntervals3)); // Expected output: [[1, 4], [5, 7]]
