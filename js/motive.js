document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#motive div", {
    transform: "translateX(-500%)",

    scrollTrigger: {
      trigger: "#motive ",
      scroller: "body",
      markers: true,
      start: "top 0%",
      end: "top -100%",
      scrub: 2,
      pin: true,
    },
  });

  // ScrollTrigger.create({
  //   trigger: "#motive ",
  //   // scroller: "body",
  //   markers: true,
  //   start: "top 0%",
  //   end: "top -100%",
  //   scrub: 1,
  //   pin: true,
  //   onUpdate: (self) => {
  //     gsap.to("#motive div", {
  //       transform: `translateX(-${self.progress * 100}%)`,
  //     });
  //   },
  // });
});
