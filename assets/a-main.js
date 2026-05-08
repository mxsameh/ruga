const init = () => {
  const $p = document.getElementById("p");
  gsap.set($p, {
    autoAlpha: 1,
  });
};

const heA = () => {
  const $he_ban = document.getElementById("he-ban");
  gsap.from($he_ban, {
    autoAlpha: 0,
    duration: 3,
    ease: "power2.out",
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  await document.fonts.ready;
  init();
});

document.addEventListener("DOMContentLoaded", (event) => {});
