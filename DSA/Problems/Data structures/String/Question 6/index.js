//* Minimum Window substring

// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring of s such that every character in t (including duplicates) is included in the window.

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
function minWindow(s, t) {
  const map = {};
  let minLen = Infinity;
  let start = 0;

  for (let ch of t) {
    map[ch] = (map[ch] || 0) + 1;
  }

  let i = 0,
    j = 0,
    count = Object.keys(map).length;

  while (j < s.length) {
    if (map[s[j]] !== undefined) {
      map[s[j]]--;
      if (map[s[j]] === 0) count--;
    }

    if (count === 0) {
      while (count === 0) {
        if (map[s[i]] !== undefined) {
          map[s[i]]++;
          if (map[s[i]] === 1) {
            count++;
            if (j - i + 1 < minLen) {
              minLen = j - i + 1;
              start = i;
            }
          }
        }
        i++;
      }
    }
    j++;
  }

  return minLen === Infinity ? "" : s.substring(start, start + minLen);
}

const s = "ADOBECODEBANC";
const t = "ABC";
const result = minWindow(s, t);
console.log(result);
