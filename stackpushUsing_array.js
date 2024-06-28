const { ReactReduxContext } = require("react-redux");

class Stack {
    constructor (maxSize) {
         this.items = [];
         this.maxSize = maxSize;
    }

    push(element) {
           if(this.items.length > this.maxSize) {
            console.log(" Stack is full, Cannot Push" , element);
           } else {
                 this.items.push(element);
           }

    }

    pop(element) {
        if(this.items.length === 0 ) {
            console.log(" Stack is empty, Cannot Pop" , element);
            return null;
        } else {
             return this.items.pop();
        }
    }

    printStack() {
        return this.items.join(" ");
    }

    isFull() {
        return this.items.length > this.maxSize;
    }
    isEmpty() {
          return this.items.length === 0;
    }
    printpop() {
        return this.items.pop();
    }

}

let stack = new Stack(3);
stack.push(10)
stack.push(20)
stack.push(40)
console.log(" stack is full",  stack.isFull());
console.log(" stack is full",  stack.printStack());

console.log("Popped element" , stack.pop());
console.log("Popped element" , stack.pop());
console.log("Popped Element" , stack.pop());
console.log(" stack is full",  stack.isFull());
console.log(" stack is empty",  stack.isEmpty());
console.log(" stack is full",  stack.printpop());


