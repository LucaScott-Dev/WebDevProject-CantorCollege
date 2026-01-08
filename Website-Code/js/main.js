const burger = document.getElementById("burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    const isOpen = nav.style.display === "flex";
    nav.style.display = isOpen ? "none" : "flex";
    burger.classList.toggle("active");
});