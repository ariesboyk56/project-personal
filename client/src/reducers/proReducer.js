import { FETCH_PRODUCTS } from "../constants/proConstant"
export const proReducer = (state, action) => {
    const {type, payload: { products, totalPages}} = action

    switch (type) {
        case FETCH_PRODUCTS:
          return {
            ...state,
            proLoading: false,
            products,
            totalPages
          }
        
        default:
            return state
    }
}