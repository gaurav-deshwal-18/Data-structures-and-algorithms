//* Minimum Window substring

// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring of s such that every character in t (including duplicates) is included in the window.

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
//* Time Complexity O(n ^ 2)
var minWindow = function (s, t) {
  if (s === "") {
    return "";
  }

  let map = {};
  for (let item of t) {
    map[item] = (map[item] || 0) + 1;
  }

  let need = Object.keys(map).length;

  let window;
  let have;
  let result = "";
  let resultLength = Infinity;
  for (let i = 0; i < s.length; i++) {
    have = 0;
    window = {};
    for (let j = i; j < s.length; j++) {
      let char = s[j];
      window[char] = (window[char] || 0) + 1;

      if (window[char] === map[char]) {
        have++;
      }

      if (need === have) {
        if (j - i + 1 < resultLength) {
          resultLength = j - i + 1;
          result = s.slice(i, j + 1);
        }

        break;
      }
    }
  }
  return result;
};
const s = "cabwefgewcwaefgcf",
  t = "cae";

console.log(minWindow(s, t));
