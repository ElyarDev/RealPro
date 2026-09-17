const cta = document.querySelector(".cta");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.25
    }
);

if (cta) {
    observer.observe(cta);
}