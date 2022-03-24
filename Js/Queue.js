class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      return this.queue.unshift(item);
    }
  
    dequeue() {
      return this.queue.pop();
    }
  
    peek() {
      return this.queue[this.length - 1];
    }
  
    get length() {
      return this.queue.length;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  