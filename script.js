// Burger Menu ===========

let burgerMenu = document.querySelector(".burger__menu");
let burgerMenuLinks = document.querySelector("header nav ul");

burgerMenu.addEventListener("click", (e) => {
	burgerMenuLinks.classList.toggle("opened");
	burgerMenu.classList.toggle("burger__menu__opened");
})

// =======================
