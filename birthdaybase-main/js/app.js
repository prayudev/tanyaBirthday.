document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 2,
    effects: true
  });

  // Layer parallax
  gsap.to('.layers__base', {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: '.main-header',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  gsap.to('.layers__middle', {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: '.main-header',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  gsap.to('.layers__front', {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
      trigger: '.main-header',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  // Title animation
  gsap.from('.layer__header', {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "bounce.out",
    delay: 0.5
  });
});
