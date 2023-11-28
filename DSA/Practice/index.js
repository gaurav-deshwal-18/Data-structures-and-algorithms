class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.childrenCount = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
        currentNode.childrenCount++;
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return currentNode.isEndOfWord;
  }

  startsWith(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return true;
  }

  delete(word) {
    this._deleteNode(this.root, word, 0);
  }

  _deleteNode(root, word, index) {
    if (index === word.length) {
      if (root.isEndOfWord === true) {
        root.isEndOfWord = false;
      }
      return Object.keys(root.children).length === 0;
    }
    const char = word[index];

    if (!root.children[char]) {
      return false;
    }

    const shouldDeleteNode = this._deleteNode(
      root.children[char],
      word,
      index + 1
    );

    if (shouldDeleteNode) {
      delete root.children[char];
      root.childrenCount--;
      return Object.keys(root.children).length === 0;
    }

    return false;
  }

  prefix() {
    let currentNode = this.root;
    let result = "";

    let hasEnded = false;

    while (!hasEnded) {
      if (
        currentNode.childrenCount === 1 &&
        currentNode.isEndOfWord === false
      ) {
        const char = Object.keys(currentNode.children)[0];
        result += char;

        currentNode = currentNode.children[char];
      } else {
        hasEnded = true;
      }
    }
    return result;
  }
}

const trie = new Trie();

trie.insert("miss");
trie.insert("misuse");
trie.delete("miss");
console.log(trie.startsWith("name"));

console.log(trie.prefix());
