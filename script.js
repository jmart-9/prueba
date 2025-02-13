document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const indicator = document.createElement("div");
    indicator.classList.add("nav-indicator");
    document.querySelector("nav").appendChild(indicator);
    
    function updateIndicator(element) {
        indicator.style.width = `${element.offsetWidth}px`;
        indicator.style.left = `${element.offsetLeft}px`;
    }
    
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            navLinks.forEach(l => l.classList.remove("active"));
            event.target.classList.add("active");
            updateIndicator(event.target);
        });
    });
    
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink) updateIndicator(activeLink);
});
