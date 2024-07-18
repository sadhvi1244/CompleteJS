const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", (event) => {
  const xPos = event.clientX;
  const yPos = event.clientY;
  const spanE1 = document.createElement("span");
  spanE1.classList.add("emoji");
  spanE1.style.left = `${xPos}px`;
  spanE1.style.top = `${yPos}px`;
  spanE1.textContent = "💗";
  bodyE1.appendChild(spanE1);

  setTimeout(() => {
    spanE1.remove();
  }, 1000); // remove the span after 1 second
});
