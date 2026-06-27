document.addEventListener("DOMContentLoaded", () => {
  // Init Lenis
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  // Hook Lenis into GSAP's ticker for sync
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Make lenis globally accessible
  window.lenis = lenis;
});
