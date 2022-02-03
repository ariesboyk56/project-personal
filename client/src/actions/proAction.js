import { FETCH_PRODUCTS, FIND_PRODUCT,DELETE_PRODUCT } from "../constants/proConstant";

export const fetchProducts = (payload) => ({
    type: FETCH_PRODUCTS,
    payload,
});
export const atcFindProduct = (payload) => ({
    type: FIND_PRODUCT,
    payload,
});
export const atcDeleteProduct = (payload) => ({
    type: DELETE_PRODUCT,
    payload,
});