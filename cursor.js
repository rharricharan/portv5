document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");
    const cursorText = document.querySelector(".cursor-text");
    const projects = document.querySelectorAll(".project");

    function isTouchDevice() {
        return window.innerWidth <= 1024 || "ontouchstart" in window;
    }

    if (isTouchDevice()) {
        cursor.style.display = "none";
        return;
    }

    // Mouse move effect
    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX - cursor.clientWidth / 2,
            y: e.clientY - cursor.clientHeight / 2,
            duration: 0.2,
            ease: "power2.out",
            opacity: 1
        });
    });

    // Hide cursor when leaving viewport
    document.addEventListener("mouseleave", () => {
        gsap.to(cursor, { opacity: 0 });
    });

    // Smooth text transition function
    function updateCursorText(newText) {
        // Animate out the old text
        gsap.to(cursorText, {
            y: -10,
            opacity: 0,
            duration: 0.3,
            ease: "power2.Inout",
            onComplete: () => {
                cursorText.textContent = newText;

                // Animate in the new text
                gsap.fromTo(cursorText, 
                    { y: 10, opacity: 0 }, 
                    { y: 0, opacity: 1, duration: 0.3, ease: "power2.Inout" }
                );
            }
        });
    }

    // Hover effects for projects
    projects.forEach((project) => {
        project.addEventListener("mouseenter", () => {
            updateCursorText(project.getAttribute("data-text"));
            gsap.to(cursor, { scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" });
        });

        project.addEventListener("mouseleave", () => {
            updateCursorText("(scroll)");
            gsap.to(cursor, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.5)" });
        });
    });
});
