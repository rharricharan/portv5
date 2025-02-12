document.addEventListener("DOMContentLoaded", () => {
        const hoverSound = document.getElementById("hoverSound");
        hoverSound.volume = 0.5; // Adjust volume if needed

        document.querySelectorAll(".sound").forEach((button) => {
            button.addEventListener("mouseenter", () => {
                hoverSound.currentTime = 0; // Reset sound for rapid hovers
                hoverSound.play();
            });
        });
    });