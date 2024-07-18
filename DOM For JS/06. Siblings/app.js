// let firstli = document.querySelector("li");
// console.log(firstli);

// //Parent✅ of li will be ul here how we get it

// let firstli = document.querySelector("li");
// // console.log(firstli.parentElement); //ul
// console.log(firstli.parentElement.parentElement); //body
// console.log(firstli.parentElement.parentElement.parentElement.parentElement); //null

//Children✅
// let ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.children[2]);
// console.log(ul.children[0]);

// console.log((ul.children[0].innerText = "one"));

//nextElementsibling✅
// let firstli = document.querySelector("li");
// // console.log(firstli.nextElementSibling.textContent); //1 ka nextElementsibling is 2
// console.log(
//   firstli.nextElementSibling.nextElementSibling.nextElementSibling.textContent);

// PrevioursElementSiblings✅
let fourthli = document.querySelector(".fourth");
console.log(fourthli.previousElementSibling); //3
console.log(fourthli.previousElementSibling.previousElementSibling); //2
