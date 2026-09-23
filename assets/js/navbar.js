// NAVBAR TOGGLE
document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".navbar__menu");
    const navList = document.querySelector(".navbar__list");

    if (!menuBtn || !navList) return;

    menuBtn.addEventListener("click", () => {
        const isOpen = navList.classList.toggle("is-open");
        menuBtn.classList.toggle("is-active", isOpen);
        menuBtn.setAttribute("aria-expanded", isOpen);
    });

    // close menu by clicking to link
    navList.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navList.classList.remove("is-open");
            menuBtn.classList.remove("is-active");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });

    // close menu by clicking outside
    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target)) {
            navList.classList.remove("is-open");
            menuBtn.classList.remove("is-active");
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });

});

// LOGOUT ALERT
const logOutBtn = document.querySelector('.btn--logout');

logOutBtn.addEventListener('click', function () {
    alert('you logged out');
})