import React, { useEffect, useState } from 'react';
import classes from "./CartTotal.module.scss"
import Paypal from '../../../components/Product/Paypal'
import OrderDetail from '../OrderDetail';

const CartTotal = ({ cartItems }) => {
    const [discount, setDiscount] = useState(0)
    const [totals, setTotals] = useState(0)
    const [open, setOpen] = useState(false)
    const [cash, setCash] = useState(false)

    const showTotals = (items) => {
        var subTotals = 0
        for (let i = 0; i < items.length; i++) {
            subTotals += items[i].product.pro_new_price * items[i].quantity
        }
        setTotals(subTotals)
        return subTotals
    }
    useEffect(()=>{
        showTotals(cartItems)
    },[cartItems])
    return <div className={classes.container}>
        <h3>Cart totals</h3>
        <div className={classes.cartTotals}>
            <div className={classes.subTotals}>
                <span>Subtotals:</span>
                <span> ${totals}</span>
            </div>
            <div className={classes.discount}>
                <span>Discount:</span>
                <span> ${discount}</span>
            </div>
            <div className={classes.totals}>
                <span>Totals:</span>
                <span> ${totals - discount}</span>
            </div>
            {open ? (
                <div>
                    <button className="btn primary" onClick={(e) => setCash(true)}>CASH ONDELIVERY</button>
                    <Paypal totals={totals}/>
                </div>
            ) : (<button onClick={() => setOpen(true)} className="btn primary">CHECKOUT NOW!</button>)}
        </div>
        {cash && <OrderDetail total={totals} setCash={setCash}/>}
    </div>;
};

export default CartTotal;
