/**
 * Smooth scroll parallax effect scroll trigger clip reveal from bottom
 * This is tied to scroll, but how to trigger when scrolling into a view
 * You would need to trigger a timeline when scorlling into a new li view
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
  
    // // adding smooth scroll un-syncs the reveal clip animation
    // const smoother = ScrollSmoother.create({
    //   smooth: 2,
    //   effects: true,
    // });
  
    // // speed enables the parallaxing effect
    // smoother.effects("#smooth-content img", { speed: 0.5 });
  
  
    let timeline = gsap.timeline({});
    let views = gsap.utils.toArray("li");
    // let imageClips = gsap.utils.toArray(".image-clip");
  
  
    views.forEach((view) => {
      let imageContainer = view.querySelector(".image-container");
      let imageClip = view.querySelector(".image-clip");
      let image = imageContainer.querySelector("img");
  
  
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: view,
          start: "top 70%",
          toggleActions: "play none none none",
          markers: true,
        }
      });
  
      timeline.to(imageClip, {
        duration: .5,
        clipPath: "polygon(0 0, 100% 0, 100%  100%, 0 100%)",
        delay: "-=0.5",
      })
    })
  });