import Image from "next/image";

function Adidas() {
  return (
    <div className="topslider-container adidas">
      <div className="container">
        <div className="topslider_left_content">
          <div className="topslider_left_content_inner">
            <p key="nike-title" className="nike_title">
              All Adidas bags
            </p>
            <p key="performance" className="slider-performance">
              Performance and design. Taken right to the edge.
            </p>
            <button className="topslider_shopnow">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adidas;
