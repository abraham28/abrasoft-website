import * as Yup from "yup";

export const candidateRawFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),

  lastName: Yup.string().required("Last Name is required"),

  company: Yup.string(),

  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}(\.[a-zA-Z]{1,})?$/,
      "Invalid email address",
    )
    .test(
      "no-double-at",
      "Invalid email address: Multiple '@' symbols are not allowed",
      (value) => !value || value.indexOf("@", value.indexOf("@") + 1) === -1,
    )
    .required("Email is required"),

  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]+$/, "Invalid phone number"),

  service: Yup.string().required("Service type is required"),

  message: Yup.string().required("Message is required"),
});
