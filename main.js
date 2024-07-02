// console.log('bmw');
//window.alert('bmw');


//bmw

/*

b
m
w


*/

//let FirstName = 'JM' //strings
//let age = 19; //numbers
//let student = true; //booleans


// console.log('Hello',FirstName);
// console.log('Your are',age,'years old');
// console.log('Enrolled',student);


//document.getElementById('p1').innerHTML = 'Hello ' + FirstName;
//document.getElementById('p2').innerHTML = 'You are ' + age + ' years old';
//document.getElementById('p3').innerHTML = 'Enrolled ' + student;



//let students = 20;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//let extraStudents = students % 3;
// students += 1;
// students -= 1;
//students *= 2;
//students /= 2;
//console.log(students);
//console.log(extraStudents);

// let results = 2 + 2 * (3 + 4) - 2;
// console.log(results); 

//let username = window.prompt("What's your name?");
//console.log(username);

// let username;
// document.getElementById('myButton').onclick = function(){

//     username = document.getElementById('myText').value;
//     console.log(username);
//     document.getElementById('myLabel').innerHTML = 'Hello ' + username;
// }


// let age = window.prompt('How old are you?');
// age = Number(age);
// console.log(typeof age);
// age += 1;
// console.log('Happy Birthday! You are', age, 'years old');

// let x;
// let y;
// let z;

// x = Number('3.14');
// y = String('3,14');
// z = Boolean('bmw');


// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log('The circumference is:', circumference );

// let x;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;

// x = Math.round(x);
// x = Math.pow(x, 2);
//  x = Math.floor(x);
//  x = Math.ceil(x);
// x = Math.abs(x);
//x = Math.sqrt(x);

// maximum = Math.max(x, y, z);
// minimum = Math.min(x, y, z);

// x = Math.PI;

// console.log(x);

//  let a;
//  let b;
//  let c;

// a = window.prompt('Enter side A');
// a = Number(a);

// b = window.prompt('Enter side B');
// b = Number(b);


// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log('Side C:', c);

// document.getElementById('submitButton').onclick = function(){
  
//  a = document.getElementById('aTextBox').value;
//  a = Number(a);

//  b = document.getElementById('bTextBox').value;
//  b = Number(b);


//  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
 
//  document.getElementById('clabel').innerHTML = 'Side C: ' + c;

// } 


// let count = 0;

// document.getElementById('decreaseBtn').onclick = function(){
// count -=1;
// document.getElementById('countLabel').innerHTML = count;
// };

// document.getElementById('resetBtn').onclick = function(){
//     count =0;
//     document.getElementById('countLabel').innerHTML = count;
    
// };

// document.getElementById('increaseBtn').onclick = function(){
//     count +=1;
//     document.getElementById('countLabel').innerHTML = count;
    
// };


//let username = 'Jovan';
//let phoneNumber = '064-811-8070'
// console.log(username.length);
// console.log(username.charAt(0));
// console.log(username.indexOf('o'));
// console.log(username.lastIndexOf('v'));
//username = username.trim();
//username = username.toUpperCase();
// username = username.toLowerCase();

// phoneNumber = phoneNumber.replaceAll('-', '/');
// console.log(phoneNumber);
// console.log(username);

// let fullName = 'Jovan Maric';
// let firstName;
// let lastName;

// firstName = fullName.slice(0, fullName.indexOf(' '));
// lastName = fullName.slice(fullName.indexOf(' ') + 1);


// firstName = fullName.slice(0, 5);
// lastName = fullName.slice(6);
// console.log(firstName);
// console.log(lastName);


// let username = 'jovan';
// let letter = username.charAt(0).toUpperCase();


// console.log(letter);


// let age = 19;

// if(age >= 18){
// console.log('you are an adult');
// }
// else{
//     console.log('you are a child');
// }

// let online = false;

// if(online){
// console.log('you are online')
// }
// else{
//     console.log('you are offline')
// }

// document.getElementById('myButton').onclick = function(){

//     const myCheckBox = document.getElementById('myCheckBox');
//     const visaBtn = document.getElementById('visaBtn');
//     const mastercardBtn = document.getElementById('mastercardBtn');
//     const paypalBtn = document.getElementById('paypalBtn');

//     if(myCheckBox.checked){
//         console.log('you are subscribed');
//     }
//     else(
//         console.log('you are not subscribed')
//     );


// if(visaBtn.checked){
// console.log('you are paying with Visa');
// }
// else if(mastercardBtn.checked){
//     console.log('you are paying with MasterCard');
//     }
//     else if(paypalBtn.checked){
//         console.log('you are paying with PayPal');
//         }
//     else{console.log('you must select payment method')}
    
