import `slick-carousel/slick/slick.css`;
import `slick-carousel/slick/slick-theme.css`;

import Slider from "react-slick";
import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <h2> Slick Slider </h2>;
};

export default SlickCarousel;

// - s7-216:Cr8 SlickCarousel component
// - s7-216:import SlickCarousel>slick css
// - s7-216:import SlickCarousel>slick theme css
// - s7-216:import Slider from react-slick
// - s7-216:import list from data
// - s7-216:import FaQuoteRight from react-icons/fa
// - s7-216:Cr8 SlickCarousel component
// - s7-216:cr8 return with h2 Slick Slider
// - s7-216:export default SlickCarousel
// - s7-216:create settings
// - s7-216:Add dots:true @SlickCarousel>settings
// - s7-216:Add infinite:true @SlickCarousel>settings
// - s7-216:Add speed:500 @SlickCarousel>settings
// - s7-216:Add slidesToShow & slidesToScroll @SlickCarousel>settings
