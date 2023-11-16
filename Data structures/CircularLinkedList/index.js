// A circular linked list is a variation of a linked list where the last node of
// the list points back to the first node, forming a circular structure.
// In a regular (non-circular) linked list, the last node points to null,
// indicating the end of the list. However, in a circular linked list, there is no
// null pointer at the end; instead, the last node points back to the first node,
// completing the circle.

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
