//* Find the maximum and minimum element in an array

function findMaxMin(arr) {
  if (arr.length === 0) {
    return { max: null, min: null }; // If the array is empty, return null for both max and min
  }

  let maxVal = arr[0];
  let minVal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    } else if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }

  return { max: maxVal, min: minVal };
}

// Example array
const myArray = [3, 7, 1, 9, 4, 5, 8];

// Call the function to find max and min
const { max, min } = findMaxMin(myArray);
console.log(`The maximum element is: ${max}`);
console.log(`The minimum element is: ${min}`);
