class Square{
    constructor(_width){
        this.width=_width;
        this.height=_width
    }
    get area(){
        return this.width * this.height
    }
    set area(area)
    {
        this.width=Math.sqrt(area);
        this.height=this.width
    }
}
let square1=new Square(4);
   square1.area=25;
console.log(square1.width)
console.log(square1.height)