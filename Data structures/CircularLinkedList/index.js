// A circular linked list is a variation of a linked list where the last node of
// the list points back to the first node, forming a circular structure.
// In a regular (non-circular) linked list, the last node points to null,
// indicating the end of the list. However, in a circular linked list, there is no
// null pointer at the end; instead, the last node points back to the first node,
// completing the circle.

//* CircularLinkedList

// Imagine a circular linked list like a chain of friends holding hands in a circle.
//  In a regular linked list, people are holding hands in a line, but in a circular linked list,
//  the last person is holding the hand of the first person, forming a circle.

// In this list, each person (or node) has a connection to the next person in line.
// The special thing about a circular linked list is that the last person's connection doesn’t point
// to null (as in a regular linked list) but instead loops back to the first person, forming a complete circle.

// This structure makes it easy to start from any person in the circle and keep walking around,
// visiting each person one by one until you come back to the one you started with. It’s like having
// a continuous loop where there's no end; you can keep going around and around.

// Circular linked lists can be handy in situations where you need continuous access to elements
// or want to repeatedly cycle through a set of items without having a defined beginning or end.

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
