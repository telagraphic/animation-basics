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

  const articleTwoCopyHeader = articleTwo.querySelector(".article-2__copy h2");
  const articleTwoCopyParagraphs =
    articleTwo.querySelector(".article-2__copy p");

  let articleTwoTimeline = gsap.timeline({});

  let articleTwoHeaderSplitText = new SplitText(articleTwoHeader, {
    type: "lines",
  });

  let lines = articleTwoHeaderSplitText.lines;

  articleTwoTimeline.from(lines, {
    duration: 0.8,
    opacity: 0,
    yPercent: 120,
    ease: "power",
    stagger: 0.02,
    scrollTrigger: {
      trigger: articleTwoHeader,
      start: "top 100%",
      end: "+=70%",
      scrub: true,
      toggleActions: "play complete none none",
    },
  });

  let articleTwoParagraphsSplitText = new SplitText(articleTwoParagraphs, {
    type: "lines",
  });

  articleTwoTimeline.from(articleTwoParagraphsSplitText.lines, {
    duration: 0.8,
    opacity: 0,
    yPercent: 120,
    ease: "power",
    stagger: 0.02,
    scrollTrigger: {
      trigger: articleTwoParagraphs,
      start: "top 100%",
      end: "+=90%",
      scrub: true,
    },
  });

  let articleTwoCopyHeaderSplitText = new SplitText(articleTwoCopyHeader, {
    type: "words",
  });

  articleTwoTimeline.from(articleTwoCopyHeaderSplitText.words, {
    duration: 0.8,
    opacity: 0,
    yPercent: 120,
    ease: "power",
    stagger: 0.1,
    scrollTrigger: {
      trigger: articleTwoCopyHeader,
      start: "top 100%",
      end: "+=90%",
      scrub: true,
    },
  });

  let articleTwoCopyParagraphsSplitText = new SplitText(
    articleTwoCopyParagraphs,
    {
      type: "words,chars",
      charsClass: "characters-hidden",
    }
  );

  articleTwoTimeline.from(articleTwoCopyParagraphsSplitText.chars, {
    duration: 1.5,
    opacity: 0,
    yPercent: 0,
    ease: "power",
    stagger: 0.25,
    scrollTrigger: {
      trigger: articleTwoCopyParagraphs,
      start: "top 100%",
      end: "+=90%",
      scrub: true,
    },
  });
});
