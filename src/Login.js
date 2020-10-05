import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css';

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://www.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png" alt="" />
            </Link>
            <div className="login__formContainer">
                <h1>Sign-In</h1>
                <form className="login__form" action="" method="post">
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="password" />

                    <button>Sign In</button>

                </form>

                <p>By continuing, you agree to Our FAKE Amazon's Conditions of Use and Privacy Notice</p>

                <button className="login__signupButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
