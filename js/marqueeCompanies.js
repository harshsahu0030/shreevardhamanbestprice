const companiesImages = [
  "./assets/companies/AMUL.webp",
  "./assets/companies/BRITANNIA.webp",
  "./assets/companies/CADBURY.webp",
  "./assets/companies/COLGATE.webp",
  "./assets/companies/FORTUNE.webp",
  "./assets/companies/HALDIRAM.webp",
  "./assets/companies/HISDUSTAN UNILEVER.webp",
  "./assets/companies/INDIA GATE.webp",
  "./assets/companies/ITC.webp",
  "./assets/companies/MDH.webp",
  "./assets/companies/MILTON.webp",
  "./assets/companies/NESTLE.webp",
  "./assets/companies/P&G.webp",
  "./assets/companies/PARLE.webp",
  "./assets/companies/PATANJALI.webp",
  "./assets/companies/COLGATE.webp",
];

document.addEventListener("DOMContentLoaded", (event) => {
  const maqueeContainer = document.querySelector(".marquee-companies");

  companiesImages.forEach((image, i) => {
    maqueeContainer.innerHTML += `<div
        class="h-full  flex items-center justify-center min-w-60 max-w-60 p-10 ${
          i % 2 === 0 ? "bg-darktext/10" : ""
        } border-b-2 border-darktext/10"
          >
          <img
          src="${image}"
          loading="lazy"
          alt="companies-logo"
          class="hover:scale-110 transition-all duration-300 h-full w-full object-contain"
              height="150"
              width="150"
              />
              </div>`;
  });

  // duplicate for seamless loop
  maqueeContainer.innerHTML += maqueeContainer.innerHTML;

  // duplicate content for seamless loop
  const marqueeWidth = maqueeContainer.scrollWidth / 2;

  const marqueeTween = gsap.to(maqueeContainer, {
    x: -marqueeWidth,
    duration: 40,
    ease: "linear",
    repeat: -1,
  });

  document
    .querySelector(".marquee-companies")
    .addEventListener("mouseenter", () => {
      marqueeTween.pause();
    });

  document
    .querySelector(".marquee-companies")
    .addEventListener("mouseleave", () => {
      marqueeTween.resume();
    });
});
