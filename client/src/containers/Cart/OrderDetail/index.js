import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../utils/orders';
import classes from './OrderDetail.module.scss'

const OrderDetail = ({ total, setCash }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClick = () => {
    createOrder({ customer, address, total, method: 1 }, navigate, dispatch);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <button onClick={()=>setCash(false)} className={`${classes.closeModal} btn primary`}>x</button>
        <h1 className={classes.title}>You will pay ${total} after delivery.</h1>
        <div className={classes.item}>
          <label className={classes.label}>Name Surname</label>
          <input
            placeholder="John Doe"
            type="text"
            className={classes.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label}>Phone Number</label>
          <input
            type="text"
            placeholder="+1 234 567 89"
            className={classes.input}
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label}>Address</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            className={classes.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className='btn primary' onClick={onClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
