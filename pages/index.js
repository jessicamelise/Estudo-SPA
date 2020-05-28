import { home } from "./home/index.js";
import { anime } from "./animes/index.js";

const main = document.querySelector("#main");

const changePages = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case "":
        main.appendChild(home());
        break;
      case "#naruto":
        main.appendChild(naruto());
        break;
      default:
        main.appendChild(home());

    }
  })
}

window.addEventListener("load", () => {
  main.appendChild(home());
  changePages();
})