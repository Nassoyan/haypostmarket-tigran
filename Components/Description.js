import DescSvg from "@/public/svg/descCar";
import Image from "next/image";
import { useState } from "react";
import DescriptionImg from "../public/images/descriptionCards.png";

export default function Description() {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  return (
    <div className="desc_wrapper">
      <div className="container description">
        <div className="each_desc_container">
          <div>
            <DescSvg />
          </div>
          <span> Անվճար առաքում</span>
        </div>
        <div className="each_desc_container">
          <div>
            <DescSvg />
          </div>
          <span> Անվճար առաքում</span>
        </div>
        <div className="each_desc_container">
          <div>
            <DescSvg />
          </div>
          <span> Անվճար առաքում</span>
        </div>
      </div>
      <div className="desc_text">
        <div
          onMouseLeave={() => {
            setHover(false);
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
        >
          <span>Օրվա առաջարկ</span>
          <div
            style={{ visibility: !hover ? "hidden" : "visible" }}
            className="each_desc_stroke"
          ></div>
        </div>
        <div
          onMouseLeave={() => {
            setHover1(false);
          }}
          onMouseEnter={() => {
            setHover1(true);
          }}
        >
          <span>Պահանջված տեսականի</span>
          <div
            style={{ visibility: !hover1 ? "hidden" : "visible" }}
            className="each_desc_stroke"
          ></div>
        </div>
        <div
          onMouseLeave={() => {
            setHover2(false);
          }}
          onMouseEnter={() => {
            setHover2(true);
          }}
        >
          <span>Նոր տեսականի</span>
          <div
            style={{ visibility: !hover2 ? "hidden" : "visible" }}
            className="each_desc_stroke"
          ></div>
        </div>
      </div>
    </div>
  );
}
