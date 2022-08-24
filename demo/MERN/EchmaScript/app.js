// #1
// const number = 42;
// try {
//   number = 99;
// } catch (err) {
//   console.log(err);
//   // expected output: TypeError: invalid assignment to const `number'
//   // Note - error messages will vary depending on browser
// }
// console.log(number);
// // expected output: 42
// #2
// if (MY_FAV === 7) {
//     // this is fine and creates a block scoped MY_FAV variable
//     // (works equally well with let to declare a block scoped non const variable)
//     let MY_FAV = 20;
  
//     // MY_FAV is now 20
//     console.log('my favorite number is ' + MY_FAV);
  
//     // this gets hoisted into the global context and throws an error
//     // var MY_FAV = 20;
//   }
  
//   // MY_FAV is still 7
//   console.log('my favorite number is ' + MY_FAV);

// #3


// const Obj1 = {
//     id : 1,
//     title:"project 1",
//     price:44,
//     printOrder:function(){
//         console.log(" print order ----- id: " + this.id +" title "+this.title +" total: "+this.price )
//     },
//     getPrice:function(){
//         console.log(" getPrice ----- id: " + this.id  +" price : "+this.price )
//     }
// }
// // const printOrder=()=>{
// //     console.log(" print order ----- id: " + Obj1.id +" title "+Obj1.title +" total: "+Obj1.price )
// // }   
// // const getPrice=()=>{
// //     console.log(" getPrice ----- id: " + Obj1.id  +" price : "+Obj1.price )
// // } 
// Obj1.printOrder();
// Obj1.getPrice();

// const Obj2 = Object.assign({},Obj1);
// console.log(Obj2);

// #4

// const arr = ['Tom', 'Ivan', 'Jerry'];

// const obj4 = arr.reduce((accumulator, value, index) => {
//   return {...accumulator, ["Name"+index]: value, ["Lenght"+index ]: value.length};
// }, {});

// //  {'key0': 'zero', 'key1': 'one', 'key2': 'two'}
// console.log(obj4);


// #5 a


// const  add = (a = 0, b = 0) => a + b;

// console.log(add(2,6));
// console.log(add(6));
// console.log(add(undefined,99));
  
// #5 b

//   function usersFriends(userName, ...Friends){
//     console.log(userName,Friends);
//   }

//  usersFriends("ashu","nimi","ganesh","revon")

// #5 c

// function printCapitalNames(...names){
//     for(let i in names){
//         console.log(names[i].charAt(0).toUpperCase() + names[i].slice(1)); 

//     }
// }

// let names = [ 'nimi', 'ganesh', 'revon' ]

// printCapitalNames(...names);

// #6

// let model = " 12345ss3";
// let deskNo = 12344;
// let name = " ashu";

// console.log(`${name} laptop model no ${model} and desk no: ${deskNo}   `);

// #7a
// const vehicles = ['mustang', 'f-150', 'expedition','bmw'];

// const [car, truck, suv ,sports] = vehicles;

// console.log(suv);

// #7b



// const organization = { 
//     'name': 'Rover',
//     'address': '15th Park Avenue',
//     'age': 43,
//     'department':{
//         'name': 'Sales',
//         'Shift': 'Morning',
//         'address': {
//             'city': 'Bangalore',
//             'street': '7th Residency Rd',
//             'pin': 560001
//         }
//     }
// }

// const {department: {address : {pin}}} = organization
// console.log(pin)


