const categories = [
  {
    heading: "Grocery & Staples",
    desc: "Rice, wheat, pulses, flours, oils, spices, and essential food items.",
    image: "./assets/categories/Grocery.webp",
  },
  {
    heading: "Snacks & Beverages",
    desc: "Biscuits, namkeen, chips, tea, coffee, soft drinks, and juices.",
    image: "./assets/categories/Snaks.webp",
  },
  {
    heading: "Household & Cleaning",
    desc: "Detergents, cleaners, kitchen essentials, and home care products.",
    image: "./assets/categories/housecleaning.webp",
  },
  {
    heading: "Personal Care",
    desc: "Soaps, shampoos, oral care, skincare, and grooming essentials.",
    image: "./assets/categories/personalCare.webp",
  },
  {
    heading: "Frozen & Ready-to-Eat",
    desc: "Frozen snacks, ready meals, ice creams, and instant foods.",
    image: "./assets/categories/frozenfood.webp",
  },
  {
    heading: "Dry Fruits",
    desc: "Premium quality dry fruits for health, taste, and everyday nutrition.",
    image: "./assets/categories/dryFruits.webp",
  },
  {
    heading: "Crockery",
    desc: "Stylish and durable crockery for everyday use and special occasions.",
    image: "./assets/categories/crockary.webp",
  },
  {
    heading: "Plastic Items",
    desc: "Durable and affordable plastic products for everyday home and kitchen use.",
    image: "./assets/categories/plasticItems.webp",
  },
];

const track = document.querySelector(".company-categories");

// add images dynamically
categories.forEach((src) => {
  track.innerHTML += `
   <div
            class="container h-50 bg-lighttext rounded-2xl overflow-hidden grid grid-cols-2"
          >
            <img
              src=${src.image}
              alt="image"
              loading="lazy"
              height="100"
              width="100"
              class="h-full w-full  object-fill rounded-2xl"
            />
            <div class="h-full flex flex-col justify-between p-4">
              <div class="flex flex-col gap-2">
              <h5 class="text-xl font-semibold">${src.heading}</h5>
              <p class="text-base font-medium">
                ${src.desc}
              </p></div>
            </div>
          </div>`;
});
