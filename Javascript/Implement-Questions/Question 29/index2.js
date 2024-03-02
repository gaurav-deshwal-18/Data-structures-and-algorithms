//* Implement Currying with Placeholders:

// Currying with placeholders allows you to specify certain arguments in advance
// and fill in the remaining arguments later.

function curryWithPlaceholders(fn) {
  return function curried(...args) {
    const placeholderIndex = args.findIndex(
      (arg) => arg === curryWithPlaceholders.placeholder
    );

    if (placeholderIndex === -1) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        const newArgs = [
          ...args.slice(0, placeholderIndex),
          ...nextArgs,
          ...args.slice(placeholderIndex + 1),
        ];
        return curried(...newArgs);
      };
    }
  };
}

curryWithPlaceholders.placeholder = Symbol();

// Example usage:
function greet(greeting, name, punctuation) {
  return `${greeting}, ${name}${punctuation}`;
}

const curriedGreet = curryWithPlaceholders(greet);
const greetHi = curriedGreet("Hi", curryWithPlaceholders.placeholder, "!");
console.log(greetHi("John")); // Output: "Hi, John!"
console.log(greetHi("Alice")); // Output: "Hi, Alice!"
