//* Maximum Number of Removable Characters
var maximumRemovals = function (s, p, removable) {
  const subRemoval = (removed) => {
    let p1 = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === p[p1] && !removed.has(i)) {
        p1++;
      }
      if (p1 === p.length) return true;
    }
    return false;
  };
  let left = 0;
  let right = removable.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let removed = new Set(removable.slice(0, mid + 1));
    if (subRemoval(removed)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
