import girlImg from "../public/images/Rectangle 1057.png"
import glass from "../public/images/Rectangle 1058.png"
import jewelry from "../public/images/Rectangle 1059.png"
import girlShoes from "../public/images/Rectangle 1061.png"
import bag from "../public/images/Rectangle 1062.png"
import Image from "next/image"

function TopProducts() {
  return (
    <div className="topProducts_container">
        <span>Ավելի պահանջված տեսակները</span>
        
        <div className="container products">
          <div className="girlImage">
              <Image alt="img" src={girlImg}/>
          </div>
          <div className="middle_side_images">
              <Image className="middle_top_image" alt="img" src={glass} />
              <div className="middle_under_images">
              <Image alt="img" src={bag}/>
              <Image alt="img" src={girlShoes}/>
              </div>
          </div>
          <div className="girlImage">
              <Image alt="img" src={jewelry}/>
          </div>
        </div>
    </div>
  )
}

export default TopProducts
