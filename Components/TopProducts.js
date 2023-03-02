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
              <Image src={girlImg}/>
              <button>Հագուստ</button>
          </div>
          <div className="middle_side_images">
              <Image className="middle_top_image" src={glass} />
              <div className="middle_under_images">
              <Image src={bag}/>
              <Image src={girlShoes}/>
              </div>
          </div>
          <div className="girlImage">
              <Image src={jewelry}/>
          </div>
        </div>
    </div>
  )
}

export default TopProducts
