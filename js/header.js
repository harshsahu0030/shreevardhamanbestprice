document.addEventListener("DOMContentLoaded", (event) => {
  const btnOpen = document.querySelector(".nav-open");
  const btnClose = document.querySelector(".nav-close");
  const navbar = document.getElementById("website-navbar");

  let navTimeline = gsap.timeline({
    paused: true,
    defaults: { ease: "power2.out" },
    onStart: () => {
      navbar.classList.remove("invisible");
      document.body.classList.add("overflow-hidden");
    },
    onReverseComplete: () => {
      navbar.classList.add("invisible");
      document.body.classList.remove("overflow-hidden");
    },
  });

  navTimeline
    .from(navbar, {
      y: "-120vh",
      duration: 0.8,
    })
    .from("#website-navbar video", {
      backgroudColor: "red",
      x: -50,
      opacity: 0,
    })
    .from(".navbar-content ul", {
      x: 50,
      opacity: 0,
    })
    .from(".navbar-info ", {
      backgroudColor: "red",
      y: 50,
      opacity: 0,
    });

  // buttons
  btnOpen.addEventListener("click", () => {
    if (!navTimeline.isActive()) navTimeline.play(0);
  });

  btnClose.addEventListener("click", () => {
    if (!navTimeline.isActive()) navTimeline.reverse();
  });
});
