const init = () => {
  gsap.set("#_", {
    autoAlpha: 1,
  });
};

const loA = () => {
  const tl = gsap.timeline();

  tl.from("#lo .y", {
    yPercent: 100,
    duration: 1.2,
    ease: "power2.inOut",
    stagger: 0.2,
  })
    .to("#lo .y", {
      delay: 1,
      yPercent: -100,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
    })
    .to("#lo", {
      autoAlpha: 0,
    });
};

const heA = () => {
  const $he_ban = document.getElementById("he-ban");
  gsap.from($he_ban, {
    autoAlpha: 0,
    duration: 0.8,
    ease: "power3.inOut",
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  await document.fonts.ready;
  init();
  heA();
  loA();
});
