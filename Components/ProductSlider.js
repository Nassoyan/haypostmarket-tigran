import ArrowLeft from "@/public/svg/ArrowLeft"
import ArrowRight from "@/public/svg/ArrowRight"
import { useRef } from "react"
import img from "../public/images/Rectangle 1046 (4).png"

import Slider from "react-slick";


const images = [
    "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
    "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
    "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
    "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
    "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
    "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
    "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
]

function ProductSlider() {
    const slideRef = useRef(null);
  
    const next = () => {
      slideRef.current.slickNext();
    };
  
    const prev = () => {
      slideRef.current.slickPrev();
    };
  
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
        <>
        
        <Slider ref={(x) => (slideRef.current = x)} {...settings}>
            <div className="shopnow_slider_container">
                <div onClick={prev} className="arrowleft">
                    <ArrowLeft />
                </div>

                

                <div onClick={prev} className="arrowright">
                    <ArrowRight />
                </div>
            </div>
        </Slider>
        </>
      
    );
  }

  export default ProductSlider