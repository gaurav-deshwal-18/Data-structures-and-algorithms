//* Reverse an array

//* Time complexity O(n)

const arr = [5, 9, -2, 9, 11, 6];

const reverse = (array) => {
  const reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};

const result = reverse(arr);

console.log(result);
