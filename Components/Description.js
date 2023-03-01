import DescSvg from "@/public/svg/descCar"
import Image from "next/image"
import { useState } from "react"
import DescriptionImg from "../public/images/descriptionCards.png"

export default function Description() {

  return (
    <div className="desc_wrapper">
      <div className="container description">
      
        <div className="each_desc_container">
          <DescSvg/>
          <span> Անվճար առաքում</span>
        </div>
        <div className="each_desc_container">
          <DescSvg/>
          <span> Անվճար առաքում</span>
        </div>
        <div className="each_desc_container">
          <DescSvg/>
          <span> Անվճար առաքում</span>
        </div>

      </div>
      <div className="desc_text">
          <div>
            <span>Օրվա առաջարկ</span>
          </div>
          <div>
            <span>Պահանջված տեսականի</span>
          </div>
          <div>
            <span>Նոր տեսականի</span>
          </div>
      </div>
      <div className="desc_hover_stroke">
        <div className="each_desc_stroke"></div>
        <div className="each_desc_stroke"></div>
        <div className="each_desc_stroke"></div>
      </div>
    </div>
  )
}
