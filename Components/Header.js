import HaypostLogo from "@/public/svg/HaypostLogo";
import HeaderArrow from "@/public/svg/headerArrow";
import HeaderIcon from "@/public/svg/HeaderIcon";
import Search from "@/public/svg/headerInputSearch";
import MenuBar from "@/public/svg/HeaderMenuBar";
import Times from "@/public/svg/HeaderTimes";
import HeartSvg from "@/public/svg/HeartSvg";
import ProfileSvg from "@/public/svg/profileSvg";
import Zambyugh from "@/public/svg/Zambyugh";
import { useState } from "react";
import Catalog from "./Catalog";

function Header() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

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
              <span className="hidden_times_symbol">
                <Times />
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
                <div className="hidden_menubar">
                  <MenuBar />
                </div>
                <div className="haypost_logo">
                  <HaypostLogo />
                </div>
                <div
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="header_menubar"
                >
                  <MenuBar />
                  Ըստ կատեգորիայի
                  <span className="header_arrow">
                    <HeaderArrow />
                  </span>
                </div>
              </div>
              <div
                style={{ visibility: active ? "hidden" : "visible" }}
                className="header_input_container"
              >
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
              <div
                onClick={() => {
                  setActive(!active);
                }}
                className="header_svg_box"
              >
                <span className="times_svg">
                  {!active ? <Times /> : <Search />}
                </span>
                <span className="header_svg_box_text">
                  {" "}
                  {active ? "Որոնել" : "Հեռացնել"}{" "}
                </span>
              </div>
              <div className="header_svg_box heart">
                <span className="times_svg">
                  <HeartSvg />
                </span>
                <span className="header_svg_box_text"> Հեռացնել </span>
              </div>
              <div className="header_svg_box profile">
                <span className="times_svg">
                  <ProfileSvg />
                </span>
                <span className="header_svg_box_text"> Հեռացնել </span>
              </div>
              <div className="header_svg_box header_svg_box_hidden zambyugh">
                <span>
                  <HeaderIcon />
                </span>
                <span className="header_svg_box_text"> Մուտք </span>
              </div>
              <div className="header_svg_box header_svg_box_hidden">
                <span>
                  <Zambyugh />
                </span>
                <span className="header_svg_box_text"> Զամբյուղ </span>
              </div>
            </div>
          </div>
        </div>
       {open && <Catalog/>}         
      </div>

    </>
  );
}

export default Header;
