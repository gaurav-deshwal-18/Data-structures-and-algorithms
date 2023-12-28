//* EDIT Distance [Very Imp]
function editDistance(s, t) {
  const n1 = s.length;
  const n2 = t.length;
  const dp = new Array(n1 + 1);

  for (let i = 0; i <= n1; i++) {
    dp[i] = new Array(n2 + 1).fill(0);
  }
  for (let i = 0; i <= n1; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n2; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[n1][n2];
}

// Example usage:
const s = "horse";
const t = "ros";
const minOps = editDistance(s, t);
console.log("Minimum operations required:", minOps);
