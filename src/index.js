import { createHome } from "./modules/home";
import { createNav, createFooter } from "./modules/ui";
const content = document.getElementById("content");
createNav(content);
createHome(content);
createFooter(content);
