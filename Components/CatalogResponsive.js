import React from "react";
import { popUp } from "@/public/data/data";
import HeaderArrow from "@/public/svg/headerArrow";

function CatalogResponsive({ openMenu, setOpenMenu }) {
  function closeMenuBar() {
    setOpenMenu(false);
    document.body.style.overflow = "unset";
  }

  return (
    <div className="sidebar-wrapper" onClick={closeMenuBar}>
      <div className="sidebar-container" onClick={(e) => e.stopPropagation()}>
        <span className="sidebar-close" onClick={closeMenuBar}>
          &times;
        </span>
        <div className="sidebar-ul">
          {popUp.map((el, index) => {
            return (
              <div key={index} to={el.link} className="sidebar-div">
                <ul>
                  <li>{el.name}</li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="sidebar-footer">
          <div className="sidebar-footer-lang">
            Հայերեն <HeaderArrow />
          </div>
          <span>Մեր մասին</span>
          <span>Վճարման մեթոդներ</span>
          <span>Վճարման մեթոդներ</span>
          <span>Contact info 055 45 45 45</span>
        </div>
      </div>
    </div>
  );
}

export default CatalogResponsive;
