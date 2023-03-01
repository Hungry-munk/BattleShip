import * as func from "../functions.js";

export function validateStartGameEvent() {
    const text = document.querySelector("input");
    const textValidationObject = func.checkNameValidity(text.value);
    if (textValidationObject.validity) {
        // bring out ship placements UI
    } else {
        const nameErrorMsg = document.querySelector("span.nameErrorMsg");
        nameErrorMsg.textContent = textValidationObject.message;
        setTimeout(() => {
            nameErrorMsg.textContent = "";
        }, 2000);
    }
}

export function shipPlacementEvent() {
    // clear name enter thing
}
