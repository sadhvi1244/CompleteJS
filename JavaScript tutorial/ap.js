//Date and Time

//year, month , day , hour ,minutes ,seconds , miliseconds

// const currentDate = new Date(2024, 2, 24, 12, 30, 0, 0);
// console.log(currentDate);

// const data = new Date();

// const year = data.getFullYear();
// const month = data.getMonth() + 1; // Adding 1 to get the correct month (The getMonth() method returns a zero-based index for the month, where January is represented by 0, February by 1, and so on. To get the actual month number (1 for January, 2 for February, etc.), we need to add 1 to the result.)
// const day = data.getDate(); // Getting the day of the month
// const hours = data.getHours();
// const minutes = data.getMinutes();
// const milliseconds = data.getMilliseconds(); // Correct method name

// console.log(`year: ${year}`);
// console.log(`month: ${month}`);
// console.log(`day: ${day}`);
// console.log(`hours: ${hours}`);
// console.log(`minutes: ${minutes}`);
// console.log(`milliseconds: ${milliseconds}`);

// //date to String

// const date = new Date();

// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());

// date.setDate(date.getDate() + 1);
// date.setDate(date.getDate() - 1);
// console.log(date);

//setInterval() :The setInterval() method keeps calling the specified function at regular intervals until either:
//You explicitly call clearInterval() to stop it.The window is closed.

// setInterval(
//   () => console.log(`This is function will be executed every 2 seconds`),
//   2000
// );

//setTimeout() :setTimeout()method executes the specified function only once, after the given time interval.

// setTimeout(function () {
//   console.log(`This function will be executed after 3 seconds`);
// });

// // Use setTimeout() for delayed execution (once).
// // Use setInterval() for repeated execution at regular intervals.

// //Stop the interval after 10 seconds
// const intervalID = setInterval(function () {
//   console.log(`This function is being executed at the interval.`);
// }, 1000);

// //Stop the interval after 10 seconds
// setTimeout(function () {
//   console.log(`Interval Stopeed`);
// }, 10000);

//Strings or Literals in js
console.log(`This is some random text.`);
const x = "Sadhvi";
const y = "webDev";

//console.log("This is message " + x + " " + y);
//console.log(`My name is ${x} ${y}`);

console.log(`${["zero", "one", "two", "three", "four"]}`);

function infos() {
  return ` my name is Sadhvi webDev & I'm 19 years young.`;
}

console.log(`${infos()}`); //isko likhne ke baad return value hoga jaiga (iske bina pura function hi aisa aa raha hai)

const text = `The quick
browm fox
jumps over
the lazy dog`;

console.log(text);

//Arrow Function in js :it is also known as fat arrow function are a consize and shorter way to define function in js. they are introduce in ES6 and provide a more compact syntax compared to traditional function expression.

//old way
// function wishes(username) {
//   return `hello ${username}`;
// }

// console.log(wishes("Anu"));

//new arrow function
wishes = (username, age) => {
  return `hello ${(username, age)}`;
};
console.log("Sadhvi,19");

friend = (name) => `hello ${name}`;

console.log("pooja");

//another example by old ways
// function double(number) {
//   return number * 2;
// }

// console.log(double(2));
// console.log(double(5));

// const double = (n) => n * 2;

// console.log(double(10));

//Refactor this code to es6 arrow funtions
//old way
// setTimeout(function () {
//   console.log("hello");
//   setTimeout(function () {
//     console.log("hii");
//     setTimeout(function () {
//       console.log("Namaste");
//       setTimeout(function () {
//         console.log("Bonjour");
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

//Refactor this code to es6 arrow funtions
// setTimeout(() => {
//   console.log("hello");
//   setTimeout(() => {
//     console.log("hii");
//     setTimeout(() => {
//       console.log("Namaste");
//       setTimeout(() => {
//         console.log("Bonjour");
// //       }, 2000);
// //     }, 2000);
// //   }, 2000);
// // }, 2000);

