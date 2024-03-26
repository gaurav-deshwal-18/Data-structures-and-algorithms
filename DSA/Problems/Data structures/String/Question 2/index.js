//* finding the common characters among multiple strings

const common = (str1, str2) => {
  let map = {};
  for (let char of str1) {
    map[char] = (map[char] || 0) + 1;
  }

  let res = [];
  for (let char of str2) {
    if (map[char]) {
      res.push(char);
      map[char]--;
    }
  }

  return res;
};
const findCommonChar = (input) => {
  let res;

  for (let i = 0; i < input.length; i++) {
    if (res === undefined) {
      res = common(input[i], input[i + 1]);
    } else {
      res = common(res, input[i]);
    }
  }

  return res.join("");
};

let input = ["hellow", "cellw", "fellow"];

const result = findCommonChar(input);
console.log(result);
