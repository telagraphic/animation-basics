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
    let images = gsap.utils.toArray("img");
  
  
    // 1. use a stagger object and grid for the images
    // gsap.from(images, {
    //   yPercent: 100,
    //   opacity: 0,
    //   duration: .75,
    //   stagger: {
    //     each: .1,
    //     grid: "auto",
    //     from: "random",
    //     amount: 2
    //   },
    //   ease: "expo.out",
    // })
  
    // 2. use the batch method to animate the images per "row"
    // use duration to align the row start time
    gsap.set(".image-container .image-clip", {opacity: 0, yPercent: 100});
    ScrollTrigger.batch(".image-container .image-clip", { 
      start: "top 80%",
      onEnter: (elements) => {
        gsap.to(elements, {
          yPercent: 0,
          opacity: 1,
          duration: 1.25,
          stagger: .1,
          ease: "power1.inOut",
        })
        console.log(elements);
        console.log(elements.length);
      }
    })
  
  
    // 3. use scroll trigger and scrub to animate the images synced with scroll
    // let imagesTimeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".parallax-stream",
    //     start: "top 90%",
    //     scrub: true,
    //     markers: true
    //   }
    // }).from(".image-clip img", {
    //   yPercent: 100,
    //   opacity: 0,
    //   duration: .25,
    //   stagger: .1,
    //   ease: "power1.inOut",
    // })
  
  });