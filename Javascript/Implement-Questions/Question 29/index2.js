//* Implement Currying with Placeholders:

// Currying with placeholders allows you to specify certain arguments in advance
// and fill in the remaining arguments later.

function curry(func) {
  return function curried(...args) {
    const realArgs = args.slice(0, func.length);
    const hasPlaceholder = realArgs.some((arg) => arg === curry.placeholder);
    if (!hasPlaceholder && realArgs.length === func.length) {
      return func.apply(this, realArgs);
    }
    return function next(...nextArgs) {
      return curried.apply(this, mergeArgs(realArgs, nextArgs));
    };
  };
}

function mergeArgs(args, nextArgs) {
  let result = [];
  args.forEach((arg, idx) => {
    if (arg === curry.placeholder) {
      result.push(nextArgs.shift());
    } else {
      result.push(arg);
    }
  });
  return [...result, ...nextArgs];
}

curry.placeholder = Symbol();

// Example usage:
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
const _ = curry.placeholder;

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'
console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'
