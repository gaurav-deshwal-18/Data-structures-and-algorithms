//* Assign Cookies

// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.

var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  let contentChildren = 0;

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      contentChildren++;
      i++;
    }
    j++;
  }
  return contentChildren;
};
