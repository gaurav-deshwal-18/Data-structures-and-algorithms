//Binary Search - Binary search works on sorted array , if arrsy is not sorted ,sort it first.

const arr = [-5, 2, 4, 6, 10];

//Solution one --- O(log(n))

//STEPS
// If the array is empty, return -1 as the element cannot be found.
// If the array has elements, find the middle element in the array.
//If target is equal to the middle element, return the middle element index.
// If target is less than the middle element, binary search left half of the array.
// If target is greater than middle element, binary search right half of the array.

const binarySearchRecursion = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

const search = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
  if (target > arr[middleIndex]) {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
};

const resultOne = binarySearchRecursion(arr, 10);
const resultTwo = binarySearchRecursion(arr, 6);
const resultThree = binarySearchRecursion(arr, 20);
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
