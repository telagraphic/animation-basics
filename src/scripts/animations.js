/**
 * Marquee by CSS and GSAP
 * 
 * 1. Why does code not work perfectly from course?
 * 2. Fix and understand
 * 3. Use GSAP and horizontal loop function
 * 4. Use reverse loop from a tut below
 * 
 * 
 * - look into the horizontal loop function
 * - https://gsap.com/community/forums/topic/38702-marquee-animation-gsap/
 * - https://www.youtube.com/watch?v=qcfXA3uAD30
 * - https://www.youtube.com/watch?v=ZMCNin2VjxU
 * - https://ryanmulligan.dev/blog/css-marquee/
 * - https://tympanus.net/codrops/2020/03/31/css-only-marquee-effect/
 * - https://www.youtube.com/watch?v=zYBy0V91Bak
 * 
 * 
 * 
 */


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // // adding smooth scroll un-syncs the reveal clip animation
  const smoother = ScrollSmoother.create({ smooth: 2 });

  // // speed enables the parallaxing effect
  // smoother.effects("#smooth-content img", { speed: 0.5 });


  let timeline = gsap.timeline({ repeat: -1 })
    .to(".marquee-gsap .marquee-text", { xPercent: -50, duration: 20, ease: "linear" });

  ScrollTrigger.create({
    trigger: ".marquee-gsap .marquee-text",
    start: "top 100%",
    end: "bottom top",
    onUpdate: (self) => {
      let velocity = self.getVelocity() * 0.01;
      if (velocity < 0.01) {
        velocity = velocity * -1;
      }

      timeline.timeScale(1 + velocity);
    },
  });
});
