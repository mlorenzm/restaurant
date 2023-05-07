import { createLogo, createMain } from "./home";
import { deleteChild } from "./ui";

const contactUs = () => {
  const container = document.createElement("div");
  container.classList.add("mx-auto", "max-w-7xl", "py-12");
  const card = document.createElement("div");
  card.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "bg-slate-800",
    "rounded",
    "px-8",
    "py-6",
    "shadow-2xl"
  );
  const title = document.createElement("h2");
  title.classList.add("text-3xl", "font-bold", "text-gray-100", "sm:text-4xl");
  title.textContent = "Let's get in touch";
  const p = document.createElement("p");
  p.classList.add("mt-2", "text-lg", "leading-8", "text-gray-300");
  p.textContent = "We open everyday from 9 to 5, come check us out";
  const num = document.createElement("div");
  num.textContent = " Phone us at: +0 1234567";
  const dir = document.createElement("a");
  dir.textContent = "Find us on Maps ↗";
  dir.classList.add(
    "bg-slate-300",
    "hover:bg-gray-300",
    "text-gray-900",
    "font-semibold",
    "py-2",
    "my-2",
    "px-4",
    "border",
    "border-gray-400",
    "rounded",
    "text-center",
    "shadow"
  );
  dir.href =
    "https://www.google.com/maps/d/viewer?mid=1jJWcYGfEc74qs8tEgqVaRbykJOQ&ie=UTF8&t=m&oe=UTF8&msa=0";
  dir.target = "_blank";
  num.classList.add("text-lg", "mt-3", "text-gray-50", "font-semibold");
  card.append(title, p, dir, num);
  container.append(card);
  return card;
};

const createContact = (content) => {
  deleteChild(content);
  console.log(content);
  const main = createMain();
  main.classList.add("h-screen");
  main.append(createLogo());
  main.append(contactUs());
  content.insertBefore(main, content.lastChild);
};

export { createContact };
