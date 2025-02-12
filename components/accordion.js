document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-header, .sub-accordion-header, .nested-accordion-header");

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Close any open siblings (if desired)
            const parent = this.closest(".accordion, .sub-accordion, .nested-accordion");
            parent.querySelectorAll(".accordion-content, .sub-accordion-content, .nested-accordion-content").forEach((item) => {
                if (item !== content) {
                    item.style.display = "none";
                }
            });

            // Toggle current content
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});
