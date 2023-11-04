//* Array
// An array is a data structure that can hold a collection of values
// Arrays can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same array
// Arrays are resizable. You don't have to declare the size of an array before creating
// JavaScript arrays are zero-indexed and the insertion order is maintained
// Arrays are iterables. They can be used with a for of loop

const arr = [1, 2, 3];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (const item of arr) {
  console.log(item);
}