//     }


// let grade = 'F';

// switch(grade){

//     case 'A':
//     console.log('You did great');
//     break;  
    
//     case 'B':
//     console.log('You did good');
//     break; 

//     case 'C':
//      console.log('You did ok');
//      break; 

//      case 'D':
//      console.log('You passed');
//      break; 

//      case 'F':
//         console.log('You failed');
//         break; 

//      default:
//         console.log(grade, 'is not a letter grade!');   
// }

//let temp = 15;
// if(temp > 0 && temp < 30){
// console.log('the weather is good');
// }
// else(console.log('the weather is bad'));
// &&, ||


// let temp = 15;


// if(!temp > 9){
// console.log('its nice outside');
// }
// else(console.log('its not nice outside'));

// let username = '';

// while(username == '' || username == null){
//     username = window.prompt('enter your name');
// }

// console.log('hello', username);

// for(let i = 10; i > 0; i-=1){
//     console.log(i);
// }
// console.log('srecna nova godina');

// let symbol = window.prompt('Enter a symbol to use');
// let rows = window.prompt('Enter # of rows');
// let columns = window.prompt('Enter # of columns');


// for(let i = 1; i <= 3; i+=1){
//   for(let j = 1; j <= columns; j+=1){
// document.getElementById('myRectangle').innerHTML += symbol;
// }

// document.getElementById('myRectangle').innerHTML += '<br>';
// }

//let myNum = 29;

//myNum = myNum.toLocaleString('de-DE');
//myNum = myNum.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});

// myNum = myNum.toLocaleString(undefined, {style: 'percent'});
// myNum = myNum.toLocaleString(undefined, {style: 'unit', unit: 'celsius'});

// console.log(myNum);


// let fruits = ['jabuka', 'mandarina', 'banana'];

//fruits.push('lemon');   // add an element
//fruits.pop();           //removes last element
//fruits.unshift('mango');//add element to beggining
//fruits.shift();         //removes element from beggining

// let length = fruits.length;
// let index = fruits.indexOf('lubenica');

// console.log(index);

//let prices = [5, 10, 15, 20];

// for(let i = prices.length - 1; i >= 0; i-=1){
// console.log(prices[i]);
// }

// for(let price of prices){
//     console.log(price);
// }

// let fruits = ['banana', 'apple', 'orange', 'mango'];

// fruits = fruits.sort();
// //fruits = fruits.sort().reverse();

// for  (let fruit of fruits){
//     console.log(fruit);
// }


// let fruits =        ['apples', 'oranges', 'bananas'];
// let vegetables =    ['carrots', 'onions', 'potatoes']; 
// let meats =         ['eggs', 'chicken', 'fish'];


// let groceryList = [fruits, vegetables, meats];
// groceryList[0][2] = 'mangoes';

// for(let list of groceryList){
// for(let food of list){
// console.log(food);
// }
// }

//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(...numbers);

// let maximum = Math.max(...numbers);
// console.log(maximum);

// let class1 = ['spongebob', 'patrick', 'sandy'];

// let class2 = ['squidward', 'mr.krabs', 'plankton'];

// class1.push(...class2);
// console.log(...class1);

//let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a,b,c,d,e));

// function sum(a, b){
//     return a + b;
// }

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total
// }


// let students = ['spongebob', 'patrick', 'squidward'];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element){
//     console.log(element);
// }

// let ages = [18, 16, 21, 17, 19, 90];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element){
//     return element >= 18;
// }
// function print(element){
//     console.log(element);
// }


// let prices = [5, 10, 15, 20, 25, 30, 35];
// let total = prices.reduce(checkOut);

// console.log(`The total is: $${total}`);

// function checkOut(total, element){
//     return total + element;
// }


// const greeting = (username) =>  {console.log(`hello ${username}`);}
// greeting('Jovan');

//  const percent = (x, y) => x / y * 100;
//  console.log(`${percent(73, 100)}%`);


// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort((x,y) => y - x);

// grades.forEach((element) => console.log(element));



// class Animal{

//     constructor(name, age){
//     this.name = name;
//     this.age = age;
//     }
// }

// class Rabitt extends Animal{

//     constructor(name, age, runSpeed){
//     super(name, age);
//     this.runSpeed = runSpeed;
//     }
// }

// class Fish extends Animal{

//     constructor(name, age, swimSpeed){
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//     }

// }


// class Hawk extends Animal{

//     constructor(name, age, flySpeed){
//     super(name, age);
//     this.flySpeed = flySpeed;
//     }

// }

