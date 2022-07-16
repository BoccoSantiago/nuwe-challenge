import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import loginImg from '../img/login.png'



export default function LogInPage() {
    return (
        <div className='container-login'>
            <div className='inputs'>
            <h2>Welcome Back!</h2>
            <form>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <br/>
                <p>
                    <button className="sub-btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>Don't have and account? <Link to="/register">Register</Link>.</p>
            </footer>
            </div>
            <img className='loginImg' alt="login" src={loginImg}/>
        </div>
    )
}
