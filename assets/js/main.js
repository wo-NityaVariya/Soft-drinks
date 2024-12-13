let inputs = document.querySelectorAll('.input_warp .input_contact');
inputs.forEach(function (item) {
  item.addEventListener('click', function () {
    let label = item.previousElementSibling;
    label.classList.toggle("activelabel");
  });
});

jQuery(document).ready(function () {
  jQuery("#header").load("header.html");
  jQuery("#footer").load("Footer.html");

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
      console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
      lenis.raf(time * 500)
  })

  gsap.ticker.lagSmoothing(0)



});

gsap.registerPlugin(ScrollTrigger);

// Fixed on screen animation
gsap.to(".single_product_animation_section", {
  scrollTrigger: {
    trigger: ".single_product_animation_section",
    start: "top-=0",
    end: "+=2000",
    scrub: true,
    pin: true,
    toggleActions: "play none none reverse",
  },
});

// roatating soda can animation
gsap.to(".image_box", {
  backgroundPosition: "0px 0px, 0px 0px",
  ease: "none",
  scrollTrigger: {
    trigger: ".single_product_animation_section",
    start: "top-=0",
    end: "+=2000",
    scrub: true,
    pin: false,
  },
});

// content show one by one animation
let sections = gsap.utils.toArray(".animated_content_box");
gsap.set(sections, { autoAlpha: 0, display: "none" });

sections.forEach((element, i) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      scrub: true,
      markers: false,
      start: "+=" + 100 * (i + 1),
      end: "+=" + 100 * (i + 1),
    },
  });

  // Animate each element to be visible when triggered by scrolling
  tl.to(element, {
    autoAlpha: 1,
    display: "block",
    duration: 2,
    ease: "slow(0.7,0.7,false)",
    stagger: 1.5,
  });
});

// for testimonial slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




