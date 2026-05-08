const init = () =>{
    const $p = document.getElementById("p");
    gsap.set()

}
document.addEventListener("DOMContentLoaded", (event) => {
  const $he_ban = document.getElementById("he-ban");
  gsap.from($he_ban, {
    autoAlpha: 0,
    duration: 3,
    ease: "power2.out",
  });
});
