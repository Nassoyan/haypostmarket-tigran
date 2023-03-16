import FacebookLogo from "@/public/svg/FacebookLogo";
import GoogleLogo from "@/public/svg/GoogleLogo";
import React, { useState } from "react";
import { useFormik } from "formik";
import { regSchema } from "./schemas/registerSchema";
import LoginMail from "./LoginMail";



function Register({ register, setRegister }) {
  const [open, setOpen] = useState(false)
console.log(open);
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name:"",
      surName:"",
      phoneNumber:"",
      confirmPassword:""
    },
    validationSchema: regSchema,
    onSubmit,
  });
  return (
    
    <div className="register_container">
      <div className="login_header">
        <div className="each_login_button">
          <button
            onClick={() => {
              setRegister(false);
            }}
          >
            Մուտք
          </button>
          <span></span>
        </div>
        <div className="each_login_button">
          <button>Գրանցվել</button>
          <span></span>
        </div>
      </div>
    {!open ? <LoginMail setOpen={setOpen}/> :
      <div className="input_area">
        <form onSubmit={handleSubmit} autoComplete="off" className="login_form">
          <div className="register_name_surname_container">
            <div className="reg_name">
            <input
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Անուն"
              className={
                errors.name && touched.name ? "reg-error-name" : ""
              }
            />
            {errors.name && touched.name && (
              <p className="name-error">Type Your name</p>
            )}
            </div>
            <div className="reg_name">
            <input
              id="surName"
              value={values.surName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Ազգանուն"
              className={
                errors.surName && touched.surName ? "reg-error-surname" : ""
              }
            />
            {errors.surName && touched.surName && (
              <p className="surname-error">Type Your surname</p>
            )}
            </div>
            
          </div>
          <div className="login_input_div">
            <input
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Էլ Փոստ"
              className={
                errors.email && touched.email ? "reg-error-email" : ""
              }
            />
            {errors.email && touched.email && (
              <p className="email-error">Your e-mail</p>
            )}
          </div>
          <div className="login_input_div input_hide_arrows">
            <input
              id="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              placeholder="Հեռախոսահամար"
              className={
                errors.phoneNumber && touched.phoneNumber ? "reg-error-phone" : ""
              }
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <p className="phone-error">Phonenumber must be at least 8 digits</p>
            )}
          </div>
          <div className="login_input_div">
            <input
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="Գաղտնաբառ"
              className={
                errors.password && touched.password ? "reg-error-password" : ""
              }
            />
             {errors.password && touched.password && (
              <p className="password-error">Enter a stronger password</p>
            )} 
          </div>
          <div className="login_input_div">
            <input
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="Կրկնել գաղտնաբառը"
              className={
                errors.confirmPassword && touched.confirmPassword ? "reg-error-confirmPassword" : ""
              }
            />
             {errors.confirmPassword && touched.confirmPassword && (
              <p className="confirm-error">Password must be the same</p>
            )} 
          </div>
          <button disabled={isSubmitting} type="submit">
            Մուտք
          </button>
        </form>
      </div>}
    </div>
  );
}

export default Register;
