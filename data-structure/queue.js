class Queue {
    constructor(){
        this.items=[]
    }
    enqueue(element){
        return this.items.push(element)
    }
    dequeue(element){
        return this.items.shift(element)
    }
    print(){
        console.log("hello")
    }
}
const list=new Queue()
 list.enqueue(1)
 list.print