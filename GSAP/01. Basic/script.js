// gsap.to("#box1", {
//   //gsap.to when we want element to move initial to final
//   x: 1327,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
// });
gsap.to("#box2", { x: 900, duration: 2, delay: 1 });
// gsap.from("#box2", {
//   //gsap.from is used when we want element to move final to initial
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "green",
//   borderRadius: "50%",
// });

// gsap.from("h1", {
//   opacity: 0,
//   color: "yellow",
//   Duration: 1,
//   y: 30, //y-axis
//   delay: 1,
//   stagger: 0.5, //bhai ak ak krke aaiga
// });

gsap.to("#box1", {
  x: 1327,
  backgroundColor: "blue",
  rotate: 360,
  duration: 1.5,
  delay: 1,
});

gsap.to("#box2", {
  x: 1327,
  backgroundColor: "green",
  duration: 1.5,
  delay: 2.5, //1.5 + 1 = 2.5
});

gsap.to("#box3", {
  x: 1327,
  backgroundColor: "crimson",
  borderRadius: "50%",
  rotate: 360,
  scale: 0.5,
  duration: 1.5,
  delay: 4, //1.5 + 2.5 = 4
});
