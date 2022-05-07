import React from "react";
import '../styles/Login.scss';

const Login = () => {
    return(
        <div className="login">
        <div className="form-container">
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new passwrd for yue account</p>
            <form action="/" className="form">
                <label for="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password"/>
                <label for="new-password" className="label">Password</label>
                <input type="password" id="new-password" placeholder="*********" class="input input-password"/>
                <input type="submit" value="Confirm" class="primary-button login-button"/>
            </form>
        </div>
        </div>

    );
}

export default Login;