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

class TrieNode {
  constructor() {
    this.children = {}; // A mapping of characters to TrieNodes
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
    // Traverse each character in the word
    for (let char of word) {
      // If the character doesn't exist in the Trie, create a new node
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      // Move to the next node
      node = node.children[char];
    }
    // Mark the end of the word by setting isEndOfWord to true
    node.isEndOfWord = true;
  }

  // Search for a word in the Trie
  search(word) {
    let node = this.root;
    // Traverse each character in the word
    for (let char of word) {
      // If the character doesn't exist in the Trie, the word is not present
      if (!node.children[char]) {
        return false;
      }
      // Move to the next node
      node = node.children[char];
    }
    // Return true if the last node represents the end of the word
    return node.isEndOfWord;
  }

  // Check if the Trie contains words with a given prefix
  startsWith(prefix) {
    let node = this.root;
    // Traverse each character in the prefix
    for (let char of prefix) {
      // If the character doesn't exist in the Trie, the prefix is not present
      if (!node.children[char]) {
        return false;
      }
      // Move to the next node
      node = node.children[char];
    }
    // Return true since the Trie contains words with the given prefix
    return true;
  }
}

// Example Usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: true
console.log(trie.search("ap")); // Output: false
console.log(trie.startsWith("ap")); // Output: true
