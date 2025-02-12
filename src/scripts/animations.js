document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  /**
   * Article 1
   */

  const articleOne = document.querySelector(".article-1");
  const articleOneHeader = articleOne.querySelector("h1");
  const articleOneImages = articleOne.querySelectorAll("img");
  const articleOneParagraph = articleOne.querySelector("p");

  let articleOneTimeline = gsap.timeline({});

  articleOneTimeline.fromTo(
    articleOneHeader,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    }
  );

  articleOneTimeline.fromTo(
    articleOneImages,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.25,
    }
  );

  articleOneTimeline.fromTo(
    articleOneParagraph,
    {
      opacity: 0,
      y: -50,
    },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      y: 0,
      scrollTrigger: {
        trigger: articleOneParagraph,
        start: "top 90%",
        end: "+=100%",
        scrub: true,
      },
    }
  );
});
