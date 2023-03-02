import * as eFunc from "./eventFunctions.js";

export function nameEnterMaker() {
    const startingRootDiv = document.createElement("div");
    startingRootDiv.classList.add("root");

    startingRootDiv.innerHTML = `
        <div class="nameSelection">
            <input
                type="text"
                placeholder="Combatant Name"
                maxlength="15"
                minlength="1"
            />
            <label>Combatant Name</label>
            <span class="nameErrorMsg"></span>
        </div>

        <button type="button" class="startButton">Start Game</button>
    `;

    const button = startingRootDiv.querySelector("button");

    button.addEventListener("click", eFunc.validateStartGameEvent);

    return startingRootDiv;
}

export function headerMaker() {
    const headerElement = document.createElement("header");
    headerElement.innerHTML = `
        <img src="assests/img/BS_logo.png" alt="Battle Ship Logo" />
    `;
    return headerElement;
}

export function footerMaker() {
    const footerElement = document.createElement("footer");
    footerElement.innerHTML = `
        <div>made with ❤️ by Hungry_munk</div>
            <a href="https://github.com/Hungry-munk">
                <i class="fa-brands fa-github"></i>
            </a>
    `;
    return footerElement;
}

// combinding them all
export function starterPageMaker() {
    const pageBody = document.createElement("div");
    pageBody.id = "root";
    pageBody.appendChild(headerMaker());
    pageBody.appendChild(nameEnterMaker());
    pageBody.appendChild(footerMaker());
    return pageBody;
}
