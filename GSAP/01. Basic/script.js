//simple animation in div(box)

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

//Animation in text

// gsap.from("h1", {
//   opacity: 0,
//   color: "yellow",
//   Duration: 1,
//   y: 30, //y-axis
//   delay: 1,
//   stagger: 0.5, //bhai ak ak krke aaiga
// });

//Some more Animation in box but problem arise due to time managament between elements for animation

// gsap.to("#box1", {
//   x: 1327,
//   backgroundColor: "blue",
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// gsap.to("#box2", {
//   x: 1327,
//   backgroundColor: "green",
//   duration: 1.5,
//   delay: 2.5, //1.5 + 1 = 2.5
// });

// gsap.to("#box3", {
//   x: 1327,
//   backgroundColor: "crimson",
//   borderRadius: "50%",
//   rotate: 360,
//   scale: 0.5,
//   duration: 1.5,
//   delay: 4, //1.5 + 2.5 = 4
// });

//Animation in box with timeline

// var tl = gsap.timeline();

// tl.to("#box1", {
//   x: 1200,
//   backgroundColor: "blue",
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// tl.to("#box2", {
//   x: 1200,
//   duration: 1.5,
// });

// tl.to("#box3", {
//   x: 1200,
//   duration: 1.5,
// });

//Animation in navbar with timeline in navbar
var tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0, //0 to 1
  duration: 0.6,
  delay: 0.5,
});

tl.from("h4", {
  y: -20,
  opacity: 0, //0 to 1
  duration: 1,
  stagger: 0.3,
});

tl.from("h1", {
  y: 20,
  opacity: 0, //0 to 1
  duration: 0.3,
  stagger: 0.2,
});
