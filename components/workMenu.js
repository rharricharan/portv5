const workItem = document.getElementById("work-item");
const workSelector = document.querySelector(".work-selector");

let isOpen = false;

workItem.addEventListener("click", () => {
    isOpen = !isOpen;
    workSelector.classList.toggle("show", isOpen);
});

workSelector.addEventListener("mouseleave", () => {
    isOpen = false;
    workSelector.classList.remove("show");
});
