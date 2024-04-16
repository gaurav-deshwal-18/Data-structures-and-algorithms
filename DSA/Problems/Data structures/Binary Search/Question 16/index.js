//*  Distribute Candies to People

var distributeCandies = function (candies, n) {
  let people = Array(n).fill(0);
  let count = 1;
  while (candies > 0) {
    let index = (count - 1) % n;
    if (candies >= count) {
      people[index] += count;
      candies -= count;
    } else {
      people[index] += candies;
      candies = 0;
    }
    count++;
  }
  return people;
};
