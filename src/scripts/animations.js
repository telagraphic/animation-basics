/**
 * Feature: Preload Images before displaying the page
 * 
 * 1. Setup image grid
 * 2. Setup hosted images
 * 3. Setup timelines
 * 
 * preloaderCounter jumps in steps due to only 5 images being laoded and re-used. More image will make it smaller steps?
 * Set html,body overflow: auto; to enable the scrollTo to work before displaying the image grid
 * 
 * Lazy load all images then continue
 * Preload only certain images above the fold
 * Load images adjacent to the current viewport using IntersectionObserver and rootMargin
 * 
 * - https://cloudinary.com/blog/lazy_loading_choosing_the_best_option
 * - https://github.com/desandro/imagesloaded
 * - https://github.com/ApoorvSaxena/lozad.js
 * - https://github.com/verlok/vanilla-lazyload
 * - https://github.com/malchata/yall.js
 * - https://github.com/aFarkas/lazysizes
 */


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const preloader = document.querySelector(".preloader");
  const preloaderCounter = document.querySelector(".preloader__counter");
  const article = document.querySelector(".article-1");
  const images = document.querySelectorAll(".article-1 img");

  console.log(images)

  let loadingStatus = 0;

  function imageLoaded() {
    loadingStatus++;

    let percentageStatus = ((loadingStatus / images.length) * 100).toFixed(0);
    preloaderCounter.textContent = `${percentageStatus}%`;

    if (loadingStatus === images.length) {
      preloaderTimeline.play();
    }
  }

  function preloadImage(image) {
    return new Promise((resolve) => {
      image.onload = resolve;
    });
  }

  images.forEach(image => {
    image.src = image.getAttribute("data-src");
    preloadImage(image).then(() => {
      imageLoaded();
    });
  });

  const preloaderTimeline = gsap.timeline({paused: true})
    .set(window, {
      scrollTo: { y: 0, immediate: true }
    })
    .to(preloader, {
      yPercent: -100,
      duration: 1,
      ease: "power2.inOut",
    })
    .from(article, {
      duration: 1,
      yPercent: 100,
      ease: "power3.inOut",
    })
    .from(images, {
      duration: 1,
      opacity: 0,
      y: 200,
      stagger: 0.1,
      ease: "power3.out",
      clearProps: "all"
    }, "<32%");


});


