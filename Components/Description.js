import Image from "next/image"
import DescriptionImg from "../public/images/descriptionCards.png"

const images = [DescriptionImg, DescriptionImg, DescriptionImg]

export default function Description() {
  return (
    <div className="description_images_container">
        <div className="description_images_box">
            {images.map((el, index) => {
                return (
                    <Image
                        key={index}
                        src={el}
                        alt="img"
                        width={435}
                        height={130}
                    />
                )
            })}
        </div>
        <div className="description_text">
            <span>Օրվա առաջարկ</span>
            <span>Պահանջված տեսականի</span>
            <span>Նոր տեսականի</span>
        </div>
    </div>
  )
}
