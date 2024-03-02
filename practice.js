function squashObject(obj, prefix = "") {
  const squashedObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      let newPrefix = prefix ? `${prefix}.${key}` : key;

      let nestedObj = squashObject(obj[key], newPrefix);
      Object.assign(squashedObj, nestedObj);
    } else {
      let newPrefix = prefix ? `${prefix}.${key}` : key;
      squashedObj[newPrefix] = obj[key];
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
