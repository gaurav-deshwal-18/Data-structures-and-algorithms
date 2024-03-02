const promiseAll = (promiseArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArray)) {
      reject(new TypeError("Promise array is not an array"));
      return;
    }

    const result = [];
    let resultCount = 0;

    promiseArray.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

const promise1 = Promise.resolve(new Error("err"));
const promise2 = Promise.resolve("Resolved");
const promise3 = new Promise((res, rej) => res(10));

promiseAll([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
