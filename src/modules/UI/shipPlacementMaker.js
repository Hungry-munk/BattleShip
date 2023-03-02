export function boradElementMaker() {
    const boradContainer = document.createElement("div");
    boradContainer.classList("gameBoard");

    for (let i = 0; i < 100; i++) {
        boradContainer.append(document.createElement("div"));
    }
}
