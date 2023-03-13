import * as yup from "yup"
const passworRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/

export const basicSchema = yup.object().shape({
    email: yup.string("Please enter a valid email").email().required("required"),
    password: yup.string().min(5).matches(passworRules,{message:"Please create a stronger password"}).required("Required")
})