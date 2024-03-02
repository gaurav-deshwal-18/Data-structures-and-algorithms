//  Implement 'N' async tasks in Series - Hard

function asyncTasksInSeries(tasks) {
  return new Promise((resolve, reject) => {
    const results = [];
    let index = 0;

    function runNextTask() {
      if (index < tasks.length) {
        tasks[index]()
          .then((result) => {
            results.push(result);
            index++;
            runNextTask();
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        resolve(results);
      }
    }

    runNextTask();
  });
}

// Example usage:
const tasksInSeries = [
  () => asyncTask1(),
  () => asyncTask2(),
  () => asyncTask3(),
];

asyncTasksInSeries(tasksInSeries)
  .then((results) => {
    console.log("Results of tasks executed in series:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

// Implement 'N' async tasks in Parallel - Medium

function asyncTasksInParallel(tasks) {
  const promises = tasks.map((task) => task());
  return Promise.all(promises);
}

// Example usage:
const tasksInParallel = [
  () => asyncTask1(),
  () => asyncTask2(),
  () => asyncTask3(),
];

asyncTasksInParallel(tasksInParallel)
  .then((results) => {
    console.log("Results of tasks executed in parallel:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

//  Implement 'N' async tasks in Race - Easy

function asyncTasksInRace(tasks) {
  const promises = tasks.map((task) => task());
  return Promise.race(promises);
}

// Example usage:
const tasksInRace = [
  () => asyncTask1(),
  () => asyncTask2(),
  () => asyncTask3(),
];

asyncTasksInRace(tasksInRace)
  .then((result) => {
    console.log("Result of the first task to finish:", result);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
