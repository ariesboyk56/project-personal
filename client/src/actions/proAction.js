import { FETCH_PRODUCTS } from "../constants/proConstant";

export const fetchProducts = (payload) => ({
    type: FETCH_PRODUCTS,
    payload,
});