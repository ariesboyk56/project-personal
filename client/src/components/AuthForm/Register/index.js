import React from "react"
import { useNavigate } from "react-router-dom"
import classes from "./Register.module.scss"

const Register = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/auth/login")
    }
    return (
        <div className={classes.register}>
            <div className={classes.container}>
                <h1>Register</h1>
                <span>Create your account. It's only takes a minute!</span>

                <form >
                    <div className={classes.name}>
                        <div className="form-group">
                            <input required type="text" className="form-control" id="firstname" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <input required type="text" className="form-control" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <input required type="email" className="form-control" id="email" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <input required type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input required type="password" className="form-control" id="password" placeholder="Confirm Password" />
                    </div>
                    <div className="form-group">
                        <label><input type="checkbox" value="" />I accept the <span>Terms of Use</span> &amp; <span>Privacy Policy</span></label>
                    </div>
                    <button type="submit" className="btn primary">Register Now</button>
                    <div className="form-group">
                        <label >Do you have an Account? <span onClick={() => handleClick()}><strong>Login account</strong></span></label>
                    </div>
                </form>

            </div>
            <img srcSet="//live.staticflickr.com/65535/51796045806_4e8380c8c6_h.jpg 2x" alt='brand' />

        </div>
    )
}

export default Register
