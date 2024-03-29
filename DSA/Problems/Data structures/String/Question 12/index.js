//* find the index of first occurence in string

//* Given two strings needle and haystack, return the index of the first
//* occurrence of needle in haystack, or -1 if needle is not part of haystack.

//* Time complexity -> O(n*m)

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

const result = strStr("sadbutsad", "sad");
console.log(result);
