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
});

