import React, { useEffect, useState } from 'react';
import classes from './StatusOrders.module.scss'
import axios from 'axios'
import { apiUrl } from '../../../api/Api';
import { useParams } from 'react-router-dom';
const StatusOrders = () => {
  const [order, setOrder] = useState([])
  const params = useParams()
  const { id } = params

  const getServerSideProps = async id => {
    const res = await axios.get(`${apiUrl}/orders/${id}`);
    setOrder(res.data.order)
    return res.data
  };
  useEffect(() => {
    getServerSideProps(id)
  }
    , [id])
  const status = order.status;
  const statusClass = (index) => {
    if (index - status < 1) return classes.actived;
    if (index - status === 1) return classes.inProgress;
    if (index - status > 1) return classes.disable;
  };
  return (
    <>
      <div className={classes.containerStatusOrders}>
        <div>
          <div className={classes.infoCustomer}>
            <div>
              <h3>Order ID</h3>
              <p>{order._id}</p>
            </div>
            <div>
              <h3>Customer</h3>
              <p>{order.customer}</p>
            </div>
            <div>
              <h3>Address</h3>
              <p>{order.address}</p>
            </div>
            <div>
              <h3>Total</h3>
              <p>${order.total}</p>
            </div>
          </div>
          <div className={classes.statusOrders}>
            <div className={statusClass(0)}>
              <div><i className="fas fa-file-invoice-dollar"></i></div>
              <p>Payment</p>
              <span className={classes.checkedIcon}><i className="fas fa-check-circle"></i></span>
            </div>
            <div className={statusClass(1)}>
              <div><i className="fas fa-archive"></i></div>
              <p>Preparing</p>
              <span className={classes.checkedIcon}><i className="fas fa-check-circle"></i></span>
            </div>
            <div className={statusClass(2)}>
              <div><i className="fas fa-shipping-fast"></i></div>
              <p>On the way</p>
              <span className={classes.checkedIcon}><i className="fas fa-check-circle"></i></span>
            </div>
            <div className={statusClass(3)}>
              <div><i className="fas fa-clipboard-check"></i></div>
              <p>Delivered</p>
              <span className={classes.checkedIcon}><i className="fas fa-check-circle"></i></span>
            </div>
          </div>
        </div>
        <div className={classes.containerCart}>
        <h3>Cart totals</h3>
        <div className={classes.cartTotals}>
            <div className={classes.subTotals}>
                <span>Subtotals:</span>
                <span> ${order.total}</span>
            </div>
            <div className={classes.discount}>
                <span>Discount:</span>
                <span> $0</span>
            </div>
            <div className={classes.totals}>
                <span>Totals:</span>
                <span> ${order.total}</span>
            </div>
            <button className="btn primary">PAID</button>
        </div>
    </div>;
      </div>
    </>
  )
};

export default StatusOrders;
