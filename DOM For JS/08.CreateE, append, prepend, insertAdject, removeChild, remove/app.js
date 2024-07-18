// ------------------*------------------
// createElement()✅

// const h1 = document.createElement("h1"); //create anything section, article ,anchor(a) anything
// console.log(h1);
//add content to it 📈
// h1.textContent = "Hii Sadhvi Kesarwani";
// console.log(h1.textContent);
// //we can also provide classes to it📈
// h1.classList.add("greeting");
// console.log(h1);
// //we can also remove class📈
// h1.classList.remove("greeting");
// console.log(h1);

// appendChild()✅
const h1 = document.createElement("h1");
h1.textContent = "Hii Sadhvi Kesarwani";
h1.classList.add("greeting");
const body = document.body;
//if we want to append h1 to body we do this
body.appendChild(h1); //it will present in the bottom

/* insertAdjacentElement( ✅
    'beforebegin'📈
    'afterend'📈
    'beforeend'📈
    'afterend',📈
    element📈
) */

// append()✅
// const ul = document.querySelector("ul");
// const newli = document.createElement("li");
// newli.innerText = "B.tech";
// ul.appendChild(newli);

// const firstLi = document.querySelector(li);
// //selector.insertBefore(what,where)
// ul.insertBefore(newli, firstli);

// prepend()✅
// insertBefore()✅

/* insertAdjacentElement( ✅
    'beforebegin'📈
    'afterend'📈
    'beforeend'📈
    'afterend',📈
    element📈
) */

// const firstp = document.querySelector("p"); //select paragraph
// const i = document.createElement("i");
// i.innerText = "i'm italics";
// i.style.color = "skyblue";
// // firstp.insertAdjacentElement(where,what we have to insert)
// firstp.insertAdjacentElement("beforebegin", i);
// firstp.insertAdjacentElement("afterbegin", i);
// firstp.insertAdjacentElement("beforeend", i);
// firstp.insertAdjacentElement("afterend", i);

//Append and Prepend✅
let section = document.querySelector("section");
const i = document.createElement("i");
i.innerText = "i'm italics";
i.style.color = "skyblue";

// section.append(i);
// section.prepend(i);

// const h4 = document.createElement("h4");
// h4.innerText = "Sadhvi";
// h4.style.color = "Orange";

// section.append(i, h4);

// const span = document.createElement("span");
// span.innerText = "Sadhvi";
// span.style.color = "Orange";

// section.append(i, span);
// section.prepend(i, span);

// removeChild()✅
// remove()✅

const newlist = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");
newlist.removeChild(fourth); //4 is remove form new list

//if you want to remove All at once use remove()
newlist.remove(); //and boom all list is remove

// -----------------*-------------------
