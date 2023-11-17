// AVL trees are self-balancing binary search trees named after their inventors,
// Adelson-Velsky and Landis.
// They maintain a balance criterion to ensure that the tree remains relatively
// balanced after insertions or deletions, aiming to guarantee efficient
// search, insertion, and deletion operations.

//* AVL Trees:

// An AVL tree is another kind of balanced binary search tree. It ensures that the difference in heights
// of the left and right subtrees of any node is not more than one. It's like a tree that automatically
// adjusts itself to keep a balance, much like a seesaw trying to maintain equilibrium.
// Whenever you add or remove an element, the tree rearranges itself to keep things in balance.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Helper function to get the height of a node
  getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // Helper function to update the height of a node
  updateHeight(node) {
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Helper function for balancing the tree
  balanceFactor(node) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Right rotate subtree rooted with 'y'
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    this.updateHeight(y);
    this.updateHeight(x);

    // Return new root
    return x;
  }

  // Left rotate subtree rooted with 'x'
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    this.updateHeight(x);
    this.updateHeight(y);

    // Return new root
    return y;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in AVL tree
      return node;
    }

    // Update the height of the ancestor node
    this.updateHeight(node);

    // Balance the tree
    const balance = this.balanceFactor(node);

    // Left Left Case
    if (balance > 1 && value < node.left.value) {
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && value > node.right.value) {
      return this.leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }
}

// Example Usage:
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
