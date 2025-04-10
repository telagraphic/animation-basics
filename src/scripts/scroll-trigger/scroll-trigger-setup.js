/**
 * Feature: basic setup of gsap scroll trigger animations
 * Basic setups for fading images and text
 * 
 * References: https://gsap.com/docs/v3/Plugins/ScrollTrigger/?page=1
 * 
 */


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  /**
   * Section 2
   */
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
    // This cause animation to fade out suddenly
    // scrollTrigger: {
    //   trigger: headerTwo,
    //   start: "top 25%",
    //   end: "bottom 5%",
    //   scrub: true,
    // },
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
   */

  let headerThree = document.querySelector(".section-3 h1");
  let imageThree = document.querySelector(".section-3 img");

  let headerThreeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headerThree,
      start: "center center",
      end: "top 10%",
      scrub: true,
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


  let imageThreeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: imageThree,
      start: "center center",
      end: "bottom 20%",
      scrub: true,
    }
  });

  imageThreeTimeline.fromTo(
    imageThree,
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
  ).to(imageThree, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });


  /**
   * Section 4
   */

  let headerFour = document.querySelector(".section-4 h1");
  let imageFour = document.querySelector(".section-4 img");

  let headerFourTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headerFour,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
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
      scrub: true,
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
  ).to(imageFour, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });



  /**
   * Section 5
   */

  let headerFive = document.querySelector(".section-5 h1");
  let imageFive = document.querySelector(".section-5 img");

  let headerFiveTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headerFive,
      start: "top 80%",
      end: "top 30%",
      scrub: true,
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
      start: "top 80%",
      end: "top 20%",
      scrub: true,
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
  ).to(imageFive, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });


});

