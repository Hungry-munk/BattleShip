// sP for startPage
import * as sP from "./starterPageMakers.js";

// making starting page function
export function starterPageMaker() {
    const pageBody = document.createElement("div");
    pageBody.id = "root";
    pageBody.appendChild(sP.headerMaker());
    pageBody.appendChild(sP.nameEnterMaker());
    pageBody.appendChild(sP.footerMaker());
    return pageBody;
}
