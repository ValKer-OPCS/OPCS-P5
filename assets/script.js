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
let rightArrow = document.querySelector("#banner .arrow_right")
let leftArrow = document.querySelector("#banner .arrow_left")
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

//Fonctions

/**
 * Updates the banner image, text, and navigation dots
 * based on the current slide index.
 */
function updateBanner() {
	const slide = slides[index];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	bannerText.innerHTML = slide.tagLine;

	document.querySelectorAll(".dot").forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === index);
	});
}

/**
 * Changes the currently displayed slide according to the given direction.
 * Loops back to the first/last slide when reaching the boundaries.
 * @param {number} direction - -1 for left, +1 for right
 */
function changeSlide(direction) {
	index += direction;
	if (index < 0) index = slides.length - 1;
	if (index >= slides.length) index = 0;
	updateBanner();
}

/**
 * Dynamically generates navigation dots under the banner.
 * The first dot is set as selected by default.
 * Adds a click event listener to each dot to:
 * Update the global `index` to the clicked dot's position.
 * Trigger the `updateBanner()` function to refresh the banner display.
 */
function genererDots() {
	slides.forEach((_, i) => {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	if (i === 0) dot.classList.add("dot_selected");
	dot.addEventListener("click", () => {
			index = i;
			updateBanner();     
		});
	dotsContainer.appendChild(dot);
});
}

/**
 * Initializes the slideshow:
 * - Adds event listeners to navigation arrows
 * - Updates the banner with the first slide
 * - Generates navigation dots
 */
function init() {

leftArrow.addEventListener("click", () => changeSlide(-1));
rightArrow.addEventListener("click", () => changeSlide(1));
updateBanner();
genererDots();

}

init();


