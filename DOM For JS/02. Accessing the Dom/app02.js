//************ Dom Selectors ********

//1. getElementsByTagName  (to select anything in we use document)
// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByTagName("h1").length);

//2. getElelemntById
// console.log(document.getElementById("main"));
// console.log(document.getElementById("id-1"));

//3. getElelemntByClassName  (it select all class)
//console.log(document.getElementsByClassName("cls"));

//4. querySelector
// console.log(document.querySelector("h1"));
// console.log(document.querySelector(".cls"));

//if something is not present it shows null
// console.log(document.querySelector(".sadhvi"));  //null
//write id like this
// console.log(document.querySelector("#id-1"));
//if there are multiple same class it only selet first one
// console.log(document.querySelector(".cls"));
// console.log(document.querySelector("li"));
//if your want to select all there are are one more method i.e. querySelectorAll

//5. querySelectorAll

// console.log(document.querySelectorAll(".cls"));
// console.log(document.querySelectorAll("li"));
//------------------------------------

//***********Storing data in variable*****************

// const h1 = document.querySelector("h1");  //name doest not matter
// console.log(h1);
// const apple = document.querySelector("h1");
// console.log(apple);

// const list = document.querySelector("li");  //only show 1st element of list
// console.log(list);

// const list = document.querySelectorAll("li");  //show all list
// console.log(list);

//
