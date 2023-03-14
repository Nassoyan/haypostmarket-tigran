import girlImg from "../public/images/Rectangle 1057.png";
import glass from "../public/images/Rectangle 1058.png";
import jewelry from "../public/images/Rectangle 1059.png";
import girlShoes from "../public/images/Rectangle 1061.png";
import bag from "../public/images/Rectangle 1062.png";
import Image from "next/image";
import dynamic from "next/dynamic";

function TopProducts() {
  return (
    <div className="topProducts_container">
      <div className="more_assortment_span">
        <span>Ավելի պահանջված տեսակները</span>
      </div>

      <div className="container topProducts">
        <div className="firstImg">
          <div className="firstImg_inner">
            <Image
              src={girlImg}
              alt="Picture of the author"
              layout="intrinsic"
              loading="lazy"
            />
            <div className="image_buttons">Հագուստ</div>
          </div>
          <div className="firstImg_inner">
            <Image
              className="hidden_image"
              src={jewelry}
              alt="Picture of the author"
              layout="intrinsic"
              loading="lazy"
            />
            <div className="image_buttons accesories X">Աքսեսուարներ</div>
          </div>
        </div>

        <div className="middleImg">
          <div className="middleImg_upper">
            <Image
              className="first"
              alt="Picture of the author"
              src={glass}
              width={616}
              layout="intrinsic"
              loading="lazy"
            />
            <div className="image_buttons">Աքսեսուարներ</div>
          </div>

          <div className="middleImg_under">
            <div className="middleImg_under_divs">
              <Image
                loading="lazy"
                alt="Picture of the author"
                src={bag}
                layout="intrinsic"
              />
              <div className="image_buttons">Պայուսակ</div>
            </div>
            <div className="middleImg_under_divs">
              <Image
                loading="lazy"
                alt="Picture of the author"
                src={girlShoes}
                layout="intrinsic"
              />
              <div className="image_buttons">Կոշիկ</div>
            </div>
          </div>
        </div>

        <div className="lastImg">
          <Image
            loading="lazy"
            src={jewelry}
            alt="Picture of the author"
            layout="intrinsic"
          />
          <div className="image_buttons">Աքսեսուարներ</div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
