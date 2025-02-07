document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Section 2
  let headerTwo = document.querySelector(".section-2 h1");
  let imageTwo = document.querySelector(".section-2 img");

  let headerTwoTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headerTwo,
      start: "bottom 90%",
      end: "bottom 10%",
      scrub: true,
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
    // This cause animation to fade out suddenly
    // scrollTrigger: {
    //   trigger: header,
    //   start: "top 25%",
    //   end: "bottom 5%",
    //   scrub: true,
    //   markers: true,
    // },
  });

  let imageTwoTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: imageTwo,
      start: "top 60%",
      end: "bottom 20%",
      scrub: true,
      // markers: true,
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
      start: "center center",
      end: "top 10%",
      scrub: true,
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
      start: "center center",
      end: "bottom 20%",
      scrub: true,
      markers: true,
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


  // Section 4 

  let headerFour = document.querySelector(".section-4 h1");
  let imageFour = document.querySelector(".section-4 img");

  let headerFourTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headerFour,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true,
    }
  });

  headerFourTimeline.fromTo(
    headerFour,
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
  ).to(headerFour, {
    opacity: 0,
    duration: .25,
    ease: "power2.out",
  });


  let imageFourTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: imageFour,
      start: "top bottom",
      end: "top top-=200",
      scrub: true,
      markers: true,
    }
  });

  imageFourTimeline.fromTo(
    imageFour,
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
  ).to(imageFour, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });



  // Section 5 

  let headerFive = document.querySelector(".section-5 h1");
  let imageFive = document.querySelector(".section-5 img");

  let headerFiveTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headerFive,
      start: "top 80%",
      end: "top 30%",
      scrub: true,
      markers: true,
    }
  });

  headerFiveTimeline.fromTo(
    headerFive,
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
  ).to(headerFive, {
    opacity: 0,
    duration: .25,
    ease: "power2.out",
  });


  let imageFiveTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: imageFive,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    }
  });

  imageFiveTimeline.fromTo(
    imageFive,
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
  ).to(imageFive, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });



  // Section 6 

  let headerSix = document.querySelector(".section-6 h1");
  let imageSix = document.querySelector(".section-6 img");

//   let headerSixTimeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: headerSix,
//       start: "top center",
//       end: "+=500",
//       scrub: true,
//       pin: true,
//       markers: true,
//     }
//   });

//   headerSixTimeline.fromTo(
//     headerSix,
//     {
//       opacity: 0,
//       y: 100,
//     },
//     {
//       opacity: 1,
//       y: 0,
//       duration: .5,
//       ease: "power2.out",
//     }
//   ).to(headerSix, {
//     opacity: 0,
//     duration: .25,
//     ease: "power2.out",
//   });


  let imageSixTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: imageSix,
      start: "top bottom",
    //   end: "+=1000",
      pin: true,
      anticipatePin: 1,
      scrub: true,
      markers: true,
    }
  });

  imageSixTimeline.fromTo(
    imageSix,
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
  ).to(imageSix, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });


});

