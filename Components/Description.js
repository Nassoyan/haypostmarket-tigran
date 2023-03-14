import DescSvg from "@/public/svg/descCar";
import Image from "next/image";
import { useState } from "react";
import DescriptionImg from "../public/images/descriptionCards.png";

export default function Description() {
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
        <div className="desc_text_inner">
          <span>Օրվա առաջարկ</span>
          <div className="each_desc_strokee"></div>
        </div>
        <div className="desc_text_inner">
          <span>Պահանջված տեսականի</span>
          <div className="each_desc_strokee"></div>
        </div>
        <div className="desc_text_inner">
          <span>Նոր տեսականի</span>
          <div className="each_desc_strokee"></div>
        </div>
      </div>
    </div>
  );
}
