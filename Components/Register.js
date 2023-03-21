import React, { useState } from "react";
import { useFormik } from "formik";
import { regSchema } from "./schemas/registerSchema";
import LoginMail from "./LoginMail";
import { useDispatch, useSelector } from "react-redux";
import { asyncRegisterThunk } from "@/Redux/slices/registerSlice";
import { checkedEmail } from "@/Redux/slices/authSlice";
import { useRouter } from "next/router";

function Register({ register, setRegister }) {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const dispatch = useDispatch();
  const checkEmailstatus = useSelector(checkedEmail)

  function confirmEmail() {
    return setTimeout(() => {
    router.push("/verifyYourEmail")
  }, 1000)
}

  function onSubmit() {
    dispatch(
      asyncRegisterThunk({
        account_type: "B2B",
        name: values.name,
        surname: values.surName,
        email: values.email,
        password:values.password,
        password_confirmation:values.confirmPassword
      })
    );
    
    
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      surName: "",
      confirmPassword: "",
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
      {!checkEmailstatus ? (
        <LoginMail setOpen={setOpen} />
      ) : (
        <div className="input_area">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="login_form"
          >
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
                  name="surName"
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
                  errors.password && touched.password
                    ? "reg-error-password"
                    : ""
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
                  errors.confirmPassword && touched.confirmPassword
                    ? "reg-error-confirmPassword"
                    : ""
                }
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="confirm-error">Password must be the same</p>
              )}
            </div>
            <button onClick={() => {
              confirmEmail()
              }} disabled={isSubmitting} type="submit">
              Մուտք
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Register;
