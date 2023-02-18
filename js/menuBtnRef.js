(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-button]"),
        closeMenuBtn: document.querySelector("[data-close-button]"),
        menu: document.querySelector("[data-menu]"),
    };

    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
    
    function toggleModal() {
        refs.menu.classList.toggle("is-open");
    }
    
})();