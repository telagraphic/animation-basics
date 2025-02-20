/**
 * Parallax Stream
 * 
 * 1. Setup grid styles
 * 2. Setup image container and img styles
 * 3. Setup smooth scroll options
 * 
 * Smooth scroll images
 *  - https://codepen.io/GreenSock/pen/JjmLLWZ
 *  - https://codepen.io/GreenSock/pen/MWVVvWz
 *  - https://codepen.io/GreenSock/pen/PoOpobM
 *  - https://codepen.io/GreenSock/pen/xxXadQJ
 *  - https://codepen.io/GreenSock/pen/bGaWjpw
 * 
 * Smooth scroll text
 * 
 * 
 */


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const smoother = ScrollSmoother.create({
    smooth: 1, // lower is faster, higher is slower and smoother
    effects: true,
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
  });

  smoother.effects("#smooth-content img", {
    speed: "0.5",
    lag: (i) => i * 1
  });
});
