import { ADD_TO_CART,DELETE_PRODUCT_IN_CART, UPDATE_PRODUCT_IN_CART, RESET_CART } from "../constants/cartConstant";

export const addToCart = (product, quantity) => ({
    type: ADD_TO_CART,
    product,
    quantity
});
export const delProductToCart = (product) => ({
    type: DELETE_PRODUCT_IN_CART,
    product
});
export const upProductToCart = (product, quantity) => ({
    type: UPDATE_PRODUCT_IN_CART,
    product,
    quantity
});
export const resetCart = () => ({
    type: RESET_CART
});