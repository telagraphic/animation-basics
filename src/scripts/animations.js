document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
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

  /**
   * Article 2
   */

  const articleTwo = document.querySelector(".article-2");
  const articleTwoHeader = articleTwo.querySelector(".article-2__header h2");
  const articleTwoParagraphs = articleTwo.querySelectorAll(
    ".article-2__header p"
  );

  let articleTwoTimeline = gsap.timeline({});

  articleTwoTimeline.fromTo(
    articleTwoHeader,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: articleTwoHeader,
        start: "top 90%",
        end: "+=100%",
        scrub: true,
        toggleActions: "play complete none none",
      },
    }
  );

  articleTwoParagraphs.forEach((paragraph) => {
    articleTwoTimeline.fromTo(
      paragraph,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: paragraph,
          start: "top 100%",
          end: "+=100%",
          scrub: true,
        },
      }
    );
  });
});
