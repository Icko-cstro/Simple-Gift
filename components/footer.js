export default function Footer(root) {
  root.innerHTML = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <!-- Swiper HTML Structure -->
    <div class="swiper marquee-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><p class="footerTxt">Happy Birthday to you!</p></div>
        <div class="swiper-slide"><p class="footerTxt">Happy Birthday to you!</p></div>
        <div class="swiper-slide"><p class="footerTxt">Happy Birthday</p></div>
        <div class="swiper-slide"><p class="footerTxt">Happy Birthday</p></div>
        <div class="swiper-slide"><p class="footerTxt">Happy Birthday, Riechelle!</p></div>
      </div>
    </div>
  
  

  `;
  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".marquee-swiper", {
      slidesPerView: "auto",         // Slides take up the width defined in our CSS
      spaceBetween: 0,             // Adds breathing room between logos
      loop: true,                    // If it doesn’t loop, what are we even doing here?
      speed: 2000,                   // Time in ms for one slide to transition. Change this to your liking.
      allowTouchMove: false,         // It’s a marquee, not an interactive carnival ride
      autoplay: {
        delay: 1,                    // 1 millisecond delay: we’re moving nonstop. Try 0 here too :).
        disableOnInteraction: false  // If someone tries to touch, let them fail in peace
      }
    });
  });
}

