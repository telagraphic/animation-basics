/**
 * Feature: Parallax Stream
 * 
 *  - https://codepen.io/GreenSock/pen/PoOpobM
 *  - https://codepen.io/GreenSock/pen/xxXadQJ
 *  - https://codepen.io/GreenSock/pen/bGaWjpw
 * 
 */


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true
  });

  smoother.effects("#smooth-content img", { speed: "0.5" });
});
