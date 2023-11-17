// ===============================
//* Circular Linked List Overview
// ===============================
// A circular linked list is a variation where the last node loops back to the first,
// creating a circular structure instead of ending with a null pointer.

// -------------------------------
//* Analogy: Chain of Friends
// -------------------------------
// Imagine a circular linked list like a circle of friends instead of a linear line,
// with the last person connected to the first.

// -------------------------------
//* Structure and Continuity
// -------------------------------
// Each node connects to the next, and in a circular linked list, the last node
// links back to the first, enabling continuous traversal without a set start or end.

// -------------------------------
//* Practical Use Cases
// -------------------------------
// Valuable for continuous element access or cycling through items without a defined start
// or end.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert node at the beginning of the list
  insertAtBeginning(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // Point back to itself to form the circular link
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head; // Update tail's next to the new head
    }
  }

  // Insert node at the end of the list
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // Point back to itself to form the circular link
    } else {
      this.tail.next = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    }
  }

  // Traverse and display the circular linked list
  display() {
    let current = this.head;
    if (!this.head) {
      console.log("Circular linked list is empty.");
      return;
    }
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

// Example Usage:
const circularList = new CircularLinkedList();
circularList.insertAtBeginning(10);
circularList.insertAtEnd(20);
circularList.insertAtEnd(30);
circularList.display(); // Output: 10, 20, 30
