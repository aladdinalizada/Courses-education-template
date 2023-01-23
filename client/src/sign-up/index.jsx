import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
const SignUp = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/userdata");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    // console.log(formValues);
    data.find((item) => {
      if (
        item.email === formValues.email &&
        item.password === formValues.password
      ) {
        // console.log("Login successfully");
        setTimeout(() => {
          window.location.href = "/";
          alert("Login successfully");
        }, 3000);
      } else {
        // console.log("Login failed");
        alert("Login failed");
      }
    });

    // setFormValues(intialValues);
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
      errors.email = "Cannot found email";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password is incorrect";
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
        <title>Sign Up</title>
      </Helmet>

      <div className="signup">
        <div className="title">
          <p>Login Community</p>
        </div>
        <div className="body">
          <form onSubmit={(e) => handleSubmit(e)} noValidate>
            <div className="form-row">
              <label htmlFor="email">Email</label>
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
              <label htmlFor="password">Password</label>
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

            <button type="submit">Log In</button>
            {Object.keys(formErrors).length === 0 && isSubmitting && (
              <span className="success-msg">Login successfully</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
