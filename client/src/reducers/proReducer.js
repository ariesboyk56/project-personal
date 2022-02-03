import { FETCH_PRODUCTS, FIND_PRODUCT, DELETE_PRODUCT } from "../constants/proConstant"
export const proReducer = (state, action) => {
  const { type, payload: { products, totalPages, product } } = action

  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        proLoading: false,
        products,
        totalPages
      }
    case FIND_PRODUCT:
      return {
        ...state,
        product,
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(item => item._id !== action.payload)
      }

    default:
      return state
  }
}