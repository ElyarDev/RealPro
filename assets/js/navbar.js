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

// ------------------------------------------------------------------------------------------------

// LOGOUT ALERT
const logOutBtn = document.querySelector('.btn--logout');

logOutBtn.addEventListener('click', function () {
    alert('you logged out');
})

// ------------------------------------------------------------------------------------------------

// PRELOADER
const preloader = document.querySelector("#preloader");
const percentage = document.querySelector("#loaderPercentage");
const progressCircle = document.querySelector(".preloader__circle-progress");

let progress = 0;

const circumference = 2 * Math.PI * 54;

if (progressCircle) {
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;
}

function updateProgress(value) {
    value = Math.min(100, Math.max(0, value));

    if (percentage) {
        percentage.textContent = Math.floor(value);
    }

    if (progressCircle) {

        const offset =
            circumference -
            (value / 100) * circumference;

        progressCircle.style.strokeDashoffset = offset;
    }
}

const loadingAnimation = setInterval(() => {

    if (progress < 70) {

        progress += 1;

    } else if (progress < 85) {

        progress += 0.3;

    } else if (progress < 95) {

        progress += 0.1;
    }

    updateProgress(progress);

}, 50);

window.addEventListener("load", () => {
    clearInterval(loadingAnimation);

    const finishAnimation = setInterval(() => {
        progress += 2;

        if (progress >= 100) {

            progress = 100;

            clearInterval(finishAnimation);

            updateProgress(100);

            setTimeout(() => {

                preloader.style.opacity = "0";
                preloader.style.visibility = "hidden";
                preloader.style.pointerEvents = "none";

                setTimeout(() => {
                    preloader.remove();
                }, 800);

            }, 300);
        }
        updateProgress(progress);
    }, 20);
});