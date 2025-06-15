const menuBtn = document.getElementById("menuIcon")
const navDropDown = document.querySelector(".dropDown")
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("change");
    navDropDown.classList.toggle("hidden");
} );