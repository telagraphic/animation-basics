document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
});

gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
    // Initialize your GSAP animations here
    gsap.to('.example', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    });
}
