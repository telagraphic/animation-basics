document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true
  });

  smoother.effects("#smooth-content img", { speed: "0.5" });
});
