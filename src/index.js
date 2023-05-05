import { createHome } from "./modules/home";
import { createNav, createFooter } from "./modules/ui";
const content = document.getElementById("content");
const nav = createNav();
content.append(nav);
nav.addEventListener("click", (e) => {
  if (e.target.textContent == "HOME") {
    createHome(content);
  } else if (e.target.textContent == "MENU") {
    console.log("menu");
  }
});
createFooter(content);
createHome(content);
