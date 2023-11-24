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
// Circular Buffers
// Music Playlist

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    newNode.next = this.head;
    this.tail = newNode;
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = newNode;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.tail.next = this.head;
    }

    this.size--;
    return removedNode.value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.tail;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = this.head;
      this.tail = current;
    }

    this.size--;
    return removedNode.value;
  }

  display() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let result = "";
      do {
        result += current.value + " -> ";
        current = current.next;
      } while (current !== this.head);
      console.log(result.substring(0, result.length - 4)); // Remove the extra ' -> '
    }
  }
}

const circularList = new CircularLinkedList();
circularList.prepend(10);
circularList.append(20);
circularList.append(30);
circularList.removeFromFront();
circularList.display(); // Output: 10 -> 20 -> 30
