// ===============================
//* Priority Queue Overview
// ===============================
// A priority queue is an abstract data type where elements are inserted with an associated priority,
// and elements with higher priorities are served before elements with lower priorities.

// -------------------------------
//* Priority Queue Definition
// -------------------------------
// In computer science, a priority queue is a data structure that maintains a set of elements
// along with their associated priorities. Elements with higher priorities are given precedence
// over elements with lower priorities when served or processed.

// -------------------------------
//* Simple Explanation
// -------------------------------
// Imagine a priority queue like a line at an amusement park. Visitors (elements) enter the line
// based on their ticket priority. Those with VIP tickets (higher priority) get to ride the attractions
// before regular ticket holders (lower priority), regardless of their arrival order.

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
