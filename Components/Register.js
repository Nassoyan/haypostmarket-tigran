import FacebookLogo from "@/public/svg/FacebookLogo";
import GoogleLogo from "@/public/svg/GoogleLogo";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { regSchema } from "./schemas/registerSchema";
import LoginMail from "./LoginMail";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { checkedEmail, fetchData } from "@/Redux/slices/authSlice";




function Register({ register, setRegister }) {
  const [open, setOpen] = useState(false)
  const checkEmailstatus = useSelector(checkedEmail)
console.log(checkEmailstatus,"status1111");
  const onSubmit =  (values, actions) => {
    actions.resetForm()
  };



  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange
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


  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const userData = {
      name:formData.get("name"),
      surname: formData.get("surname"),
      email: formData.get("email"),
      phoneNumber:formData.get("phonenumber"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };
    dispatch(fetchData(userData))
    event.target.value = ""
  }

  
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
    {!checkEmailstatus ? <LoginMail setOpen={setOpen}/> :
      <div className="input_area">
        <form onSubmit={handleSubmit} autoComplete="off" className="login_form">
          <div className="register_name_surname_container">
            <div className="reg_name">
            <input
              id="name"
              name="name"
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
              name="surname"
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
              name="email"
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
              name="phonenumber"
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
              name="password"
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
              name="confirmPassword"
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
