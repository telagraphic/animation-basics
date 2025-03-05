/**
 * Feature: Use intersection observer to lazy load images before they enter the viewport
 *
 * 1. Setup images stream and lazy loading
 * 2. Setup preloader for first 3 images
 * 3. Setup IO code loading
 * 4. Load more images to the markup ahead of the IO trigger for loading them.
 *
 * - https://12daysofweb.dev/2021/intersection-observer/
 * - https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/
 */

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const preloader = document.querySelector(".preloader");
  const preloaderCounter = document.querySelector(".preloader__counter");
  const article = document.querySelector(".article-1");
  const images = Array.from(document.querySelectorAll(".article-1 img[data-src]"));
  const windowHeight = window.innerHeight;
  const offsetWindowHeight = windowHeight * 3;

  const options = {
    root: null, // Defaults to the viewport
    rootMargin: `0px 0px ${offsetWindowHeight}px 0px`, // Preload 3 viewport heights before entering
    threshold: 0, // Trigger as soon as any part of the image intersects
  };

  const preloadImage = (img) => {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
  };

  let currentIndex = 0;
  const imagesPerLoad = 3;

  const loadNextImages = () => {
    const endIndex = Math.min(currentIndex + imagesPerLoad, images.length);
    const imagesToLoad = images.slice(currentIndex, endIndex);
    
    imagesToLoad.forEach(img => {
      preloadImage(img);
    });
    
    currentIndex = endIndex;
  };

  // Create observer for the last visible image to trigger next batch
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
  }, options);

  // Initial load of first 3 images
  loadNextImages();
  
  // Start observing the third image
  if (images[2]) {
    loadMoreObserver.observe(images[2]);
  }
});


// const preloaderTimeline = gsap.timeline({paused: true})
//   .set(window, {
//     scrollTo: { y: 0, immediate: true }
//   })
//   .to(preloader, {
//     yPercent: -100,
//     duration: 1,
//     ease: "power2.inOut",
//   })
//   .from(article, {
//     duration: 1,
//     yPercent: 100,
//     ease: "power3.inOut",
//   })
//   .from(images, {
//     duration: 1,
//     opacity: 0,
//     y: 200,
//     stagger: 0.1,
//     ease: "power3.out",
//     clearProps: "all"
//   }, "<32%");
