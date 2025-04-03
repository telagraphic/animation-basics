/**
 * Feature: Marquee with GSAP and Horizontal Loop Helper
 * 
 * 1. Uses horizontal loop help function
 * 2. Marquee content needs to be fill width of page
 * 3. If conent width is less than page, horizontal scroll shift occurs
 * 
 * 
 * First Marquee
 * - https://gsap.com/community/forums/topic/39156-infinite-marquee-not-working-correctly/#comment-194772
 * - https://codepen.io/mvaneijgen/pen/LYqJLOz
 *  
 * Second Marquee
 * - https://gsap.com/community/forums/topic/42921-horizontal-infinite-text-loop-without-empty-spaces/#comment-211010
 * - https://codepen.io/GreenSock/pen/zYaxEKV
 * 
 * 
 * Fourth Marquee
 * - https://gsap.com/community/forums/topic/37663-loop-text-horizontally-with-scrolltrigger/
 */


document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer);
  
    const marquee = document.querySelector(".marquee");
    const marqueeTrack = document.querySelector(".marquee-track");
    const marqueeText = document.querySelectorAll(".marquee-text"); // get all text elements
    const marqueeTextBoxes = gsap.utils.toArray(".marquee-text");
  
    // https://gsap.com/docs/v3/HelperFunctions/helpers/seamlessLoop
    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
      gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
              gsap.getProperty(el, "xPercent")
          );
          return xPercents[i];
        },
      });
      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          // if we're wrapping the timeline's playhead, make the proper adjustments
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    }
    
    const item = document.querySelectorAll(".marquee--gsap .marquee-text");
    horizontalLoop(item, { repeat: -1, speed: 3 })
  
  
    const scrollTriggerMarquee = gsap.utils.toArray(".marquee--scroll-trigger-1 .marquee-text");
  
    const scrollTriggerMarqueeLoop = horizontalLoop(scrollTriggerMarquee, {
      repeat: -1,
      speed: 3,
      paddingRight: 30,
    });
  
    Observer.create({
      onChangeY(self) {
        let factor = 2;
        if (self.deltaY < 0) {
          factor *= -1;
        } 
        gsap.timeline({
          defaults: {
            ease: "none",
          }
        })
          .to(scrollTriggerMarqueeLoop, { timeScale: factor * 2.5, duration: 0.2, overwrite: true, })
          .to(scrollTriggerMarqueeLoop, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      }
    });
  
    const scrollTriggerMarquee2 = gsap.utils.toArray(".marquee--scroll-trigger-2 .marquee-text");
  
    const scrollTriggerMarqueeLoop2 = horizontalLoop(scrollTriggerMarquee2, {
      repeat: -1,
      speed: 4
    });
  
    let direction = 1;
    let t;
  
    ScrollTrigger.create({
      trigger: ".marquee--scroll-trigger-2",
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        if (self.direction !== direction) {
          direction = self.direction;
          t && t.kill();
          t = gsap.to(scrollTriggerMarqueeLoop2, {
            duration: 0.3,
            timeScale: self.direction
          });
        }
      },
      markers: true
    });
  
  });
  
  
  