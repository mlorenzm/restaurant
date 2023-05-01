const createNav = () => {
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

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("text-white", "self-center");
  footer.innerHTML =
    'Developed with ❤️ by         <a href="http://github.com/mlorenzm" target="_blank" rel="noreferrer noopener" class="text-yellow-500 font-bold ">Mauro Lorenzo</a>';
  return footer;
};

export { createNav, createFooter };
