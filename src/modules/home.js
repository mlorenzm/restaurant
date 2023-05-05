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
  img.src = "../assets/coffee_beans.jpg";
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
    "From our bold and rich espresso to our smooth and creamy latte, we have a coffee that will satisfy every palate. Come and enjoy our warm and welcoming atmosphere, and let us help you start your day right with a delicious cup of coffee. and start your day right with a delicious cup of coffee.";
  textContainer.append(paragraphOne, paragraphTwo);
  container.append(textContainer);
  return container;
};

const createHome = (content) => {
  const main = createMain();

  main.appendChild(createLogo());
  main.appendChild(createPage());

  return content.appendChild(main);
};
export { createHome };
