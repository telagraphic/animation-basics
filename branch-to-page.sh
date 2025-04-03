#!/bin/bash

# Array of routes
routes=(
  "marquee-css-animations"
  "marquee-css-animations-improved"
  "marquee-gsap-horizontal-loop"
  "marquee-gsap-setup"
  "marquee-setup"
  "preloader-lazy-loading-images"
  "preloader-setup"
  "smooth-scroll-parallax-block-clip-reveal"
  "smooth-scroll-parallax-images"
  "smooth-scroll-scroll-trigger-images-grid"
  "smooth-scroll-setup"
  "text-animations-split-text"
  "text-animations-split-text-paragraphs"
)

# Loop through each route and create empty files
for route in "${routes[@]}"; do
#   touch "src/pages/${route}.astro"
#   touch "src/scripts/${route}.js" 
  touch "src/styles/${route}.scss"
done