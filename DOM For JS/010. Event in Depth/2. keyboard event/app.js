// https://www.w3schools.com/jsref/obj_keyboardevent.asp

const input = document.querySelector("input");

// input.addEventListener("keypress", () => {
//   console.log("key press");   //just press event fire
// });

// input.addEventListener("keyup", () => {
//   console.log("keyup"); //press any button(hold) when we release button event will fire
// });

// input.addEventListener("keydown", () => {
//   console.log("keydown");
// });

//USEFULL PROPERTIES AND METHODS

// input.addEventListener("keypress", (e) => {
//   console.log(e.charCode); //it write character code ex: a = 97
// });

// input.addEventListener("keypress", (e) => {
//   console.log(e.code); //it write code ex: a = keyA
// });

// input.addEventListener("keypress", (e) => {//true: when ctrl key is hold //false: if it not the case

//   console.log(e.ctrlKey); //it will check that did the user hold that key while pressing some sort of key
// });

input.addEventListener("keypress", (e) => {
  console.log(e.key); //it just print all the keys that your are pressing
});

input.addEventListener("keypress", (e) => {
  console.log(e.shiftKey); //it just print all the keys that your are pressing
});
