import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import classes from "./AuthForm.module.scss"


const AuthForm = () => {
    return (
        <div className={classes.authForm}>
            <Outlet />
            <Footer />
        </div>
    )
}

export default AuthForm
