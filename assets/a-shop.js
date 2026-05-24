const init = () => {
  gsap.set("#_", {
    autoAlpha: 1,
  });
};
document.addEventListener("DOMContentLoaded", async () => {
  await document.fonts.ready;
  init();
});
