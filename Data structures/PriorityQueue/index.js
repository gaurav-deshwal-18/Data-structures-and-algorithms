// In programming, it's a data structure where each element has a priority.
//  Elements with higher priority are handled or removed before those with lower priority.

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item, priority) {
    const queueElement = { item, priority };
    let added = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority > priority) {
        this.queue.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.queue.push(queueElement);
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    console.log(
      this.queue.map((item) => `${item.item} - ${item.priority}`).join("\n")
    );
  }
}

// Example usage:
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 2);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 3);

priorityQueue.print();
// Output:
// Task 2 - 1
// Task 1 - 2
// Task 3 - 3

priorityQueue.dequeue();
priorityQueue.print();
// Output after dequeuing:
// Task 1 - 2
// Task 3 - 3
