// 208. Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/
// See details via the link above

interface ITrieNodesMap {
  [index: string]: TrieNode;
}

class TrieNode {
  nodes = {} as ITrieNodesMap;
  end = false;
}

class Trie {
  root = new TrieNode();

  insert(word: string) {
    let current: TrieNode = this.root;
    for (const e of word) {
      if (!current.nodes[e]) current.nodes[e] = new TrieNode();
      current = current.nodes[e];
    }
    current.end = true;
  }

  search(word: string) {
    let current = this.root;
    for (const e of word) {
      if (!current.nodes[e]) return false;
      current = current.nodes[e];
    }
    return current.end;
  }

  startsWith(prefix: string) {
    let current = this.root;
    for (const e of prefix) {
      if (!current.nodes[e]) return false;
      current = current.nodes[e];
    }
    return true;
  }
}
