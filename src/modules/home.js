import { deleteChild } from "./ui";
import coffeeBeans from "../assets/coffee_beans.jpg";
const createMain = () => {
  // Main page container
  let main = document.createElement("div");
  main.classList.add(
    "text-white",
    "flex",
    "flex-col",
    "items-center",
    "gap-10",
    "flex-grow",
    "justify-around"
  );
  return main;
};
// Logo section
const createLogo = () => {
  let logoContainer = document.createElement("div");
  logoContainer.classList.add("flex", "flex-col", "items-center");
  const logoUpper = document.createElement("div");
  logoUpper.textContent = "Sip &";
  logoUpper.classList.add(
    "font-noto",
    "text-8xl",
    "bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))]",
    "from-amber-50",
    "from-10%",
    "to-yellow-700",
    "to-90%",
    "text-transparent",
    "bg-clip-text"
  );
  const logoLow = document.createElement("div");
  logoLow.textContent = "SAVOR";
  logoLow.classList.add(
    "font-raleway",
    "text-8xl",
    "-mt-6",
    "bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))]",
    "from-slate-100",
    "from-10%",
    "to-slate-600",
    "to-70%",
    "text-transparent",
    "bg-clip-text"
  );
  logoContainer.append(logoUpper, logoLow);

  return logoContainer;
};
// The page itself
const createPage = () => {
  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "md:flex-row",
    "md:gap-6"
  );
  const img = document.createElement("img");
  img.src = coffeeBeans;
  img.classList.add(
    "rounded-lg",
    "shadow-xl",
    "h-96",
    "aspect-square",
    "flex-none",
    "grow-0"
  );
  const textContainer = document.createElement("div");
  textContainer.classList.add(
    "text-xl",
    "font-raleway",
    "flex",
    "flex-col",
    "gap-4"
  );
  container.append(img);
  const paragraphOne = document.createElement("p");
  paragraphOne.innerHTML =
    'Experience the aroma and taste of freshly roasted coffee beans at <span class="font-noto text-yellow-500">Sip & Savor</span>. Our expertly crafted coffee blends are made from the finest beans, sourced from the best coffee-growing regions around the world.';
  const paragraphTwo = document.createElement("p");
  paragraphTwo.textContent =
    "Whether you're in the mood for a piping hot cup of our signature coffee, or a deliciously fresh bagel topped with your favorite spread, we've got you covered. Our expert baristas and bakers work tirelessly to craft the perfect cup and bagel for every customer, every time. From our classic drip coffee to our decadent espresso drinks, every sip is a moment of pure bliss. And with our wide selection of bagel flavors and toppings, you'll never run out of delicious options to try.";
  textContainer.append(paragraphOne, paragraphTwo);
  container.append(textContainer);
  return container;
};

const createHome = (content) => {
  const main = createMain();
  main.classList.add("flex-grow");
  deleteChild(content);
  main.appendChild(createLogo());
  main.appendChild(createPage());

  return content.insertBefore(main, content.lastChild);
};
export { createHome, createLogo, createMain };
