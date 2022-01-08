import React, { useState } from 'react';
import clsx from "clsx";
import classes from "./Menu.module.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const menus = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/pages",
    name: "Pages",
  },
  {
    path: "/products",
    name: "Product",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Menu = () => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const CustomMenu = ({ path, name }) => {
    let location = useLocation()
    let isActive = location.pathname === path
    return (
      <li onClick={()=>handleShow()}>
        <NavLink className={isActive ? `${classes.active}` : ''} to={path}>{name}</NavLink>
      </li>
    );
  };

  const handleShow = () => {
    setShow(!show)
    // console.log(show);
  }
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
    <nav className={classes.navBar}>
      <div className={clsx(classes.content, "wide")}>
        <div className={classes.left}>
          <div className={classes.menuBars}>
            <span onClick={()=>handleShow()}><i className="fas fa-bars"></i></span>
          </div>
          <div>
            <span className={classes.textLogo} onClick={()=> navigate("/")}>Hekto</span>
          </div>
          <div 
          className={classes.menu} style={ show? {display: "block"}:{display: "none"}}
          >
            <ul>{showMenu(menus)}</ul>
          </div>
        </div>
        <div className={classes.right}>
          <input type="text" />
          <span>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
