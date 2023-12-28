//* Longest common Subsequence
//* Time complexity O(n*m)
function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a matrix to store the lengths of LCS
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Building the matrix using dynamic programming
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Length of LCS is stored in dp[m][n]
  return dp[m][n];
}

// Example usage:
const sequence1 = "ABCDGH";
const sequence2 = "AEDFHR";

const lengthOfLCS = longestCommonSubsequence(sequence1, sequence2);
console.log("Length of Longest Common Subsequence:", lengthOfLCS);