// //enhanced object literals, introduce in es6 are a set of enhancement to the syntax for defining object in js . these enhancement make it more convenient and consize to define object properties and methods

// //old ways
// // function user(name, age, work) {
// //   return {
// //     name: name,
// //     age: age,
// //     work: work,
// //   };
// // }

// // const anu = user("anu", 19, "programer");
// //const pyu = user("pyu",18,"coder");
// // console.log(anu);
// //console.log(pyu);

// //new ways introduce in es6 in js
// function user(name, age, work) {
//   //in enhancement literals bhai property t=hta do return se
//   return {
//     name,
//     age,
//     work,
//     intro: function () {
//       //old ways to write a function
//       console.log(
//         `My name is ${name} & I'm ${age} years young & I'm work as a ${work}`
//       );
//       // intro() {
//       //   //using enhancement literral
//       //   console.log(
//       //     `My name is ${name} & I'm ${age} years young & I'm work as a ${work}`
//       //   );
//       // intro: () => {
//       //   //using arrow function
//       //   console.log(
//       //     `My name is ${name} & I'm ${age} years young & I'm work as a ${work}`
//       //   );
//     },
//   };
// }

// const anu = user("anu", 19, "programer");
// const pyu = user("pyu", 18, "coder");
// console.log(anu.intro());
// console.log(pyu);

//another example of enhanced object literals
//old ways
// const a = 1;
// const b = 2;
// const c = 3;

// const obj = {
//   a: a,
//   b: b,
//   c: c,
// };

//using enhancement literals

// const a = 1;
// const b = 2;
// const c = 3;

// const obj = {
//   a,
//   b,
//   c,
// };
// console.log(obj);

//another example
//old ways
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };
// console.log(lib.sum(2, 3)); //5
// console.log(2, 3); //6

//new using enhanced object literals
// const lib = {
//   sum: (a, b) => a + b,
//   mult: (a, b) => a * b,
// };

// console.log(lib.sum(2, 3)); //5
// console.log(lib.mult(2, 3)); //6

//default function parameters, introduced in (ES6) , allow you to assign default values to functoin parameters. when a function is called , and an argument is not provided for a parameter , the default value will be used instead. this features makes it easier to handle cases where arguments might be missing or undefined.

// function countTo5(count = true) {
//   if (count == true) {
//     for (let i = 1; i <= 5; i++) {
//       console.log(`count: ${i}`);
//     }
//   }
// }

// countTo5(); //run successfully no error showing
// countTo5(false); // excuted
// countTo5(true); //run successfully

// //another example
// function rating(rate = 0) {
//   if (rate == 5) {
//     console.log(`high rating :) `);
//   } else if (rate == 0) {
//     console.log(`low rating :( `);
//   }
// }

// rating(5); //high
// rating(); //low by defalut parameters
// rating(0); //low

// //another example
// function multiply(a, b = 2) {
//   return a * b;
// }

// console.log(multiply(3));

// //Spread operator in function , array and object
// //1. function

// function giveMe4(a, b, c, d) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// }

// const color = ["red", "green", "blue", "teal"]; //array

// //giveMe4(1, 2, 3, 4);
// //giveMe4(color); //only a ki value a [ 'red', 'green', 'blue', 'teal' ] ye show hogi
// giveMe4(...color); //spread operator now sbko color mill gya

// //2. Array
// const strNums = ["one", "two", "three"];
// const moreStrNums = ["four", "five", "six"];

// const concat = [...strNums, ...moreStrNums];
// console.log(concat);

// let people = ["Sadhvi", "Simran", "Pooja"];
// //console.log("Anushaka", ...people);
// const allPeps = ["Jaya", ...people, "Gauri"];
// console.log(allPeps);

// //3.objects
// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// let person = {
//   name: "Sadhvi",
//   age: 19,
//   gender: "female",
// };

// const clone = { ...person, work: "Programmer", location: "prayagraj" };
// console.log(clone);
// //another example
// let arr = [1, 2, 3];
// let arr2 = [4, 5];

