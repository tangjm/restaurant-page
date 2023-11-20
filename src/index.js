import "./index.css";
import { homeSection } from "./home.js"
import { menuSection } from "./menu.js"
import { contactSection } from "./contact.js"

console.log("Hello from index.js!")

const tabs = document.querySelector("div#tabs"); 
const content = document.querySelector("div#content")

homeSection();

tabs.addEventListener("click", e => {
  switch (e.target.id) {
    case "home": 
      while (content.firstChild !== null) {
        content.removeChild(content.lastChild);
      }
      homeSection();
      break;
    case "menu": 
      while (content.firstChild !== null) {
        content.removeChild(content.lastChild);
      }
      menuSection();
      break;
    case "contact":
      while (content.firstChild !== null) {
        content.removeChild(content.lastChild);
      }
      contactSection();
      break;
    default: 
  }
})


