// classlist

// add()

// remove()

// toggle()

const h1 = document.querySelector("h1");
// console.log(h1.classList);

//add() --if we want to attatched class with h1 tag by using javaScrpit DOM
// h1.classList.add("styles"); //bhai uske sath style attached ho gya 😶

//remove() --if your want to remove class from h1 use this
// h1.classList.remove("styles");  //bhai css ki property hat gye 👍
//h1.classList.remove("apple"); if we write apple it will not remove any class beacuse we don't have apple class in classlist

//toggle() --if you want have a class it remove it and if you dont have a class it will add this
// h1.classList.toggle("apple");  //and you find in element that apple class is made
// h1.classList.toggle("styles"); //it will add class style if you dont put on html
h1.classList.toggle("styles"); //if you put style class on html and also provide style here then it will remove class property
