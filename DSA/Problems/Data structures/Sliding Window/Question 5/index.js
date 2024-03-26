//* Minimum Window substring

// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring of s such that every character in t (including duplicates) is included in the window.

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
//* Time Complexity O(n+m)
var minWindow = function (s, t) {
  if (s === "") {
    return "";
  }

  let map = {};
  for (let item of t) {
    map[item] = (map[item] || 0) + 1;
  }

  let need = Object.keys(map).length;

  let window = {};
  let have = 0;
  let result = "";
  let resultLength = Infinity;
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    let char = s[j];
    window[char] = (window[char] || 0) + 1;

    if (window[char] === map[char]) {
      have++;
    }

    while (need === have) {
      if (j - i + 1 < resultLength) {
        resultLength = j - i + 1;
        result = s.slice(i, j + 1);
      }
      let startChar = s[i];
      window[startChar] -= 1;

      if (map[startChar] && window[startChar] < map[startChar]) {
        have--;
      }
      i += 1;
    }
  }
  return result;
};

const s = "cabwefgewcwaefgcf",
  t = "cae";

console.log(minWindow(s, t));