// const arr3 = [...arr, ...arr2];
// console.log(arr3);
// //another example

// const user01 = {
//   name: "Sadhvi",
//   age: 19,
// };
// const cloneduser = { ...user01 };
// console.log(cloneduser);

//Rest operator
//The reat parameters syntan alllows a function to accept an ondefinite number of argument
//as an array , providing a way to represent variadic function in js.

// function user1(...userData) {
//   console.log(userData);
// }
// user1("Anu", 19, "programmer", "football");

// //another example
// function person(fName, lName, ...hobbies) {
//   console.log("fName: ", fName);
//   console.log("lName: ", lName);
//   console.log("hobbies: ", hobbies);
// }
// person("anu", "kesarwani", "playing", "singing", "learning new things");

// function variadic(...params) {
//   console.log(params);
// }
// console.log("anu");

//destructuring

//old way
// const foo = ["one","two","three"];
// console.log(foo[0]);
// console.log(foo[2]);
// console.log(foo[1]); ....aise hi call krte hai lo 1000 times call krna ho to?
//it is not good way that's why we use destructuring

// const foo = ["one", "two", "three"];
// // const [one, two, three] = foo;
// // console.log(one);
// // console.log(two);
// // console.log(three);

// const [red, yellow, green, blue, pink] = foo;
// console.log(red); //one
// console.log(blue); //undefined

// let a, b;

// [a = 5, b = 8] = ["one", "two"];
// console.log(a);
// console.log(b);

// function f() {
//   return [1, 2];
// }
// let a, b;
// [a, b] = f();
// console.log(a);
// console.log(b);

// const [c] = f;
// console.log(c);

// function f() {
//   return [1, 2, 3];
// }
// const [a, , b] = f();
// console.log(a);
// console.log(b);

//assignment the rest of an array to a variable
// const [a, ...b] = ["one", "two", "three", "true", 12];

// console.log(a);
// console.log(b);

// const person = {
//   name: "john doe",
//   age: 30,
//   gender: "male",
//   country: "USA",
// };
// const { name: personName, age: personAge, country: personCountry } = person;
// console.log(personName);
// console.log(personAge);
// console.log(personCountry);
// function printinfo(params) {

// }

//destructuring mixture
// const data = {
//   user: {
//     id: 123,
//     name: "John",
//     age: 30,
//     email: "john1@gmail.com",
//     address: {
//       city: "New York",
//       country: "USA",
//     },
//     hobbies: ["reading", "painting", "cooking"],
//     scores: {
//       math: 95,
//       science: 88,
//       history: 75,
//     },
//   },
// };

// const products = [
//   { id: 1, name: "laptop", price: 1000 },
//   { id: 2, name: "phone", price: 800 },
//   { id: 3, name: "Tablet", price: 500 },
// ];
// const settings = {
//   darkMode: true,
//   notifications: {
//     email: true,
//     sms: false,
//     push: true,
//   },
//   language: "English",
// };
//destructuring

//The "for...in" loop in js is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property name) of an object.
//for (let key in object)  {...}

// let person = {
//   name: "anu",
//   age: 19,
//   gender: "male",
// };

// for (let keys in person) {
//   console.log(keys, person[keys]);
// }
// //another example of for ...in loop
// let list = ["one", "two", "three"];
// for (let index in list) {
//   console.log(`${index}: ${list[index]}`);
// }

// //another example
// const object = { a: 1, b: 2, c: 3 };

// for (let key in object) {
//   console.log(`${key}:${object[key]}`);
// }

//The "for...of" loop in js is a modern iteration statement introduced in es6 that provides a consize and easy way to loop over element in iterable objects like array, string , maps, sets, and more.it allows you to iterate directly over the value of the element, rather then dealing with their indices or keys , which makes the code more readable and less error-prone.

//for(variable of iterable) {...}

// let peoples = ["anu", "pyu", "lov"];
// for (let people of peoples) {
//   console.log(people);
// }

// // const text1 = "Hello";
// // for (const char of text1) {
// //   console.log(char);
// // }

