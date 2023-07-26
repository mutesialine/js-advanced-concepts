class Square{
    constructor(_width){
        this.width=_width;
        this.height=_width
    }
   static equal(a,b){
    return  a.width* a.height === b.width * b.height
   }
   static isValidDimention(width, height){
    return  width=== height
   }
}
let square1=new Square(4);
let square2=new Square(5);
console.log(Square.equal(square1,square2))
console.log(Square.isValidDimention(6,6))
