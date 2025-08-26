const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let index = 0;

let flecheGauche = document.querySelector("#banner .arrow_left")
flecheGauche.addEventListener("click", () => {
	console.log("Clic sur flèche de gauche")
})

let flecheDroite = document.querySelector("#banner .arrow_right")
flecheDroite.addEventListener("click", () => {
	console.log("Clic sur flèche de droite")
})



const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

	slides.forEach((_, i) => {
		const dot = document.createElement("span");
		dot.classList.add("dot");
		if (i === 0) dot.classList.add("dot_selected");
		dotsContainer.appendChild(dot);
	});


