class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        return  this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0
    }
    print(){
        console.log(this.items.toString()) 
    }
}
const stack=new Stack()
stack.push(1)
stack.push(3)
stack.push(4)
stack.pop()
stack.peek()
stack.isEmpty()
stack.print()