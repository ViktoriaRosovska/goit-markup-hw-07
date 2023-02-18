
(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]"),
    const closeBtnRef = document.querySelector("[data-close-button]"),
    menu: document.querySelector("[data-modal]"),
       
    menuBtnRef.addEventListener("click", () => {
    menu.classList.toggle("is-open");
            });
    closeBtnRef.addEventListener("click", () => {
    menu.classList.toggle("is-open");
    closeBtnRef.toggle("is-open")
    });
}();