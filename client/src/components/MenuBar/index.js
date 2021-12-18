import clsx from "clsx";
import classes from "./Menu.module.scss";
import { NavLink } from "react-router-dom";

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
    path: "/shop",
    name: "Shop",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const CustomMenu = ({ path, name }) => {
  return (
    <li>
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};
const showMenu = (menus) => {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return <CustomMenu key={index} path={menu.path} name={menu.name} />;
    });
  }
  return result;
};
const Menu = () => {
  return (
    <nav className={classes.navBar}>
      <div className={clsx(classes.content, "wide")}>
        <div className={classes.left}>
          <div>
            <span className={classes.textLogo}>Hekto</span>
          </div>
          <div>
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