// // //another ex
// // const arr = ["a", "b", "c"];
// // for (const element of arr) {
// //   console.log(element);
// // }

// //forEach
// //when we call the forEach helper we pass in  annonymous callback function,
// //this function gets called one time for every element in the array whenever is inside the function that logic happens

// // for (var i = 0; i < colors.length; i++) { //yaha per itna likhna padhta then under logic likhte hai this is sucked.
// //   console.log(colors[i]);
// // }
// //this is why array for forEach is introduced
// const colors = ["teal", "blue", "red", "yellow"];

// colors.forEach((color) => console.log(color));
// //(color) => console.log(color)only this it is callback person forEach method

// const words = ["anu", "hello", "happy", "best", "good", "mercy"];

// const capWords = words.forEach((word, index, arr) => {
//   arr[index] = word[0].toUpperCase() + word.substring(1);
// });
// console.log(words);

// let number = [1, 2, 3, 4, 5];
// let sum = 0;
// function adder(number) {
//   sum += number;
// }
// number.forEach(adder);
// console.log(sum);

// //The Map() method creates a new array populated with the result of calling a provided functon on every element in the calling array.
// let numbers = [1, 2, 3, 4, 5];
// let double = numbers.map((num) => num * 2);
// console.log(double);

// //instead of forEach ,here we use map helper.
// //map() method give answer in different array (mean it use another array) while forEach() method modified the same array

// // let numbers = [1, 2, 3, 4, 5];
// // let double = number.map((num) => num * 2);
// // console.log(number); if we call number it show [1, 2, 3, 4, 5] this means this array is not modify basically it give answer in another array.

// let people = [
//   { fName: "anu", lName: "kes" },
//   { fName: "pyu", lName: "sak" },
//   { fName: "dodo", lName: "ji" },
// ];

// const result1 = people.map((person) => {
//   return [person.fName, person.lName];
// });
// console.log(result1);

// const arr01 = [1, 4, 6, 3, 5];
// function myFunction(arr01) {
//   return arr01 * 2;
// }

// const newArr = arr01.map(myFunction);
// console.log(newArr);

// //map over each item in that arrAY , and multiply each item by 10
// const arr0 = [5, 4, 3, 2, 1, 0];
// function myfun(arr0) {
//   return arr0 * 10;
// }
// //filter() method is a built-in array method in js that allows you to create a new array containing element that pass a certain condition . it provides a clean and consize way to filter out element from an array based on a specified criteria

// const songs = [
//   { name: "tuje sochta hua", duration: "4.85" },
//   { name: "marjawan", duration: "3.45" },
//   { name: "kabhi tumhe yaad meri aai", duration: "2.79" },
//   { name: "ishq vala lov", duration: "1.45" },
//   { name: "kehte hai huda ne", duration: "5.63" },
// ];
// console.log(songs.filter((song) => song.duration > 3));

// const computers = [
//   { ram: 4, hdd: 100 },
//   { ram: 8, hdd: 200 },
//   { ram: 16, hdd: 300 },
//   { ram: 32, hdd: 400 },
//   { ram: 64, hdd: 500 },
// ];
// console.log(computers.filter((computer) => computer.ram > 16));

// const ages = [18, 20, 16, 15, 30, 32];

// function checkAdult(age) {
//   return age >= 18;
// }
// const res = ages.filter(checkAdult);
// console.log(res);

// //print only those words which length is greater than 6

// const words0 = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberrant",
//   "destruction",
//   "present",
// ];
// const result01 = words0.filter((word) => word.length > 6);
// console.log(result01);

//find() helper method is another build in array helper in js that allows you to find the first element in an array that matches a specific condition. it return the value of the first element that satisfies the given testing function, or undefined if no element is found

const posts = [
  { id: 1, content: "Good post" },
  { id: 2, content: "funny post" },
  { id: 3, content: "Good post" },
  { id: 4, content: "Good post" },
  { id: 4, content: "funny post" },
];

