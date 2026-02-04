document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const about1Tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-1",
      start: "top 80%",
      end: "top 30%",
      scrub: 2,
    },
  });

  about1Tl.from("#about-1 > div:nth-child(1)", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });
  about1Tl.from("#about-1 > div:nth-child(2)", {
    x: 100,
    opacity: 0,
    duration: 0.5,
  });

  const about2Tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-2",
      start: "top 80%",
      end: "top 30%",
      scrub: 2,
    },
  });

  about2Tl.from(".about-2-list ", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
  });

  about2Tl.from("#about-2 > div:nth-child(2) div", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
  });

  gsap.from("#about-3", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5,

    scrollTrigger: {
      trigger: "#about-3",
      scroller: "body",
      scrub: 2,
      end: "top 30%",
    },
  });
  gsap.from(".about-4-counter", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,

    scrollTrigger: {
      trigger: "#about-4",
      scroller: "body",
      scrub: 2,
      end: "top 50%",
    },
  });

  const about4Tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-5",
      start: "top 80%",
      end: "top 30%",
      scrub: 2,
    },
  });

  about4Tl.from("#about-5 > div:nth-child(1)", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });

  about4Tl.from("#about-5 div:nth-child(2) div", {
    x: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
  });
});
