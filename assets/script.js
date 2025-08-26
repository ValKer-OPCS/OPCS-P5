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
	index--
	if(index < 0 ){
		index = slides.length - 1
	}
	updateBanner()

})

let flecheDroite = document.querySelector("#banner .arrow_right")
flecheDroite.addEventListener("click", () => {
	console.log("Clic sur flèche de droite")
	index++
	if(index >= slides.length){
		index = 0
	}
	updateBanner()
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


function updateBanner() {
	const slide = slides[index];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	bannerText.innerHTML = slide.tagLine;

	document.querySelectorAll(".dot").forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === index);
	});
}


