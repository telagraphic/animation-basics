/**
 * Smooth scroll parallax effect scroll trigger clip reveal from bottom
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
 * Block clip reveal
 *  - https://www.youtube.com/watch?v=rke_hLbbkfU&t=29s
 *  - https://www.youtube.com/watch?v=ugCcEbirzUo&list=PLFP5vayyC2y7LuULEymd6QeubszoBclXm&index=14
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
  smoother.effects("#smooth-content img", { speed: 0.5 });


  let timeline = gsap.timeline({});

  let images = gsap.utils.toArray(".image-container img");

  // fade in happens before parent element is visible, timing is off
  images.forEach((image) => {
    timeline.from(image, {
      y: "100%",
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: image,
        start: "top 100%",
        end: "bottom bottom",
        // scrub: true,
      }
    })
  })

});
