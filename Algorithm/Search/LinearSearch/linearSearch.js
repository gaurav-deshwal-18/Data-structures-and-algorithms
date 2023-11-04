const arr = [-5, 2, 10, 4, 6];

//Solution one --- O(n)

//Loop through array
// If target found return index
// Else continue
// if entire array is looped and element not found then return -1

const linearSearch = (arr, target) => {
  const targetArray = [...arr];

  for (let i = 0; i < targetArray.length; i++) {
    if (targetArray[i] === target) {
      return i;
    } else {
      continue;
    }
  }
  return -1;
};

let resultOne = linearSearch(arr, 10);
let resultTwo = linearSearch(arr, 6);
let resultThree = linearSearch(arr, 20);

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
