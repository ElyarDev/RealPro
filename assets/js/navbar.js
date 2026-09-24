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

// PRELOADER
document.addEventListener("DOMContentLoaded", () => {

    const preloader = document.querySelector("#preloader");
    const percentage = document.querySelector("#loaderPercentage");
    const progressCircle = document.querySelector(".preloader__circle-progress");

    if (!preloader || !percentage || !progressCircle) {
        console.log("Preloader elements not found!");
        return;
    }

    let progress = 0;

    const circumference = 2 * Math.PI * 54;

    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;

    const loading = setInterval(() => {

        progress += 2;

        if (progress > 100) {
            progress = 100;
        }

        percentage.textContent = progress;

        const offset =
            circumference -
            (progress / 100) * circumference;

        progressCircle.style.strokeDashoffset = offset;

        if (progress === 100) {

            clearInterval(loading);

            setTimeout(() => {
                preloader.style.opacity = "0";
                preloader.style.visibility = "hidden";
                preloader.style.pointerEvents = "none";

                setTimeout(() => {
                    preloader.remove();
                }, 900);

            }, 500);
        }
    }, 30);
});