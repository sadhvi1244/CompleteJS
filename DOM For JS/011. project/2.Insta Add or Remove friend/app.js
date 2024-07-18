const istatus = document.querySelector("h5");
const btn = document.querySelector("#addf");

// const addfriend = document.querySelector("#addf");
// const removefriend = document.querySelector("#removef");

let check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    btn.style.color = "black";
    btn.style.backgroundColor = "#dadada"; // Example color change
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "cadetblue"; // Example color change
    check = 0;
  }
});

// addfriend.addEventListener("click", function () {
//   istatus.innerHTML = "Friends";
//   istatus.style.color = "green";
// });

// removefriend.addEventListener("click", function () {
//   istatus.innerHTML = "Strangers";
//   istatus.style.color = "red";
// });

//now we have work on single button
