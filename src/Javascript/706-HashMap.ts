class LinkNode {
  public next: null | LinkNode = null;

  constructor(public key: number, public val: number) {
    this.key = key;
    this.val = val;
  }
}

class MyHashMap {
  buckets: LinkNode[] = [];
  bucketsCount = 100000;

  hash(key: number) {
    return key % this.bucketsCount;
  }

  find(key: number, p: LinkNode) {
    while (p) {
      if (p.key === key) {
        return p;
      }
      p = p.next;
    }
  }

  getBucketHead(key: number): LinkNode {
    const bucketIndex = this.hash(key);
    const bucketHead: LinkNode = (this.buckets[bucketIndex] =
      this.buckets[bucketIndex] || new LinkNode(NaN, NaN));
    return bucketHead;
  }

  put(key: number, val: number) {
    const bucketHead = this.getBucketHead(key);

    // if the key already exist
    const node = this.find(key, bucketHead.next);
    if (node !== undefined) {
      node.val = val;
      return;
    }

    // if the key doesn't exist
    const bucketHeadNext = bucketHead.next;
    const newNode = new LinkNode(key, val);
    bucketHead.next = newNode;
    newNode.next = bucketHeadNext;
  }

  get(key: number) {
    const bucketHead = this.getBucketHead(key);
    const node = this.find(key, bucketHead.next);
    if (node !== undefined) {
      return node.val;
    }
    return -1;
  }

  remove(key: number) {
    const bucketHead = this.getBucketHead(key);
    let prev = bucketHead;
    let current = bucketHead.next;
    while (current) {
      if (current.key === key) {
        break;
      }
      prev = current;
      current = current.next;
    }
    if (current) {
      prev.next = current.next;
      current.next = null;
    }
  }
}
