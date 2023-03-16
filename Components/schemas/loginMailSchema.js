import * as yup from "yup"


export const loginMailSchema = yup.object().shape({
    email: yup.string("Please enter a valid email").email().required("required"),
})