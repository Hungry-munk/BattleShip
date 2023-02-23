export function nameEnterMaker() {
    const rootElement = document.createElement("div");
    rootElement.id = "root";

    rootElement.innerHTML = `
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
    `;

    return rootElement;
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
}
