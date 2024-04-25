// Burger Menu ===========

let burgerMenu = document.querySelector(".burger__menu");
let burgerMenuLinks = document.querySelector("header nav ul");

burgerMenu.addEventListener("click", (e) => {
	burgerMenuLinks.classList.toggle("opened");
	burgerMenu.classList.toggle("burger__menu__opened");
})

// =======================

// // Coachs Preview ========

// let coachs = document.querySelectorAll(".coach");
// console.log(coachs);
 
// coachs.forEach((coach) => {
// 	coach.addEventListener("mouseover", (e) => {
// 		coach.classList.add("active");
		
// 		coachs.forEach((coach) => {
// 			if (!coach.classList.contains("active")) {
// 				coach.classList.add("not-active");
// 			}
// 		})
// 	})	
// })

// coachs.forEach((coach) => {
// 	coach.addEventListener("mouseout", (e) => {
		
// 		coachs.forEach((coach) => {
// 			coach.classList.remove("active");
// 			coach.classList.remove("not-active");
// 		})
// 	})
// })

// // =======================