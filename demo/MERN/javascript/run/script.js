// //Function declaration
// greet();
// function greet(){
//   console.log("hello world")
// }
// // speak();
// //Function expression
// const speak = function(){
//   console.log("good day")
// };
// speak();

// const speak2 = function(name , time){
//   console.log(`good ${time} ${name} `)
// };
// speak2('john' ,'morning');

// const speak3 = function(name ='tom', time='night'){
//   console.log(`good ${time} ${name} `)
// };
// speak3();
// speak3('kohn');

// const calcArea = function(radious){
//   let area =3.14 * radious **2;
//   // console.log(area);
//   return area;
// }
// const area= calcArea(5);
// console.log(area);
// console.log(calcArea(2));

// const calcArea2 = function(radious){
//   return 3.14 * radious **2;
//   // console.log(area);
 
// };
// const area2= calcArea2(10);
// console.log(area2);
// console.log(calcArea2(20));

// //regular funciton
// const calcArea = function(radious){
//   return 3.14 * radious **2;
// };
// const area = calcArea(5);
// console.log('area is :',area);
// //arrow function
// const calcArea1 = (radius) =>{
//   return 3.14 * radius **2;
// };
// const area1 = calcArea1(5);
// console.log('area is :',area1);

// const calcArea2 = radius =>{
//   return 3.14 * radius **2;
// };
// const area2 = calcArea2(10);
// console.log('area is :',area2);

// const calcArea3 = radius => 3.14 * radius**2;

// const area3 = calcArea2(12);
// console.log('area is :',area3);

// //functions

// const greet= () => 'hello'
// let resultOne =greet();
// console.log(resultOne);

// //methods
// const name="john";
// let resultTwo=name.toUpperCase();
// console.log(resultTwo);


//   //callbakcs & foreach
// const myFunc= (callbackFunc) => {
//   // dosomething
//   let value = 50;
//   callbackFunc(value);
// };
// myFunc(function(value){
//   //do something
//   console.log(value);
// })

// myFunc(value=>{
//   //do something
//   console.log(value);
// })

// //callbakcs & foreach

// let people =['marios','luigi','ryu','shaun','chun-li'];

// const logPerson = (person,index) => {
//   console.log(`${index} - hello ${person}`);
// }

// people.forEach(logPerson)

// const ul = document.querySelector('.people');

// const people =['marios','luigi','ryu','shaun','chun-li'];

// let html =``;

// people.forEach(person=>{
// html += `<li style ="color: red">${person}</li>`
// });
// console.log(html)
// ul.innerHTML = html;

// //object literals

// let user = {
//   name:'crystal',
//   age:22,
//   email:'ashu@netninja.co.uk',
//   location:'berlin',
//   blogs:['10 hings to amek with marmitz','why mac and cheese rules']
// };
// console.log(user)
// console.log(user.age)
// user.age = 23;
// console.log(user.age)
// console.log(user['name']);
// user['name'] = 'ashu' ;
// console.log(user['name']);

// console.log(typeof user)

// //object literals

// // const blogs = [
// //   {title:'why mac and cheese rules' , likes:30 },
// //   {title:'10 hings to amek with marmitz' , likes:50 },

// // ];

// let user = {
//   name:'crystal',
//   age:22,
//   email:'ashu@netninja.co.uk',
//   location:'berlin',
//   blogs:[{title:'why mac and cheese rules' , likes:30 },
//   {title:'10 hings to amek with marmitz' , likes:50 },
//   ],
//   login: function(){
//    console.log('the user loged in') 
//   },
//   logout:function(){
//     console.log('the user loged out') 
//   },
//   logBlogs(){
//     // this.blogs
//     //console.log(this.blogs);
//     console.log('this user has written the following blogs:')
//     this.blogs.forEach(blog=>{console.log(blog.title, blog.likes)})
//   }
// };
// user.login();
// user.logout();
// user.logBlogs();

//math object


// console.log(Math)
// console.log(Math.E)
// console.log(Math.PI)

// const area =78.2
// console.log(Math.round(area))
// console.log(Math.floor(area))
// console.log(Math.ceil(area))
// console.log(Math.trunc(area))

// //random numbers

// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));


// var myArray = new Array();
// myArray[0] = 8;
// myArray[1] = "heelo";

// var myCar = new Object();
// myCar.maxSpeed = 150;
// myCar.driver ="shaun";
// myCar.drive =function() { console.log("now driving");};

// myCar.drive();

// var myCar2={
//   maxSpeed : 150, 
//   driver:"net Ninja", 
//   drive:function (speed,time) { console.log(speed * time);} ,
//   test: function(){
//     console.log(this)
//   }
// };
// var myCar3={
//   maxSpeed : 150, 
//   driver:"shawn", 
//   drive:function (speed,time) { console.log(speed * time);} ,
//   test: function(){
//     console.log(this)
//   }
// };
// myCar2.test()
// myCar3.test()

