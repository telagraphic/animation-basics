document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let header = document.querySelector(".section-2 h1");
  let image = document.querySelector(".section-2 img");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: header,
      start: "top 70%",
      end: "top 30%",
      scrub: true,
      markers: true,
    }
  });

  tl.fromTo(
    header,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    }
  ).to(header, {
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: header,
      start: "top 25%",
      end: "top 5%",
      scrub: true,
      markers: true,
    },
  });

  gsap.fromTo(
    image,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
        // markers: true,
      },
    }
  );
});
