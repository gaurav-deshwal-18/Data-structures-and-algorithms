// Tree-Like Structure: Tries are a tree-like data structure used for
// storing and retrieving a set of strings. Each node represents a single character.

// Character-Based Nodes: Nodes in a Trie represent characters.
// Starting from the root node, each subsequent node corresponds to a character in a
// string.

// Path to Words: Traversing from the root to a specific node forms a path.
// This path represents a sequence of characters that forms a word in the Trie.

// Efficient for Prefix Searches: Tries excel at prefix-based operations.
// They efficiently determine if a given sequence of characters forms the prefix
// of any stored word.

// Space Complexity: Tries can be memory-intensive, especially if there are
// many nodes with only a few children. However, they offer quick search, insertion,
// and deletion operations
// for strings.

// Fast Lookup: Searching for a word in a Trie typically takes time proportional
//to the length of the word, making it faster compared to some other data
//structures for string-related operations.

// Use Cases: Tries are handy in scenarios like autocomplete features, spell
// checkers, and dictionary implementations, where efficient word lookup
// and prefix-based searches are required.

//* Tries:

// Tries are like a tree where each node represents a single character of a word.
// They are commonly used for handling and storing words or strings. Picture a
// family tree where each level represents a letter, and as you traverse down
// the tree, you spell out a word. Tries are efficient for tasks
// like searching for words that start with a certain prefix, similar to
// looking up a word in a dictionary.

class TrieNode {
  constructor() {
    this.children = new Map(); // A map of characters to TrieNodes
    this.isEndOfWord = false; // Indicates if the node represents the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(); // The root node of the Trie
  }

  // Insert a word into the Trie
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  // Search for a word in the Trie
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isEndOfWord;
  }

  // Delete a word from the Trie
  delete(word) {
    this._deleteHelper(this.root, word, 0);
  }

  _deleteHelper(current, word, index) {
    if (index === word.length) {
      if (current.isEndOfWord) {
        current.isEndOfWord = false;
      }
      return current.children.size === 0;
    }

    const char = word[index];
    if (!current.children.has(char)) {
      return false;
    }

    const nextNode = current.children.get(char);
    const shouldDeleteCurrentNode = this._deleteHelper(
      nextNode,
      word,
      index + 1
    );

    if (shouldDeleteCurrentNode) {
      current.children.delete(char);
      return current.children.size === 0;
    }

    return false;
  }

  // Check if the Trie contains words with a given prefix
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }

  commonPrefix() {
    let node = this.root;
    let result = "";
    let hasEnded = false;
    while (!hasEnded) {
      if (node.children.size === 1 && !node.isEndOfWord) {
        const char = [...node.children.keys()][0];
        result += char;
        node = node.children.get(char);
      } else {
        hasEnded = true;
      }
    }
    return result;
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: true
console.log(trie.search("ap")); // Output: false
console.log(trie.startsWith("ap")); // Output: true
console.log(trie.commonPrefix());
