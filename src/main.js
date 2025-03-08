import "./style.css";
import gsap from "gsap";

const tl = gsap.timeline({ 
  defaults: { ease: "power1.inOut" },
  repeat: -1,  
  repeatDelay: 1 
});

tl.to("#button", {
  y: 5, 
  duration: 0.1
})
.to("#button", {
  y: 0, 
  duration: 0.1
})

.to({}, { duration: 1 })
.to("#flash", {
  opacity: 1, 
  duration: 0.02
})
.to("#flash", {
  opacity: 0, 
  duration: 0.05
}, "+=0.1") 

.to("#image", {
  x: 150,
  duration: 3
})
.to("#image", {
  x: 0, 
  duration: 3
});

gsap.to("#E", {
  fill: "#455433", 
  duration: 0.5, 
  repeat: -1, 
  yoyo: true, 
  ease: "power1.inOut", 
});

gsap.to("#L", {
  fill: "#54663e", 
  duration: 0.5, 
  repeat: -1, 
  yoyo: true, 
  ease: "power1.inOut", 
});

gsap.to("#L2", {
  fill: "#657a4b", 
  duration: 0.5,
  repeat: -1, 
  yoyo: true, 
  ease: "power1.inOut", 
});

gsap.to("#I", {
  fill: "#748c56", 
  duration: 0.5, 
  repeat: -1, 
  yoyo: true, 
  ease: "power1.inOut", 
});

gsap.to("#N", {
  fill: "#829e60", 
  duration: 0.5, 
  repeat: -1,
  yoyo: true, 
  ease: "power1.inOut", 
});

gsap.to("#O", {
  fill: "#91b06b",
  duration: 0.5, 
  repeat: -1, 
  yoyo: true, 
  ease: "power1.inOut", 
});

gsap.to("#R", {
  fill: "#a2c478",
  duration: 0.5, 
  repeat: -1, 
  yoyo: true, 
  ease: "power1.inOut", 
});