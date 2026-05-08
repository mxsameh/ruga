const init = () => {
  gsap.set("#_", {
    autoAlpha: 1,
  });
};

const loA = () => {
  gsap.from("#lo .y", {
    yPercent: 100,
    duration: 1.2,
    ease: "power1.inOut",
    stagger: 0.2,
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
