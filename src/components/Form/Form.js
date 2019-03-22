import React from "react";
import { useForm } from "../../hooks/useForm";
import { validate } from "../../utils/validate";

import "./Form.css";

const Form = () => {
  // get the values from the useForm hook
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log("Login successful");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="formWrapper">
          <label htmlFor="First Name" className="formLabel">
            First Name
          </label>
          <small
            style={
              errors.firstName
                ? { visibility: "visible", color: "red" }
                : { visibility: "hidden" }
            }
          >
            * The First Name Field is Required
          </small>
          <input
            className={`formInput ${errors.firstName && "redBorder"}`}
            type="text"
            name="firstName"
            value={values.firstName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="formWrapper">
          <label htmlFor="Last Name" className="formLabel">
            Last Name
          </label>
          <small
            style={
              errors.lastName
                ? { visibility: "visible", color: "red" }
                : { visibility: "hidden" }
            }
          >
            * The Last Name Field is Required
          </small>
          <input
            className={`formInput ${errors.lastName && "redBorder"}`}
            type="text"
            name="lastName"
            value={values.lastName || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="formButton" type="submit">
            Add Name
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
