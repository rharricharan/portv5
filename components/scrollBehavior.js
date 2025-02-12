const scrollContainer = document.querySelector(".project-container");

scrollContainer.addEventListener("scroll", () => {
    if (scrollContainer.scrollTop === 0) {
        scrollContainer.scrollTop = 1; // Prevent bouncing at the top
    }
    if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight - 1; // Prevent bouncing at the bottom
    }
});

document.body.addEventListener("touchmove", (e) => {
    if (!e.target.closest(".project-container")) {
        e.preventDefault(); // Prevent body bounce
    }
}, { passive: false });
