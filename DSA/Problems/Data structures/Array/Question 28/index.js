//* Word Pattern
var wordPattern = function (pattern, s) {
  const map = {};
  const p = pattern.split("");
  const c = s.split(" ");

  if (p.length !== c.length) return false;

  const pSet = [...new Set(p)];
  const cSet = [...new Set(c)];

  if (pSet.length !== cSet.length) return false;

  for (let i = 0; i < c.length; ++i) {
    if (map[p[i]] && map[p[i]] !== c[i]) return false;
    map[p[i]] = c[i];
  }

  return true;
};
