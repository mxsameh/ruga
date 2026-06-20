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

  tl.set("#lo", { autoAlpha: 0 });
  return tl;

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

  tl.from("#he-ban", {
    opacity: 0,
    duration: 0.6,
    ease: "power3.inOut",
  })
    .from(".s-hero", {
      duration: 1.2,
      padding: 0,
      ease: "power3.inOut",
    })
    .from(
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
  gsap.from(".s-colc ul a", {
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

const lifeA = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".s-life",
      start: "top 85%",
    },
  });
  tl.from(".s-life figure ", {
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "sine.inOut",
  });
};

const vidA = () => {
  const video = document.getElementById("anat-video");
  video.addEventListener("loadedmetadata", () => {
    let last = 0;
    console.log("duration:", video.duration);

    ScrollTrigger.create({
      trigger: ".vid-w",
      start: "top top",
      end: "+=200svh",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const t = video.duration * self.progress;
        // throttle seeks
        if (Math.abs(t - last) > 0.03) {
          video.currentTime = t;
          last = t;
          // console.log("t", t);
        }
      },
    });
  });
  // const $vid = document.getElementById("anat-video");

  // $vid.addEventListener("loadedmetadata", () => {
  //   gsap.to($vid, {
  //     currentTime: $vid.duration,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".s-vid",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: 1,
  //     },
  //   });
  // });
};

// document.addEventListener("DOMContentLoaded", async () => {
//   const isMobile = window.innerWidth < 770;
//   await document.fonts.ready;
//   init();
//   if (!isMobile) {
//     masterTl.add(loA()).add(heA()).add(hA());
//     colcA();
//   }
//   lifeA();
// });

// document.addEventListener("DOMContentLoaded", async () => {
//   const isMobile = window.innerWidth < 770;
//   await document.fonts.ready;
//   init();

//   const loaderPlayed = sessionStorage.getItem("loaderPlayed");

//   if (!isMobile) {
//     // play loader only once
//     if (!loaderPlayed) {
//       sessionStorage.setItem("loaderPlayed", "true");

//       masterTl
//         .add(loA()) // loader animation
//         .add(heA())
//         .add(hA());
//     } else {
//       // skip loader
//       gsap.set("#lo", {
//         autoAlpha: 0,
//       });
//       masterTl.add(heA()).add(hA());
//     }

//     colcA();
//   }

//   lifeA();
// });

document.addEventListener("DOMContentLoaded", async () => {
  const isMobile = window.innerWidth < 770;
  await document.fonts.ready;
  init();

  const navEntry = performance.getEntriesByType("navigation")[0];
  const isReload = navEntry?.type === "reload";

  // was loader already shown in this tab session?
  const hasPlayed = sessionStorage.getItem("loaderPlayed");

  if (!isMobile) {
    // play if:
    // - first visit in tab
    // - OR user refreshed page
    if (!hasPlayed || isReload) {
      sessionStorage.setItem("loaderPlayed", "true");
      masterTl.add(loA()).add(heA()).add(hA());
    } else {
      // normal page-to-page navigation
      gsap.set("#lo", {
        autoAlpha: 0,
      });
    }

    colcA();
  }

  lifeA();
  vidA();
});
