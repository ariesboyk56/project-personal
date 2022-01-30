import React, { useContext } from 'react';
import classes from './CartContent.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { MSG_EMPTY_CART } from '../../../constants/messageConstant'
import { delProductToCart, upProductToCart } from '../../../actions/cartAction';
import { AuthContext } from '../../../contexts/AuthContext';
import CartTotal from '../CartTotal';

const CartContent = () => {
    const { loadUser } = useContext(AuthContext)
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleDelProduct = product => {
        dispatch(delProductToCart(product))
    }
    const handleQuantity = (e, product) => {
        var quantity = parseInt(e.target.value)
        dispatch(upProductToCart(product, quantity))
    }

    const showCart = (items) => {
        return items.map((item, index) => {
            const { product: { pro_avatar, pro_name, pro_new_price }, quantity } = item
            return (
                <tr key={index} style={{ borderBottomWidth: "15px", borderBottomColor: "transparent" }}>
                    <td>
                        <div className={classes.cartContent}>
                            <div className={classes.cartImg}>
                                <img srcSet={`${pro_avatar} 2x`} alt="" />
                                <div className={classes.delCartItem} onClick={(e) => handleDelProduct(item.product)}>x</div>
                            </div>
                            <div className={classes.cartInfo}>
                                <span className={classes.item}>{pro_name}</span>
                                <span className={classes.item}>Color: Brown</span>
                                <span className={classes.item}>Size: XL</span>
                            </div>
                        </div>
                    </td>
                    <td>${pro_new_price}</td>
                    <td>
                        <input
                            id="quantity"
                            type="number"
                            min="1"
                            defaultValue={quantity}
                            onChange={(e) => handleQuantity(e, item.product)} />
                    </td>
                    <td>${pro_new_price * quantity}</td>
                </tr>
            )
        })
    }

    return <div className={classes.container}>
        {cartItems.length > 0 ? (
            <table>
                <thead>
                    <tr>
                        <th><h3>Product</h3></th>
                        <th style={{ width: "150px" }}><h3>Price</h3></th>
                        <th style={{ width: "150px" }}><h3>Quantity</h3></th>
                        <th><h3>Total</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems && showCart(cartItems)}
                </tbody>
            </table>
        ) : (<h3>{MSG_EMPTY_CART}</h3>)}
        <CartTotal
            cartItems={cartItems}
        />
    </div>;
};

export default CartContent;
