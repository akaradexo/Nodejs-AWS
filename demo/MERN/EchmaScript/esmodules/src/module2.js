// export function greet(messages){
//     console.log(messages)
// };

// export class GreetMessage{
//     constructor(){
//         console.log("Constructor");

//     }
//     greet(){
//         console.log("Greet fucntion");
//     }
// }

// class Person{
//     constructor(name){
//         this.name = name;
//         console.log(this.name+ " constructor")
//     }
//     static staticMethod(){
//         console.log("static Method")
//     }
//     greetPerson(){
//         console.log("hello  "+this.name);
//     }
// }
// let p = new Person("chandler");
// Person.staticMethod();
// p.greetPerson();

// class inheirtance
// class Person{
//     constructor(name){
//         console.log(name+" parent  constructor")
//     }
//     getID(){
//         return 10 ;
//     }
// }
// class Employee extends Person{
//     constructor(name){
//         super(name);
//         console.log(name+ " child constructor");
//     }
//     getID(){
//         return super.getID() ;
//     }
// }
// let e = new Employee("chandler");

// console.log(e.getID())

// class Account {
//    constructor(id,name){
//     this.name=name;
//     this.balance = 0;
//     this.id=id;
//    }
//    describe(){
//     return `owner :${this.id} name ${this.name} has a balance of ${this.balance}`;
//    }
   
// }

// class savingAccount extends Account{
//     savingAccount(cashCredit){
//         this.balance +=cashCredit;
//         return this.balance;
//     }
// }
// class currentAccount extends Account{
//     currentAccount(cashCredit){
//         this.balance +=cashCredit;
//         return this.balance;
//     }
// }

// let customer1 = new currentAccount(111,"Mark");
// let customer2 = new savingAccount(111,"John");
// let customer3 = new currentAccount(111,"Ross");
// let customer4 = new savingAccount(111,"Racheal");

// customer1.currentAccount(90000);
// console.log(customer1.describe())
// customer2.savingAccount(80000);
// console.log(customer2.describe())
// customer3.currentAccount(50000);
// console.log(customer3.describe())
// customer4.savingAccount(20000);
// console.log(customer4.describe())


let myMap = Object.create(null);
myMap.name = "chandler";
let val = myMap.name;
console.log(val);

myMap[100] = "hello";

console.log(myMap["100"])

let ob1= {};
let ob2 = {};

myMap[ob1] = " world";
console.log(myMap[ob2])