import { starterPageMaker } from "./modules/UI/starterPageMakers.js";

const bodyElement = document.querySelector("body");

// making starter page appear
bodyElement.appendChild(starterPageMaker());
