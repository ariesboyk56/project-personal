import React, { useContext, useState } from 'react';
import classes from "./HeadingBar.module.scss";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { useSelector } from 'react-redux';

const HeadingBar = () => {
  let navigate = useNavigate();
  const cartItems = useSelector(state=>state.cart)
  const { authState: { user }, logOut } = useContext(AuthContext)
  const [showLoginBar, setShowLoginBar] = useState(false)
  const handleClick = () => {
    navigate("/auth/login")
  }
  const handleCart = () => {
    navigate("/orders")
  }
  const handleClickLogOut = () => {
    setShowLoginBar(!showLoginBar)
  }
  const handleLogOut = (event) => {
    event.preventDefault();
    handleClickLogOut()
    logOut()
  }
  const showLogin = (person) => {
    if (person) {
      return <span onClick={() => handleClickLogOut()} >{person.lastName}</span>
    } else {
      return <span onClick={() => handleClick()} >Login</span>
    }
  }
  return (
    <div className={classes.content}>
      <div className={clsx(classes.contentWide, 'wide')}>
        <div className={classes.contact}>
          <div className={classes.item}>
            <a href="mailto:default@gmail.com">
              <i className="far fa-envelope mr-10"></i>
              <span>default@gmail.com</span>
            </a>
          </div>

          <div className={classes.item}>
            <a href="tel:0123456789">
              <i className="fas fa-phone-volume mr-10"></i>
              <span>0123-456-789</span>
            </a>
          </div>
        </div>

        <div className={classes.action}>
          {/* <div className={classes.item}>
            <span>English</span>
            <i className=" ml-4 fas fa-angle-down"></i>
          </div>
          <div className={classes.item}>
            <span>USD</span>
            <i className=" ml-4 fas fa-angle-down"></i>
          </div>
          <div className={classes.item}>
            <span>Wishlist</span>
            <i className=" ml-4 far fa-heart"></i>
          </div> */}
          <div className={classes.item}>
            {showLogin(user)}
            <div className={classes.loginBar} style={showLoginBar ? { display: "block" } : { display: "none" }}>
              <ul>
                <li>Thông tin cá nhân</li>
                <li>Lịch sử</li>
                <li onClick={(event) => handleLogOut(event)}>Đăng xuất</li>
              </ul>
            </div>
            <i className=" ml-4 far fa-user"></i>
          </div>
          <div className={classes.item} onClick={(e) => handleCart()}>
            <i className="fas fa-shopping-cart ml-4"></i>
            <span> {showQuantity(cartItems)} </span>
          </div>
        </div>
      </div>
    </div>
  );
};
const showQuantity = (items) => {
  var quantity = 0
  for (let i = 0; i < items.length; i++) {
    quantity += parseInt(items[i].quantity)
  }
  return quantity
}
export default HeadingBar;
