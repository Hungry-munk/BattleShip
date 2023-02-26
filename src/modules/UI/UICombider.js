// sP for startPage
import * as sP from "./starterPageMakers.js";

// making starting page appear
const pageBody = document.querySelector("body");

pageBody.innerHTML += `
    ${sP.headerMaker()}
    ${sP.mainStarterMaker()}
    ${sP.footerMaker()}
`;
