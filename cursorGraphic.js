document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");
    const cursorText = document.querySelector(".cursor-text");
    const projects = document.querySelectorAll(".project");
    const homeItem = document.querySelectorAll(".home-item");
    const workItem = document.querySelectorAll(".work-item");
    const expItem = document.querySelectorAll(".exp-item");
    const contactItem = document.querySelectorAll(".contact-item")

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
            x: e.clientX - 40,
            y: e.clientY - 40,
            duration: 0.2,
            ease: "power1.out",
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
            duration: 0.2,
            ease: "power1.out",
            onComplete: () => {
                cursorText.textContent = newText;

                // Animate in the new text
                gsap.fromTo(cursorText, 
                    { y: 10, opacity: 0 }, 
                    { y: 0, opacity: 1, duration: 0.2, ease: "power1.out" }
                );
            }
        });
    }

    // Hover effects for projects
    projects.forEach((project) => {
        project.addEventListener("mouseenter", () => {
            updateCursorText(project.getAttribute("data-text"));
            gsap.to(cursor, { scale: 1.12, backgroundColor: "rgba(255, 255, 255, 1)" });
        });

        project.addEventListener("mouseleave", () => {
            updateCursorText("(scroll)");
            gsap.to(cursor, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.5)" });
            gsap.to(cursor.querySelector(".cursor-text"), { color: "rgba(0, 0, 0, 1)" });
        });
    });

    homeItem.forEach((homeItem) => {
        homeItem.addEventListener("mouseenter", () => {
            updateCursorText(homeItem.getAttribute("data-text"));
            gsap.to(cursor, { scale: 1.12, backgroundColor: "#0898FB" });
            gsap.to(cursor.querySelector(".cursor-text"), { color: "rgba(255, 255, 255, 1)" });
        });

        homeItem.addEventListener("mouseleave", () => {
            updateCursorText("(scroll)");
            gsap.to(cursor, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.5)" });
            gsap.to(cursor.querySelector(".cursor-text"), { color: "rgba(0, 0, 0, 1)" });
        });
    });

    workItem.forEach((workItem) => {
        workItem.addEventListener("mouseenter", () => {
            updateCursorText(workItem.getAttribute("data-text"));
            gsap.to(cursor, { scale: 1.12, backgroundColor: "#FF4E12" });
            gsap.to(cursor.querySelector(".cursor-text"), { color: "rgba(255, 255, 255, 1)" });
        });

        workItem.addEventListener("mouseleave", () => {
            updateCursorText("(scroll)");
            gsap.to(cursor, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.5)" });
            gsap.to(cursor.querySelector(".cursor-text"), { color: "rgba(0, 0, 0, 1)" });
        });
    });

    expItem.forEach((expItem) => {
        expItem.addEventListener("mouseenter", () => {
            updateCursorText(expItem.getAttribute("data-text"));
            gsap.to(cursor, { scale: 1.12, backgroundColor: "#DC1DA9" });
            gsap.to(cursor.querySelector(".cursor-text"), { color: "rgba(255, 255, 255, 1)" });
        });

        expItem.addEventListener("mouseleave", () => {
            updateCursorText("(scroll)");
            gsap.to(cursor, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.5)" });
            gsap.to(cursor.querySelector(".cursor-text"), { color: "rgba(0, 0, 0, 1)" });
        });
    });

    contactItem.forEach((contactItem) => {
        contactItem.addEventListener("mouseenter", () => {
            updateCursorText(contactItem.getAttribute("data-text"));
            gsap.to(cursor, { scale: 1.12, backgroundColor: "#11D238" });
            gsap.to(cursor.querySelector(".cursor-text"), { color: "rgba(255, 255, 255, 1)" });
        });

        contactItem.addEventListener("mouseleave", () => {
            updateCursorText("(scroll)");
            gsap.to(cursor, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.5)" });
            gsap.to(cursor.querySelector(".cursor-text"), { color: "rgba(0, 0, 0, 1)" });
        });
    });
});