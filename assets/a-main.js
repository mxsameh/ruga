const init = () => {
  const $p = document.getElementById("p");
  gsap.set($p, {
    autoAlpha: 1,
  });
};

const loA = () => {
  gsap.from("#lo .y", {
    yPercent: 100,
  });
};
cubic - bezier(0.62, 0, 0.38, 1);
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
});
