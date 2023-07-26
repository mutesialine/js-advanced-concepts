class Rectangle{
    constructor(_width, _height,_color){ 
    console.log("here is the rectangle");
     this.width=_width
    this.height=_height;
    this.color=_color;
} 
getArea()  {
    return this.width * this.height
} 
printDescription(){
    console.log(`I'm rectangle 2 with  width ${this.width} and heigt ${this.height} and the color of ${this.color}`)
} 
}
let rectangle1=new Rectangle(5,4,"blue");
let rectangle2=new Rectangle(10,10,"green")
console.log(rectangle1.getArea())
console.log(rectangle2.getArea())
rectangle2.printDescription()