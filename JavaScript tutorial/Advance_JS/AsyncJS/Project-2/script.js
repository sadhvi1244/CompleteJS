const sayDate = function (str) {
  console.log(str, Date.now());
};

// setInterval(sayDate, 1000, "hii hello namaste");

let intervalId;

document.querySelector("#start").addEventListener("click", function () {
  if (!intervalId) {
    // Check if intervalId is not already set
    intervalId = setInterval(sayDate, 1000, "hii hello namaste");
  }
});
document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null; //reset intervalId
  console.log("Stopped");
});
