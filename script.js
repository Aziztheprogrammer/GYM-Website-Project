// Burger Menu ===========

let burgerMenu = document.querySelector(".burger__menu");
let burgerMenuLinks = document.querySelector("header nav ul");

burgerMenu.addEventListener("click", (e) => {
	burgerMenuLinks.classList.toggle("opened");
	burgerMenu.classList.toggle("burger__menu__opened");
})

// =======================

// Contact Form ==========

function sendMail() {
	let params = {
		sujet: sujetValue,
		nom: nomValue,
		message: messageValue
	}

	emailjs.send("service_um9f5jk","template_gwqnb59", params);
}

document.querySelector("form").addEventListener("submit", () => {

	let sujetValue = document.getElementById("input-sujet").value;
	let nomValue = document.getElementById("input-nom").value; 
	let messageValue = document.getElementById("input-message").value; 

	if (sujetValue.trim() != "" && nomValue.trim() != "" && messageValue.trim() != "") {
		alert("Message Envoyé !")
		sendMail()
	} else {
		alert("Erreur !")
	}
})

// =======================