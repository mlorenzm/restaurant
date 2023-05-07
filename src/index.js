import { createHome } from "./modules/home";
import { createNav, createFooter, deleteChild } from "./modules/ui";
import { createMenu } from "./modules/menu";
import { createContact } from "./modules/contact";

const content = document.getElementById("content");
const nav = createNav();
content.append(nav);
nav.addEventListener("click", (e) => {
  if (e.target.textContent == "HOME") {
    createHome(content);
  } else if (e.target.textContent == "MENU") {
    createMenu();
  } else if (e.target.textContent == "CONTACT") {
    createContact(content);
  }
});
createFooter(content);
createHome(content);
