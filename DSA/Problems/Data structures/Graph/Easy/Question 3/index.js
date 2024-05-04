// Flood Fill

var floodFill = function (image, sr, sc, color) {
  const rows = image.length;
  const cols = image[0].length;
  const prevColor = image[sr][sc];
  let newImage = [...image];

  function dfs(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      image[r][c] !== prevColor ||
      newImage[r][c] === color
    ) {
      return;
    }
    newImage[r][c] = color;
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  dfs(sr, sc);

  return newImage;
};
