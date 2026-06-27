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

  // tl.set("#lo", { autoAlpha: 0 });
  // return tl;

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
  const tl = gsap.timeline({
    onComplete: () => {
      // document.documentElement.classList.remove("no-scroll");
      // document.body.classList.remove("no-scroll");
    },
  });

  tl.from(".s-hero", {
    duration: 1,
    padding: 0,
    ease: "power3.inOut",
  })
    .from(
      "#he-ban",
      {
        duration: 1,
        width: "100%",
        height: "100%",
        borderRadius: "0",
        ease: "power3.inOut",
      },
      "<",
    )
    .from("#he-ban h1 .y", {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.inOut",
    });
  return tl;
};

const anatA = () => {
  gsap.from(".s-anat h2 .y", {
    yPercent: 100,
    duration: 0.8,
    ease: "power3.inOut",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".s-anat",
      start: "top 80%",
    },
  });
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
  gsap.from(".s-life figure ", {
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: ".s-life",
      start: "top 85%",
    },
  });
  gsap.from(
    ".s-life li a > img",
    {
      scale: 0.5,
      opacity: 0,
      // stagger: 0.2,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: ".s-life",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    },
    "<",
  );
};

const vidA = () => {
  const video = document.getElementById("anat-video");

  video.play().then(() => {
    video.pause();
    video.currentTime = 0;
  });

  const initVideo = () => {
    gsap.to(video, {
      currentTime: video.duration,
      ease: "none",
      scrollTrigger: {
        trigger: ".vid-w",
        start: "top top",
        end: "+=300svh",
        pin: true,
        scrub: 1,
      },
    });
  };

  if (video.readyState >= 1) {
    initVideo();
  } else {
    video.addEventListener("loadedmetadata", initVideo);
  }
};

const animation = async () => {
  const isMobile = window.innerWidth < 770;
  await document.fonts.ready;

  window.lenis.scrollTo(0, {
    immediate: true,
  });
  //  window.lenis.stop();
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
      masterTl.add(loA()).add(heA()).add(hA(), "-=0.8");
    } else {
      // normal page-to-page navigation
      gsap.set("#lo", {
        autoAlpha: 0,
      });
    }

    colcA();
  }
  // window.lenis.start();

  lifeA();
  anatA();
  vidA();
};

animation();
