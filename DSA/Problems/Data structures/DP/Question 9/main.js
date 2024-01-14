//* Jump Game II

var jumpGame = function (nums) {
  let destination = 0;
  let position = 0;
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    destination = Math.max(destination, i + nums[i]);
    if (i === position) {
      position = destination;
      count++;
    }
  }
  return count;
};

let input = [2, 3, 1, 1, 4];
const result = jumpGame(input);

console.log(result);
