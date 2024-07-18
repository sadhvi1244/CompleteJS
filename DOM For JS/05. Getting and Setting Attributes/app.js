// href
// value
// type
// getAttribute(attrName)  (later📈)
// setAttribute(attrName, value)  (later📈)

//herf()
// const a = document.querySelector("a");
// console.log(a.href); //it give the value of herf (link)
//if we want to change link
// console.log((a.href = "www.google.com"));

//value()
// const input = document.querySelector("input");
// // console.log(input.value); //if we dont have value it will show nothing
// console.log(input.value); //if we write value <input type="text" value="hello" /> it will show value in textarea

//type()
// const input = document.querySelector("input");
// console.log(input.type); //it will show type email/text

// const a = document.querySelector("a");
// console.log(a.href);  //you will get those link

//if you want to change the link
// const a = document.querySelector("a");
// console.log((a.href = "www.facebook.com"));

// const a = document.querySelector("a");
// const input = document.querySelector("input");
// console.log(input.value); //nothing show coz there nothing written in textarea
// // i write value <input type="text" value="bye"/>  now it is showing bye
// console.log(input.type); //it will show text

//setAttribute(attrName, value) --it is for setting Attributes
// // Setting the href attribute for a link element
a.href = "https://www.youtube.com";

// Setting the value of an input element and logging the result
input.value = "good";
console.log(input.value); // Logs: "good"

// Setting the type of an input element to "password" and logging the result
input.type = "password";
console.log(input.type); // Logs: "password"
