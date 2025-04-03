/**
 * Feature: Apple Landing Page
 * Emulates old school apple product landing page
 *
 * 
 */


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
  
    /*
     * Article 3
     */
  
    const articleThreeFirstImage = document.querySelector(
      ".article-3__content:nth-child(1) img"
    );
    const articleThreeFirstParagraph = document.querySelector(
      ".article-3__content:nth-child(1) p"
    );
  
    const articleThreeSecondImage = document.querySelector(
      ".article-3__content:nth-child(2) img"
    );
    const articleThreeSecondParagraph = document.querySelector(
      ".article-3__content:nth-child(2) p"
    );
  
    const articleThreeThirdImage = document.querySelector(
      ".article-3__content:nth-child(3) img"
    );
    const articleThreeThirdParagraph = document.querySelector(
      ".article-3__content:nth-child(3) p"
    );
    const articleThreeThirdHeader = document.querySelector(
      ".article-3__content:nth-child(3) h2"
    );
  
    const articleThreeTimeline = gsap.timeline({});
  
    articleThreeTimeline.fromTo(
      articleThreeFirstImage,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: articleThreeFirstImage,
          start: "top 100%",
          end: "+=100%",
          scrub: true,
        },
      }
    );
  
    articleThreeTimeline.fromTo(
      articleThreeFirstParagraph,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: articleThreeFirstParagraph,
          start: "top 80%",
          end: "+=100%",
          scrub: true,
        },
      }
    );
  
    articleThreeTimeline.fromTo(
      articleThreeSecondImage,
      {
        opacity: 0,
        x: +100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: articleThreeSecondImage,
          start: "top 100%",
          end: "+=100%",
          scrub: true,
        },
      }
    );
  
    articleThreeTimeline.fromTo(
      articleThreeSecondParagraph,
      {
        opacity: 0,
        y: +50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: articleThreeSecondParagraph,
          start: "top 80%",
          end: "+=100%",
          scrub: true,
        },
      }
    );
  
    articleThreeTimeline.fromTo(
      articleThreeThirdImage,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: articleThreeThirdImage,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  
    /**
     * https://codepen.io/GreenSock/pen/pEKYVz
     */
    let articleThreeThirdParagraphSplitText = new SplitText(
      articleThreeThirdParagraph,
      {
        type: "lines",
        linesClass: "line",
        lineThrough: false,
      }
    );
  
    articleThreeTimeline.fromTo(
      articleThreeThirdParagraphSplitText.lines,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: articleThreeThirdParagraph,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  
    let articleThreeHeaderSplitText = new SplitText(articleThreeThirdHeader, {
      type: "lines",
    });
  
    articleThreeTimeline.fromTo(
      articleThreeHeaderSplitText.lines,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: articleThreeThirdHeader,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  });