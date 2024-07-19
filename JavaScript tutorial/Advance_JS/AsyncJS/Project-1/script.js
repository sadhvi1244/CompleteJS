// setTimeout(function () {
//   console.log("Sadhvi");
// }, 2000);

const SaySadhvi = function () {
  console.log("Sadhvi");
};

const changeText = function () {
  document.querySelector("h1").innerHTML = "best JS Series";
};

const changeMe = setTimeout(changeText, 3000);

document.querySelector("#stop").addEventListener("click", function () {
  clearTimeout(changeMe);
  console.log("stopped");
});
