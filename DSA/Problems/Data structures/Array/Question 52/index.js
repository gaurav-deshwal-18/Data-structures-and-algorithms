//* Optimal Partition of String

// Example 1:

// Input: s = "abacaba"
// Output: 4
// Explanation:
// Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
// It can be shown that 4 is the minimum number of substrings needed.

var partitionString = function (s) {
  let seen = new Set();
  let t = 1;
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (seen.has(c)) {
      t++;
      seen = new Set();
      seen.add(c);
    } else {
      seen.add(c);
    }
  }
  return t;
};
