class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }
    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return currentNode.isEndOfWord;
  }

  startsWith(prefix) {
    let currentNode = this.root;
    for (let char of prefix) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
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
trie.insert("egg");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: true
console.log(trie.search("ap")); // Output: false
console.log(trie.startsWith("ap")); // Output: true
console.log(trie.commonPrefix());
