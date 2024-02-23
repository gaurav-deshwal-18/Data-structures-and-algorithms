//* Promise Polyfill
function MyPromise(executer) {
  let onResolve;
  let onReject;

  let isFullFilled = false;
  let isRejected = false;

  let isCalled = false;
  let value;

  function resolve(val) {
    isFullFilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFullFilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      onReject(value);
      isCalled = true;
    }
    return this;
  };

  try {
    executer(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

MyPromise.resolve = (val) => {
  new MyPromise(function executer(resolve, reject) {
    resolve(val);
  });
};

MyPromise.reject = (val) => {
  new MyPromise(function executer(resolve, reject) {
    reject(val);
  });
};

const promise = new MyPromise((resolve, reject) => {
  let lottery = Math.random();
  if (lottery) {
    resolve("Yeah you won a lottery 🎁");
  } else {
    reject("Sorry! you lost 😞 ");
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
