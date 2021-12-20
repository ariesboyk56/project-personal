import React from "react"
import {useNavigate} from "react-router-dom"
import classes from "./Login.module.scss"
import brandImg from "./../../../image/brand.png"

const Login = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/auth/register")
    }
    return (
        <div className={classes.login}>
            <div className={classes.container}>
                <h1>Login</h1>
                <span>Please login using account detail bellow.</span>

                <form >
                    <div className="form-group">
                        <input required type="email" className="form-control" id="email" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <input required type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label >Forgot your password?</label>
                    </div>
                    <button type="submit" className="btn primary">Sign In</button>
                    <div className="form-group">
                        <label >Don`t have an Account? <span onClick={() => handleClick()}><strong>Create account</strong></span></label>
                    </div>
                </form>

            </div>
            <img srcSet={`${brandImg} 2x`} alt="brand"/>

        </div>
    )
}

export default Login

