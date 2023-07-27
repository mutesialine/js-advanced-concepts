class Person {
constructor(_name, _age){
    this.name = _name;
    this.age = _age;
}
}
class Programer extends Person {
    constructor(_name, _age, _year){
        super(_name, _age);
        this.year = _year;
    }
    code(){
    console.log(`${this.name} is coding`)
    }
}

const programers=[new Programer("Kenny",1,23), new Programer("Kessy",2,23)]

function  developSoftware(programers){
   for(let programer of programers){
    programer.code()
   }
}
developSoftware(programers);
console.log(programers);

let person=new Person("Karen",12)
console.log(person);
