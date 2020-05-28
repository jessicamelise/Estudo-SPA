import { home } from "./home/index.js";
import { naruto } from "./naruto/index.js";
import { deathNote } from "./death-note/index.js";
import { fullmetalAlchemist } from "./fullmetal-alchemist/index.js"

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
      case "#death-note":
        main.appendChild(deathNote());
        break;
      case "#fullmetal-alchemist":
        main.appendChild(fullmetalAlchemist());
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