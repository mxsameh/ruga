const masterTl = gsap.timeline();

const init = () => {
  gsap.set("#_", {
    autoAlpha: 1,
  });
};

const hA = () => {
  const tl = gsap.timeline();

  tl.set("#h", { background: "white" })
    .from("#h .h_l .y", {
      yPercent: 100,
      duration: 0.8,
      ease: "power2.inOut",
    })
    .from(
      "#h .h_r .y",
      {
        yPercent: 100,
        duration: 0.8,
        ease: "sine.inOut",
        stagger: 0.2,
      },
      "<",
    );

  return tl;
};

const loA = () => {
  const tl = gsap.timeline();

  tl.from("#lo .y", {
    yPercent: 100,
    duration: 1.2,
    ease: "power2.inOut",
    stagger: 0.2,
  })
    .to("#lo .lo_bg", {
      delay: 1,
      yPercent: -100,
      duration: 1.5,
      ease: "power3.inOut",
    })
    .to(
      "#lo .y",
      {
        yPercent: -100,
        duration: 0.6,
        ease: "power2.inOut",
        //   stagger: 0.2,
      },
      "<0.2",
    )
    .set("#lo", { autoAlpha: 0 });
  return tl;
};

const heA = () => {
  // const wh = window.innerHeight  ;
  // const hh = 72;
  // const vh = wh - 72 - 40;
  const tl = gsap.timeline();

  tl.from(".s-hero", {
    duration: 1.2,
    padding: 0,
    ease: "power3.inOut",
  }).from(
    "#he-ban",
    {
      width: "100%",
      height: "100%",
      borderRadius: "0",
      duration: 1.2,
      ease: "power3.inOut",
    },
    "<",
  );
  return tl;
};

const colcA = () => {
  gsap.from(".s-colc h2 .y", {
    yPercent: 100,
    duration: 1,
    ease: "sine.inOut",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".s-colc",
      start: "top 80%",
    },
  });
  gsap.from(".s-colc ul li", {
    yPercent: 100,
    duration: 0.8,
    ease: "power2.inOut",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".s-colc ul",
      start: "top 80%",
    },
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  await document.fonts.ready;
  init();
  colcA();
  //   heA();
  //   hA();
  //   masterTl.add(loA()).add(heA()).add(hA());
});
