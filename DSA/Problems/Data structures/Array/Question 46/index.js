//* Longest Common Prefix

//* Write a function to find the longest common prefix string amongst an array of strings.
//* Time complexity of O(n*m)
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
const findPrefix = (str1, str2) => {
  let res = "";

  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      res += str1[i];
      i++;
      j++;
    } else {
      break;
    }
  }

  return res;
};
var longestCommonPrefix = function (strs) {
  let res = null;

  for (let i = 0; i < strs.length; i++) {
    if (res === null) {
      res = findPrefix(strs[i], strs[i + 1]);
    } else {
      res = findPrefix(strs[i], res);
    }
  }

  return res;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
