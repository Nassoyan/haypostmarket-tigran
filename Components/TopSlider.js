import SliderCircle1 from "@/public/svg/sliderCircle1";
import Image from "next/image";
import shoes from "../public/images/shoes.png";
import SliderCircle2 from "@/public/svg/sliderCircle2";
import ArrowLeft from "@/public/svg/ArrowLeft";
import ArrowRight from "@/public/svg/ArrowRight";
import { useRef } from "react";
import Slider from "react-slick";
const img1 = "https://api.postmarket.am/storage/sliders/June2022/uJziPTuszqd26JaJ1Fnw.png"

function TopSlider() {
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
      <Slider ref={(x) => (slideRef.current = x)} {...settings}>
        <div className="topslider-container">
          <div onClick={prev} className="topslider_arrowleft">
              <ArrowLeft />
          </div>


          <div  className="container">
            <div className="topslider_left_content">
              <div className="topslider_left_content_inner">
                <p className="nike-title">NIke Men Running</p>
                <p className="slider-performance">
                  Performance and design. Taken right to the edge.
                </p>
                <button className="topslider_shopnow">Shop Now</button>
              </div>
            </div>
            <div className="topslider_right_content">
              <span className="topslide_slidercircle2">
               <SliderCircle2 />
              </span>
            </div>
          </div>


          <div onClick={next} className="topslider_arrowright">
            <ArrowRight />
          </div>
        </div>
        <div className="topslider-container">
          <div onClick={prev} className="topslider_arrowleft">
              <ArrowLeft />
          </div>


          <div style={{backgroundColor:"red" }} className="container">
            <div className="topslider_left_content">
              <div className="topslider_left_content_inner">
                <p className="nike-title">NIke Men Running</p>
                <p className="slider-performance">
                  Performance and design. Taken right to the edge.
                </p>
                <button className="topslider_shopnow">Shop Now</button>
              </div>
            </div>
            <div className="topslider_right_content">
              <span className="topslide_slidercircle2">
               <SliderCircle2 />
              </span>
            </div>
          </div>


          <div onClick={next} className="topslider_arrowright">
            <ArrowRight />
          </div>
        </div>
        <div className="topslider-container">
          <div onClick={prev} className="topslider_arrowleft">
              <ArrowLeft />
          </div>


          <div style={{backgroundColor:"chocolate" }} className="container">
            <div className="topslider_left_content">
              <div className="topslider_left_content_inner">
                <p className="nike-title">NIke Men Running</p>
                <p className="slider-performance">
                  Performance and design. Taken right to the edge.
                </p>
                <button className="topslider_shopnow">Shop Now</button>
              </div>
            </div>
            <div className="topslider_right_content">
              <span className="topslide_slidercircle2">
               <SliderCircle2 />
              </span>
            </div>
          </div>


          <div onClick={next} className="topslider_arrowright">
            <ArrowRight />
          </div>
        </div>
        <div className="topslider-container">
          <div onClick={prev} className="topslider_arrowleft">
              <ArrowLeft />
          </div>


          <div style={{backgroundColor:"lightblue" }} className="container">
            <div className="topslider_left_content">
              <div className="topslider_left_content_inner">
                <p className="nike-title">NIke Men Running</p>
                <p className="slider-performance">
                  Performance and design. Taken right to the edge.
                </p>
                <button className="topslider_shopnow">Shop Now</button>
              </div>
            </div>
            <div className="topslider_right_content">
              <span className="topslide_slidercircle2">
               <SliderCircle2 />
              </span>
            </div>
          </div>


          <div onClick={next} className="topslider_arrowright">
            <ArrowRight />
          </div>
        </div>
        <div className="topslider-container">
          <div onClick={prev} className="topslider_arrowleft">
              <ArrowLeft />
          </div>


          <div className="container">
            <div className="topslider_left_content">
              <div className="topslider_left_content_inner">
                <p className="nike-title">NIke Men Running</p>
                <p className="slider-performance">
                  Performance and design. Taken right to the edge.
                </p>
                <button className="topslider_shopnow">Shop Now</button>
              </div>
            </div>
            <div className="topslider_right_content">
              <span className="topslide_slidercircle2">
               <SliderCircle2 />
              </span>
            </div>
          </div>


          <div onClick={next} className="topslider_arrowright">
            <ArrowRight />
          </div>
        </div>
        
      </Slider>
    
  );
}

export default TopSlider;

{/* <div className="topslider_show_image">
          <div onClick={prev} className="topslider_arrowleft">
            <ArrowLeft />
          </div>
          <span className="topslider_slidercircle1">
            <SliderCircle1 />
          </span>
          <div className="topslider_left_content">
            <p className="nike-title">NIke Men Running</p>
            <p className="slider-performance">
              Performance and design. Taken right to the edge.
            </p>
            <button className="topslider_shopnow">Shop Now</button>
          </div>
          <div className="topslider_right_content">
            <span className="topslide_slidercircle2">
              <SliderCircle2 />
            </span>
          </div>
          <Image alt="shoes" src={shoes} width={489} height={437} />
          <div onClick={next} className="topslider_arrowright">
            <ArrowRight />
          </div>
        </div>
        <div className="divik">
          <h1>1</h1>
        </div>
        <div className="divik">
          <h1>2</h1>
        </div>
        <div className="divik">
          <h1>3</h1>
        </div>
        <div className="divik">
          <h1>4</h1>
        </div>
        <div className="divik">
          <h1>5</h1>
        </div>
        <div className="divik">
          <h1>6</h1>
        </div> */}
