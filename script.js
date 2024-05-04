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
		sujet: document.getElementById("input-sujet").value,
		nom: document.getElementById("input-nom").value,
		message: document.getElementById("input-message").value
	}

	emailjs.send("service_um9f5jk","template_gwqnb59", params).then((res) => {
		alert("Message Envoyé !")
	}).catch("Erreur !")
}

// =======================