// const rabitt = new Rabitt('rabbit', 1, 40);
// const fish = new Fish('fish', 2, 80);
// const hawk = new Hawk('hawk', 3, 200);


// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);



// class Car{

//     constructor(power){
//         this._gas = 25;
//         this._power = power;
//     }

//     get power(){

//         return `${this._power}hp`;
//     }

//     get gas(){

//         return `${this._gas}L(${this._gas / 50 * 100}%)`;
//     }

//     set gas(value){
//         if(value > 50){
//             value = 50;
//         }

//         else if(value < 0){
//             value = 0;
//         }

//         this._gas = value;
//     }

// }

// let car = new Car(400);

// car.gas = 20;


// console.log(car.power);
// console.log(car.gas);


// let item = 'cryptocurrency';
// let price = 420.69;



// let timer1 = setTimeout(firstMessage, 3000);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(thirdMessage, 9000);

// function firstMessage(){

//     alert(`buy this ${item} for ${price}`)
// }

// function secondMessage(){

//     alert(`this is not scam!`)
// }

// function thirdMessage(){

//     alert(`do it!`)
// }



// document.getElementById('myButton').onclick = function(){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert(`thanks for buying`); 
// }

// async function loadFile(){

//     let fileLoaded = false;

//     if(fileLoaded){
//         return 'File loaded';
//     }
//     else{
//         throw 'File NOT loaded';
//     }

// }

// loadFile().then(value => console.log(value)).catch(error => console.log(error));



// const title = document.getElementById('myTitle');

// title.style.backgroundColor = 'black';
// title.style.color = 'blue';
// title.style.fontFamily = 'consolas';
// title.style.textAlign = 'center';
// title.style.border = '2px solid';


// const myButton = document.querySelector('#myButton');
// const myImg = document.querySelector('#myImg');

// myButton.addEventListener('click', () => {

//     if(myImg.style.display == 'none'){
//     myImg.style.display = 'block';
//     }
//     else{
//         myImg.style.display = 'none';
//     }
// });


// const myDiv = document.getElementById('myDiv');
// window.addEventListener('keydown', move);

// let x = 0;
// let y = 0;

// function move(event){
//     switch(event.key){
//     case 'ArrowDown':
//         y += 5;
//         myDiv.style.top = y + 'px';
//         break;

//         case 'ArrowUp':
//         y -= 5;
//         myDiv.style.top = y + 'px';
//         break;    

//         case 'ArrowRight':
//         x += 5;
//         myDiv.style.left = x + 'px';
//         break;  

//         case 'ArrowLeft':
//         x -= 5;
//         myDiv.style.left = x + 'px';
//         break;  
//     }
// }

// const myButton = document.getElementById('myButton');
// const myAnimation = document.getElementById('myDiv');

// myButton.addEventListener('click', begin);

// function begin(){
//     let timerId = null;
//     let x = 0;
//     let y = 0;

//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(x >= 200 || y >= 200){
//             clearInterval(timerId);
//         }
//         else{
//             x+=1;
//             y+=1;
//             myAnimation.style.left = x + 'px';
//             myAnimation.style.top = y + 'px';
//         }
//     }
// }


// let text = 'bmw';
// console.log(text);

// let number = 2;
// console.log(number);

// const cars = ['mercedes', 'bmw', 'audi'];
// console.log(cars);
// console.table(cars);

 class Person{

      constructor(name, age, gender, email){
      this.name = name;
      this.age = age;
      this.gender = gender
      this.email = email;
     }
 }

 const person1 = new Person('SpongeBob', 28, 'male', 'spongebob@gmail.com');
 const person2 = new Person('Patrick', 30, 'male', 'patrick@gmail.com');
 const person3 = new Person('Sandy', 24, 'female', 'sandy@gmail.com');
 const person4 = new Person('Gary', 9, 'male', 'gary@gmail.com');

 const array = [];
 array.push(person1, person2, person3, person4);
 

function changePerson(person) {
    if (person.name === 'Gary') {
        person.name = 'Mr.Krabs'
        person.age = 60;
        person.email = 'mrkrabs@gmail.com';
    }
}

array.forEach(person => {
    changePerson(person);
});

// console.log(array);

const person1Json = JSON.stringify(person1);
const person2Json = JSON.stringify(person2);
const person3Json = JSON.stringify(person3);
const person4Json = JSON.stringify(person4);


// sacuvaj fajl person.txt
// const fs = require('fs');

// function createNewFile() {
//     let fileName = 'person.txt';

//     if (fs.existsSync(fileName)) {
//         let counter = 1;
//         while (fs.existsSync(`person${counter}.txt`)) {
//             counter++;
//         }
//         fileName = `person${counter}.txt`;
//     }

