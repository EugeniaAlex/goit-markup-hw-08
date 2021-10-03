(() => {
window.addEventListener("load", () => {
    const body = document.querySelector("body");
    const buttonClose = document.querySelector(".menu-btn");
    const buttonOpen = document.querySelector(".menu-button");

    buttonOpen.addEventListener("click", () => {
        body.classList.add("is-open");
    });

    buttonClose.addEventListener("click", () => {
        body.classList.remove("is-open");
    });
})
})();
