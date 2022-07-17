import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import loginImg from "../img/login.png";
import facebook from '../img/Vectorfacebook.svg'
import telegram from '../img/Vectortelegram.svg'
import whats from '../img/Vectorwhats.svg'


export default function LogInPage() {
  return (
    <div>
      <div className="rectangle"></div>
      <div className="container-login">
        <div className="inputs">
          <h2>Welcome Back!</h2>
          <form>
            <p>
              <label>Username:</label>
              <br />
              <input type="text" name="first_name" required />
            </p>
            <p>
              <label>Password:</label>
              <br />
              <input type="password" name="password" required />
            </p>
            <br />
            <p>
              <button className="sub-btn" type="submit">
                Login
              </button>
            </p>
          </form>
          <footer>
            <p>
              Don't have and account? <Link to="/register">Register</Link>.
            </p>
            <div className="social">
                <img src={facebook} alt='fb'/>
                <img src={whats} alt='wh'/>
                <img src={telegram} alt='tg'/>
            </div>
          </footer>
        </div>
        <img className="loginImg" alt="login" src={loginImg} />
      </div>
    </div>
  );
}
