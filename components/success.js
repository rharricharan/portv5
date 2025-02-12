document.addEventListener("DOMContentLoaded", () => {
    const clickSound = document.getElementById("successSound");
    clickSound.volume = 0.3; // Adjust volume if needed

    document.querySelectorAll(".sound").forEach((button) => {
        button.addEventListener("click", () => {
            clickSound.currentTime = 0; // Reset sound for rapid clicks
            clickSound.play();
        });
    });
});