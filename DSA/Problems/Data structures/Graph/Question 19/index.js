//* 	Number of Closed Islands
var closedIsland = function (grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  const set = new Set();
  function dfs(r, c) {
    if (r < 0 || c < 0 || r === ROWS || c === COLS) {
      return 0;
    }
    if (grid[r][c] === 1 || set.has(`${r}-${c}`)) {
      return 1;
    }
    set.add(`${r}-${c}`);

    return Math.min(dfs(r + 1, c), dfs(r, c + 1), dfs(r - 1, c), dfs(r, c - 1));
  }

  let result = 0;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 0 && !set.has(`${r}-${c}`)) {
        result += dfs(r, c);
      }
    }
  }

  return result;
};
