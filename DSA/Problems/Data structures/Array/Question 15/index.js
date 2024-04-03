//* 	Isomorphic Strings

//* Example 1:

// Input: s = "egg", t = "add"
// Output: true

// Example 2:

// Input: s = "foo", t = "bar"
// Output: false

// Example 3:

// Input: s = "paper", t = "title"
// Output: true

function isIsomorphic(s, t) {
  let mapS = {};

  let mapT = {};

  for (i = 0; i < s.length; i++) {
    if (mapS[s[i]] && mapS[s[i]] !== t[i]) {
      return false;
    }

    if (mapT[t[i]] && mapT[t[i]] !== s[i]) {
      return false;
    }
    mapS[s[i]] = t[i];
    mapT[t[i]] = s[i];
  }

  return true;
}
