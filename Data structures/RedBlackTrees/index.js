// Red-Black Trees are a type of self-balancing binary search tree,
//  where nodes have an extra attribute, typically called "color," that helps
//  maintain the tree's balance by following certain rules. They ensure that the
//  tree remains approximately balanced, providing efficient insertion, deletion,
//  and search operations.

//* Red-Black Trees:

// Think of a red-black tree like a special type of binary search tree that's designed to stay balanced.
// Each node in this tree is colored either red or black, and it follows some rules that help keep the tree
// balanced during insertion and deletion operations. These rules ensure that the longest path from the root
// to a leaf is not more than twice the length of the shortest path.
// It's like arranging books on a shelf in a way that ensures the shelf stays balanced and not too lopsided.

// Node class representing a node in the Red-Black Tree
class Node {
  constructor(value, color) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color; // Red or black
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
    this.BLACK = "black";
    this.RED = "red";
  }

  // Helper function to perform left rotation
  leftRotate(node) {
    const rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  // Helper function to perform right rotation
  rightRotate(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  // Helper function to fix Red-Black Tree properties after insertion
  fixInsertion(node) {
    while (node !== this.root && node.parent.color === this.RED) {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;
        if (uncle !== null && uncle.color === this.RED) {
          node.parent.color = this.BLACK;
          uncle.color = this.BLACK;
          node.parent.parent.color = this.RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }
          node.parent.color = this.BLACK;
          node.parent.parent.color = this.RED;
          this.rightRotate(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;
        if (uncle !== null && uncle.color === this.RED) {
          node.parent.color = this.BLACK;
          uncle.color = this.BLACK;
          node.parent.parent.color = this.RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }
          node.parent.color = this.BLACK;
          node.parent.parent.color = this.RED;
          this.leftRotate(node.parent.parent);
        }
      }
    }
    this.root.color = this.BLACK;
  }

  // Insertion method for Red-Black Tree
  insert(value) {
    const newNode = new Node(value, this.RED);
    let parent = null;
    let current = this.root;

    while (current !== null) {
      parent = current;
      if (newNode.value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;
    if (parent === null) {
      this.root = newNode;
    } else if (newNode.value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    this.fixInsertion(newNode);
  }
}
