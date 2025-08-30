//imports
import { carouselInit } from "./modules/carousel.js";
import { slides as slidesBanner, } from "./variables.js";

// init function

function init(){



// Carousel for #banner
carouselInit({
  container: "#banner",
  slides: slidesBanner,
  autoplay: false,
  interval: 2000,
  infinite: true,
});




}



//initialisation
 init()


