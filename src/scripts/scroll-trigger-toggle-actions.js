/**
 * Feature: Use toggle actions to control animation playback
 * 
 * https://gsap.com/docs/v3/Plugins/ScrollTrigger/#toggleActions
 * onEnter, onLeave, onEnterBack, and onLeaveBack
 * 
 * scrub:true overlaps toggleActions
 */

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Section 2
  let headerTwo = document.querySelector(".section-2 h1");
  let imageTwo = document.querySelector(".section-2 img");

  let headerTwoTimeline = gsap.timeline({
    id: "headerTwoTimeline",
    scrollTrigger: {
      trigger: headerTwo,
      start: "top 80%",
      end: "bottom 0",
      // toggleActions: "play reset restart none",
      scrub: true,
      pin:false,
    //   markers: true,
    }
  });

  headerTwoTimeline.fromTo(
    headerTwo,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: .5,
      ease: "power2.out",
    }
  ).to(headerTwo, {
    opacity: 0,
    duration: .25,
    ease: "power2.out",
  });

  let imageTwoTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: imageTwo,
      start: "top 80%",
      end: "bottom 0",
      scrub: true,
    }
  });

  imageTwoTimeline.fromTo(
    imageTwo,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    }
  ).to(imageTwo, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });



  /**
   * Section 3
   * Using scrub syncs to the scroll position.
   * Not using it displays the animation only the the height of the element.
   * Increase the duration to see the animation display over the viewport.
   */

  let headerThree = document.querySelector(".section-3 h1");
  let imageThree = document.querySelector(".section-3 img");

  let headerThreeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headerThree,
      start: "top 90%",
    //   end: "bottom 10%",
    end: "-=500",
      toggleActions: "play none reverse reset",
    //   scrub: true,
      pin: false,
    //   markers: true,
    }
  });

  headerThreeTimeline.fromTo(
    headerThree,
    {
      opacity: 0,
    //   y: 100,
    },
    {
      opacity: 1,
    //   y: 0,
      duration: 3,
      ease: "power2.out",
    }
  ).to(headerThree, {
    opacity: 0,
    duration: .25,
    ease: "power2.out",
  });

//   let imageThreeTimeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: imageThree,
//       start: "bottom 80%",
//       end: "bottom 80%",
//     }
//   });

//   imageThreeTimeline.fromTo(
//     imageThree,
//     {
//       opacity: 0,
//       y: 100,
//     },
//     {
//       opacity: 1,
//       y: 0,
//       duration: 1.5,
//       ease: "power2.out",
//     }
//   ).to(imageThree, {
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//   });



  
  /**
   * Section 4
   * Using scrub syncs to the scroll position.
   * Not using it displays the animation only the the height of the element.
   * Increase the duration to see the animation display over the viewport.
   */ 

  let headerFour = document.querySelector(".section-4 h1");
  let imageFour = document.querySelector(".section-4 img");

  let headerFourTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headerFour,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none complete complete",
    }
  });

  headerFourTimeline.fromTo(
    headerFour,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }
  );


  let imageFourTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: imageFour,
      start: "top bottom",
      end: "top top-=200",
      toggleActions: "play none complete complete",
    }
  });

  imageFourTimeline.fromTo(
    imageFour,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
    }
  );

  
  /**
   * Section 5
   * Using scrub syncs to the scroll position.
   * Not using it displays the animation only the the height of the element.
   * Increase the duration to see the animation display over the viewport.
   */ 

  let headerFive = document.querySelector(".section-5 h1");
  let imageFive = document.querySelector(".section-5 img");

  let headerFiveTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headerFive,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none complete complete",
      markers: true,
    }
  });

  headerFiveTimeline.fromTo(
    headerFive,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }
  );


  let imageFiveTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: imageFive,
      start: "top bottom",
      end: "top top-=200",
      toggleActions: "play none complete complete",
      markers: true,
    }
  });

  imageFiveTimeline.fromTo(
    imageFive,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
    }
  );

});

