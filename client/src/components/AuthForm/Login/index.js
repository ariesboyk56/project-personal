import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import classes from "./Login.module.scss"
import { AuthContext } from "../../../contexts/AuthContext"


const Login = () => {
    const {loginUser} = useContext(AuthContext)

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/auth/register")
    }

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    const { email, password } = loginForm
    const onChangeLoginForm = event => setLoginForm({
        ...loginForm,
        [event.target.name]: event.target.value
    })
    const login = async event => {
        event.preventDefault()

        try {
           const loginData = await loginUser(loginForm)
           if(loginData.success){
            navigate("/")
           }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={classes.login}>
            <div className={classes.container}>
                <h1>Login</h1>
                <span>Please login using account detail bellow.</span>

                <form onSubmit={login}>
                    <div className="form-group">
                        <input
                            name="email"
                            value={email}
                            onChange={onChangeLoginForm}
                            required
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="password"
                            value={password}
                            onChange={onChangeLoginForm}
                            required
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                        />
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
            <img srcSet="//live.staticflickr.com/65535/51796045806_4e8380c8c6_h.jpg 2x" alt='brand' />
        </div>
    )
}

export default Login

