import FacebookLogo from "@/public/svg/FacebookLogo";
import GoogleLogo from "@/public/svg/GoogleLogo";
import HaypostLogo from "@/public/svg/HaypostLogo";
import Image from "next/image";
import React, { memo } from "react";
import loginImg from "../public/images/Loginimg.png";
import rectangle from "../public/images/rectangle.png";
import { useFormik } from "formik";
import { basicSchema } from "./schemas";

const onSubmit = async (values, actions) => {
  console.log("submitted");
  await new Promise ((resolve) => setTimeout(resolve, 1000));
  actions.resetForm()
}

 function  Login({ openLogin, setOpenLogin }) {
  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:basicSchema,
    onSubmit,
  });
  console.log(values);
  return (
    <div className="login_wrapper">
      <div className="container_popup">
        <div className="div">
        <Image alt="img" src={loginImg} />
          <span className="times_close_popup"
            onClick={() => {
              setOpenLogin(false);
            }}
          >
            &times;
          </span>
        </div>
        <div className="login_area">
            <div className="login-logo">
              <HaypostLogo />
            </div>
            <div className="haypostlogo_login_container">
              <div className="login_header">
                <div className="each_login_button">
                  <button>Մուտք</button>
                  <span></span>
                </div>
                <div className="each_login_button">
                  <button>Գրանցվել</button>
                  <span></span>
                </div>
              </div>
              <div className="input_area">
                <form onSubmit={handleSubmit} autoComplete="off" className="login_form">
                  <div className="login_input_div">
                    <input
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Էլ Փոստ"
                      className={errors.email && touched.email ? "input-error" : ""}
                    />
                    {errors.email && touched.email && <p className="error">Enter a valid e-mail</p>}
                  </div>
                  <div className="login_input_div">
                    <input
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="password"
                      placeholder="Գաղտնաբառ"
                      className={errors.password && touched.password ? "input-error1" : ""}
                    />
                     {errors.password && touched.password && <p className="error1">Enter a stronger password</p>}

                  </div>
                  <div className="checkbox-field">
                    <input type="checkbox" />
                    Հիշել գաղտնաբառը
                  </div>
                  <button disabled={isSubmitting} type="submit">Մուտք</button>
                </form>
              </div>
              <div className="login_underline_area">
                <div className="login_underline"></div>
                <div className="login_underline_title">Կամ</div>
                <div className="login_underline"></div>
              </div>
              <div className="login-social-area">
                <div className="google-area">
                  <GoogleLogo />
                  <span>Google</span>
                </div>
                <div className="fb-area">
                  <FacebookLogo />
                  <span>facebook</span>
                </div>
              </div>
              <div className="forgot-pass-area">
                <a className="forgot-pass">Մոռացել ե՞ք գաղտնաբառը</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Login;

{/* <div className="login_area">
            <div className="login-logo">
              <HaypostLogo />
            </div>
            <div className="haypostlogo_login_container">
              <div className="login_header">
                <div className="each_login_button">
                  <button>Մուտք</button>
                  <span></span>
                </div>
                <div className="each_login_button">
                  <button>Գրանցվել</button>
                  <span></span>
                </div>
              </div>
              <div className="input_area">
                <form onSubmit={handleSubmit} autoComplete="off" className="login_form">
                  <div className="login_input_div">
                    <input
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Էլ Փոստ"
                      className={errors.email && touched.email ? "input-error" : ""}
                    />
                    {errors.email && touched.email && <p className="error">Enter a valid e-mail</p>}
                  </div>
                  <div className="login_input_div">
                    <input
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="password"
                      placeholder="Գաղտնաբառ"
                      className={errors.password && touched.password ? "input-error1" : ""}
                    />
                     {errors.password && touched.password && <p className="error1">Enter a stronger password</p>}

                  </div>
                  <div className="checkbox-field">
                    <input type="checkbox" />
                    Հիշել գաղտնաբառը
                  </div>
                  <button disabled={isSubmitting} type="submit">Մուտք</button>
                </form>
              </div>
              <div className="login_underline_area">
                <div className="login_underline"></div>
                <div className="login_underline_title">Կամ</div>
                <div className="login_underline"></div>
              </div>
              <div className="login-social-area">
                <div className="google-area">
                  <GoogleLogo />
                  <span>Google</span>
                </div>
                <div className="fb-area">
                  <FacebookLogo />
                  <span>facebook</span>
                </div>
              </div>
              <div className="forgot-pass-area">
                <a className="forgot-pass">Մոռացել ե՞ք գաղտնաբառը</a>
              </div>
            </div>
          </div> */}
