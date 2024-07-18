var img = document.querySelector("#container img");
var lov = document.querySelector("i");

img.addEventListener("dblclick", function () {
  lov.style.transform = "translate(50%, -50%) scale(1)";
  lov.style.opacity = 0.8;
  setTimeout(function () {
    lov.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    lov.style.transform = "translate(50%, -50%) scale(0)";
  }, 2000);
});

//settimeout is a inbuild function/method of browser to  make delay
