import React from 'react';
import { Outlet, useLocation } from "react-router-dom"
import classes from './Contact.module.scss'
import { NavLink } from "react-router-dom";
import Footer from "./../../components/Footer"

const menus = [
    {
        path: "/contact",
        name: "Contact",
    },
    {
        path: "/contact/about",
        name: "About",
    },
    {
        path: "/contact/faq",
        name: "FAQ",

    }
];
const CustomMenu = ({ path, name }) => {
    let location = useLocation()
    let isActive = location.pathname === path
    return (
        <li>
            <NavLink className={isActive ? `${classes.active}` : ''} to={path}>{name}</NavLink>
        </li>
    );
};
const Contact = () => {
    let location = useLocation()
    const showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <CustomMenu key={index} path={menu.path} name={menu.name} />;
            });
        }
        return result;
    };
    return (
        <div className={classes.contact}>
            <div className={classes.contactMenu}>
                <div className="wide">
                    <h1>{location.pathname === "/contact" ? "Contact Us" : location.pathname === "/contact/about" ? "About Us" : "FAQ"}</h1>
                    <ul>{showMenu(menus)}</ul>
                </div>
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Contact
