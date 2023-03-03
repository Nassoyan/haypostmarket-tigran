import Fb from "@/public/svg/Fb"
import Instagram from "@/public/svg/Instagram"
import LinkedIn from "@/public/svg/LinkedIn"
import Youtube from "@/public/svg/Youtube"

function Footer() {
  return (
    <div className="footer_wrapper">

      <div className="container">
        <div className="brands">
          <span>item</span>
          <span>item</span>
          <span>item</span>
          <span>item</span>
          <span>item</span>
          <span>item</span>
          <span>item</span>
        </div>
      </div>

      <div className="footer_ul_container">
          <div className="each_ul_div">
            <span>item</span>
              <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
          </div>
          <div className="each_ul_div hidden">
            <span>item</span>
              <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
          </div>
          <div className="each_ul_div hidden">
            <span>item</span>
              <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
          </div>
          <div className="each_ul_div hidden">
            <span>item</span>
              <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
          </div>
            <div className="footer_svg">
                <Fb/>
                <Instagram/>
                <Youtube/>
                <LinkedIn/>
            </div>
      </div>

      <div className="copyright">
      Copyright © “Haypost” CJSC Բոլոր իրավունքները պաշտպանված են: 2020
      </div>

    </div>
  )
}

export default Footer
