import ArrowLeft from "@/public/svg/ArrowLeft"
import ArrowRight from "@/public/svg/ArrowRight"
import { useRef } from "react"
import img from "../public/images/Rectangle 1046 (4).png"
import Image from "next/image"

import Slider from "react-slick";


const images = [
    img, img, img, img, img, img, img, img, img, img
]

function ProductSlider() {

  function SampleNextArrow(props) {
    const {onClick } = props;

    return (
      <span className="SliderNextArrow">
        <svg
        onClick={onClick}
        width={13}
        height={22}
        viewBox="0 0 13 22"
        fill="none"
      >
        <path d="M1 21l10-10L1 1" stroke="#1F1F24" strokeWidth={2} />
      </svg>
      </span>
      
    )
  }

  function SamplePrevArrow(props) {
    const {onClick } = props;

    return (
      <span className="SliderPrevArrow">
        <svg
        onClick={onClick}
        width={13}
        height={22}
        viewBox="0 0 13 22"
        fill="none"
      >
        <path d="M12 1L2 11l10 10" stroke="#1F1F24" strokeWidth={2} />
      </svg>
      </span>
      
    )
  }
  
    
  
    
  
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
        <Slider className="shopnow_slider" {...settings}>
                    {images?.map((el, index) => {
                      return (
                        <div className="each_slide" key={index}>
                            <Image 
                            src={el}
                            />
                            <div className="each_slide_description">
                                <p className="slide_first_p">SAMSUNG</p>
                                <p className="slide_second_p">SAMSUNG</p>
                                <div className="slide_span_box">
                                  <span className="slide_first_span">35 770 ֏ </span>
                                  <span className="slide_second_span">350 770 ֏ </span>
                                </div>
                            </div>
                        </div>
                      )
                    })}
        </Slider>
      
    );
  }

  export default ProductSlider