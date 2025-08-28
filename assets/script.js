const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Variables Globales 

let index = 0;
let flecheDroite = document.querySelector("#banner .arrow_right")
let flecheGauche = document.querySelector("#banner .arrow_left")
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

//Fonctions

function updateBanner() {
	const slide = slides[index];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	bannerText.innerHTML = slide.tagLine;

	document.querySelectorAll(".dot").forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === index);
	});
}

function changeSlide(direction) {
	index += direction;
	if (index < 0) index = slides.length - 1;
	if (index >= slides.length) index = 0;
	updateBanner();
}

function genererDots() {
	slides.forEach((_, i) => {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	if (i === 0) dot.classList.add("dot_selected");
	dotsContainer.appendChild(dot);
});
}
function init() {

// Listeners pour les flèches

flecheGauche.addEventListener("click", () => changeSlide(-1));
flecheDroite.addEventListener("click", () => changeSlide(1));


// Initialisation de la bannière
updateBanner();
genererDots();

}

init();


