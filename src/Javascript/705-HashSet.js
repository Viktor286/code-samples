// 705. Design HashSet
// https://leetcode.com/problems/design-hashset/
// Design a HashSet without using any built-in hash table libraries.

function ListNode(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
}

var MyHashSet = function () {
  // To make this as real as possible, we determine the size before hand
  this.size = 1000;
  this.arr = new Array(this.size);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.hash = function (key) {
  // to make sure everyone ends up in a bucket

  return key % this.size;
};

MyHashSet.prototype.add = function (key) {
  const hash = this.hash(key);

  // First see if we've got this bucket at all created
  if (!this.arr[hash]) {
    this.arr[hash] = new ListNode(key);
  } else {
    // If the bucket exists, we need to follow the LL to see if it's in there
    let head = this.arr[hash]; // we don't need head really, but I like it for clarity
    let node = head;
    let last; // we'll keep track of the previous node for tying the ll back together

    while (node) {
      if (node.val === key) {
        return;
      }
      last = node;
      node = node.next;
    }

    // if not, append it
    last.next = new ListNode(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const hash = this.hash(key);

  if (!this.arr[hash]) {
    return;
  } else {
    let head = this.arr[hash];
    let node = head;
    let last; // we'll keep track of the previous node for tying the ll back together

    // find the value
    while (node) {
      if (node.val === key) {
        // if it happened to be head the logic is different
        if (node === head) {
          this.arr[hash] = node.next;
        } else {
          // remove node
          last.next = node.next;
          node.next = null; // not sure if JS needs this to garbage collect tbh
          return;
        }
      }

      last = node;
      node = node.next;
    }
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const hash = this.hash(key);

  // contains is the easiest of the 3, just find bucket and follow ll
  if (!this.arr[hash]) {
    return false;
  } else {
    let head = this.arr[hash];
    let node = head;

    while (node) {
      if (node.val === key) {
        return true;
      }
      node = node.next;
    }
  }

  return false;
};
