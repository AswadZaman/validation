import React, { useState } from "react";
import useForm from "./useForm";
import validateInfo from "../components/validate";

function RegistrationForm() {
  const { handleInputChange, values, handleSubmit, errors } =
    useForm(validateInfo);

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            User Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={values.userName}
            onChange={(e) => handleInputChange(e)}
            id="userName"
            name="userName"
            placeholder="Enter your username"
          />
         <span className="text-danger align-center">{errors.userName && errors.userName}</span> 
        </div>

        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form__input"
            value={values.email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter your email"
          />
          <span className="text-danger align-center">{errors.email && errors.email}</span> 
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
           <span className="text-danger align-center">{errors.password && errors.password}</span> 
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
           <span className="text-danger align-center">{errors.confirmPassword && errors.confirmPassword}</span> 
        </div>
      </div>
      <div className="footer">
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          type="submit"
          class="btn"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
