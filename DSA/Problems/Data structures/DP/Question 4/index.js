//* Combination Sum
//* Time Complexity -->O(n*2^t)
function combinationSum(candidates, target) {
  const res = [];

  function dfs(i, cur, total) {
    if (total === target) {
      res.push([...cur]);
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);
    cur.pop();
    dfs(i + 1, cur, total);
  }

  dfs(0, [], 0);
  return res;
}

// Example usage:
const candidates = [2, 3, 6, 7];
const target = 7;
const result = combinationSum(candidates, target);
console.log(result);
