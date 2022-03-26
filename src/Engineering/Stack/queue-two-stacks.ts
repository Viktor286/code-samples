interface IStack {
  push(element: any): void,
  pop(): any,
  peek(): any,
  length(): number,
}

class QueueTwoStacks {
  private inStack: IStack;
  private outStack: IStack;

  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(item: any) {
    this.inStack.push(item);
  }

  dequeue() {
    if (this.outStack.length() === 0) {

      // Move items from inStack to outStack, reversing order
      while (this.inStack.length() > 0) {
        const newestInStackItem = this.inStack.pop();
        this.outStack.push(newestInStackItem);
      }

      // If outStack is still empty, raise an error
      if (this.outStack.length() === 0) {
        throw new Error("Can't dequeue from empty queue!");
      }
    }
    return this.outStack.pop();
  }
}
