// TweenLite.to("#square", 2, {  left:100,   top: 75,   backgroundColor:"#000000",   ease: Power4.easeIn});

gsap.fromTo(
    ".circle",
    { opacity: 0, y: -25, scale: 0 },
    { opacity: 1, y: 0, scale: 1, duration: 2.5 }
  );

//   let tl = gsap.timeline();
//   toString.toString('.square', {duration: 2, x: 100})

gsap.registerEffect({
    name: "fade",
    defaults: {duration: 2}, 
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 0});
    }
});

gsap.to(".square", {rotation: 27, x: 100, duration: 1});

document.querySelectorAll(".square").forEach(function(box) {
  box.addEventListener("mouseenter", function() {
    gsap.effects.fade(this);
  });
});

// document.querySelector("#restart").onclick = () => tween.restart();

// const gsapEffects = [
//   { 
//     id: "slide",  
//     props: { opacity: 0.5, x: 300, yoyo: true, repeat: -1 }
//   },
// //   { 
// //     id: "fadeSlideFrom", 
// //     animate: 'from',
// //     props: { opacity: 0.25, x: 300, yoyo: true, repeat: -1  }
// //   },
// //   { 
// //     id: "fadeSlideFromTo", 
// //     animate: 'fromTo', 
// //     props: { opacity: 0.1, x: 300}, 
// //     props2: { opacity: 1, x: 600, yoyo: true, repeat: -1  }
// //   }
// ];

// gsapEffects.forEach(effect => {
//   gsap.registerEffect({
//     name: effect.id,
//     defaults: { duration: 1 },
//     extendTimeline: true,
//     effect(targets, config) {
//       if(effect.animate === 'slide'){
//         return gsap.from(targets, {...effect.props,...config })
//       } 
//     //   else if (effect.animate === 'fromTo'){ 
//     //     return gsap.fromTo(targets, {...effect.props,...config }, {...effect.props2})
//     //     }
//       else {
//         return gsap.to(targets, {...effect.props,...config })
//       }
//     }
//   });
// });



// let tl = gsap.timeline();
// tl.fadeSlideTo(".slide")
// //   .fadeSlideFrom(".fadeSlideFrom", 0)
// //   .fadeSlideFromTo(".fadeSlideFromTo", 0)



gsap.set(".slide", {xPercent: -100, yPercent: -100});

const ball = document.querySelector(".slide");
const pos = { x: window.innerWidth / 10, y: window.innerHeight / 10 };
const mouse = { x: pos.x, y: pos.y };
const speed = .15;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");
// let xSetter = gsap.utils.pipe(
    // gsap.utils.clamp(0, 100),    //make sure the number is between 0 and 100
    // gsap.utils.snap(5),          //snap to the closest increment of 5
    // gsap.quickSetter(ball, "x", "px") //apply it to the #id element's x property and append a "px" unit
//   );

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});