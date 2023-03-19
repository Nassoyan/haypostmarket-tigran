import * as yup from "yup";
import { ref } from "yup";

const passworRules =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/;

export const regSchema = yup.object().shape({
  phoneNumber: yup.string().min(8).required("required"),
  password: yup
    .string()
    .min(5)
    .matches(passworRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("required"),
  name: yup.string().required("required"),
  surName: yup.string().required("required"),
  email: yup.string("Please enter a valid email").email().required("required"),
});
