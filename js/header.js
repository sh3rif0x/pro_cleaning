export function initHeader() {
    const navLinks = document.querySelectorAll(".main-nav .nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {


            navLinks.forEach((navLink) => {
                navLink.classList.remove("active");
            });

            link.classList.add("active")
            const section = document.querySelector(
                link.getAttribute("href")
            );

            section.scrollIntoView();
        })
    })






































}