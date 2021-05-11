gsap.fromTo(
    ".circle",
    { opacity: 0, y: -25, scale: 0 },
    { opacity: 1, y: 0, scale: 1, duration: 2.5 }
  );

// fades the square
gsap.registerEffect({
    name: "fade",
    defaults: {duration: 2}, 
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 0});
    }
});

// rotates the square
gsap.to(".square", {rotation: 27, x: 100, duration: 1});

document.querySelectorAll(".square").forEach(function(box) {
  box.addEventListener("mouseenter", function() {
    gsap.effects.fade(this);
  });
});

// rectangle that follows the mouse
gsap.set(".slide", {xPercent: -50, yPercent: -50});

const rectangle = document.querySelector(".slide");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = .35;

const xSet = gsap.quickSetter(rectangle, "x", "px");
const ySet = gsap.quickSetter(rectangle, "y", "px");

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