// var myCar4={
//   maxSpeed : 150, 
//   driver:"shawn", 
//   drive:function (speed,time) { console.log(speed * time);} ,
//   logDriver: function(){
//     console.log("driver name is  "+this.driver);
//   }
// };

// myCar4.logDriver();
// console.log(myCar2.maxSpeed)
// myCar2.drive(50,2); 

// var Car = function(maxSpeed,driver){
//   this.maxSpeed = maxSpeed;
//   this.driver = driver;
//   this.drive= function (speed,time) { console.log(speed * time);};
//   this.logDriver = function(){console.log("driver name is  "+this.driver);};
// }

// var myCar5 = new Car(50,"rover");
// var myCar6 = new Car(20,"nimi");
// var myCar7 = new Car(60,"humpty");
// var myCar8 = new Car(70,"james bong");

// myCar6.drive(50,5); 
// myCar6.logDriver();



// let Person = function(fname,lname,age,skills,dateofBirth,address,married,profession){
//   this.fname = fname;
//   this.lname = lname;
//   this.fname = fname;
//   this.age = age;
//   this.skills = skills;
//   this.dateofBirth = dateofBirth;
//   this.address= address;
//   this.married= married;
//   this.profession= profession;
// }

// var amithab = new Person("amithab","bachaan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst");
// var abhisheik = new Person("abhisheik",21,"HTML","08/06/1997","false","JR analyst");

// var abhisheik = Object.create(amithab);

// var Aaradhya = Object.assign(amithab,abhisheik)

// console.log(Aaradhya );
// console.log(Aaradhya.lname);
// console.log(Aaradhya.address);


// var saving = {
//   accountNumber: 98765432,
//   accountName:"Migheuel Mark",
//   accountBalance: 100000,
//   isSalary: 30000,
//   withdraw: function(ammount){
//     if(ammount <= this.accountBalance){
//       this.accountBalance -= ammount;
//       console.log("i would like to withdaw :",ammount)
//       return ammount;
//     }
//     else{
//       console.log("you dont have that much savings in saving account!")
//     }
//   },
//   getCurrentBalance:function(){console.log("Saving Account balance :",saving.accountBalance)  },
// }
// var current = {
//   accountNumber: 831232134,
//   accountName:"El CHapo ",
//   accountBalance: 900000,
//   odLimit: 20000,
//   withdraw: function(ammount){
//     if(ammount <= this.odLimit){
//       this.accountBalance -= ammount;
//       console.log("i would like to withdaw :",ammount)
//       return ammount;
//     }
//     else{
//       console.log("you dont have that much limit in Current account!")
//     }
//   },
//   getCurrentBalance:function(){console.log("Current Account balance :",current.accountBalance) },
// }
// saving.withdraw(100000);
// saving.getCurrentBalance();
// current.withdraw(20000);
// current.getCurrentBalance();


// function translate(text) {
//   var textArray = text.split(" ");
//   var length = textArray.length;
//   var tab = [];
//   for(var i=0; i<length; i++){
//     var first = textArray.charAt(i);
//     //voyelle
//     if(first === "a" || first === "e" || first === "i" || first === "o" || first === "u" || first === "y"){
//       if(i === 0){
//         textArray = textArray + "way";
//       }
//       else{
//         textArray = textArray.substring(i) + tab.join("") + "ay";
//       }
//       break;
//     }
//     //consonne
//     else{
//       tab.push(first);
//     }
//   }
//   return textArray;
// }

// console.log(translate("The quick brown fox"));


// var content = document.getElementById("content");
// var button = document.getElementById("show-more");


// button.onclick = function(){
//   if(content.className=="open"){
//     //shrink the box
//   } else{
//     //expand the box
//   }
// };


// var myMessage = document.getElementById("message");

// function showMessage(){
//   myMessage.className="show";
// }



// function hideMessage(){
//   myMessage.className="";
// }

// setTimeout(showMessage,3000);
// setTimeout(hideMessage,5000);


// var colourChanger = document.getElementById("colour-changer");
// var colours = ["red","blue","yellow","pink"]

// var counter = 0;

// function changeColour(){
//   if (counter>=colours.length){
//     counter=0;
//   }
//   colourChanger.style.background =colours[counter];
//   counter++;
// }
// var myTimer = setInterval(changeColour,3000);

// colourChanger.onclick = function(){
//   clearInterval(myTimer);
//   colourChanger.innerHTML="timer stop"
// };

// var myForm = document.forms.myForm;

// var message =document.getElementById("message");

// myForm.onsubmit = function(){
//   if (myForm.name.value == ""){
//     message.innerHTML = "please enter a name";
//     return false;
//   }
//   else{
//     message.innerHTML= "";
//     return true;
//   }
// };