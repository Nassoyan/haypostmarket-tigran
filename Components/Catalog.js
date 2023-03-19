import React, { memo } from "react";

function Catalog({ open, setOpen }) {
  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      className="catalog_wrapper"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="catalog_container">
          <div className="categories">
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
            <div className="categoryItem">item</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Catalog);
