//* implement promise finally
Promise.prototype.finally = function (callback) {
  const promise = this.constructor;

  return this.then(
    (value) => promise.resolve(callback()).then(() => value),
    (reason) =>
      promise.resolve(callback()).then(() => {
        throw reason;
      })
  );
};

// Example usage:
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // Output: "Success"
  })
  .finally(() => {
    console.log("Promise has been resolved, regardless of success or failure.");
  });
