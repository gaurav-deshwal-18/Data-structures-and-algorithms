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
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      node.next = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
      node.next = this.head;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      node.next = this.head;
    } else {
      node.next = this.head;
      this.head = node;
      this.tail.next = this.head;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    let removedValue = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.tail.next = this.head;
    }
    this.size--;
    return removedValue.value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    let removedValue = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
      this.tail.next = this.head;
    }
    this.size--;
    return removedValue.value;
  }
  display() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let result = "";
      do {
        result += current.value + "---->";
        current = current.next;
      } while (current !== this.head);
      console.log(result);
    }
  }
}

const circularList = new CircularLinkedList();
circularList.prepend(10);
circularList.append(20);
circularList.append(30);
circularList.removeFromFront();
circularList.display(); // Output: 10, 20, 30
