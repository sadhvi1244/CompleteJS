console.log("hello");

let desc = `this is some random
text i dont understand`;
console.log(desc);

//array
const numberArray = [1, 3, 5, 6, 0];
console.log(numberArray);
//or we can also write this

const num = [3, 5, 6, 6, 42, 9];
console.log(num);

const strArr = ["code", "Stunday", "eat", "sleep"];
console.log(strArr);

// //for loop
// for (let j = 0; j <= 8; j++) {
//   console.log("hello pooja", j);
// }

//while loop

// let i = 10;
// while (1 <= 10) {
//   console.log("Sadhvi Kesarwani");
//   i++;
// }

//do while

// let a = 1;

// do {
//   console.log("hello World", a);
//   a++;
// } while (a <= 5);

//objects

const car = { type: "fait", model: "501", color: "white" };
console.log(typeof car); //object

console.log(car.type);
console.log((car.type = "Toyota"));
console.log(car);

car.wheels = 4;
console.log(car);

//function
function greet() {
  console.log("hello from a function");
}

greet();

//function declareation
sayhello("Simran"); //it will working
function sayhello(name) {
  console.log(`hello ${name}`);
}

sayhello("Sadhvi");
sayhello("Pooja");
sayhello("Simran");
sayhello("Jaya");
sayhello("Gauri");

function myfun(p1, p2) {
  return p1 * p2;
}
let x = myfun(4, 6);
console.log(x);

//function expression
//greetings("Anushka"); //it will show an error
const greetings = function (user) {
  console.log(`suno ${user}`);
};

greetings("sadhvi");
greetings("pooja");

//callBack function: when we provide function as an (argument) to other function that function is knowns as a callback function.
// function showCallFunc(fn) {
//   const value = 10;
//   fn(value);
// }
// showCallFunc(function (value) {
//   console.log(value);
// });

//examples

// function greets(name, cd) {   //either do this way
//   console.log(`hello ${name}`);
//   cb();
// }
// function cb() {
//   console.log(`Thank you so much giving me this wonderful life.`);
// }

// greets("God", cb);

function greets(name, cb) {
  //or do this way
  console.log(`Hello ${name}`);
  cb(); // Call the callback function
}

greets("God", function cb() {
  console.log(`Thank you for giving me this wonderful life.`);
});
//scope of JS: Global variable and Local varible

// let textMessage = "hi"; //Global varable
// {
// }
// console.log(textMessage);

// {
//   let textMessages = "hi"; //Local varable
// }
// console.log(textMessage);

let text = "hi"; //global
console.log(text);

function showmessage() {
  let text = "hello"; //local variable
  console.log(text);
}

showmessage();

//Method in JS
function wish() {
  return `hello, my name is ${person.name} & I am ${person.age} year old.`;
}

const person = {
  name: "dodo",
  age: 30,
  wish,
};

console.log(person.wish());

//another way to create the method inside the object in js
const persons = {
  name: "Anu",
  age: 19,
  greeting: function () {
    return `hello, my name is ${persons.name} & I am & ${persons.age} years old.`;
  },
};
console.log(persons.greeting());

const info = {
  name: "Anu",
  age: 20,
  email: "sadhvikesarwani1@gmail.com",
  isSubscribed: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "Prayagraj",
    idk: true,
  },
};

//Json.stringy() //it will convert js objectc into json string
//json.parse()
const jsonString = JSON.stringify(info);
const parseObject = JSON.parse(jsonString);
console.log(parseObject);
