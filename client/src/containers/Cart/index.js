import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer'
import classes from './Cart.module.scss'

const Cart = () => {
  
  return <>
    <div className={`${classes.container} wide`}>
      <Outlet />
    </div>
    <Footer />
  </>;
};


export default Cart;