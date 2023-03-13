import HaypostLogo from "@/public/svg/HaypostLogo";
import Image from "next/image";
import React from "react";
import loginImg from "../public/images/Loginimg.png";
import rectangle from "../public/images/rectangle.png";

function Login({ openLogin, setOpenLogin }) {
  return (
    <div className="login_wrapper">
      <div className="container_popup">
        <div className="div">
          <Image src={rectangle} />
          <div className="login_area">
            <div className="haypostlogo_login">
              <HaypostLogo />
            </div>
          </div>
        </div>
        <div className="login-img">
          <span
            onClick={() => {
              setOpenLogin(false);
            }}
          >
            &times;
          </span>
          <Image src={loginImg} />
        </div>
      </div>
    </div>
  );
}

export default Login;
