class TrieNode {
  constructor() {
    this.children = {};
    this.isLastChild = false;
    this.childCount = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;

    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
        current.childCount++;
      }
      current = current.children[char];
    }
    current.isLastChild = true;
  }

  search(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.isLastChild;
  }

  startsWith(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }

  commonPrefix() {
    let current = this.root;
    let result = "";
    let hasEnded = false;
    while (!hasEnded) {
      if (current.childCount === 1 && !current.isLastChild) {
        const char = Object.keys(current.children)[0];
        result += char;
        current = current.children[char];
      } else {
        hasEnded = true;
      }
    }
    return result;
  }
}

const trie = new Trie();

trie.insert("lover");
trie.insert("love");
trie.insert("loving");

console.log(trie.startsWith("max"));
console.log(trie.commonPrefix());
