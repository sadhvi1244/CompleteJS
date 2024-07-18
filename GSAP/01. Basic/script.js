gsap.to("#box1", {
  //gsap.to when we want element to move initial to final
  x: 1327,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
});

// gsap.to("#box2", {
//   x: 900,
//   duration: 2,
//   delay: 1,
// });
gsap.from("#box2", {
  //gsap.from is used when we want element to move final to initial
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "green",
  borderRadius: "50%",
});

// gsap.to("#box"){

// }
