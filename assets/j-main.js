var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: "#swiper-b-nxt",
    prevEl: "#swiper-b-prv",
  },
});

const initAnatVid = () => {
  var isMobile = window.matchMedia("(max-width: 770px)").matches;

  const $vid = document.getElementById("anat-video");

  $vid.src = isMobile ? $vid.dataset.mobileSrc : $vid.dataset.desktopSrc;
  $vid.load();
};

initAnatVid();
