//Binary Search - Binary search works on sorted array , if array is not sorted ,sort it first.

const arr = [-5, 2, 4, 6, 10];

//Solution one --- O(log(n))

//STEPS
// If the array is empty, return -1 as the element cannot be found.
// If the array has elements, find the middle element in the array.
//If target is equal to the middle element, return the middle element index.
// If target is less than the middle element, binary search left half of the array.
// If target is greater than middle element, binary search right half of the array.

const binarySearch = (arr, target) => {
  let targetArray = [...arr];

  let leftIndex = 0;
  let rightIndex = targetArray.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (targetArray[middleIndex] === target) {
      return middleIndex;
    }

    if (target > targetArray[middleIndex]) {
      leftIndex = middleIndex + 1;
    }

    if (target < targetArray[middleIndex]) {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
};

const resultOne = binarySearch(arr, 10);
const resultTwo = binarySearch(arr, 6);
const resultThree = binarySearch(arr, 20);
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
