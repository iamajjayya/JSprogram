class Node {
    constructor(data) {
         this.data = data;
         this.next = null;

    }

}

class Stack {
     constructor() {
        this.top = null ;
        this.size = 0 ;
     }


     push(element) {
        let newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode ;
        this.size++;
     }
     isEmpty () {
        return this.top == null ;
     }

     pop() {

        if(this.isEmpty()) {
          return "Stack is empty"
        }

        let poppednode = this.top;
        this.top =this.top.next;
        poppednode.next= null;
        this.size--;
        return poppednode.data;
     }

     peek() {
        if(this.isEmpty()) {
            return " stack is Empty"
        }
        return this.top.data;
     }

     getSize() {
        return this.size;
     }

     printStack() {
          let current = this.top;
          let stackstring = "";
          while(current !== null){
            stackstring += current.data + "";
            current =  current.next;
          }

          return stackstring.trim();
     }



}


let stack = new Stack();
stack.push(10); 
stack.push(20); 
stack.push(30);

console.log("Stack after pushes:", stack.printStack()); 

console.log("Popped element:", stack.pop());
console.log("Top element:", stack.peek());

console.log("Is stack empty:", stack.isEmpty()); 
console.log("Stack size:", stack.getSize()); 
