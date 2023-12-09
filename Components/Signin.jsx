import React from "react";
import './Signin.css'

function Signin() {

    return (
        <div className="form-container">
            <h1>Enter your credentials</h1>
            <form>
                <input placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button><br />
                <a href="/login"><p className="createaccount">Forgot Password</p></a><br />
                <a href="/login"><p className="createaccount">Create Account</p></a>

            </form>
        </div>
    )
}

export default Signin