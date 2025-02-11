document.addEventListener("DOMContentLoaded", () => {
    const menuText = document.querySelectorAll(".menu-text");

    function updateMenuText(newText) {
        menuText.forEach(el => {
            // Animate out the old text
            gsap.to(el, {
                y: -10,
                opacity: 0,
                duration: 0.2,
                ease: "power1.out",
                onComplete: () => {
                    el.textContent = newText;

                    // Animate in the new text
                    gsap.fromTo(el,
                        { y: 10, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.2, ease: "power1.out" }
                    );
                }
            });
        });
    }

    // Wait 500ms, then update the menu text with content from ".data-text"
    setTimeout(() => {
        const newText = document.querySelector(".data-text")?.textContent;
        if (newText) {
            updateMenuText(newText);
        }
    }, 500);
});