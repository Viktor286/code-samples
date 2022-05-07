class PriorityQueue {
  constructor() {
    this.priorityQueue = [];
  }

  enqueue(value, priority = 0) {
    this.priorityQueue.push({ value, priority });
    this.priorityQueue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.priorityQueue.shift();
  }
}