//     const fileContent = `${person1Json}\n${person2Json}\n${person3Json}\n${person4Json}`;

//     fs.writeFile(fileName, fileContent, (err) => {
//         if (err) {
//             console.error('Greska:', err);
//         } else {
//             console.log('Kreirano:', fileName);
//         }

//         fs.readFile(fileName, 'utf8', (err, data) => {
//             if (err) {
//                 console.error('Greska:', err);
//             } else {
//                 console.log('Sadrzaj:', fileName, data);
//             }
//         });
//     });
// }

// createNewFile();


const fs = require('fs');
const archiver = require('archiver');

const file = 'C:/Users/Administrator/Desktop/jm2/person.txt'; 
const imgFile = 'C:/Users/Administrator/Desktop/jm2/bg.jpg'; 
const zipBaseName = 'person';
let zipNumber = 0;

function createZipName(baseName, number) {
  let zipName = `${baseName}_${number}.zip`;
  while (fs.existsSync(zipName)) {
    number++;
    zipName = `${baseName}_${number}.zip`;
  }
  return zipName;
}

const archive = archiver('zip', {
  zlib: { level: 9 } 
});

const zipName = createZipName(zipBaseName, zipNumber);
const zipStream = fs.createWriteStream(zipName);

archive.file(file, { name: 'person.txt' }); 
archive.file(imgFile, { name: 'bg.jpg' }); 

archive.pipe(zipStream);

zipStream.on('close', () => {
  console.log('Fajl zipovan:', zipName);
});

archive.on('error', (err) => {
  console.error('Greška:', err);
});

archive.finalize();






// var obj = {
//     array: []
// };

// obj.array = array.map(person => person.name);
// console.log(obj);

// const blob = new Blob([obj.array], {type: 'text/plain'});
// const url = URL.createObjectURL(blob);
// const link = document.createElement('a');
// link.href = url;
// link.setAttribute('download', 'moj-fajl.txt');
// document.body.appendChild(link);
// link.click();
// document.body.removeChild(link);



//console.log(person1Json, person2Json, person3Json, person4Json);
//   const combinedJson = [person1Json, person2Json, person3Json, person4Json].join(',\n');
//  const blob = new Blob([combinedJson], { type: 'text/plain' });
//  const blobUrl = window.URL.createObjectURL(blob);
//  const link = document.createElement('a');
//  link.href = blobUrl;
//  link.download = 'person.txt';
//  link.click();
//  window.URL.revokeObjectURL(blobUrl);



// console.table(array);

// const found = array.find((element) => element.name === 'Gary' );
// console.log(found, 'Gary');

// const index = array.findIndex((element) => element.name ==='Gary');
// console.log(index);

// if (index >0) {
//  array[index].name = 'Gari';
// }
// console.log(array);
//  const gar = array.find((element) => element.name.includes('Gar'))
//  console.log(gar);

// const male = array.filter((element) => element.gender === 'male');
// console.log(male, 'male');


// const male25 = array.filter((element) => element.gender === 'male' && element.age > 25 );
// console.log(male25, 'male > 25');



//   var datum = new Date();

//   var godina = datum.getFullYear();
//   var mesec = datum.getMonth()+1;
//   var dan = datum.getDate();


//   console.log(godina + '/' + mesec + '/' + dan);


//  var datum = new Date();

//  var datum1 = `${datum.getFullYear()}/${datum.getMonth()+1}/${datum.getDate()}`

//  console.log(datum1);


//  const fileSelector = document.getElementById('file-selector');
//  fileSelector.addEventListener('change', (event) => {
//      const fileList = event.target.files;
//      const reader = new FileReader();
//      reader.addEventListener('load', (event) => {
//          console.log('Prikazi text:')
//          console.log(atob(reader.result.split(",")[1]))
//      });
//      reader.readAsDataURL(fileList[0]);
//  });



// const obj = {
//     lista: []
// };
// obj.lista.push(person1, person2, person3, person4);


// console.log('var obj',obj);

// console.log('json:', JSON.stringify(obj));

// const jsonString = JSON.stringify(obj);
// console.log(JSON.stringify(obj));

// const parsedObj = JSON.parse(jsonString);
// console.log('parsed obj:', parsedObj);

// const element = parsedObj.lista[3];
// console.log('lista [3]:', element);

// const person5 = new Person('Plankton', 45, 'male', 'plankton@gmail.com');
// const jsonString1 = JSON.stringify(person5);
// // console.log(jsonString1);
// const parsedObj1 = JSON.parse(jsonString1);
// console.log('parsed obj1:', parsedObj1);








