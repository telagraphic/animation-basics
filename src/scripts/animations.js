/**
 * Text animations using SplitText
 *
 * The text line-height and font-size need to be precise when using overflow hidden to remove extra content space
 * This is due to font ascenders and descenders
 *
 */

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  /*
   * Article 1
   * Basic y fade in with overflow hidden
   */

  const articleOneHeader = document.querySelector(".section-1 h1");

  const articleOneHeaderSplitText = new SplitText(articleOneHeader, {
    type: "lines,words,chars",
    charsClass: "overflow-hidden",
    linesClass: "overflow-hidden", // remove if want to no clipping bottom reveal
  });

  gsap.from(articleOneHeaderSplitText.chars, {
    yPercent: 100,
    stagger: 0.04,
    opacity: 0,
    ease: "expo.out",
  });

  const articleTwoHeader = document.querySelector(".section-2 h1");

  const articleTwoHeaderSplitText = new SplitText(articleTwoHeader, {
    type: "lines,words",
    wordsClass: "overflow-hidden",
    linesClass: "overflow-hidden", // sets the overflow on the line
  });

  gsap.from(articleTwoHeaderSplitText.words, {
    yPercent: 100,
    stagger: 0.1,
    opacity: 0,
    ease: "expo.out",
    scrollTrigger: {
      trigger: articleTwoHeader,
      start: "top 70%",
      end: "bottom center",
      scrub: true,
    },
  });

  const articleThreeHeader = document.querySelector(".section-3 h1");

  const articleThreeHeaderSplitText = new SplitText(articleThreeHeader, {
    type: "lines,words,chars",
    charsClass: "overflow-hidden",
    linesClass: "overflow-hidden",
  });

  gsap.from(articleThreeHeaderSplitText.chars, {
    xPercent: 100,
    stagger: 0.04,
    opacity: 0,
    ease: "expo.out",
    scrollTrigger: {
      trigger: articleThreeHeader,
      start: "top 70%",
      end: "bottom center",
      scrub: true,
    },
  });

  const articleFourHeader = document.querySelector(".section-4 h1");
  const articleFourHeaderSplitText = new SplitText(articleFourHeader, {
    type: "lines,words,chars",
    charsClass: "overflow-hidden",
    linesClass: "overflow-hidden",
  });

  gsap.from(articleFourHeaderSplitText.chars, {
    rotateY: 90,
    xPercent: -80,
    opacity: 0,
    stagger: 0.04,
    ease: "expo.out",
    scrollTrigger: {
      trigger: articleFourHeader,
      start: "top 70%",
      end: "bottom center",
      scrub: true,
    },
  });

  const articleFiveHeader = document.querySelector(".section-5 h1");
  const articleFiveHeaderSplitText = new SplitText(articleFiveHeader, {
    type: "lines,words,chars",
    charsClass: "overflow-hidden",
    linesClass: "overflow-hidden",
  });

  gsap.from(articleFiveHeaderSplitText.chars, {
    rotateY: 90,
    xPercent: -80,
    scale: 0.2,
    opacity: 0,
    stagger: 0.04,
    ease: "expo.out",
    scrollTrigger: {
      trigger: articleFiveHeader,
      start: "top 70%",
      end: "bottom center",
      scrub: true,
    },
  });

  const articleSix = document.querySelector(".section-6");
  const articleSeven = document.querySelector(".section-7");
});
