class Node {
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

export class PriorityQueue {
  constructor() {
    this.store = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.store.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let i = this.store.length - 1;
    const bubble = this.store[i];

    while(i > 0) {
      const parentId = Math.floor((i - 1) / 2);
      const parent = this.store[parentId];
      if (bubble.priority <= parent.priority) break; // min/max
      // swap
      this.store[parentId] = bubble;
      this.store[i] = parent;
      i = parentId;
    }
  }

  dequeue() {
    const min = this.store[0];
    const end = this.store.pop();
    if (this.store.length > 0) {
      this.store[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    const len = this.store.length;
    let i = 0;
    const element = this.store[0];

    while(true) {
      let lid = 2 * i + 1;
      let rid = 2 * i + 2;
      if (lid >= len && rid >= len) break;

      let targetId;
      if (lid < len) targetId = lid;
      if (
        lid >= len ||
        (rid < len && this.store[rid].priority > this.store[lid].priority) // min/max
      ) targetId = rid;

      if (this.store[targetId].priority <= element.priority) break; // min/max
      // swap
      this.store[i] = this.store[targetId];
      this.store[targetId] = element;
      i = targetId;
    }
  }
}
