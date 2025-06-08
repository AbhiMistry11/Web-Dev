
//constructor
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`My Name is ${this.name}`);
// }

// let p1 = new Person("Abhi",23);
// let p2 = new Person("Venom",23);

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`My Name Is ${this.name}`);
//     }
// }
// let p1 = new Person("Abhi",23);
// let p2 = new Person("Venom",23);

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        console.log("person");
    }
    talk(){
        console.log(`My Name is ${this.name}`);
    }
};

class Student extends Person{
    constructor(name,age,marks){
        console.log("student")
       super(name,age);
       this.marks = marks;
    }
   
};

class Teacher extends Person{
    constructor(name,age,marks){
       super(name,age);
       this.marks = marks;
    }
   
  
};


