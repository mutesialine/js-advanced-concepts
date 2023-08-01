class Animals{
constructor(_name){
    this.name=_name
}
makeSound(){
    console.log("generic animal sound")
}
}
class dog extends Animals{
constructor(_name){
    super(_name)    
}
makeSound(){
    console.log("Dog sound")

}
}
let a =new Animals("Dog")
let a2=new dog("woff")
a.makeSound()
a2.makeSound()