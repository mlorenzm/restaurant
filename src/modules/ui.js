const createNav = (content) => {
  const nav = document.createElement("nav");
  nav.classList.add(
    "grid",
    "place-items-center",
    "border-b-2",
    "border-amber-100"
  );
  const ul = document.createElement("ul");
  ul.classList.add("flex", "gap-10", "p-6");
  const home = document.createElement("li");
  home.classList.add(
    "text-xl",
    "text-slate-100",
    "font-thin",
    "cursor-pointer",
    "hover:relative",
    "hover:bottom-1"
  );
  home.textContent = "HOME";

  const menu = document.createElement("li");
  menu.classList.add(
    "text-xl",
    "text-slate-100",
    "font-thin",
    "cursor-pointer",
    "hover:relative",
    "hover:bottom-1"
  );
  menu.textContent = "MENU";
  const contact = document.createElement("li");
  contact.classList.add(
    "text-xl",
    "text-slate-100",
    "font-thin",
    "cursor-pointer",
    "hover:relative",
    "hover:bottom-1"
  );
  contact.textContent = "CONTACT";

  ul.append(home, menu, contact);
  nav.append(ul);

  return nav;
};

const createFooter = (content) => {
  const footer = document.createElement("footer");
  footer.classList.add("text-white", "self-center", "mt-2");
  footer.innerHTML =
    'Developed with ❤️ by <a href="http://github.com/mlorenzm" target="_blank" rel="noreferrer noopener" class="text-yellow-500 font-bold ">Mauro Lorenzo</a>';
  return content.append(footer);
};
const deleteChild = (content) => {
  if (content.childNodes.length > 2) {
    content.removeChild(content.childNodes[1]);
  }
};
export { createNav, createFooter, deleteChild };
