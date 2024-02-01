/**
 * Problem: Non-overlapping Intervals
 *
 * Given a collection of intervals, find the minimum number of intervals
 *  you need to remove to make the rest of the intervals non-overlapping.
 *
 * Time Complexity: O(n log n), where n is the number of intervals (due to sorting)
 */

var eraseOverlapIntervals = function (intervals) {
  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  let removals = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = intervals[i];

    // Check for overlapping intervals
    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      // Remove the interval with larger end time
      removals++;
      prevEnd = Math.min(prevEnd, end);
    }
  }

  return removals;
};

// Test Case
let testIntervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
console.log(eraseOverlapIntervals(testIntervals)); // Output: 1
