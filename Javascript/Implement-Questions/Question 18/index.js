//* Implement a function that creates a resumable interval object.

function createResumableInterval(callback, interval) {
  let timerId;
  let paused = false;

  function resume() {
    if (!paused) return;
    paused = false;
    timerId = setInterval(callback, interval);
  }

  function pause() {
    if (paused) return;
    paused = true;
    clearInterval(timerId);
  }

  // Start the interval
  resume();

  // Return the resumable interval object
  return {
    resume,
    pause,
  };
}

// Example usage:
function myCallback() {
  console.log("Interval callback executed");
}

const resumableInterval = createResumableInterval(myCallback, 1000);

// Pause the interval after 3 seconds
setTimeout(() => {
  resumableInterval.pause();
  console.log("Interval paused after 3 seconds");
}, 3000);

// Resume the interval after 5 seconds
setTimeout(() => {
  resumableInterval.resume();
  console.log("Interval resumed after 5 seconds");
}, 5000);
