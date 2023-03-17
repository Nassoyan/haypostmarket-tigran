import React, { useState } from 'react'
import { useFormik } from "formik";
import { loginMailSchema } from './schemas/loginMailSchema';
import GoogleLogo from '@/public/svg/GoogleLogo';
import FacebookLogo from '@/public/svg/FacebookLogo';
import { useDispatch } from 'react-redux';
import { fetchData } from '@/Redux/slices/authSlice';
import { useSelector } from 'react-redux';




function LoginMail({setOpen}) {
  
  const dispatch = useDispatch()
  const status =  useSelector((state) => state.user.status)
console.log(status, "statsu");

     function onSubmit(event) {
      console.log(values);
     
       dispatch(fetchData({email :values.email}));
      // setOpen(true)
    }

      

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit
      } = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: loginMailSchema, onSubmit
      });
  return (
    <div className='loginmail_container'>
        <div className="input_area">
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="login_form"
              >
                <div className="login_input_div">
                  <input
                    id="email"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Էլ Փոստ"
                    className={
                      errors.email && touched.email ? "input-error" : ""
                    }
                  />
                  {errors.email && touched.email && (
                    <p className="error">Enter a valid e-mail</p>
                  )}
                </div>
                <button  disabled={isSubmitting} type="submit">
                  Մուտք
                </button>
              </form>
            </div>
        <div className="login_underline_area">
              <div className="login_underline"></div>
              <div className="login_underline_title">Կամ</div>
              <div className="login_underline"></div>
            </div>
      <div className='login-social-area'>
      <div className="google-area">
                <GoogleLogo />
                <span>Google</span>
              </div>
              <div className="fb-area">
                <FacebookLogo />
                <span>facebook</span>
              </div>
      </div>
    </div>
  )
}

export default LoginMail
