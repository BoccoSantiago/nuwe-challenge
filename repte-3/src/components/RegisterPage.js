import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import validation from "./validation";
import "../App.css";
import RegisterImg from "../img/register.png";
import facebook from '../img/Vectorfacebook.svg'
import telegram from '../img/Vectortelegram.svg'
import whats from '../img/Vectorwhats.svg'

export default function RegisterPage() {
  let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const [values, setValues] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function handleClick(event) {
    setErrors(validation(values));
    if (!emailRegex.test(values.email)) {
      alert("Email is invalid");
    }

    let preventSubmit = validation(values)
    if (Object.entries(preventSubmit).length !== 0) {
        event.preventDefault()
    }

  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <div className="container-register">
      <div className="rectangle2"></div>
      <img className="registerImg" alt="register" src={RegisterImg} />
      <div className="inputs">
        <h2>Please fill out form to Register!</h2>
        <form className="form-register-container">
          <h4>
            <label>Full Name:</label>
            <br />
            <input
              type="text"
              name="fullName"
              required
              onChange={handleChange}
              value={values.fullName}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </h4>
          <h4>
            <label>Username:</label>
            <br />
            <input
              type="text"
              name="userName"
              required
              onChange={handleChange}
              value={values.userName}
            />
            {errors.userName && <p className="error">{errors.userName}</p>}
          </h4>
          <h4>
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </h4>
          <h4>
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </h4>
          <h4>
            <label>Confirm Password:</label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              required
              onChange={handleChange}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </h4>
          <br />
          <button onClick={handleClick} className="sub-btn" type="submit">
            Register
          </button>
        </form>
        <footer>
          <p>
            Yes, I Have an account <Link to="/">Login</Link>.
          </p>
          <div className="social">
                <img src={facebook} alt='fb'/>
                <img src={whats} alt='wh'/>
                <img src={telegram} alt='tg'/>
            </div>
        </footer>
      </div>
    </div>
  );
}
