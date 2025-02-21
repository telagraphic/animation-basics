/**
 * Parallax Stream
 * 
 * 1. Setup grid styles
 * 2. Setup image container and img styles
 * 3. Setup animations
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

  // let images = gsap.utils.toArray(".parallax-stream img");

  // images.forEach((image) => {
  //   gsap.to(image, {
  //     y: 0,
  //     duration: .5,
  //     // opacity: 0,
  //     scrollTrigger: {
  //       trigger: image,
  //       start: "top 50%",
  //       end: "top bottom",
  //       scrub: true,
  //     },
  //   });
  // });

});
