import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(3, "Minimum length is 3")
    .max(20, "Maximum length is 20")
    .required("Required"),
  lastName: Yup.string()
    .trim()
    .min(3, "Minimum length is 3")
    .max(20, "Maximum length is 20")
    .optional(),
  email: Yup.string()
    .trim()
    .email("Please enter a valid Email")
    .required("Required"),
  password: Yup.string()
    .trim()
    .min(6, "Minimum password length is 6")
    .max(10, "Maximum password length is 10")
    .required("Password is must"),
  confirmPassword: Yup.string()
    .trim()
    .min(6, "Minimum password length is 6")
    .max(10, "Maximum password length is 10")
    .oneOf([Yup.ref("password")], "Password should match")
    .required("Required"),
});

const SignUp = () => {
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleReset,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      handleReset();
      console.log(values);
    },
    validationSchema: signUpSchema,
  });

  return (
    <form onSubmit={handleSubmit} className="row px-3">
      <div className="form-group col-12 col-md-6">
        <label htmlFor="firstName" className="form-label mt-4">
          First Name
        </label>
        <input
          autoComplete="none"
          name="firstName"
          type="text"
          className={`form-control ${
            touched.firstName
              ? errors.firstName
                ? "is-invalid"
                : "is-valid"
              : ""
          }`}
          id="firstName"
          placeholder="Enter First Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        <div className="invalid-feedback">{errors.firstName}</div>
      </div>
      <div className="form-group col-12 col-md-6">
        <label htmlFor="lastName" className="form-label mt-4">
          Last Name
        </label>
        <input
          name="lastName"
          type="text"
          className={`form-control ${
            touched.lastName
              ? errors.lastName
                ? "is-invalid"
                : "is-valid"
              : ""
          }`}
          id="lastName"
          placeholder="Enter Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          autoComplete="none"
        />
        <div className="invalid-feedback">{errors.lastName}</div>
      </div>
      <div className="form-group col-12">
        <label htmlFor="email" className="form-label mt-4">
          Email address
        </label>
        <input
          name="email"
          type="email"
          className={`form-control ${
            touched.email ? (errors.email ? "is-invalid" : "is-valid") : ""
          }`}
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          autoComplete="none"
        />
        <div className="invalid-feedback">{errors.email}</div>
      </div>
      <div className="form-group col-12 col-md-6">
        <label htmlFor="password" className="form-label mt-4">
          Password
        </label>
        <input
          name="password"
          type="password"
          className={`form-control ${
            touched.password
              ? errors.password
                ? "is-invalid"
                : "is-valid"
              : ""
          }`}
          id="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <div className="invalid-feedback">{errors.password}</div>
      </div>
      <div className="form-group col-12 col-md-6">
        <label htmlFor="confirmPassword" className="form-label mt-4">
          Confirm Password
        </label>
        <input
          name="confirmPassword"
          type="password"
          className={`form-control ${
            touched.confirmPassword
              ? errors.confirmPassword
                ? "is-invalid"
                : "is-valid"
              : ""
          }`}
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
        />
        <div className="invalid-feedback">{errors.confirmPassword}</div>
      </div>
      <button
        type="submit"
        className="btn btn-success my-4"
        style={{ width: "100%" }}
      >
        REGISTER
      </button>
    </form>
  );
};

export default SignUp;
