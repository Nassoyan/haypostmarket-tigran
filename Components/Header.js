import HaypostLogo from "@/public/svg/HaypostLogo";
import HeaderArrow from "@/public/svg/headerArrow";
import HeaderIcon from "@/public/svg/HeaderIcon";
import Search from "@/public/svg/headerInputSearch";
import MenuBar from "@/public/svg/HeaderMenuBar";
import Times from "@/public/svg/HeaderTimes";
import Zambyugh from "@/public/svg/Zambyugh";

function Header() {
  return (
    <>
      <div className="header_wrapper">
        <div className="header_title">
          <div className="container">
            <div className="covid_content">
              <span>
                COVID-19 համավարակով պայմանավորված՝ հնարավոր են առաքման
                ժամկետների ուշացումներ:
              </span>
            </div>
            <div className="header_title_contact">
              <span className="header_title_contact_span">
                Contact info 099 99 99 90
              </span>
              <span className="header_language">
                Հայ
                <HeaderArrow />
              </span>
            </div>
          </div>
        </div>

        <div className="header_content">
          <div className="container">
            <div className="left-panel">
              <div className="header_left_content">
                <div>
                  <HaypostLogo />
                </div>
                <div className="header_menubar">
                  <MenuBar />
                  Բոլոր տեսակները
                  <span className="header_arrow">
                    <HeaderArrow />
                  </span>
                </div>
              </div>
              <div className="header_input_container">
                <input
                  className="header_input"
                  placeholder="Ես փնտրում եմ..."
                  type="text"
                />
                <div className="input_search_box">
                  <Search />
                </div>
              </div>
            </div>
            <div className="header_svg_container">
              <div className="header_svg_box">
                <span className="times_svg">
                  <Times />
                </span>
                <span> Հեռացնել </span>
              </div>
              <div className="header_svg_box">
                <span>
                  <HeaderIcon />
                </span>
                <span> Մուտք </span>
              </div>
              <div className="header_svg_box">
                <span>
                  <Zambyugh />
                </span>
                <span> Զամբյուղ </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
