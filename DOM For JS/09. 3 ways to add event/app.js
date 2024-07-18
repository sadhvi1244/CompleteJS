// ----------- BAD WAY-----------
// const secondBtn = document.querySelector(".second-btn");
// // secodBtn.oneclick = alert("sadhviiii"); bad way
// //instead do this
// secondBtn.oneclick = function () {
//   console.log("Sadhvi kesarwani");
// };

// ----------- GREAT WAY-----------using addEventListener()

// const best = document.querySelector(".best");
// best.addEventListener("click", function () { //anonnomous function
//   console.log("Welcome to United University!");
// });

//or we can also write seperate function

// const best = document.querySelector(".best");
// function greeting() {
//   console.log("welcome to UU!.......");
// }
// best.addEventListener("click", greeting);

//or we can also write arrow function

// const best = document.querySelector(".best");

// best.addEventListener("click", () => {
//   console.log("welcome to United U!.......");
// });

//or we can also write in one line

// best.addEventListener("click", () => console.log("welcome to U U!!!!"));

// ----------- Event (e) Object -----------
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value); //all event object is sowing
}); //bhai ye page ko reload  krr de raha hai  to prevent this default behaviour we use event
