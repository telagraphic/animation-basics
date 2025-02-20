/**
 * Smooth scroll scroll trigger clip reveal from bottom
 * 
 * 1. Setup image container and img styles
 * 2. Setup animations
 * 
 * Smooth scroll images
 *  - https://codepen.io/GreenSock/pen/JjmLLWZ
 *  - https://codepen.io/GreenSock/pen/MWVVvWz
 *  - https://codepen.io/GreenSock/pen/PoOpobM
 *  - https://codepen.io/GreenSock/pen/xxXadQJ
 *  - https://codepen.io/GreenSock/pen/bGaWjpw
 *  - https://www.youtube.com/watch?v=rvXSSzMANXY
 * 
 * Smooth scroll text
 * 
 * 
 */


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });

  // speed enables the parallaxing effect
  smoother.effects("#smooth-content img", { speed: 0.5, lag: (index) => index * 0.1 });


  let timeline = gsap.timeline({});


  timeline.from("img", {
    y: 100,
    scrollTrigger: {
      trigger: "img",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  })
});
