// Last In, First Out
export default class Stack{
    constructor(...items){
        this.reverse = false;
        this.stack = [...items];
    }

    push(){
        return this.reverse
        ? this.stack.unshift(...items)
        : this.stack.push(...items);
    }
    
    pop(){
        return this.reverse ? this.stack.shift() : this.stack.pop();
    }
}


const stack = new Stack(4, 5);
stack.reverse = true;
stack.push(1, 2, 3);
        