/**
 * Toggle Actions
 * https://gsap.com/docs/v3/Plugins/ScrollTrigger/#toggleActions
 * onEnter, onLeave, onEnterBack, and onLeaveBack
 * 
 * scrub overlaps toggleActions
 */

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Section 2
  let headerTwo = document.querySelector(".section-2 h1");
  let imageTwo = document.querySelector(".section-2 img");

  let headerTwoTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headerTwo,
      start: "top 80%",
      end: "bottom 0",
      // toggleActions: "play reset restart none",
      scrub: true,
      pin:false,
      markers: true,
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



  // Section 3
  let headerThree = document.querySelector(".section-3 h1");
  let imageThree = document.querySelector(".section-3 img");

  let headerThreeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headerThree,
      start: "top 80%",
      end: "bottom 0",
      // toggleActions: "play reset restart none",
      // scrub: true,
      pin:false,
      markers: true,
    }
  });

  headerThreeTimeline.fromTo(
    headerThree,
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
  ).to(headerThree, {
    opacity: 0,
    duration: .25,
    ease: "power2.out",
  });

  let imageThreeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: imageThree,
      start: "bottom 80%",
      end: "bottom 80%",
      // scrub: true,
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

  // Section 4, use toggleActions

});

