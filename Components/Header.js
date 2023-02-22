import HaypostLogo from "@/public/svg/HaypostLogo"
import HeaderArrow from "@/public/svg/headerArrow"
import Search from "@/public/svg/headerInputSearch"
import MenuBar from "@/public/svg/HeaderMenuBar"

function Header() {
  return (
    <>
    

    <div className="header_wrapper">
      <div className="header_title">
        <div className="covid_content">
            <span>COVID-19 համավարակկկով պայմանավորված՝ հնարավոր են առաքման ժամկետների ուշացումներ:</span>
        </div>
        <div className="header_title_contact">
            <span>Contact info 055 45 45 45</span>
            <span className="header_language">Հայ<HeaderArrow /></span>
        </div>
      </div>


      <div className="header_content">
        <div className="header_left_content">

          <div> <HaypostLogo/>   </div>
          <div className="header_menubar"> <MenuBar />Բոլոր տեսակները <span className="header_arrow"><HeaderArrow/></span> </div>
        </div>
          <div className="header_input_container">
            <input className="header_input" placeholder="Ես փնտրում եմ..." type="text" />
          </div>
          <div className="input_search_box">
            <Search />
          </div>
           <div></div>
      </div>
    </div>
    </>
  )
}

export default Header
