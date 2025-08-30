//	Carousel module - How to use
// 	In HTML file :
//	- need an IDed container to contain the whole carousel
//	- need an img with "arrow_left" class
//	- need an img with "arrow_right" class
//	- need an img with "banner-img" class
//	- need a <p> element for the tagLine
//	- need a container with "dots" class
//
//
// In main.js file, call function with parameter 
//	carouselInit({
//  	container: "#banner",	= ID of the container
//  	slides: slidesBanner,	= name of the array used to store slides information
//  	autoplay: false,		= true/false
//  	interval: 2000,			= time in milliseconds for autoplay, leave at 0 if autoplay false
//  	infinite: true,			= true/false
//	});
//
// In variables.js file 
//	- need a least one array names "slides", 
// it is used a the default array if array not defined in carouselInit() parameters



import { slides } from "../variables.js";

/**
 * Updates the carousel banner image, tagline, and selected dot based on the current state.
 * @param {Object} state - The carousel state object.
 * @param {number} state.index - Current slide index.
 * @param {Array} state.slides - Array of slide objects.
 * @param {HTMLImageElement} state.bannerImg - Banner image element.
 * @param {HTMLElement} state.bannerText - Banner tagline element.
 * @param {HTMLElement} state.dotsContainer - Container for dot elements.
 */
function updateBanner(state) {
	const slide = state.slides[state.index];
	state.bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	state.bannerText.innerHTML = slide.tagLine;

	state.dotsContainer.querySelectorAll(".dot").forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === state.index);
	});
}

/**
 * Changes the current slide in the carousel by a given direction.
 * @param {number} direction - Direction to change slide (-1 for previous, 1 for next).
 * @param {Object} state - The carousel state object.
 */
function changeSlide(direction, state) {
	state.index += direction;
	if (state.index < 0) state.index = state.settings.infinite ? state.slides.length - 1 : 0;
	if (state.index >= state.slides.length) state.index = state.settings.infinite ? 0 : state.slides.length - 1;
	updateBanner(state);
}

/**
 * Initializes the dot navigation for the carousel and adds click event listeners.
 * @param {Object} state - The carousel state object.
 */
function dotsHandler(state) {
	state.dotsContainer.innerHTML = "";
	state.slides.forEach((_, i) => {
		const dot = document.createElement("span");
		dot.classList.add("dot");
		if (i === 0) dot.classList.add("dot_selected");
		dot.addEventListener("click", () => {
			state.index = i;
			updateBanner(state);
		});
		state.dotsContainer.appendChild(dot);
	});
}

/**
 * Initializes the carousel with the provided configuration.
 * @param {Object} config - Carousel configuration object.
 * @param {string} config.container - Selector for the carousel container.
 * @param {Array} [config.slides] - Array of slide objects.
 * @param {boolean} [config.autoplay=true] - Whether to enable autoplay.
 * @param {number} [config.interval=3000] - Autoplay interval in milliseconds.
 * @param {boolean} [config.infinite=true] - Whether the carousel loops infinitely.
 */
export function carouselInit(config) {
	// default carousel config 
	const settings = { container: config.container, slides: config.slides ?? slides, autoplay: config.autoplay ?? true, interval: config.interval ?? 3000, infinite: config.infinite ?? true, };
	// querySelector
	const container = document.querySelector(settings.container);
	const rightArrow = container.querySelector(".arrow_right");
	const leftArrow = container.querySelector(".arrow_left");
	const bannerImg = container.querySelector(".banner-img");
	const bannerText = container.querySelector("p");
	const dotsContainer = container.querySelector(".dots");
	// local state variable for the carousel
	const state = { index: 0, slides: settings.slides, settings, bannerImg, bannerText, dotsContainer, autoplayInterval: null, };

	// arrow listener
	leftArrow.addEventListener("click", () => changeSlide(-1, state));
	rightArrow.addEventListener("click", () => changeSlide(1, state));

	// dots
	dotsHandler(state);
	updateBanner(state);

	// Autoplay
	if (settings.autoplay) {
		const startAutoplay = () => {
			state.autoplayInterval = setInterval(() => changeSlide(1, state), settings.interval);
		};

		const stopAutoplay = () => clearInterval(state.autoplayInterval);

		startAutoplay();
		container.addEventListener("mouseenter", stopAutoplay);
		container.addEventListener("mouseleave", startAutoplay);
	}
}
