/**
 * Feature: Marquee with GSAP
 * 
 * 
 * 
 */


document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  
    const marquee = document.querySelector(".marquee");
    const marqueeTrack = document.querySelector(".marquee-track");
    const marqueeText = document.querySelectorAll(".marquee-text"); // get all text elements
  
    const marqueeTextWidth = 400;
  
  
    const marqueeLength = marqueeText.length;
    const marqueeWidth = marqueeLength * marqueeTextWidth;
    const windowWidth = window.innerWidth;
    
  
    console.log(marqueeLength, marqueeWidth, windowWidth);
  
  
    marqueeText.forEach(element => {
      element.parentElement.style.left = `-${marqueeWidth}px`;
      element.style.width = `${marqueeTextWidth}px`;
    });
  
    gsap.set(".marquee-text", {
      x: (i) => i * marqueeTextWidth
    });
  
    gsap.to(".marquee-text", {
      duration: 5,
      ease: "none",
      x: `-=${marqueeWidth}`,
      modifiers: {
        x: gsap.utils.unitize(
          function(x) {
            return parseFloat(x + windowWidth + marqueeTextWidth) % marqueeWidth;
          }
        )
      },
      repeat: -1
    });
  
  //   initMarquee(190, 27)
  
  // function initMarquee(boxWidth, time) {
  //     const boxElement = $('.box');
  //     const boxLength = boxElement.length;
  //     const wrapperWidth = boxWidth * boxLength;
  //     const windowWidth = $(window).width();
  
  //     boxElement.parent().css('left', '-' + boxWidth + 'px');
  //     boxElement.css('width', boxWidth + 'px');
  
  //     gsap.set(".box", {
  //         x: (i) => i * boxWidth
  //     });
  
  //     gsap.to(".box", {
  //         duration: time,
  //         ease: "none",
  //         x: "-=" + wrapperWidth,
  //         modifiers: {
  //             x: gsap.utils.unitize(
  //                 function (x) {
  //                     return parseFloat(x + windowWidth + boxWidth) % wrapperWidth
  //                 }
  //             )
  //         },
  //         repeat: -1
  //     });
  
  
  });
  
  
  