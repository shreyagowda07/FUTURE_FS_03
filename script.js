
// ONEBITE WEBSITE JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

    // 1. Update the footer year automatically
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent =
            "© " + new Date().getFullYear() +
            " ONEBITE Website Demo. Built with HTML, CSS & JavaScript.";
    }

    // 2. Add smooth scrolling to navigation links
    const navigationLinks = document.querySelectorAll(
        '.navbar a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Load images only when needed
    const images = document.querySelectorAll("img");

    images.forEach(function (image) {
        image.loading = "lazy";
    });

    console.log("ONEBITE website loaded successfully!");
});
