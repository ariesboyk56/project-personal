import React from 'react'
import classes from "./SideBar.module.scss"
const SideBar = (props) => {
    return (
        <nav className={classes.sideBar}>
            <h3>{props.title}</h3>
            <ul>
                {props.children}
            </ul>
        </nav>
    )
}

export default SideBar