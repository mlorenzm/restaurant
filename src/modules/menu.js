import { createLogo, createMain } from "./home";
import { deleteChild } from "./ui";
const menuItems = [
  {
    name: "Bold Brew",
    description:
      "Start your day off strong with our bold and flavorful black coffee, made from the finest beans and brewed to perfection.",
    allergens: ["High Caffeine"],
    imgpath: "../../assets/black_coffee.jpg",
  },
  {
    name: "Frothy Fix",
    description:
      "Indulge in our creamy and frothy cappuccino, crafted with the perfect balance of rich espresso and velvety milk.",
    allergens: ["Lactose"],
    imgpath: "../../assets/latte.jpg",
  },
  {
    name: "Plain Perfection",
    description:
      "Our classic bagel is the perfect canvas for your favorite toppings, with a soft and chewy texture that will keep you coming back for more.",
    imgpath: "../../assets/bagels.jpg",
    allergens: ["Gluten"],
  },
  {
    name: "Savory Sensation",
    description:
      "Our savory salmon and cream cheese bagel is a delicious twist on a classic favorite, featuring smoked salmon, creamy cheese, and fresh bagel baked in-house daily.",
    imgpath: "../../assets/salmon_bagel.jpeg",
    allergens: ["Lactose", "Fish", "Gluten"],
  },
];

const createMenuCard = (object) => {
  const card = document.createElement("div");
  card.classList.add(
    "max-w-sm",
    "overflow-hidden",
    "rounded",
    "shadow-lg",
    "bg-gray-50"
  );
  const img = document.createElement("img");
  console.log(object.imgpath);
  img.src = object.imgpath;
  img.classList.add("w-full", "h-64", "object-cover");
  card.append(img);
  const description = document.createElement("div");
  description.classList.add("px-6", "py-4");
  const title = document.createElement("div");
  title.classList.add("mb-2", "text-xl", "font-bold", "text-gray-800");
  title.textContent = object.name;
  const p = document.createElement("p");
  p.classList.add("text-base", "text-gray-700");
  p.textContent = object.description;
  description.append(title, p);
  card.append(description);
  const allergenContainer = document.createElement("div");
  allergenContainer.classList.add("px-6", "pb-2", "pt-4");
  for (let i of object.allergens) {
    const token = document.createElement("span");
    token.classList.add(
      "mb-2",
      "mr-2",
      "inline-block",
      "rounded-full",
      "px-3",
      "py-1",
      "text-sm",
      "font-semibold"
    );
    token.textContent = i;
    if (i == "Fish") {
      token.classList.add("text-blue-800", "bg-blue-200");
    } else if (i == "Lactose") {
      token.classList.add("text-amber-800", "bg-amber-100");
    } else if (i == "Gluten") {
      token.classList.add("text-gray-600", "bg-gray-200");
    } else if (i == "High Caffeine") {
      token.classList.add("text-white", "bg-gray-900");
    }
    allergenContainer.append(token);
  }
  card.append(allergenContainer);
  return card;
};
const createMenu = () => {
  deleteChild(content);
  const main = createMain();
  main.classList.add();
  main.insertBefore(createLogo(), main.lastChild);
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("grid", "gap-2", "md:grid-cols-2");
  for (let i of menuItems) {
    cardContainer.append(createMenuCard(i));
  }
  main.append(cardContainer);
  content.insertBefore(main, content.lastChild);
};

export { createMenu };
