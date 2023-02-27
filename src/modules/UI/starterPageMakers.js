import * as func from "../functions.js";

export function nameEnterMaker() {
    const nameSelectionContainer = document.createElement("div");
    nameSelectionContainer.classList.add("nameSelectionContainer");

    nameSelectionContainer.innerHTML = `
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

    const button = nameSelectionContainer.querySelector("button");

    button.addEventListener("click", () => {
        const text = document.querySelector("input");
        const textValidationObject = func.checkNameValidity(text.value);
        const nameErrorMsg = document.querySelector("span.nameErrorMsg");
        if (textValidationObject.validity) {
            // start game
        } else {
            nameErrorMsg.textContent = textValidationObject.message;
            setTimeout(() => {
                nameErrorMsg.textContent = "";
            }, 2000);
        }
    });

    return nameSelectionContainer;
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
