document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));
            this.classList.add("active");
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.classList.add("active");
        });
    });
});

