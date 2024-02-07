//* Longest Common Prefix

//* Write a function to find the longest common prefix string amongst an array of strings.
//* Time complexity of O(n*m)
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  let firstWord = strs[0];
  let res = "";

  for (let i = 0; i < firstWord.length; i++) {
    for (let str of strs) {
      if (i >= str.length || str[i] !== firstWord[i]) {
        return res;
      }
    }

    res += firstWord[i];
  }
  return res;
}

let input = ["flower", "flow", "flight"];

const result = longestCommonPrefix(input);
console.log(result);
