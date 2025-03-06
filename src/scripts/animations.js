/**
 * Feature: Use intersection observer to lazy load images before they enter the viewport
 *
 * 1. Setup images stream and lazy loading
 * 2. First image uses fetchpriority="high"
 * 3. Remaining images are loaded with data-src and intersection Observer
 * 4. Preload set of next 3 images before they enter the viewport with Intersection Observer
 * 5. Fade in images with GSAP
 *   1. Fade in image 1 first
 *   2. Fade in images 2-15
 *
 * - https://12daysofweb.dev/2021/intersection-observer/
 * - https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/
 */

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const preloader = document.querySelector(".preloader");
  const preloaderCounter = document.querySelector(".preloader__counter");
  const article = document.querySelector(".article-1");
  const images = Array.from(
    document.querySelectorAll(".article-1 img[data-src]")
  );
  const windowHeight = window.innerHeight;
  const offsetWindowHeight = windowHeight * 3;
  let currentIndex = 0;
  const imagesPerLoad = 3;

  const ObserverOptions = {
    root: null, // Defaults to the viewport
    rootMargin: `0px 0px ${offsetWindowHeight}px 0px`, // Preload 3 viewport heights before entering
    threshold: 0, // Trigger as soon as any part of the image intersects
  };

  /**
   * GSAP scroll trigger animation for an iamge
   * @param {*} img 
   */
  const animateImage = (img) => {
    gsap.from(img, {
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
      },
    });
  };

  /**
   * GSAP animation for the first image
   * @param {*} img 
   */
  const animateFirstImage = (img) => {
    gsap.from(img, {
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
    });
  };

  /**
   * Load the first image which is not lazy loaded
   */
  const loadFirstImage = () => {
    const firstImage = article.querySelector("img");
    if (firstImage) {
      console.log(firstImage);
      if (firstImage.complete) {
        console.log("complete");
        animateFirstImage(firstImage);
      } else {
        console.log("loading...");
        firstImage.onload = () => animateFirstImage(firstImage);
      }
    }
  };

  /**
   * Preload an image and animate it
   * @param {*} img 
   */
  const preloadImage = (img) => {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
    img.onload = () => animateImage(img);
  };

  /**
   * preload set of 3 images in the stream before they enter the viewport 
   */
  const loadNextImages = () => {
    const endIndex = Math.min(currentIndex + imagesPerLoad, images.length);
    const imagesToLoad = images.slice(currentIndex, endIndex);

    imagesToLoad.forEach((img) => {
      preloadImage(img);
    });

    currentIndex = endIndex;
  };

  /**
   * Create observer for the last visible image to trigger next batch
   * @param {*} entries of images in the stream
   */
  const loadMoreObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && currentIndex < images.length) {
        loadNextImages();

        // Move observer to the new last visible image
        loadMoreObserver.unobserve(entry.target);
        const newLastVisible = images[currentIndex - 1];
        if (newLastVisible) {
          loadMoreObserver.observe(newLastVisible);
        }
      }
    });
  }, ObserverOptions);

  // Initial load of first 3 images
  loadFirstImage();
  loadNextImages();

  // Start observing the third image
  if (images[1]) {
    loadMoreObserver.observe(images[1]);
  }
});
