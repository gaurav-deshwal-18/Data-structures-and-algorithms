//* Minimum Number of Flips to Make the Binary String Alternating

// Example 1:

// Input: s = "111000"
// Output: 2
// Explanation: Use the first operation two times to make s = "100011".
// Then, use the second operation on the third and sixth elements to make s = "101010".

// Example 2:

// Input: s = "010"
// Output: 0
// Explanation: The string is already alternating.

var minFlips = function (s) {
  let n = s.length;

  s = s + s;

  let alt1 = "";
  let alt2 = "";

  for (let i = 0; i < s.length; i++) {
    alt1 += i % 2 === 0 ? 0 : 1;
    alt2 += i % 2 === 0 ? 1 : 0;
  }
  let diff1 = 0;
  let diff2 = 0;

  let res = s.length;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    let char = s[right];
    if (char !== alt1[right]) {
      diff1 += 1;
    }
    if (char !== alt2[right]) {
      diff2 += 1;
    }

    if (right - left + 1 > n) {
      if (s[left] !== alt1[left]) {
        diff1 -= 1;
      }
      if (s[left] !== alt2[left]) {
        diff2 -= 1;
      }
      left++;
    }

    if (right - left + 1 === n) {
      res = Math.min(res, diff1, diff2);
    }
    right++;
  }

  return res;
};
