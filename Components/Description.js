import DescSvg from "@/public/svg/descCar"
import Image from "next/image"
import DescriptionImg from "../public/images/descriptionCards.png"

export default function Description() {
  return (
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
  )
}