// const postRes = posts.find((post) => post.content === "Good post"); //it consider id 1 (id 1 vala always 1st hi aaiga) aur unke niche vala repeat hoga to recent vala aaiga
const postRes = posts.find((post) => post.content === "funny post"); //it consider id 2
console.log(postRes);

const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

const res = ages.find(checkAge);
console.log(res);

//The every() and some() are two built in array methods in js that allow you to check the element of an array besed on a given condition. both methods take a callback function as an argument, which is applied to each element of the array

//the every() method test whether all element in the array pass the condition specified by the provided callback funciton. it returns true if the callback function returns true for every element ,and false if any element fails the condition.

//the some() method tests whether at least one element in the array passes the condition specified by the provided callbakc functon. it returns true if the callback function returns true for at least one element , and false if no element passes the condition.

// const peoples02 = ["anus", "pyu", "dodo", "lov", "dov"];

// const ans = peoples02.every((people) => people.length === 4);
// const ans1 = peoples02.some((people) => people.length === 4);
// console.log(ans);
// console.log(ans1);
// //Refactor -> use every and some method

let products = [
  { name: "chechkers", category: "toys" },
  { name: "harry potter", category: "books" },
  { name: "iphone", category: "electronics" },
  { name: "learn php", category: "books" },
];
//do all products have a category of books?

const ansAll = products.every((product) => product.category === "books");

const ansSome = products.some((product) => product.category === "books");
console.log(ansAll);
console.log(ansSome);

//reduce() method applies the reducer functon to each element of an array , accumulating the result into single value. it is often used to perform calc or aggregation on array element and simplify the array into a single value

const num01 = [1, 2, 3, 4, 5];
const sum = num01.reduce((p, c) => {
  console.log(`previous: ${p}`);
  console.log(`current: ${c}`);
  return p + c;
  // Initial state: p = 0
  // Iteration 1: p = 0, c = 1, sum = p + c = 1
  // Iteration 2: p = 1, c = 2, sum = p + c = 3
  // Iteration 3: p = 3, c = 3, sum = p + c = 6
  // Iteration 4: p = 6, c = 4, sum = p + c = 10
  // Iteration 5: p = 10, c = 5, sum = p + c = 15
}, 0);
console.log(sum);
// p is previous value of array
// c is a current value of array
// 0 is a initial value

const people02 = [
  {
    name: "anu webDev",
    age: 19,
  },
  {
    name: "sadhvi SDE-II",
    age: 22,
  },
  {
    name: "dodo ji",
    age: 20,
  },
];

const oldestAge = people02.reduce((p, c) => (c.age > p ? c.age : p), 0);
console.log(oldestAge);

//{} for multiple line
//() for one line
//(c.age > p ? c.age : p) here ternary operator is used

const words02 = [
  "apple",
  "banana",
  "orrange",
  "banana",
  "apple",
  "orrange",
  "grape",
];
const wordFrequency = words02.reduce((frequencyMap, word) => {
  frequencyMap[word] = frequencyMap[word] || 0 + 1;
  return frequencyMap;
}, {});
console.log(wordFrequency);

function calcproduct(arr) {
  return arr.reduce((accumlator, currentValue) => accumlator * currentValue);
}
const numbers = [20, 100];
const product = calcproduct(numbers);
console.log(product);

//Map is a built-in data Structure introduced in ES6 that allow you to store key-value pairs where both the keys and value can be of any data type. ti is similar to an object, but wih a few key differences.

//->So in maps keys can be of any type : unlike object , where keys are limited to string and symbol , Map allows you to use any DATA TYPE as key , including numbers , booleans , object , and even other map instances.

//->Maintain insertion order: Map preserves the order of key-value pairs as they were inserted , while object keys may not be guaranted to be in a specific order.

//->Intertion: Map provides built-in methods for easy iteration over its element.

const map = new Map();
const keyOne = "string";
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, "Value of Key one");
map.set(keyTwo, "value of key two");
map.set(keyThree, "value of key three");
console.log(map);
