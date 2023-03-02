import Image from "next/image"
import img from "../public/images/bag addiadas 1.png"

function Adidas() {
  return (
    <div className="topslider-container adidas">
          <div className="container">
            <div className="topslider_left_content">
              <div className="topslider_left_content_inner">
                <p className="nike-title">All Adidas bags</p>
                <p className="slider-performance">
                  Performance and design. Taken right to the edge.
                </p>
                <button className="topslider_shopnow">Shop Now</button>
              </div>
            </div>
            <div className="adidas_right_content">
                <Image
                src={img}
                />
            </div>
          </div>
        </div>
  )
}

export default Adidas


