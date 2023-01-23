import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import "./index.scss";
const JoinSection = () => {
  const intialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getPostData = async () => {
    const response = await fetch("http://localhost:3000/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const data = await response.json();
    console.log(data);
  };
  const submit = () => {
    console.log(formValues);
    setTimeout(() => {
        window.location.href = "/";
    }, 3000);
    getPostData();
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);
  return (
    <div>
      <Helmet>
        <title>Join</title>
      </Helmet>
      <div className="registration">
        <div className="title">
          <p>Join Our Community</p>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
                className={formErrors.email && "input-error"}
              />
              {formErrors.email && (
                <span className="error">{formErrors.email}</span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formValues.password}
                onChange={handleChange}
                className={formErrors.password && "input-error"}
              />
              {formErrors.password && (
                <span className="error">{formErrors.password}</span>
              )}
            </div>

            <button type="submit">Join </button>
            {Object.keys(formErrors).length === 0 && isSubmitting && (
              <span className="success-msg">Form submitted successfully</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
