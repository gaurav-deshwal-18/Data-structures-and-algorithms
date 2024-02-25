//* Implement a function that returns a new object after squashing the input object.

function squashObject(obj, prefix = "") {
  const squashedObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const nestedObj = squashObject(
        obj[key],
        prefix ? `${prefix}.${key}` : key
      );
      Object.assign(squashedObj, nestedObj);
    } else {
      squashedObj[prefix ? `${prefix}.${key}` : key] = obj[key];
    }
  }

  return squashedObj;
}

// Example usage:
const inputObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    postal: 10001,
  },
  hobbies: ["reading", "traveling"],
  contact: {
    email: "john@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321",
    },
  },
};

const squashedObject = squashObject(inputObject);
console.log(squashedObject);
