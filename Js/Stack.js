class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(item) {
      return this.stack.push(item);
    }
  
    pop() {
      return this.stack.pop();
    }
  
    peek() {
      return this.stack[this.length - 1];
    }
  
    getLength() {
      return this.stack.length;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  }