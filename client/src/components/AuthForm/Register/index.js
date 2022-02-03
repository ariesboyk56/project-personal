import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import classes from "./Register.module.scss"

const Register = () => {
    const {registerUser} = useContext(AuthContext)
    const[confirmPassword,setConfirmPassword] =useState("")
    const[checked,setChecked] =useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    })
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/auth/login")
    }
    const onChangeForm = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onCreate = async(e) => {
        e.preventDefault()
        if(!checked) alert("Vui lòng đồng ý với điều khoản để tiếp tục!");
        if(!(formData.password === confirmPassword)) alert("Xác nhận mật khẩu không hợp lệ!");
        try {
            const registerData = await registerUser(formData)
            if(registerData.success){
             navigate("/")
            }
         } catch (error) {
             console.log(error);
         }
    }
    return (
        <div className={classes.register}>
            <div className={classes.container}>
                <h1>Register</h1>
                <span>Create your account. It's only takes a minute!</span>

                <form onSubmit={(e)=>onCreate(e)}>
                    <div className={classes.name}>
                        <div className="form-group">
                            <input
                            required
                            type="text"
                            className="form-control"
                            id="firstname"
                            placeholder="First Name"
                            name="firstName"
                            onChange={onChangeForm}
                            />
                        </div>
                        <div className="form-group">
                            <input
                            required
                            type="text"
                            className="form-control"
                            id="lastname"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={onChangeForm}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                        required
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        name="email"
                        onChange={onChangeForm}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        required
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        name="password"
                        onChange={onChangeForm}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        required
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Confirm Password"
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label><input type="checkbox" onChange={(e)=>setChecked(!checked)} />I accept the <span>Terms of Use</span> &amp; <span>Privacy Policy</span></label>
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
