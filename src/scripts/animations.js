/**
 * Text animations using SplitText
 *
 * The text line-height and font-size need to be precise when using overflow hidden to remove extra content space
 * This is due to font ascenders and descenders
 *
 *
 */

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  /*
   * Article 1
   *
   */

  // const articleOneParagraph = document.querySelector(".section-1 p");
  const articleOneParagraph = document.querySelector(
    ".section-1__content-text"
  );

  const articleOneParagraphSplitText = new SplitText(articleOneParagraph, {
    type: "lines,words",
    linesClass: "overflow-hidden",
  });

  gsap.from(articleOneParagraphSplitText.words, {
    yPercent: 100,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.01,
    scrollTrigger: {
      trigger: articleOneParagraph,
      start: "top 70%",
      end: "bottom top",
    },
  });

  /**
   * Article 2
   * This will not work because the lines have the overflow-hidden applied to the line
   * The overflow-hidden moves with the line. Need to select the words to animate instead, see Article 3
   */

  const articleTwoParagraph = document.querySelector(
    ".section-2__content-text"
  );

  const articleTwoParagraphSplitText = new SplitText(articleTwoParagraph, {
    type: "lines",
    linesClass: "line",
  });

  // Add a wrapper div around each line
  // articleTwoParagraphSplitText.lines.forEach((line) => {
  //   const wrapper = document.createElement("div");
  //   wrapper.classList.add("overflow-hidden");
  //   line.parentNode.insertBefore(wrapper, line);
  //   wrapper.appendChild(line);
  // });

  gsap.fromTo(
    articleTwoParagraphSplitText.lines,
    {
      color: "#bd93f9",
      y: 100,
    },
    {
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.01,
      color: "#ffffff",
      scrollTrigger: {
        trigger: articleTwoParagraph,
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );

  /**
   * Article 3
   * Apply the overflow-hidden to lines and animate the words
   *
   */

  const articleThreeParagraph = document.querySelector(
    ".section-3__content-text"
  );

  const articleThreeParagraphSplitText = new SplitText(articleThreeParagraph, {
    type: "lines,words",
    linesClass: "overflow-hidden",
  });

  let articleThreeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: articleThreeParagraph,
      start: "top 100%",
      end: "bottom 20%",
      scrub: true,
    },
  });

  articleThreeParagraphSplitText.lines.forEach((line) => {
    let lineWords = gsap.utils.selector(line);

    articleThreeTimeline.from(lineWords("*"), {
      yPercent: 100,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  /*
   * Article 4
   * Apply the overflow-hidden to lines and animate the words
   */

  const articleFourParagraph = document.querySelector(
    ".section-4__content-text"
  );

  const articleFourParagraphSplitText = new SplitText(articleFourParagraph, {
    type: "lines,words",
    linesClass: "overflow-hidden",
  });

  let articleFourTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: articleFourParagraph,
      start: "top 100%",
      end: "bottom 20%",
      scrub: true,
    },
  });

  // Add a wrapper div around each line
  articleFourParagraphSplitText.lines.forEach((line) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("overflow-hidden");
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });

  gsap.fromTo(
    articleFourParagraphSplitText.lines,
    {
      y: 100,
    },
    {
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      // reveal all lines at once or staggered
      stagger: 0.1,
      color: "#ffffff",
      scrollTrigger: {
        trigger: articleFourParagraph,
        start: "top 100%",
        end: "top 20%",
        scrub: true,
      },
    }
  );

  /*
   * Article 5
   * Apply split text twice to achieve the same effect as article 4
   * https://codepen.io/PointC/pen/pxBMvy
   */

  const articleFiveParagraph = document.querySelector(
    ".section-5__content-text"
  );

  const articleFiveParagraphChildLines = new SplitText(articleFiveParagraph, {
    type: "lines",
    linesClass: "linesChild",
  });

  const articleFiveParagraphParentLines = new SplitText(articleFiveParagraph, {
    type: "lines",
    linesClass: "linesParent",
  });

  gsap.from(articleFiveParagraphChildLines.lines, {
    y: 100,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.1,
    color: "#ffffff",
    scrollTrigger: {
      trigger: articleFiveParagraph,
      start: "top 100%",
      end: "top 30%",
      scrub: true,
    },
  });

  /*
   * Article 6
   * Apply split text twice to achieve the same effect as article 4
   * https://codepen.io/PointC/pen/pxBMvy
   */

  const articleSixParagraph = document.querySelector(
    ".section-6__content-text"
  );

  const articleSixParagraphChildLines = new SplitText(articleSixParagraph, {
    type: "lines",
    linesClass: "linesChild",
  });

  const articleSixParagraphParentLines = new SplitText(articleSixParagraph, {
    type: "lines",
    linesClass: "linesParent",
  });

  gsap.from(articleSixParagraphChildLines.lines, {
    y: 100,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.1,
    color: "#ffffff",
    stagger: { each: "0.085", from: "random" },
    scrollTrigger: {
      trigger: articleSixParagraph,
      start: "top 100%",
      end: "top 30%",
      scrub: true,
    },
  });

  /*
   * Article 7
   * Apply split text to the words to achieve the same effect as article 6
   */

  const articleSevenParagraph = document.querySelector(
    ".section-7__content-text"
  );

  const articleSevenParagraphChildLines = new SplitText(articleSevenParagraph, {
    type: "lines,words",
    linesClass: "linesParent",
  });

  gsap.from(articleSevenParagraphChildLines.words, {
    y: 100,
    duration: 1,
    ease: "power2.inOut",
    color: "#ffffff",
    scrollTrigger: {
      trigger: articleSevenParagraph,
      start: "top 100%",
      end: "top 30%",
      scrub: true,
    },
  });
});
