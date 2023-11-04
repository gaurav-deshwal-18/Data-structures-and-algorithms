//*  Object;

// An object is an unordered collection of key-value pairs.

// The key must either be a string or symbol data type where as the value can be of any data type

// To retrieve a value, you can use the the corresponding key. This can be achieved using the dot notation
// or bracket notation

// An object is not an iterable. You cannot use it with a for of loop

const obj = {
  name: "Heisenberg",
  age: 25,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
obj.hobby = "football";
delete obj.hobby;
