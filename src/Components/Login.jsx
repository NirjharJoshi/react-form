import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Please enter a valid Email")
    .required("Required"),
  password: Yup.string()
    .trim()
    .min(6, "Minimum password length is 6")
    .max(10, "Maximum password length is 10")
    .required("Password is required"),
});

const Login = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      resetForm();
      console.log(values);
    },
    validationSchema,
  });

  return (
    <form onSubmit={handleSubmit} className="px-3">
      <fieldset>
        <div className="form-group">
          <label htmlFor="email" className="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            name="email"
            autoComplete="none"
            className={`form-control ${
              touched.email ? (errors.email ? "is-invalid" : "is-valid") : ""
            }`}
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>
        <div className="form-group ">
          <label htmlFor="password" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            name="password"
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
      </fieldset>
      <button
        type="submit"
        className="btn btn-success my-4"
        style={{ width: "100%" }}
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Login;
