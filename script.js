// Burger Menu ===========

let burgerMenu = document.querySelector(".burger__menu");
let burgerMenuLinks = document.querySelector("header nav ul");

burgerMenu.addEventListener("click", (e) => {
	burgerMenuLinks.classList.toggle("opened");
	burgerMenu.classList.toggle("burger__menu__opened");
})

// =======================

// Burger Menu ===========

function sendMail() {
	let params = {
		sujet: document.getElementById("input-sujet"),
		nom: document.getElementById("input-nom"),
		message: document.getElementById("input-message")
	}

	emailjs.send("service_um9f5jk","template_gwqnb59", params).then(() => {
		alert("Message Envoyé !")
	}).catch("Erreur !")
}

// =======================